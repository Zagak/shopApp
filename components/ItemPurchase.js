import { View, Text, StyleSheet, Modal,Dimensions } from "react-native";
import { Colors } from "../constants/Colors";
import Button from "./Button";
import { buyAnItem } from "../backend/http";

function ItemPurchase({ visible, onClose,id }) {

    const handleCloseModal = () => {
        onClose();
    };

    const handleBuyOnModal = async () => {
        await buyAnItem({id});
        onClose();
    }

  return (
    <Modal visible={visible} transparent={true} hasBackdrop={false}>
      <View style={styles.modalContainer}>
        <Text style={{marginBottom:10,color:'white'}}>Are you sure you want to buy this item ?</Text>
        <View style={styles.buttons}>
            <Button onPress={handleBuyOnModal}>Yes</Button>
            {/* <Button title="Close" onPress={handleCloseModal} />    */}
            <Button style={{backgroundColor:'red'}} onPress={handleCloseModal}>No</Button>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalContainer: {
    backgroundColor: Colors.lightBrown,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    marginHorizontal:Dimensions.get('screen').width*0.15,
    marginTop:Dimensions.get('screen').height*0.4,
    paddingVertical:Dimensions.get('screen').height*0.04,
    
  },
  buttons:{
    flexDirection:'row'
  }
});

export default ItemPurchase;
