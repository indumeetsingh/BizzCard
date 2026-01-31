import { View, Text, Button } from 'react-native';

export default function WelcomeScreen({ navigation }: any) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Welcome to BizzCard</Text>
      <Button title="Go to Wallet" onPress={() => navigation.navigate('Wallet')} />
    </View>
  );
}
