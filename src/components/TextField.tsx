import { View, Text, TextInput, StyleSheet } from "react-native";
import React from "react";

type TextFieldProps = {
  label: string;
  value: string;
  placeholder: string;
  onChange: (text:string) => void;
};

const TextField = (props: TextFieldProps) => {
  const { label, value, placeholder,onChange } = props;
  return (
    <View style={styles.inputContainer} >
      <Text style={styles.text} >{label}</Text>
      <TextInput
        style={styles.input}
        placeholderTextColor={'purple'}
        value={value}
        placeholder={placeholder}
        onChangeText={(text)=> {onChange(text)}}
      />
    </View>
  );
};

export default TextField;

const styles = StyleSheet.create({
  inputContainer: {
    width: '80%',
    marginVertical: 10,
    gap: 4
  },
  input:{
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  text:{
    fontSize: 20,
    fontWeight: '500'
  }
})
