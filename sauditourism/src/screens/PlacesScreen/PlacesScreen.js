import React, { Component } from 'react';
import { View, Text, FlatList, Image, ActivityIndicator} from 'react-native';
import axios from 'axios';
import { connect } from 'react-redux';
import { GetPlaces } from '../../redux/actions/placesActions';
import CustomizedListItem from '../../components/CustomizedListItem';
class PlacesScreen extends Component {
    static navigationOptions = {
        title: 'Places',
    }
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
        .then(({data}) => this.props.GetPlaces(data)
        )
        .catch((err) => console.log(err));

    }

    renderItem = ({ item }) => ( <View style={{flex: 1,}}><CustomizedListItem item={item} /></View>)
    render() {
        console.log("this.props");
        console.log(this.props);
        
        if (this.props.places.data.length === 0) {
            return (
                <View style={{flex: 1, justifyContent: 'center', alignItems: 'center',}}>
                    <ActivityIndicator size={1} color='red'/>
                </View>
            )
        }
        return (
            <View style={{ flex: 1 , backgroundColor: '#EEEEEE',}}>
                <FlatList
                    data={this.props.places.data}
                    renderItem={this.renderItem}
                    keyExtractor={(item) => (item.nid)}
                />
            </View>
        );
    }
}

const mapStateToprops = (state) => ({
    places: state.places,
  });
export default connect(mapStateToprops, { GetPlaces })(PlacesScreen);
