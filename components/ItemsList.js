import { View, StyleSheet, Text, Image } from "react-native";
import { Colors } from "../constants/Colors";
import { FlatList } from "react-native-gesture-handler";

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
        { name: 'Scaun', price: 32 },
        { name: 'Scaun', price: 32 },
    ];

    const renderItem = ({ item, index }) => (
        <View style={styles.item}>
            <Image style={styles.imageCentipide} source={require('../images/centipideBody.png')} />
            <Image style={styles.imageStone} source={require('../images/stone.png')} />
            <View style={styles.textContainer}>
                <Text style={styles.itemInfo}>{item.name}</Text>
                <Text style={styles.itemInfo}>{item.price}</Text>
            </View>
        </View>
    );

    const renderFirstTwoItems = ({ item, index }) => (
        <View style={styles.item}>
            <Image style={styles.imageCentipideHead} source={require('../images/centipideHead.png')} />
            <Image style={[styles.imageCentipide, !(index >= 0 && index <= 10) && styles.blurredImage]} source={require('../images/centipideBody.png')} />
            <Image style={styles.imageStone} source={require('../images/stone.png')} />
            <View style={styles.textContainer}>
                <Text style={styles.itemInfo}>{item.name}</Text>
                <Text style={styles.itemInfo}>{item.price}</Text>
            </View>
        </View>
    );

    return (
        <FlatList
            data={data}
            renderItem={(data) => (data.index < 2 ? renderFirstTwoItems(data) : renderItem(data))}
            keyExtractor={(item, index) => index.toString()}
            style={styles.container}
            numColumns={2}
            contentContainerStyle={{ alignItems: 'flex-end' }}
            removeClippedSubviews={false}
        />
    );
}

export default ItemsList;

const styles = StyleSheet.create({
    container: {
        bottom: '50%',
        backgroundColor: Colors.darkBrown,
        paddingHorizontal: 20,
        //paddingBottom: '10%',
        paddingBottom: '95%',
        borderRadius: 8,

    },
    item: {
        margin: 10,
        paddingHorizontal: 50,
        paddingVertical: 30,
    },
    imageStone: {
        width: 110,
        height: 110,
        position: 'absolute',
        marginHorizontal: 20,
        marginVertical: 20
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
        marginVertical: -25,
        alignSelf: 'center'
    },
    textContainer: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        //maxWidth: "150%",
        width: 50,
        height: 40
    },
    itemInfo: {
        color: 'white',

    },
    blurredImage: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
    },

});