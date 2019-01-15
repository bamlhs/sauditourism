import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { connect } from "react-redux";

class PlaceScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
      const {large, title} = this.props.places.selectedItem;

    return (
      <View>
          <Image source={{uri: large}} style={{width: 200, height: 200}} />

        <Text> {title} </Text>
   
   </View>
    );
  }
}
const mapStateToprops = (state) => ({
    places: state.places,
  });
export default connect(mapStateToprops)(PlaceScreen);