import { View, Text, StyleSheet, TargetedEvent } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native";

type ButtonProps = {
  label: string;
  onPress?: () => void
};

const CustomButton = (props: ButtonProps) => {
  const {label, onPress} = props;
  return <TouchableOpacity onPress={onPress} style={styles.button} >
          <Text style={styles.text} >{label}</Text>
  </TouchableOpacity>
};

export default CustomButton;

const styles = StyleSheet.create({
  button: {
    width: '80%',
    marginVertical: 20,
    paddingVertical: 10,
    backgroundColor: '#560CCE',
    borderRadius: 10,
    color: '#fff',
    paddingHorizontal: 10,
    textAlign: 'center',
    display: 'flex',
    alignItems: 'center'
  },
  text: {
    fontSize: 18,
    color:'#fff'
  },
})

