import React, { Component } from 'react';
import { View, Text, FlatList, Image, ActivityIndicator} from 'react-native';
import { ListItem } from 'react-native-elements';
import axios from 'axios';
export default class PlacesScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
        };
        this.renderItem = this.renderItem.bind(this);
    }
    componentDidMount() {
        // fetch data from url
        const url = 'https://drpl.info/api/places.json?offset=0&count=10';
        axios.get(url)
        .then(({data}) => this.setState({data})
        )
        .catch((err) => console.log(err));

    }
    renderItem = ({ item }) => {
        console.log(item);
        return (
            <ListItem avatar={{ uri: item.thumb }}
                roundAvatar
                title={item.title}
                subtitle={item.category.name}
            />
        )

    }
    render() {
        if (this.state.data.length === 0) {
            return (
                <View style={{flex: 1, justifyContent: 'center', alignItems: 'center',}}>
                    <ActivityIndicator size={1} color='red'/>
                </View>
            )
        }
        return (
            <View style={{ flex: 1 }}>
                <FlatList
                    data={this.state.data}
                    renderItem={this.renderItem}
                />
            </View>
        );
    }
}
