import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        
      },
      content: {
        flexDirection:"row",
        marginTop: 40,
        marginHorizontal:20,
        justifyContent: "space-between",
      },
      input: {
        borderBottomWidth: 1, 
        borderBottomColor: "#911211",
        flex: 0.85,
      },
      itemsContainer:{
        marginTop: 40,
        marginHorizontal:20,
        borderWidth:1,
        padding:8,
        
    
      },
      item:{
        flex:1,
        flexDirection:"row",
        justifyContent: "space-between",
        marginTop: 10,
        marginBottom:10,
        borderWidth:1,
        padding:5,
        borderColor: "#911211",
        alignItems: "center"
      },
      deleteButton: {
          backgroundColor:"#911211",
          paddingVertical:10,
          paddingHorizontal:12,
      },
      deleteButtonText:{
          color: "#fff",
          fontSize:14,
          fontWeight:"bold",
      },
      modalContent:{
          flex:1,
          backgroundColor:'#fff',
          alignItems:'center'
      },
      modalTitleContainer:{
          flexDirection:'row',
          justifyContent:"space-between",
          alignItems:'center'
      },
      modalTitle:{
          fontSize:18,
          fontWeight:'bold',
          marginHorizontal:20,
          marginVertical:20
      },
      modalText:{
          fontSize:15,
          marginHorizontal:20
      },
      modalMessage:{
        fontSize:20,
        marginHorizontal:20,
        marginVertical:20,
        fontWeight:'bold'
      }

})