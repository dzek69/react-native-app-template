import { StyleSheet } from "react-native";

const containerBackground = "#F5FCFF";
const textColor = "#333333";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: containerBackground,
    },
    big: {
        textAlign: "center",
        color: textColor,
        marginBottom: 5,
        fontSize: 30,
    },
});

export default styles;
