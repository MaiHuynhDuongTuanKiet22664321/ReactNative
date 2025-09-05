import {
    Image,
    Platform,
    SafeAreaView,
    StyleSheet,
    View,
    Text,
    Pressable
} from "react-native";
import Ellipse1circle from "../assets/images/Ellipse1circle.svg";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from 'expo-router';

export default function FirstScreen({ navigation }: any) {
    const router = useRouter();
    return (
        <SafeAreaView style={styles.safeAreaViewContainer}>
                <View style={styles.container}>
                    <Image source={Ellipse1circle} style={styles.logoIndex} />
                    <Text style={styles.text}>
                        GROW {"\n"} YOUR BUSINESS
                    </Text>
                    <Text style={styles.text1}>We will help you to grow your business using online server</Text>
                    <View style={styles.containerButton}>
                        <Pressable style={styles.button} onPress={() => { router.push('/login') }}><Text style={styles.textButton} >LOGIN</Text></Pressable>
                        <Pressable style={styles.button}><Text style={styles.textButton}>SIGN UP</Text></Pressable>
                    </View>
                </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeAreaViewContainer: {
        flex: 1,
        backgroundColor: "#00CCF9",
    },
    container: {
        flex: 1,
        alignItems: "center",
        marginTop: 70
    },
    logoIndex: {},
    text: {
        fontSize: 24,
        fontWeight: "bold",
        marginTop: 40,
        width: 200,
        height: 58,
        textAlign: "center",
    },
    text1: {
        fontSize: 15,
        marginTop: 40,
        width: 302,
        height: 36,
        fontWeight: "bold",
        textAlign: "center",
    },
    text2: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 30
    },
    containerButton: {
        flexDirection: 'row',
        marginTop: 100,
        gap: 20,
        justifyContent: 'space-between'
    },
    button: {
        width: 125,
        height: 45,
        backgroundColor: 'yellow',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: 10,
    },
    textButton: {
        fontWeight: 'bold'
    }
});
