import { View, TextInput, Button, StyleSheet } from 'react-native';
import { useState } from 'react';
import { useCards } from '../hooks/useCards';
import { generateId } from '../../../core/utils/uuid';
import { BusinessCard } from '../domain/BusinessCard';

export default function CreateCardScreen({ navigation }: any) {
  const { addCard } = useCards();

  const [form, setForm] = useState({
    name: '',
    title: '',
    company: '',
    phone: '',
    email: '',
    website: '',
  });

  const onSave = async () => {
    const card: BusinessCard = {
      id: generateId(),
      ...form,
    };

    await addCard(card);
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <TextInput placeholder="Name" style={styles.input} onChangeText={v => setForm({ ...form, name: v })} />
      <TextInput placeholder="Title" style={styles.input} onChangeText={v => setForm({ ...form, title: v })} />
      <TextInput placeholder="Company" style={styles.input} onChangeText={v => setForm({ ...form, company: v })} />
      <TextInput placeholder="Phone" style={styles.input} onChangeText={v => setForm({ ...form, phone: v })} />
      <TextInput placeholder="Email" style={styles.input} onChangeText={v => setForm({ ...form, email: v })} />
      <TextInput placeholder="Website" style={styles.input} onChangeText={v => setForm({ ...form, website: v })} />

      <Button title="Save Card" onPress={onSave} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 16 },
  input: {
    borderWidth: 1,
    borderColor: '#DDD',
    padding: 12,
    marginBottom: 12,
    borderRadius: 8,
  },
});
