import { View, Text, StyleSheet, Image, SafeAreaView, ImageBackground,Dimensions } from "react-native";

function Header() {
    return (
        <ImageBackground style={styles.background} source={require('../images/headerBackground.jpg')}>
            <SafeAreaView style={styles.container}>
                <Image
                    resizeMode={'contain'}
                    style={styles.image}
                    source={require('../images/header.png')}
                />
                <Text style={styles.shopTitle}>SHOP</Text>
                <View style={styles.currencysContainer}>
                    <View style={styles.currencyInfoContainerCommon}>
                        <Text style={styles.currency}>999K</Text>
                        <Image style={styles.currencyImage} source={require('../images/leaf.png')}/>
                    </View>
                    <View style={styles.currencyInfoContainerPremium}>
                        <Text style={styles.currency}>6666</Text>
                        <Image style={styles.currencyImage} source={require('../images/dew.png')}/>
                    </View>
                </View>
            </SafeAreaView>
        </ImageBackground>
    );
}

export default Header;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginTop: Dimensions.get('screen').height*0.05,
    },
    image: {
        alignSelf: 'flex-start',
        justifyContent: 'flex-start',
    },
    background: {
        marginBottom: Dimensions.get('screen').height*0.45
    },
    shopTitle: {
        color: 'black',
        position: 'absolute',
        top: 95,
        left: 230,
        width: 300
    },
    currencysContainer:{
        flexDirection:'row',
    },
    currencyInfoContainerCommon:{
        flexDirection:'row',
        //marginHorizontal:60,
        bottom:30,
        right:20,
        backgroundColor:'#E6CA8D',
        paddingLeft:6,
        paddingRight:6,
        borderRadius:8,
        borderWidth:1,
        position:'absolute'
    },
    currencyInfoContainerPremium:{
        flexDirection:'row',
        //marginHorizontal:60,
        bottom:30,
        left:90,
        backgroundColor:'#E6CA8D',
        paddingLeft:6,
        paddingRight:6,
        borderRadius:8,
        borderWidth:1,
        position:'absolute'
    },
    currency:{
        paddingRight:10,
        width:55
    },
    currencyImage:{
        position:'absolute',
        width:40,
        height:40,
        left:40,
        top:-10
    }
});
