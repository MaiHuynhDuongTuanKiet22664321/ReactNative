import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Pressable } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const PasswordGeneratorScreen = () => {
  const [length, setLength] = useState("");
  const [lowercase, setLowercase] = useState(false);
  const [uppercase, setUppercase] = useState(false);
  const [number, setNumber] = useState(false);
  const [symbol, setSymbol] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>PASSWORD GENERATOR</Text>

      <View style={styles.passwordDisplay}>
        <TextInput
          style={styles.passwordInput}
          placeholder="Your generated password will appear here"
          placeholderTextColor="#bbb"
          editable={false}
        />
      </View>

      <View style={styles.optionsContainer}>
        <View style={styles.optionRow}>
          <Text style={styles.optionLabel}>Password length</Text>
          <TextInput
            style={styles.lengthInput}
            keyboardType="numeric"
            value={length}
            onChangeText={setLength}
          />
        </View>

        <OptionRow
          label="Include lower case letters"
          checked={lowercase}
          onPress={() => setLowercase(!lowercase)}
        />

        <OptionRow
          label="Include upper case letters"
          checked={uppercase}
          onPress={() => setUppercase(!uppercase)}
        />

        <OptionRow
          label="Include number"
          checked={number}
          onPress={() => setNumber(!number)}
        />

        <OptionRow
          label="Include special symbol"
          checked={symbol}
          onPress={() => setSymbol(!symbol)}
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={() => {}}>
        <Text style={styles.buttonText}>GENERATE PASSWORD</Text>
      </TouchableOpacity>
    </View>
  );
};

// Component riêng cho Option + Checkbox
const OptionRow = ({ label, checked, onPress } : any) => (
  <View style={styles.optionRow}>
    <Text style={styles.optionLabel}>{label}</Text>
    <Pressable onPress={onPress}>
      <FontAwesome
        name={checked ? "check-square" : "square-o"}
        size={24}
        color={checked ? "#6a0dad" : "#ccc"}
      />
    </Pressable>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2c005a',
    alignItems: 'center',
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 30,
    textAlign: 'center',
  },
  passwordDisplay: {
    width: '100%',
    backgroundColor: '#3a1c71',
    borderRadius: 10,
    padding: 15,
    marginBottom: 30,
  },
  passwordInput: {
    fontSize: 18,
    color: '#ffffff',
    textAlign: 'center',
  },
  optionsContainer: {
    width: '100%',
    marginBottom: 30,
  },
  optionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#4a2a80',
  },
  optionLabel: {
    fontSize: 16,
    color: '#dddddd',
    flex: 1,
    marginRight: 10,
  },
  lengthInput: {
    width: 60,
    height: 35,
    backgroundColor: '#ffffff',
    borderRadius: 5,
    textAlign: 'center',
    fontSize: 16,
  },
  button: {
    backgroundColor: '#6a0dad',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 30,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default PasswordGeneratorScreen;
