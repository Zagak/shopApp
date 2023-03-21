import { View, StyleSheet, Text, Image, Pressable } from "react-native";
import { Colors } from "../constants/Colors";
import { FlatList } from "react-native-gesture-handler";
import { useIsFocused, useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { getItems } from "../backend/http";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCircleCheck } from '@fortawesome/free-regular-svg-icons'
import {DeviceDimensions} from "../constants/DeviceDimensions";
import { useSelector } from "react-redux";
import React from "react";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParams } from "../App";
import { Item } from "../types";
const ItemsList:React.FC=()=> {
    const [items, setItems] = useState<Item[]>([]);

    const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();
    
    const isFocused=useIsFocused();

    const buyedItemsIds = useSelector((state:any)=> state.ownedItems.ids);

    const handlePress = (item:any) => {
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
                                <Text style={[styles.itemInfo,{fontSize:12}]}>{item.name}</Text>
                            </View>
                            <View style={styles.priceContainer}>
                                {(buyedItemsIds.includes(item.id)===true )&&<FontAwesomeIcon size={30} style={styles.checkMark} icon={faCircleCheck} />}
                                <Text style={[styles.itemInfo,{fontWeight:'bold',flex:1,textAlign:'right'}]}>{item.price}</Text>
                                <Image style={styles.currency} source={(item.currency === 'common' ? require('../images/leaf.png') : require('../images/dew.png'))} />  
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

        if(isFocused===true) fetchItems();
    }, [isFocused]);



    return (
        <>
            {items !== null && (
                <FlatList
                    data={items}
                    style={styles.container}
                    numColumns={2}
                    contentContainerStyle={{ flexGrow: 1, paddingBottom: 250, paddingTop: 80 }}
                    removeClippedSubviews={false}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={(data) =>
                        renderItem(data)
                    }
                  
                />
            )}
            <Image source={require('../images/dirt.jpg')} style={styles.backgroundImage} />
        </>
    );
}

export default ItemsList;

const styles = StyleSheet.create({
    container: {
        bottom: DeviceDimensions.height*0.5,
        backgroundColor: 'transparent',
        paddingBottom: DeviceDimensions.height*0.45,
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
        paddingHorizontal: 30,
        paddingVertical: 30,

    },
    imageStone: {
        width: 120,
        height: 120,
        position: 'absolute',
        marginHorizontal: -16,
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
        right:-19
    },
    textContainer: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        width: 100,
        height: 40,
        
    },
    itemInfo: {
        color: 'black',
        alignSelf:'center',
    },
    nameContainer:{
        backgroundColor:'#c9b8a6',
        borderRadius:12,
        bottom:4,
        alignItems:'center',
    },
    priceContainer:{
        backgroundColor:'#c9b8a6',
        borderRadius:6,
        width: DeviceDimensions.width*0.14,
        top:45,
        left:25,
        flexDirection:'row',
    },
    backgroundImage: {
        bottom: DeviceDimensions.height * 0.046,
        width:  DeviceDimensions.height * 0.425,
        height: DeviceDimensions.height * 0.46,
        position: 'absolute',
        zIndex: 1,
        borderRadius: 16,
        borderWidth: 5,
        borderColor: Colors.darkBrown,
    },
    currency:{
        width: 20,
        height: 20,
    },
    checkMark:{
        right:60,
        bottom:5,
        color:'green',
        position:'absolute'
    }

});