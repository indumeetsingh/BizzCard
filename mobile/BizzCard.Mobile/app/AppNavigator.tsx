import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import WelcomeScreen from '../features/cards/screens/WelcomeScreen';
import WalletScreen from '../features/cards/screens/WalletScreen';
import CreateCardScreen from '../features/cards/screens/CreateCardScreen';
//import CardDetailScreen from '../screens/CardDetailScreen';
//import ScanCardScreen from '../screens/ScanCardScreen';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Wallet" component={WalletScreen} />
        <Stack.Screen name="CreateCard" component={CreateCardScreen} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}
