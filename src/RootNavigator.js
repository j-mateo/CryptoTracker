import { StackNavigator } from 'react-navigation';
import { CryptoContainer, CryptoDetails } from './components';
const RootNavigator = StackNavigator({
  CoinList: {
    screen: CryptoContainer,
    navigationOptions: {
      headerTitle: 'Franck App'
    }
  },
  CoinDetails: {
    screen: CryptoDetails,
    navigationOptions: {
      headerTitle: 'Coin Details'
    }
  }
});

export default RootNavigator;
