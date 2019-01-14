import React from 'react';
import { Text, View } from 'react-native';
import { Button } from 'react-native-elements';

const CustomizedButton = ({
    title, onPress,
}) => (
        <View>
            <Button
                textStyle={{
                    fontFamily: "HelveticaNeue",
                    fontSize: 18,
                    fontWeight: "bold",
                    fontStyle: "normal",
                    lineHeight: 27,
                    letterSpacing: 0,
                    textAlign: "left",
                    color: "#707070"
                }}
                buttonStyle={{
                    backgroundColor: '#ffff',
                    borderColor: 'rgb(107,209,61)',
                    borderWidth: 2,
                    borderRadius: 30,
                }}
                title={title}
                onPress={onPress}

            />
        </View>
    );

export default CustomizedButton;
