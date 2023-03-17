import { View, Text, Image, StyleSheet,Dimensions } from "react-native";
import { Colors } from "../constants/Colors";
import Button from "../components/Button";
import { useNavigation } from "@react-navigation/native";
import ItemPurchase from "../components/ItemPurchase";
import { useState } from "react";

function ItemDetails({ route }) {
    const [showItemPurchase, setShowItemPurchase] = useState(false);
    const navigation = useNavigation();
    const item = route.params;


    function handleCancel() {
        navigation.navigate("Shop");
       // navigation.goBack();
    }

    function handleBuy(visible){
        setShowItemPurchase(visible);
    };

    return (
        <View style={[styles.container, showItemPurchase ? { opacity: 0.6 } : {}]}>
            <View style={styles.detailsContainer}>
                <Text style={[styles.text, { fontSize: 28 }]}>{item.name}</Text>
                <Image style={styles.image} source={require('../images/stone.png')} onError={(e) => console.log(e)} />
                <Text style={styles.text}>{item.details}</Text>

                <View style={styles.statsContainer}>
                    <View style={{ marginHorizontal: 12 }}>
                        <Text style={styles.text}>Damage</Text>
                        <Text style={styles.text}>Stun</Text>
                        <Text style={styles.text}>Speed</Text>
                    </View>
                    <View style={{flex:0.6}}>
                        <View style={[styles.bar, { width: `${item.stats.damage}%` }]} />
                        <View style={[styles.bar, { width: `${item.stats.stun}%` }]} />
                        <View style={[styles.bar, { width: `${item.stats.speed}%` }]} />
                    </View>
                </View>

                <View style={styles.priceContainer}>
                    <Text style={[styles.text, { fontWeight: 'bold' }]}>{item.price}</Text>
                    <Image style={styles.currency} source={(item.currency === 'common' ? require('../images/leaf.png') : require('../images/dew.png'))} />
                </View>
            </View>
            <View style={styles.buttons}>
                <Button onPress={() => handleBuy(true)}>Buy</Button>
                <Button style={{backgroundColor:'red'}} onPress={handleCancel}>Cancel</Button>
            </View>
            <ItemPurchase visible={showItemPurchase} onClose={() => handleBuy(false)} id={route.params.id}/>
        </View>


    );
}

export default ItemDetails;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.lightBrown,
        paddingHorizontal: '10%',
        paddingVertical: '40%'
    },
    detailsContainer: {
        backgroundColor: Colors.darkBrown,
        flex: 1,
        borderRadius: 16,
        alignItems: 'center',
        paddingVertical: '10%'
    },
    statsContainer: {
        marginTop: 10,
        flexDirection: 'row',
        
    },
    priceContainer: {
        flexDirection: 'row',
        marginTop: 30
    },
    text: {
        color: 'white',

    },
    bar: {
        backgroundColor: 'white',
        height:10,
        borderRadius:4,
        marginVertical:4.5
    },
    image: {
        width: Dimensions.get('screen').width*0.4,
        height: Dimensions.get('screen').width*0.4,
        marginTop: 20,
        marginBottom: 30,
        borderWidth: 2,
        borderColor: Colors.lightGreen,
        borderRadius: 12
    },
    currency: {
        width: 20,
        height: 20,
        marginLeft:5
    },
    buttons:{
        flexDirection:'row'
    }
});