import Header from "../components/Header";
import ItemsList from "../components/ItemsList";
import { StyleSheet,View } from "react-native";
import { Colors } from "../constants/Colors";
import ItemPurchase from "../components/ItemPurchase";


function ItemsShop(){
    return (
        <View style={styles.container}>
            <Header/>
            <ItemsList/>
        </View>
    );
}

export default ItemsShop;

const styles=StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: Colors.lightBrown,
        alignItems: 'center',
        justifyContent: 'center',
    }
});