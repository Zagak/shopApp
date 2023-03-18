import { View, Text, StyleSheet, Modal } from "react-native";
import { Colors } from "../constants/Colors";
import Button from "./Button";
import { buyAnItem } from "../backend/http";
import Alert from "./Alert";
import { useState } from "react";
import { DeviceDimensions } from "../constants/DeviceDimensions";
import Loading from "./Loading";


function ItemPurchase({ visible, onClose, id }) {
  const [isExpensive, setIsExpensive] = useState(false);
  const [isLoading,setIsLoading] = useState(false);

  const handleCloseModal = () => {
    onClose();
  };

  const handleBuyOnModal = async () => {
    setIsLoading(true);
    const response = await buyAnItem({ id });
    setIsLoading(false);
    if (response === 'tooExpensive') setIsExpensive(true);
    onClose();
  }

  const handleAlert = () => {
    setIsExpensive(false);
  }

  if(isLoading) return <Loading message={"Hold on!"}/>

  return (
    <>
      {(isExpensive === true) && <Alert title={"Too expensive!"} message={"You don't have enough money to buy this item."} onClose={handleAlert} />}
      <Modal visible={visible} transparent={true} hasBackdrop={false}>
        <View style={styles.modalContainer}>
          <Text style={{ marginBottom: 10, color: 'white' }}>Are you sure you want to buy this item ?</Text>
          <View style={styles.buttons}>
            <Button onPress={handleBuyOnModal}>Yes</Button>
            <Button style={{ backgroundColor: 'red' }} onPress={handleCloseModal}>No</Button>
          </View>
        </View>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  modalContainer: {
    backgroundColor: Colors.lightBrown,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    marginHorizontal: DeviceDimensions.width * 0.15,
    marginTop: DeviceDimensions.height * 0.4,
    paddingVertical: DeviceDimensions.height * 0.04,

  },
  buttons: {
    flexDirection: 'row'
  }
});

export default ItemPurchase;
