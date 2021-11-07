import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    menuItem:{
        marginTop:20,
        marginLeft:20,
        marginRight:20
    },
    menuText: {
        color: "white",
        fontSize: 20,
        fontWeight: "bold",
        marginLeft: 15,
        textTransform: "uppercase"
    },
    menuRow:{
        marginTop:15,
        marginBottom:15,
        flexDirection: "row",
        alignItems: "center",
      
    },
    menuTextBox:{
        flexGrow: 1,
    },
    
    subTitle:{
        color:"gray",
        fontSize:14,
        marginLeft:15,
    }
})

export default styles;