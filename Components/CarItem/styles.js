import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
    carContainer: {
        width: "100%",
        height: "100%",
        backgroundColor: "orange",
    },
    header:{
        marginTop: 50,
        marginLeft: 20,
        marginRight: 20,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    headerTitle:{
        fontSize: 20,
        color: "white",
        fontWeight: "bold",
        alignItems: "center",
        justifyContent: "center",         
    },
    backgroundimage: {
        width: "100%",
        height: "100%",
        resizeMode: "cover",
        position:"absolute"
    },
    batterySection:{
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    batteryImage: {
        height:26,
        width: 70,
        marginRight: 12,
    },
    batteryText: {
        color: "white",
        fontSize: 25,
        fontWeight: "bold",
    },
    status:{
        justifyContent: "center",
        alignItems: "center",
        marginTop: 180,
    },
    statusText:{
        fontSize: 20,
        color: "white",
        fontWeight: "bold",
    },
    controls:{
        flexDirection: "row",
        justifyContent: "center",
        marginTop: 20,
    },
    controlsButton:{
        borderWidth: 1,
        borderColor: "white",
        borderRadius: 50,
        padding: 18,
        marginLeft: 25,
    }


}) 

export default styles;