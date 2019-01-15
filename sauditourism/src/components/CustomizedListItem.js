import React from 'react';
import { Text, View, Dimensions, Image } from 'react-native';
const { width, height } = Dimensions.get('window');
const CustomizedListItem = ({
    item,
}) => (
        <View style={{
            height: height / 2,
            backgroundColor: '#fff', marginTop: 10,
        }}>
            <View style={{ flex: 4 }}>
                <Image source={{ uri: item.large }}
                    resizeMode="stretch"
                    style={{ borderRadius: 10, height: '100%', width: '100%' }} />
            </View>
            <View style={{ flex: 1, flexDirection: 'row-reverse', }}>
                <View style={{ flex: 1, }}>
                </View>
                <View style={{ flex: 4 }}>
                    <Text style={{
                        opacity: 0.9,
                        fontSize: 25,
                        fontWeight: "normal",
                        fontStyle: "normal",
                        letterSpacing: 0,
                        textAlign: "left",
                        color: "#000000"
                    }}>{item.title}</Text>
                    <Text style={{
                        opacity: 0.5,
                        fontSize: 15,
                        fontWeight: "300",
                        fontStyle: "normal",
                        letterSpacing: 0,
                        color: "#000000"

                    }}>{item.category.name}</Text>
                </View>

            </View>
        </View>
    );

export default CustomizedListItem;
