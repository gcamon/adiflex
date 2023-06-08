import { StyleSheet } from "react-native"

export const globalStyles = StyleSheet.create({
    layout: {
        flex: 1,
        padding: 8
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#DDDDDD',
        padding: 10,
        marginTop: 20
    },
    textInput: {
        borderWidth: 1,
        borderColor: "#ccc",
        padding: 7,
        borderRadius: 5,
        marginTop: 10,
        marginBottom: 10,
        width: 300
    },
    card: {
        padding: 10,
        borderColor: "#ccc",
        borderBottomWidth: 1,
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
    },
    roundedLG: {
        width: 50,
        height: 50,
        borderRadius: 50,
        borderWidth: 1,
        borderColor: "gray",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        borderWidth: 1,
        borderColor: "gold"
    },
    profilePic: {
        resizeMode: "cover",
        width: undefined,
        height: undefined
    },
    userInfo: {
        padding: 10,
        alignItems: 'flex-start',
        justifyContent: "center",
        lineHeight: 20,
    },

    textWhiteMD: {
        color: "#000",
        fontSize: 25
    },

    roundedSM: {
        width: 35,
        height: 35,
        borderRadius: 35,
        borderWidth: 1,
        borderColor: "#eee",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        shadowColor: "gray",
        position: "absolute",
        right: 20,
        bottom: 20
    },

    roundedXLG: {
        width: 100,
        height: 100,
        borderRadius: 100,
        borderWidth: 1,
        borderColor: "gray",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        borderWidth: 1,
        borderColor: "gold"
    },
})