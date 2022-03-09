import React, { useState, useEffect } from 'react';
import {Button, Image, View, Platform, StyleSheet} from 'react-native';
import * as ImagePicker from 'expo-image-picker';

const UploadingImage = () => {
    const [image, setImage] = useState(null);

    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        console.log(result);

        if (!result.cancelled) {
            setImage(result.uri);
        }
    };
    return (
        <View>
            <Button title="Pick an image from camera roll" onPress={pickImage} />
            {image && <Image source={{ uri: image }} style={{ width: 200, height: 200,marginTop:20,alignSelf:'center',borderRadius: 200 / 2}} />}
        </View>
    );
};

export default UploadingImage;

const styles = StyleSheet.create({
    image: {
        color: "black",
        marginHorizontal: 145,
    },
    button: {
        marginHorizontal: 60,
    },
});
