import { View, StyleSheet, Text, Image, ImageBackground, Dimensions, Pressable } from "react-native";
import { Colors } from "../constants/Colors";
import { FlatList } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";


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

    const navigation = useNavigation();

    const handlePress = () => {
        navigation.navigate("Purchase");
    };

    const renderItem = ({ item, index }) => (

        <View style={styles.item}>
            <Image style={styles.imageCentipide} source={require('../images/centipideBody.png')} />
            <Pressable onPress={handlePress}>
                {({ pressed }) => (
                    <>
                        <Image style={[styles.imageStone, pressed && { opacity: 0.7 }]} source={require('../images/stone.png')} />
                        <View style={styles.textContainer}>
                            <Text style={styles.itemInfo}>{item.name}</Text>
                            <Text style={styles.itemInfo}>{item.price}</Text>
                        </View>
                    </>
                )}
            </Pressable>


        </View>

    );

    const renderFirstTwoItems = ({ item, index }) => (
        <View style={[styles.item]}>
            <Image style={styles.imageCentipideHead} source={require('../images/centipideHead.png')} />
            <Image style={styles.imageCentipide} source={require('../images/centipideBody.png')} />
            <Pressable onPress={handlePress}>
                {({ pressed }) => (
                    <>
                        <Image style={[styles.imageStone, pressed && { opacity: 0.7 }]} source={require('../images/stone.png')} />
                        <View style={styles.textContainer}>
                            <Text style={styles.itemInfo}>{item.name}</Text>
                            <Text style={styles.itemInfo}>{item.price}</Text>
                            <Text>{data.length}</Text>
                        </View>
                    </>
                )}
            </Pressable>

        </View>
    );

    const renderLastTwoItems = ({ item, index }) => (
        <Pressable >
            {({ pressed }) => (
                <View style={[styles.item, pressed && { opacity: 0.9 }]}>
                    <Image style={styles.imageCentipideHead} source={require('../images/centipideHead.png')} />
                    <Image style={styles.imageCentipide} source={require('../images/centipideBody.png')} />
                    <Image style={styles.imageStone} source={require('../images/stone.png')} />
                    <View style={styles.textContainer}>
                        <Text style={styles.itemInfo}>{item.name}</Text>
                        <Text style={styles.itemInfo}>{item.price}</Text>
                        <Text>{data.length}</Text>
                    </View>
                </View>
            )}
        </Pressable>
    );

    return (
        <View style={styles.bigContainer}>
            <FlatList
                data={data}
                renderItem={(data) =>
                    data.index < 2
                        ? renderFirstTwoItems(data)
                        : data.index >= data.length - 2
                            ? renderLastTwoItems(data)
                            : renderItem(data)
                }
                keyExtractor={(item, index) => index.toString()}
                style={styles.container}
                numColumns={2}
                contentContainerStyle={{ flexGrow: 1, paddingBottom: 120, paddingTop: 80 }}
                removeClippedSubviews={false}
            />
            <Image source={require('../images/dirt.jpg')} style={styles.backgroundImage} />
        </View>
    );
}

export default ItemsList;

const styles = StyleSheet.create({
    container: {
        bottom: Dimensions.get('screen').height * 0.5,//'50%',
        backgroundColor: 'transparent',
        // paddingHorizontal: Dimensions.get('screen').width*0.01,//20,
        paddingBottom: Dimensions.get('screen').height * 0.45,
        borderRadius: 8,
        zIndex: 2
    },
    bigContainer: {
        flex: 1,
        //backgroundColor: Colors.lightBrown,
        alignItems: 'center',
        justifyContent: 'center',
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
        marginHorizontal: -30,
        marginVertical: -10
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
    backgroundImage: {
        bottom: Dimensions.get('screen').height * 0.046,
        width: Dimensions.get('screen').height * 0.425,
        height: Dimensions.get('screen').height * 0.46,
        position: 'absolute',
        zIndex: 1,
        borderRadius: 16,
        borderWidth: 5,
        borderColor: Colors.darkBrown
    },

});