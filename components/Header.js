import { View, Text, StyleSheet, Image, SafeAreaView, ImageBackground } from "react-native";
import { getCurrencys } from "../backend/http";
import { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import {useIsFocused} from "@react-navigation/native";
import { DeviceDimensions } from "../constants/DeviceDimensions";

function Header() {
    const [currencys,setCurrencys]= useState({});
    const [isBack,setIsBack] = useState(false);

    const isFocused=useIsFocused();

    const navigation=useNavigation();
    const isComingBack=navigation.canGoBack();

    

    useEffect(() => {
        async function fetchCurrencys() {
            try {
                if(isFocused===true){
                const data = await getCurrencys();
                setCurrencys(data[0]);
                }
            } catch (error) {
                console.error(error);
            }
        }

        fetchCurrencys();
    }, [isFocused]);

    

    useEffect(() => {
        if(isFocused===true) console.log("I m back");
    }, [isFocused]);

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
                        <Text style={styles.currency}>{currencys.commonCurrency}</Text>
                        <Image style={styles.currencyImage} source={require('../images/leaf.png')}/>
                    </View>
                    <View style={styles.currencyInfoContainerPremium}>
                        <Text style={styles.currency}>{currencys.premiumCurrency}</Text>
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
        marginTop: DeviceDimensions.height*0.05,
    },
    image: {
        alignSelf: 'flex-start',
        justifyContent: 'flex-start',
    },
    background: {
        marginBottom: DeviceDimensions.height*0.45
    },
    shopTitle: {
        color: 'black',
        position: 'absolute',
        top: 95,
        left: 225,
        width: 300,
        fontWeight:'bold',
        letterSpacing:2
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
