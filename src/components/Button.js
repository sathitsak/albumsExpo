import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = ({onPress}) => {
    const {buttonStyle,textStyle} = styles;
    return (
        <TouchableOpacity onPress={onPress}
         style = {buttonStyle}>
        <Text style={textStyle}>Click me!!!</Text>
        </TouchableOpacity>
    );
};

const styles ={
    textStyle:{
        alignSelf: 'center',
        fontSize: 16,
        fontWeight: '600',
        paddingTop: 10,
        paddingBottom:10
    },
    buttonStyle:{
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor: '#fff',
        borderColor: '#007aff',
        marginLeft:5,
        marginRight: 5
    }
};

export default Button;
