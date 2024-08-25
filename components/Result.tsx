import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { Card, Text } from 'react-native-paper';
import { Icon } from 'react-native-paper';
import { Masks, formatWithMask } from 'react-native-mask-input';

const Result = ({entryList, descList} : any) => {

  const [sum, setSum] = useState(0);

  useEffect(() => {
    let summ = 0;

    entryList.map((entry: any) => {
      let floatEntry = parseFloat(entry.value.replace(/[^\d]/g, '')) || 0;
      summ = summ + floatEntry;
    });

    setSum(summ);
  }, [entryList]);

  const sumMask = (value: string) => {
    return formatWithMask({
      text: value,
      mask: Masks.BRL_CURRENCY
    })['masked'];
  };

  return (
    <>
      {entryList.map((entry: any, index: number) => (
        <View key={index} style={styles.container}>
          {index != 0 && 
          <Text variant="titleLarge" >
          <Icon
            source="plus"
            color={'#000000'}
            size={50}
          />
        </Text>}
          <Card>
          <Card.Content>
            <Text variant="titleLarge">{entry.value}</Text>
          </Card.Content>
        </Card>
        </View>
      ))}
      <Text variant="titleLarge">-------------------------------------------------</Text>
      <Card>
          <Card.Content>
        <Text variant="titleLarge" style={styles.container} children={sumMask(sum.toString())}>
        </Text>
      </Card.Content>
      </Card>
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
    textAlign: 'center',
    justifyContent: 'flex-end',
  },
});

export default Result;
