import React, { Component } from 'react';
import { View, Text, Image, Dimensions} from 'react-native';
import CustomizedButton from '../../components/CustomizedButton';
const { width, height} = Dimensions.get("window");

export default class DashBoardScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View>
        <Image
        source={require('../../images/saudi-tourism.jpg')} 
         style={{width: width, height: height}} 
         resizeMode="cover"
        >
        <CustomizedButton title="Hello" />
        </Image>
  
      </View>
    );
  }
}
