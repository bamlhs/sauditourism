import React, { Component } from 'react';
import { View, Text, FlatList, Image } from 'react-native';
import { ListItem } from 'react-native-elements';
const places = [
    {
        name: "Masmak fort",
        image: 'https://via.placeholder.com/150/0000FF/808080?Text=Masmakfort',
        type: 'Historical Interest',
    },
    {
        name: "Masmak fort1",
        image: 'https://via.placeholder.com/150/0000FF/808080?Text=Masmakfort2',
        type: 'Historical Interest',
    },
    {
        name: "Masmak fort2",
        image: 'https://via.placeholder.com/150/000000/808080?Text=Masmakfort1',
        type: 'Historical Interest',
    }
];

export default class PlacesScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
        this.renderItem = this.renderItem.bind(this);
    }
    renderItem = ({ item }) => {
        console.log(item);
        return (
            <ListItem avatar={{ uri: item.image }}
                roundAvatar
                title={item.name}
                subtitle={item.type}
            />
        )

    }
    render() {
        return (
            <View style={{ flex: 1 }}>
                <FlatList
                    data={places}
                    renderItem={this.renderItem}
                />
            </View>
        );
    }
}
