import { useState } from 'react';
import { View, Button, TextInput, Text, FlatList, Modal, TouchableOpacity } from 'react-native';
import { styles }from "./styles.js"

export default function App() {
  const [text, setText] = useState('')
  const [list, setList] = useState([])
  const [itemSelected, setItemSelected] = useState({})
  const [modalVisible, setModalVisible] = useState(false)

  const addItem = () => {
    if(text !== ''){
      setList((currentList) => [
        ...currentList, 
        { id: Math.random(), value: text }
      ])
      setText('')
    }
  }
  
  const onHandleDelete = id => {
    setList((currentList) => currentList.filter((item) => item.id !== id))
    setItemSelected({})
    setModalVisible(!modalVisible)
  }
  const onHandleModal = id => {
    setItemSelected(list.filter(item => item.id === id)[0])
    setModalVisible(!modalVisible)
  }

  const renderItem = ({ item }) => (
    <View key={item.id} style={styles.item}>
      <Text>{item.value}</Text>
      <TouchableOpacity onPress={() => onHandleModal(item.id)} style={styles.deleteButton}>
        <Text style={styles.deleteButtonText}>x</Text>
      </TouchableOpacity>
    </View>
  )

  const keyExtractor = (item)=> item.id.toString()

  return (
    <View>
      <View style={styles.content}>
        <TextInput 
          placeholder="new task" 
          style={ styles.input }
          value={text}
          onChangeText={(text) => setText(text)}
        />
          <Button 
            title="ADD"
            color="#911211"
            onPress={() => addItem()}
          />
      </View>
      <View style={styles.itemsContainer}>
        <FlatList 
          data={list}
          renderItem={renderItem}
          keyExtractor={keyExtractor}
        />
      </View>
      <Modal
        animationType='slide'
        visible={modalVisible}
        onRequestClose={() => null}
      >
        <View style={styles.modalContent}>
          <View style={styles.modalTitleContainer}>
            <Text style={styles.modalTitle}>Delete Item</Text>
            <TouchableOpacity style={styles.deleteButton} onPress={()=> setModalVisible(!modalVisible)}>
              <Text style={styles.deleteButtonText}>X</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.modalText}>Are you sure?</Text>
          <Text style={styles.modalMessage}>{itemSelected.value}</Text>
          <Button 
            title='Okay' 
            onPress={() => onHandleDelete(itemSelected.id)}
            color="#911211"
          />
        </View>
      </Modal>
    </View>
  );
}