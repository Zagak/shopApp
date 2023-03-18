import { View ,Text,StyleSheet} from "react-native";
import { Colors } from "../constants/Colors";
import Button from "./Button";

function Alert({title,message,onClose}){
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.message}>{message}</Text>
            <Button onPress={onClose}>OK</Button>
        </View>
    );
}

export default Alert;

const styles=StyleSheet.create({
    container:{
        backgroundColor:Colors.lightGreen,
        alignSelf:'center',
        alignItems:'center',
        paddingHorizontal:28,
        paddingVertical:12,
        borderRadius:2,
        position:'absolute',
        top:'40%',
        zIndex:4
    },
    title:{
        fontSize:24
    },
    message:{
        fontSize:18,
        paddingVertical:12
    }
});