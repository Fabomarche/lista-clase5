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