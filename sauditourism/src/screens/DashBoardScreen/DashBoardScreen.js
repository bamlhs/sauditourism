import React, { Component } from 'react';
import { View, Text, ImageBackground, Dimensions } from 'react-native';
import CustomizedButton from '../../components/CustomizedButton';
const { width, height } = Dimensions.get("window");

export default class DashBoardScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <ImageBackground
                    source={require('../../images/saudi-tourism.jpg')}
                    style={{ width: width, height: height }}
                    resizeMode="cover"
                >
                    <View style={{ flex: 1 }}>
                        <View style={{ flex: 7 }}></View>
                        <View style={{ flex: 1, flexDirection: 'row', }}>
                            <View style={{ flex: 1, }}>
                                <CustomizedButton title="Show Places" />
                            </View>
                            <View style={{ flex: 1, }}>
                                <CustomizedButton title="Add Place" />
                            </View>
                        </View>
                    </View>
                </ImageBackground>

            </View>
        );
    }
}
