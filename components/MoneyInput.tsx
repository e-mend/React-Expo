import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import MaskInput, { Masks, formatWithMask } from 'react-native-mask-input';
import { Button, TextInput } from 'react-native-paper';
import { Icon, MD3Colors } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';

const MoneyInput = () => {
  const [inputFields, setInputFields] = useState([
    { id: 1, value: '', name: ''},
  ]);

  const handleAddField = () => {
    const newField = { id: inputFields.length + 1, value: '', name: '' };
    setInputFields([...inputFields, newField]);
  };

  const handleRemoveField = (id: number) => {
    const updatedFields = inputFields.filter((field) => field.id !== id);
    setInputFields(updatedFields);
  };

  const handleInputChange = (id: number, updates: Object) => {
    const updatedFields = inputFields.map((field) => 
      field.id === id ? { ...field, ...updates } : field
    );
    console.log(updatedFields);
    setInputFields(updatedFields);
  };

  return (
    <>
      {inputFields.map((field) => (
        <View style={styles.container} key={field.id}>
          <TextInput
            label="Entrada"
            mode="outlined"
            placeholder='Ex: Salário Bruto'
            outlineColor='black'
            cursorColor='black'
            underlineColorAndroid={'black'}
            activeOutlineColor='black'
            placeholderTextColor={'black'}
            selectionColor='black'
            textColor='black'
            style={styles.nameInput}
            value={field.name}
            onChangeText={(value) => handleInputChange(field.id, {
              name: value
            })}
          />
          <TextInput
            label="Valor"
            mode="outlined"
            outlineColor='black'
            cursorColor='black'
            underlineColorAndroid={'black'}
            activeOutlineColor='black'
            placeholderTextColor={'black'}
            selectionColor='black'
            textColor='black'
            style={styles.input}
            value={field.value}
            onChangeText={(value) => {
              const formattedValue = formatWithMask({
                text: value,
                mask: Masks.BRL_CURRENCY
              });

              handleInputChange(field.id, {
                value: formattedValue['masked']
              });
            }}
          />
        {field.id != 1 && (
          <Button
            children={<Icon source="trash-can" size={26} color="white" />}
            mode="text"
            contentStyle={{ padding: 0, marginTop: 10 }}
            buttonColor='red'
            textColor='white'
            style={styles.deleteButton}
            onPress={() => handleRemoveField(field.id)}
          />
        )}
        </View>
      ))}
      <Button
        icon="plus"
        mode="contained"
        buttonColor='black'
        textColor='white'
        children="Adicionar"
        uppercase={true}
        onPress={handleAddField}
      />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 8,
    display: 'flex',
    flexDirection: 'row',
    borderRadius: 10,
    width: '100%',
  },
  input: {
    width: '40%',
  },
  button: {
    backgroundColor: 'red',
    borderColor: 'white',
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    fontSize: 26,
  },
  nameInput: {
    width: '40%',
    justifyContent: 'center',
  },
  deleteButton: {
    backgroundColor: 'red',
    borderColor: 'white',
    borderRadius: 10,
  },
});

export default MoneyInput;
