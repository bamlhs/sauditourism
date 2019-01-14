import React from 'react';
import { Text, View } from 'react-native';
import {Button} from 'react-native-elements';

const CustomizedButton = ({
    title,onPress,
}) => (
    <View>
        <Button title={title} 
            onPress={onPress}

            />
    </View>
);

export default CustomizedButton;
