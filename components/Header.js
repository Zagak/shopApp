import { View, Text, StyleSheet, Image, SafeAreaView, ImageBackground } from "react-native";

function Header() {
    return (
        <ImageBackground style={styles.background} source={require('../images/headerBackground.jpg')}>
            <SafeAreaView style={styles.container}>
                <Image
                    resizeMode={'contain'}
                    style={styles.image}
                    source={require('../images/header.png')}
                />
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
        marginTop: '15%'
    },
    image: {
        alignSelf: 'flex-start',
        justifyContent: 'flex-start',
    },
    background:{
        marginBottom:'110%'
    }
});
