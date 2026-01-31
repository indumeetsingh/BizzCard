import { View, Text, StyleSheet } from 'react-native';
import { colors } from '../theme/colors';

export default function BusinessCard() {
  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <Text style={styles.name}>John Doe</Text>
        <Text style={styles.title}>Software Engineer</Text>
      </View>

      <View style={styles.body}>
        <Text style={styles.company}>Acme Corp</Text>
        <Text style={styles.detail}>📞 +1 234 567 890</Text>
        <Text style={styles.detail}>✉️ john.doe@email.com</Text>
        <Text style={styles.detail}>🌐 www.johndoe.com</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: '90%',
    backgroundColor: colors.white,
    borderRadius: 16,
    padding: 20,
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowRadius: 10,
    elevation: 5,
  },
  header: {
    marginBottom: 16,
  },
  name: {
    fontSize: 22,
    fontWeight: '700',
    color: colors.textPrimary,
  },
  title: {
    fontSize: 14,
    color: colors.textSecondary,
  },
  body: {
    gap: 6,
  },
  company: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
  },
  detail: {
    fontSize: 14,
    color: colors.textSecondary,
  },
});
