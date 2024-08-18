import { Image, StyleSheet } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import MoneyInput from '@/components/MoneyInput';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import DatePicker from '@/components/DatePicker';
import ParallaxScrollView from '@/components/ParallaxScrollView';

export default function HomeScreen() {
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
        <ThemedText type="title">Resultados do Holerite</ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
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
