import { View, StyleSheet, Text, Image, ImageBackground, Dimensions, Pressable } from "react-native";
import { Colors } from "../constants/Colors";
import { FlatList } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { getItems } from "../backend/http";

function ItemsList() {
    const data = [
        { name: 'Sabie', price: 23 },
        { name: 'Topor', price: 12 },
        { name: 'Sec', price: 15 },
        { name: 'Foa', price: 7 },
        { name: 'Masa', price: 55 },
        { name: 'Scaun', price: 32 },
        { name: 'Scaun', price: 32 },
        { name: 'Scaunefd', price: 32 },
        { name: 'Scaun', price: 32 },
        { name: 'Scaun', price: 32 },
        { name: 'A', price: 32 },
        { name: 'B', price: 32 },
    ];

    const [items, setItems] = useState([]);

    const navigation = useNavigation();

    const handlePress = (item) => {
        navigation.navigate("Details",item);
    };

    const renderItem = ({ item, index }) => (

        <View style={styles.item}>
            <Image style={styles.imageCentipide} source={require('../images/centipideBody.png')} />
            {(index<2)&&<Image style={styles.imageCentipideHead} source={require('../images/centipideHead.png')} />}
            {(index>=items.length-2)&&<Image style={styles.imageCentipideTail} source={require('../images/centipideTail.png')} />}
            <Pressable onPress={() => handlePress(item)}>
                {({ pressed }) => (
                    <>
                        <Image style={[styles.imageStone, pressed && { opacity: 0.7 }]} source={require('../images/stone.png')} />
                        <Image style={styles.imageItem} source={{uri:item.avatar}}/>
                        <View style={styles.textContainer}>
                            <View style={styles.nameContainer}>
                                <Text style={styles.itemInfo}>{item.name}</Text>
                            </View>
                            <View style={styles.priceContainer}>
                                <Text style={[styles.itemInfo,{fontWeight:'bold'}]}>{item.price}</Text>
                            </View>
                        </View>
                    </>
                )}
            </Pressable>


        </View>

    ); 

    useEffect(() => {
        async function fetchItems() {
            try {
                const data = await getItems();
                setItems(data);
            } catch (error) {
                console.error(error);
            }
        }

        fetchItems();
    }, []);



    return (
        <View style={styles.bigContainer}>
            {/* {items !== null && ( */}
                <FlatList
                    data={items}
                    renderItem={(data) =>
                        renderItem(data)
                    }
                    keyExtractor={(item, index) => index.toString()}
                    style={styles.container}
                    numColumns={2}
                    contentContainerStyle={{ flexGrow: 1, paddingBottom: 250, paddingTop: 80 }}
                    removeClippedSubviews={false}
                />
            {/* )} */}
            <Image source={require('../images/dirt.jpg')} style={styles.backgroundImage} />
        </View>
    );
}

export default ItemsList;

const styles = StyleSheet.create({
    container: {
        bottom: Dimensions.get('screen').height * 0.5,
        backgroundColor: 'transparent',
        paddingBottom: Dimensions.get('screen').height * 0.45,
        borderRadius: 8,
        zIndex: 2
    },
    bigContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    item: {
        margin: 10,
        paddingHorizontal: 30,//50,
        paddingVertical: 30,

    },
    imageStone: {
        width: 120,
        height: 120,
        position: 'absolute',
        marginHorizontal: -18,
        marginVertical: -10,
        
    },
    imageItem:{
        width: 60,
        height: 60,
        position: 'absolute',
        marginHorizontal: 15,
        marginVertical: 15
    },
    imageCentipide: {
        width: 180,
        height: 140,
        position: 'absolute',
        marginHorizontal: 20,
        marginVertical: 20,
        alignSelf: 'center'
    },
    imageCentipideHead: {
        width: 180,
        height: 140,
        position: 'absolute',
        marginHorizontal: 20,
        marginVertical: -75,
        alignSelf: 'center'
    },
    imageCentipideTail:{
        width: 180,
        height: 190,
        position: 'absolute',
        marginHorizontal: 20,
        marginVertical: 145,
        alignSelf: 'center',
        right:-25
    },
    textContainer: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        width: 90,
        height: 40,
        
    },
    itemInfo: {
        color: 'black',
        alignSelf:'center'
    },
    nameContainer:{
        backgroundColor:'#c9b8a6',
        borderRadius:12,
        alignItems:'center',
    },
    priceContainer:{
        backgroundColor:'#c9b8a6',
        borderRadius:6,
        width:40,
        top:45,
        left:40
        
    },
    backgroundImage: {
        bottom: Dimensions.get('screen').height * 0.046,
        width: Dimensions.get('screen').height * 0.425,
        height: Dimensions.get('screen').height * 0.46,
        position: 'absolute',
        zIndex: 1,
        borderRadius: 16,
        borderWidth: 5,
        borderColor: Colors.darkBrown,
    },

});