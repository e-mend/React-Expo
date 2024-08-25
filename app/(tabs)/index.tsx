import { Image, StyleSheet }  from 'react-native';
import { useState, useEffect } from 'react';
import { HelloWave } from '@/components/HelloWave';
import MoneyInput from '@/components/MoneyInput';
import MoneyInputDesc from '@/components/MoneyInputDesc';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import DatePicker from '@/components/DatePicker';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import Result from '@/components/Result';

export default function HomeScreen() {

  const [inputFields, setInputFields] = useState([
    { id: 1, value: '', name: 'Salário Bruto'},
  ]);

  const [inputFieldsDesc, setInputFieldsDesc] = useState([
    { id: 1, value: '0', name: 'IRRF', type: 'Porcentagem' },
    { id: 2, value: '0', name: 'INSS', type: 'Porcentagem' },
    { id: 3, value: '6', name: 'Vale Transporte', type: 'Porcentagem' },
  ]);

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: 'white' }}
      headerImage={
        <Image
          source={require('@/assets/images/background.png')}
          style={styles.reactLogo}
        />
      }
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Holerite de forma fácil e prática!</ThemedText>
        <HelloWave />
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">
          1 - Adicione as entradas (exemplo: salário bruto, horas extras, comissões):
        </ThemedText>
        <MoneyInput onValueChange={setInputFields} list={inputFields} />
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">
          2 - Adicione os descontos:
        </ThemedText>
        <MoneyInputDesc
          onValueChange={setInputFieldsDesc}
          list={inputFieldsDesc}
          moneyInputList={inputFields}
         />
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">
          3 - Resultado:
        </ThemedText>
        <Result entryList={inputFields} descList={inputFieldsDesc} />
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 20,
    backgroundColor: 'white',
    color: 'black',
  },
  title: {
    fontWeight: 'bold',
    color: 'black',
  },
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'white',
    color: 'black',
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
    backgroundColor: 'white',
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 30,
    position: 'absolute',
  },
});
