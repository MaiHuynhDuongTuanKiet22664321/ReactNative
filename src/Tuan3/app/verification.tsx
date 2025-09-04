import {
  Image,
  Platform,
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Pressable,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from "react-native-confirmation-code-field";

const CELL_COUNT = 6;
export default function VerificationScreen({ navigation }: any) {
  const [value, setValue] = useState("");
  const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });
  return (
    <SafeAreaView style={styles.safeAreaViewContainer}>
      <LinearGradient
        colors={["#CAF4F6", "#92b3fbff"]}
        locations={[0, 0.8]}
        start={[0, 0]}
        end={[0, 1]}
        style={{ flex: 1 }}
      >
        <View style={styles.container}>
          <Text style={styles.text}>CODE</Text>
          <Text style={styles.text1}>VERIFICATION</Text>
          <Text style={styles.text1}>
            Enter ontime password sent on ++849092605798
          </Text>
          <View style={styles.containerOTP}>
            <CodeField
              ref={ref}
              {...props}
              value={value}
              onChangeText={setValue}
              cellCount={CELL_COUNT}
              rootStyle={styles.codeFieldRoot}
              keyboardType="number-pad"
              textContentType="oneTimeCode"
              renderCell={({ index, symbol, isFocused }) => (
                <View
                  onLayout={getCellOnLayoutHandler(index)}
                  key={index}
                  style={[styles.cell, isFocused && styles.focusCell]}
                >
                  <Text style={styles.cellText}>
                    {symbol || (isFocused ? <Cursor /> : null)}
                  </Text>
                </View>
              )}
            />
          </View>
          <View style={styles.containerButton}>
            <Pressable style={styles.button}>
              <Text style={styles.textButton} onPress={() => {}}>
                VERIFY CODE
              </Text>
            </Pressable>
          </View>
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeAreaViewContainer: {
    flex: 1,
    backgroundColor: "white",
  },
  container: {
    flex: 1,
    alignItems: "center",
    marginTop: 70,
  },
  logoIndex: {},
  text: {
    fontSize: 60,
    fontWeight: "bold",
    marginTop: 40,
    width: 160,
    height: 70,
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
  containerButton: {
    flexDirection: "row",
    marginTop: 40,
    gap: 20,
    justifyContent: "space-between",
  },
  button: {
    width: 305,
    height: 45,
    backgroundColor: "yellow",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
  },
  textButton: {
    fontWeight: "bold",
  },
  containerInput: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    marginTop: 40,
    width: 305,
    height: 45,
    borderWidth: 1,
    padding: 10,
  },
  containerOTP: {
    marginTop: 25,
  },
  codeFieldRoot: {
    width: "80%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  cell: {
    width: 50,
    height: 50,
    lineHeight: 50,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  focusCell: {
    borderColor: "#007AFF",
  },
  cellText: {
    fontSize: 24,
    textAlign: "center",
  },
});
