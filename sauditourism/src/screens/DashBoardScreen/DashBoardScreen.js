import React, { Component } from 'react';
import { View, Text, ImageBackground, Dimensions } from 'react-native';
import CustomizedButton from '../../components/CustomizedButton';
const { width, height } = Dimensions.get("window");

export default class DashBoardScreen extends Component {
    static navigationOptions = {
        title: 'Hello',
        header: null
    }
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
                                <CustomizedButton
                                    title="Show Places"
                                    onPress={() => this.props.navigation.navigate('palces')
                                    }
                                />
                            </View>
                            <View style={{ flex: 1, }}>
                                <CustomizedButton title="Add Place" 
                                      onPress={() => this.props.navigation.navigate('add')
                                    }
                                />
                            </View>
                        </View>
                    </View>
                </ImageBackground>

            </View>
        );
    }
}
