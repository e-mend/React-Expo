import React from 'react';
import { TouchableOpacity, Text, StyleSheet, Alert, GestureResponderEvent } from 'react-native';

interface CustomButtonProps {
    onPress: (event: GestureResponderEvent) => void;
    title: string;
    style?: any;
}

const ButtonAdd: React.FC<CustomButtonProps> = ({onPress, title, style }) => {

  return (
    <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
    button: {
      backgroundColor: '#1D3D47',
      borderColor: 'white',
      borderWidth: 1,
      padding: 10,
      borderRadius: 10,
    },
    buttonText: {
      color: 'white',
      fontSize: 18,
      textAlign: 'center',
      fontWeight: 'bold',
    },
  });

export default ButtonAdd;