import { View, Text, StyleSheet, Image, Modal,Button } from "react-native";
import { useState } from "react";

function ItemPurchase({ navigation }) {
    const [modalVisible, setModalVisible] = useState(true);

    return (
        // <View style={styles.container}>
            <Modal visible={true} animationType={'slide'} transparent={true}>
                <View style={styles.modalContainer}>
                    <Text>Purchase</Text>
                    <Button title="Close" onPress={() => navigation.goBack()} />
                </View>
            </Modal>
            
        // </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    modalContainer: {
        backgroundColor: 'red',
        borderRadius: 10,
        alignSelf: 'center',
        marginTop: 100,
        width: '92%',
        height: 200,
        zIndex:-1
    },
});

export default ItemPurchase;
