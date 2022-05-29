import { StyleSheet } from "react-native";

export default StyleSheet.create({
    parentContainer: {
        flex: 1,
        justifyContent: 'space-between',
        padding: 10,
        backgroundColor: '#C3D99E',
    },
    btnContainer: {
        marginTop: 5,
        marginBottom: 5
    },
    btnStyle: {
        backgroundColor: '#EE782D',
        color: 'white',
        height: 50,
        borderRadius: 10,
        marginTop: 5,
        marginBottom: 5
    },
    btnTxtStyle: {
        color: 'white',
        fontSize: 18,
        textAlign: 'center',
        lineHeight: 50
    }
});