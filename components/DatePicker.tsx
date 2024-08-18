import DateTimePicker from 'react-native-ui-datepicker';
import dayjs from 'dayjs';
import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';

export default function DatePicker() {
  const [date, setDate] = useState(dayjs());

  return (
    <View style={styles.container}>
      <DateTimePicker
        mode="single"
        locale={'pt-BR'}
        date={date}
        onChange={(params) => setDate(dayjs(params.date))}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
});