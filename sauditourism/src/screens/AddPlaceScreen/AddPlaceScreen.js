import React, { Component } from 'react';
import { View, Text, TextInput, Alert } from 'react-native';
import { FormLabel, FormInput, Button } from 'react-native-elements';
import RNPickerSelect from 'react-native-picker-select';
import CustomizedButton from '../../components/CustomizedButton';
import axios from 'axios';
export default class AddPlaceScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            done: false,
            name: '',
            body: '',
            item: '',
            items: [
                {
                    label: 'Historical Interest',
                    value: '12',
                },
                {
                    label: 'Historical Structure',
                    value: '13',
                },
            ]
        };
        this.onSave = this.onSave.bind(this);
    }

    onSave = () => {
        console.log(this.state);
        const data = {
            title: this.state.name,
            body: this.state.body
        };
        const url = 'URL';
        axios.post(url, data)
            .then((resp) => (this.setState({ done: true })))
            .catch((err) => (console.log(err)
            ));

    }

    render() {
        if (this.state.done) {

            Alert.alert(
                "Ok Saved",
                "Your data has been saved into server",
                [
                    { text: 'Go Home', onPress: () => this.props.navigation.goBack() },
                ]
            );
        }
        return (
            <View>
                <FormLabel>Place Name</FormLabel>
                <FormInput
                    keyboardType={"email-address"}
                    blurOnSubmit={false}
                    returnKeyLabel={"send"}

                    onChangeText={(name) => (this.setState({ name }))}
                    autoCorrect={false} />
                <RNPickerSelect
                    placeholder={{
                        label: 'Select a color...',
                        value: null,
                        color: '#9EA0A4',
                    }}
                    items={this.state.items}
                    onValueChange={(value) => {
                        this.setState({
                            item: value,
                        });
                    }}

                />

                <FormLabel>Description</FormLabel>
                <FormInput
                    multiline
                    onChangeText={(body) => (this.setState({ body }))}
                    autoCorrect={false} />
                <CustomizedButton title="Save" onPress={this.onSave} />
            </View>
        );
    }
}
