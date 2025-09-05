import {
    Image,
    Platform,
    SafeAreaView,
    StyleSheet,
    View,
    Text,
    Pressable,
    TextInput,
    TouchableOpacity,
} from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from 'expo-router';
import logo from "../assets/images/logo.png"


export default function LoginScreen() {
    const router = useRouter();
    return (
        <SafeAreaView style={styles.safeAreaViewContainer}>
            <View style={styles.container}>
                <Text style={styles.text}>
                    REGISTER
                </Text>
                <View style={styles.containerInput}>
                    <TextInput placeholder="Name" style={{ flex: 1 }} />
                </View>
                <View style={styles.containerInput1}>
                    <TextInput placeholder="Phone" style={{ flex: 1, alignItems: "flex-start" }} />
                </View>
                <View style={styles.containerInput}>
                    <TextInput placeholder="Email" style={{ flex: 1 }} />
                </View>
                <View style={styles.containerInput1}>
                    <TextInput placeholder="Password" style={{ flex: 1, alignItems: "flex-start" }} />
                    <Ionicons name="eye" size={20} color={"black"} />
                </View>
                <View style={styles.containerInput}>
                    <TextInput placeholder="Birthday" style={{ flex: 1 }} />
                </View>
                <View style={styles.radioContainer}>
                    <View style={styles.radio}><Ionicons name="radio-button-off" size={20} color="black" /><Text>Male</Text></View>
                    <View style={styles.radio}><Ionicons name="radio-button-off" size={20} color="black" /><Text>FeMale</Text></View>
                </View>
                <View style={styles.containerButton}>
                    <Pressable style={styles.button}>
                        <Text style={styles.textButton} onPress={() => { router.push('/') }}>REGISTER</Text>
                    </Pressable>
                </View>
                <Text style={styles.text1}>When you agree to terms and conditions</Text>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeAreaViewContainer: {
        flex: 1,
        backgroundColor: "#d8efde",
    },
    container: {
        flex: 1,
        alignItems: "center",
        marginTop: 70,
    },
    logoIndex: {},
    text: {
        fontFamily: "bold",
        fontSize: 30,
        width: 302,
        height: 36,
        textAlign: "center",
    },
    text1: {
        fontSize: 15,
        marginTop: 40,
        width: 302,
        height: 36,
        textAlign: "center",
    },
    containerButton: {
        flexDirection: "row",
        marginTop: 30,
        gap: 20,
        justifyContent: "space-between",
    },
    button: {
        width: 305,
        height: 45,
        backgroundColor: "#c34e3b",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 1,
    },
    button1: {
        marginTop: 30
    },
    textButton: {
        fontWeight: "bold",

    },
    containerInput: {
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
        marginTop: 10,
        width: 305,
        height: 45,
        backgroundColor:"#c9e0d0",
        padding: 10
    },
    containerInput1: {
        flexDirection: "row",
        gap: 10,
        marginTop: 10,
        width: 305,
        height: 45,
        backgroundColor:"#c9e0d0",
        padding: 10
    },
    text2: {
        color: "#5D25FA"
    },
    radioContainer:{
        flexDirection:"row",
        justifyContent:'space-between',
        marginVertical:10
    },
    radio:{
        flexDirection:'row',
        gap:20,
        marginHorizontal:10
    }
});
