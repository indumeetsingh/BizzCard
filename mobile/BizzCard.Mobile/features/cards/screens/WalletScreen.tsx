import { View, FlatList, Button } from 'react-native';
import { useCards } from '../hooks/useCards';
import { BusinessCardView } from '../components/BusinessCardView';

export default function WalletScreen({ navigation }: any) {
  const { cards } = useCards();

  return (
    <View style={{ flex: 1 }}>
      <Button title="Add Card" onPress={() => navigation.navigate('CreateCard')} />

      <FlatList
        data={cards}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <BusinessCardView card={item} />}
      />
    </View>
  );
}
