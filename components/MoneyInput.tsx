import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Masks, formatWithMask } from 'react-native-mask-input';
import { Button, TextInput } from 'react-native-paper';
import { Icon } from 'react-native-paper';

const MoneyInput = ({onValueChange, list} : any) => {
  const handleAddField = () => {
    onValueChange([...list, {
      id: list.length + 1,
      value: '',
      name: ''
    }]);
  };

  const handleRemoveField = (id: number) => {
    const updatedFields = list.filter((field: any) => field.id !== id);
    onValueChange(updatedFields);
  };

  const handleInputChange = (id: number, updates: Object) => {
    const updatedFields = list.map((field: any) => 
      field.id === id ? { ...field, ...updates } : field
    );
    onValueChange(updatedFields);
  };

  return (
    <>
      {list.map((field: any) => (
        <View style={styles.container} key={field.id}>
          <TextInput
            label="Nome"
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
            onChangeText={(value) => {
              if (field.id == 1) {
                alert('Salário Bruto não pode ser alterado');
                return;
              }

              handleInputChange(field.id, {
                name: value
              });
            }}
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
