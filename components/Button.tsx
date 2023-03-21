import React from "react";
import { Pressable } from "react-native";
import { View, Text, StyleSheet } from "react-native";
import { Colors } from "../constants/Colors";
interface Props{
    children:JSX.Element|JSX.Element[]
    style:any
    onPress:any
}
const Button=({ children, style, onPress })=> {
    return (
        <Pressable style={[styles.container,style,({ pressed }) => (pressed && { opacity: 0.7 })]} onPress={onPress}>
            <View>
                <Text style={styles.text}>{children}</Text>
            </View>
        </Pressable>
    );
}

export default Button;

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.darkGreen,
        marginHorizontal:'10%',
        marginTop:'10%',
        paddingHorizontal:8,
        paddingVertical:12,
        borderRadius:8,
        width:100
    },
    text:{
        textAlign:'center'
    }
});