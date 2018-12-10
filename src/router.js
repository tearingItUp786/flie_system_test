import { createAppContainer, createStackNavigator } from 'react-navigation';
import Home from './screens/Home';
import Detail from './screens/Detail';

const StackNav = createStackNavigator(
  {
    Home: {
      screen: Home
    },
    Detail: {
      screen: Detail
    }
  },
  {
    initialRouteName: 'Home'
  }
);

export default createAppContainer(StackNav);
