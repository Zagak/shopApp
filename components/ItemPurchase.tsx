import { View, Text, StyleSheet, Modal } from "react-native";
import { Colors } from "../constants/Colors";
import Button from "./Button";
import { buyAnItem } from "../backend/http";
import Alert from "./Alert";
import { useState } from "react";
import { DeviceDimensions } from "../constants/DeviceDimensions";
import Loading from "./Loading";
import { useDispatch, useSelector } from "react-redux";
import { buyItem } from "../redux/items";
import React from "react";
interface Props{
  visible:boolean
  onClose:()=>void
  id:string
}
const ItemPurchase:React.FC<Props>=({ visible, onClose, id })=>{
  const [isExpensive, setIsExpensive] = useState<boolean>(false);
  const [alreadyOwned,setIsAlreadyOwned] = useState<boolean>(false);
  const [isLoading,setIsLoading] = useState<boolean>(false);

  const buyedItemsIds = useSelector((state:any)=> state.ownedItems.ids);
  const dispatch=useDispatch();

  const handleCloseModal = () => {
    onClose();
  };

  const handleBuyOnModal = async () => {
    
    let response=null;
    
    
    if(buyedItemsIds.includes(id)===false ){
       dispatch(buyItem({id:id}));
       setIsLoading(true);
       response=await buyAnItem({ id });
       setIsLoading(false);
      }
    else {
      setIsAlreadyOwned(true);
      
    }
    
    if (response === 'tooExpensive') setIsExpensive(true);
    onClose();
  }

  const handleAlert = () => {
    setIsExpensive(false);
    setIsAlreadyOwned(false);
  }

  if(isLoading) return <Loading message={'Hold up'}/>

  return (
    <>
      {(isExpensive === true) && <Alert title={"Too expensive!"} message={"You don't have enough money to buy this item."} onClose={handleAlert} />}
      {(alreadyOwned === true) && <Alert title={"Already owned!"} message={"You already own this item."} onClose={handleAlert} />}
      <Modal visible={visible} transparent={true} >
        <View style={styles.modalContainer}>
          <Text style={{ marginBottom: 10, color: 'white' }}>Are you sure you want to buy this item ?</Text>
          <View style={styles.buttons}>
            <Button onPress={handleBuyOnModal} style={undefined}>Yes</Button>
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
