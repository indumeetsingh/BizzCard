import { View, Text, StyleSheet } from 'react-native';
import { BusinessCard } from '../domain/BusinessCard';

type Props = {
  card: BusinessCard;
};

export function BusinessCardView({ card }: Props) {
  return (
    <View style={styles.card}>
      <Text style={styles.name}>{card.name}</Text>
      <Text>{card.title}</Text>
      <Text>{card.company}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 16,
    borderRadius: 12,
    backgroundColor: '#fff',
  },
  name: {
    fontSize: 20,
    fontWeight: '700',
  },
});
