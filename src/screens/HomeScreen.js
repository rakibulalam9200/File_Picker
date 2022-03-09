import React from 'react';

import {StyleSheet, Text, View,Button} from 'react-native';
import UploadingFile from "../components/UploadingFile";
import UploadingImage from "../components/UploadingImage";
import MapScreen from "./MapScreen";

const HomeScreen = ({navigation}) => {
    return (
        <View style={styles.background}>
            <View style={{marginHorizontal:60,marginVertical:20}}>
                <Button onPress={() =>navigation.navigate('Map')} title="Map Screen" color="green"></Button>
            </View>

            <UploadingFile/>
            <UploadingImage/>
        </View>
    );
};

export default HomeScreen;


const styles = StyleSheet.create({
    background: {
        flex: 1,
        alignSelf:'center',
        justifyContent:'center',
        backgroundColor:
            "radial-gradient(ellipse at left bottom,    rgb(163, 237, 255) 0%,    rgba(57, 232, 255, 0.9) 59%,    rgba(48, 223, 214, 0.9) 100% )",
    },
    file: {
        color: "black",
        marginHorizontal: 145,
    },
    button: {
        marginHorizontal: 60,
    },
});