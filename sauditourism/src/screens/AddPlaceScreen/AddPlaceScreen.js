import React, { Component } from 'react';
import { View, Text, TextInput, Alert, ActivityIndicator, ScrollView } from 'react-native';
import { FormLabel, FormInput, Button, Divider } from 'react-native-elements';
import RNPickerSelect from 'react-native-picker-select';
import CustomizedButton from '../../components/CustomizedButton';
import axios from 'axios';
import ImagePicker from 'react-native-image-picker';


export default class AddPlaceScreen extends Component {
    static navigationOptions = {
        title: 'Add New Place',
    }
    constructor(props) {
        super(props);
        this.state = {
            done: false,
            loading: false,
            image: '',
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
        this.onPickImage = this.onPickImage.bind(this);
    }
    onPickImage = () => {
        ImagePicker.showImagePicker({quality: 0.1}, (resp) => {
            console.log(resp);
            this.setState({image: resp.data})
            
        })
    }
    onSave = () => {
        this.setState({loading: true});

        console.log(this.state);
        const data = {
            title: this.state.name,
            body: this.state.body,
            image: {
                file: this.state.image,
            }
        };
        const url = 'URL';
        axios.post(url, data)
            .then((resp) => (this.setState({ done: true, loading: false })))
            .catch((err) => (console.log(err)
            ));
    }

    render() {

        if (this.state.loading) {
            return (
                <View style={{flex: 1,}}>
                    <ActivityIndicator size={1} />
                </View>
            )
        }
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
                <FormLabel
                    containerStyle={{ marginBottom: 10, }}
                    labelStyle={{
                        opacity: 0.9,
                        fontSize: 20,
                        fontWeight: "normal",
                        fontStyle: "normal",
                        textAlign: "left",
                        color: "#000000"
                    }}>Place Name</FormLabel>
                <FormInput
                    containerStyle={{
                        borderColor: 'rgb(107,209,61)',
                        borderWidth: 1,
                        borderRadius: 5,
                        height: 50,

                    }}
                    onChangeText={(name) => (this.setState({ name }))}
                    autoCorrect={false}
                />
                <FormLabel
                    containerStyle={{ marginBottom: 10, }}
                    labelStyle={{
                        opacity: 0.9,
                        fontSize: 20,
                        fontWeight: "normal",
                        fontStyle: "normal",


                        textAlign: "left",
                        color: "#000000"
                    }}>Category</FormLabel>
                <View style={{
                    width: 330,
                    justifyContent: 'center',
                    marginLeft: 20,
                    alignContent: 'center',
                    borderColor: 'rgb(107,209,61)',
                    borderWidth: 1,
                    borderRadius: 5,
                    height: 50,
                }}>
                    <RNPickerSelect

                        style={{
                           
                            borderColor: 'rgb(107,209,61)',
                            borderWidth: 1,
                            borderRadius: 5,
                            height: 50,

                        }}
                        items={this.state.items}
                        onValueChange={(value) => {
                            this.setState({
                                item: value,
                            });
                        }}

                    /></View>

                <FormLabel>Description</FormLabel>
                <FormInput
                    containerStyle={{
                        borderColor: 'rgb(107,209,61)',
                        borderWidth: 1,
                        borderRadius: 5,
                        height: 100,

                    }}
                    multiline
                    onChangeText={(body) => (this.setState({ body }))}
                    autoCorrect={false} />
               
               <FormLabel
                    containerStyle={{ marginBottom: 10, }}
                    labelStyle={{
                        opacity: 0.9,
                        fontSize: 20,
                        fontWeight: "normal",
                        fontStyle: "normal",


                        textAlign: "left",
                        color: "#000000"
                    }}>Image</FormLabel>
                    <Button title="Pick Image" 
                    onPress={this.onPickImage} 
                    />
               
                    <Divider style={{height: 30, backgroundColor: '#fff'}} />
                <CustomizedButton title="Save" onPress={this.onSave} />
            </View>
        );
    }
}
