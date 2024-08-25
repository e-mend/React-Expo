import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import MaskInput, { Masks, formatWithMask } from 'react-native-mask-input';
import { Button, TextInput } from 'react-native-paper';
import { Icon, MD3Colors } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';

const MoneyInputDesc = ({onValueChange, list, moneyInputList} : any) => {

  useEffect(() => {
    const bruteSalary = moneyInputList.find((field: any) => field.id === 1);
    const cleanSalary = bruteSalary.value.replace(/[^0-9]/g, '');
    let inss = '0';
    let irrf = '0';
    
    if (cleanSalary <= 141200 ) {
      inss = '7,5';
    } else if (cleanSalary >= 141201 && cleanSalary <= 266668) {
      inss = '9';
    } else if (cleanSalary >= 266669 && cleanSalary <= 400003) {
      inss = '12';
    } else if (cleanSalary >= 400004 && cleanSalary <= 778602) {
      inss = '14';
    } else {
      inss = '16';
    }

    if (cleanSalary <= 225920 ) {
      irrf = '0';
    } else if (cleanSalary >= 225921 && cleanSalary <= 282665) {
      irrf = '7,5';
    } else if (cleanSalary >= 282666 && cleanSalary <= 375105) {
      irrf = '15';
    } else if (cleanSalary >= 375106 && cleanSalary <= 466468) {
      irrf = '22,5';
    } else {
      irrf = '27,5';
    }

    handleInputChange(2, {value: inss});
    console.log(list);
    // handleInputChange(1, {value: irrf});
    // console.log(list);
  }, [moneyInputList]);

  const percentMask = [/\d/, /\d/, /\d/, '.', /\d/, /\d/, '%'];

  const handleAddField = (type: string) => {
    const newField = { id: list.length + 1, value: '', name: '', type: type };
    onValueChange([...list, newField]);
  };

  const handleRemoveField = (id: number) => {
    const updatedFields = list.filter((field: any) => field.id !== id);
    onValueChange(updatedFields);
  };

  const handleInputChange = (id: number, updates: Object) => {
    console.log(updates, id);
    const updatedFields = list.map((field: any) => {
      if (field.id === id) {
        const updatedField = { ...field, ...updates };
        console.log(updatedField);
        return updatedField;
      }

      return field;
    });

    console.log(updatedFields);
    onValueChange(updatedFields);
  };

  return (
    <>
      {list.map((field: any) => (
        <View style={styles.container} key={field.id}>
          <TextInput
            label="Nome"
            mode="outlined"
            placeholder='Ex: VA, VR'
            outlineColor='black'
            cursorColor='black'
            underlineColorAndroid={'black'}
            activeOutlineColor='black'
            placeholderTextColor={'black'}
            selectionColor='black'
            textColor='black'
            style={styles.nameInput}
            value={field.name}
            onChangeText={(value) => {

              if ([1,2,3].includes(field.id)) {
                alert('Este campo não pode ser alterado');
                return;
              }

              handleInputChange(field.id, {
                name: value
              });
            }}
          />
          <TextInput
            label={field.type}
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
                mask: field.type === 'Porcentagem'
                ? percentMask
                : Masks.BRL_CURRENCY
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
        children="Valor"
        uppercase={true}
        onPress={() => handleAddField('Valor')}
      />
      <Button
        icon="plus"
        mode="contained"
        buttonColor='black'
        textColor='white'
        children="Porcentagem"
        uppercase={true}
        onPress={() => handleAddField('Porcentagem')}
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

export default MoneyInputDesc;
