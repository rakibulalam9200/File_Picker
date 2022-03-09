import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity,Button} from 'react-native';
import * as DocumentPicker from "expo-document-picker";
import {useState} from "react";


const UploadingFile = () => {
    const [fileName, setFileName] = useState('');
    const pickDocument = async () => {
        let result = await DocumentPicker.getDocumentAsync({});
        //console.log(result.uri);
        //setFileName(result?.name)
        setFileName(result.name);
    };
    return (
        <View>
            <Text style={styles.file}>Upload Your File</Text>
            <View style={styles.button}>
                <TouchableOpacity>
                    <Button
                        title="upload your file"
                        color="black"
                        onPress={pickDocument}
                    />
                </TouchableOpacity>
            </View>
            <Text style={styles.file}>{fileName}</Text>
        </View>
    );
};

export default UploadingFile;


const styles = StyleSheet.create({
    file: {
        color: "black",
        marginHorizontal: 145,
    },
    button: {
        marginHorizontal: 60,
    },
});
