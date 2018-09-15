import React from 'react';
import {Text,View} from 'react-native';

// Header (input variable/prop)
const Header = (props) => {
        // import {viewStyle and textStyle from styles }
    const {textStyle,viewStyle} = styles; 

    return (
        // able to use it now as we already import it
        // Veiw text is to position element in screen
         // use headerText we got from parent node(index) here

        <View style ={viewStyle}>
        
            <Text style = {textStyle}>{props.headerText}</Text>
        </View>
    );
};
// writing constant here
const styles = {
    viewStyle:{
        backgroundColor: '#F8F8F8',
        //y axis
        justifyContent: 'center',
        // x axis
        alignItems: 'center',
        height: 60,
        paddingTop: 15,
        shadowColor: '#000',
        shadowOffset: {width:0,height:2},
        // Ios specific how thick shadow is
        shadowOpacity: 0.9,
        // Android specific how thick shadow is
        elevation: 2,
        position: 'relative'
    }, // comma for multiple object
    


    textStyle: {
        fontSize: 20
    }
};
// export so other file can use it
export default Header;