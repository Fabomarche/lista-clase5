import{ View, Text, TouchableOpacity } from "react-native"
import { styles } from "./styles"

const ListItem = ({ item, onPress }) => {
    return(
    <View key={item.id} style={styles.itemsContainer}>
        <Text>{item.value}</Text>
        <TouchableOpacity onPress={() => onPress(item.id)} 
        style={styles.deleteButton}>
            <Text style={styles.deleteButtonText}>X</Text>
        </TouchableOpacity>
    </View>
    )
}

export default ListItem