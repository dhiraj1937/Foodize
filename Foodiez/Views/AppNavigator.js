import { createStackNavigator, createAppContainer } from "react-navigation";
import Intro from "./IntroView";
import Login from "./LoginView";
import Forget from "./ForgetPasswordView";
import Main from "./MainView";
import Locations from "./LocationListView";
import SignUp from "./SignUpView";

const AppNavigator = createStackNavigator({
  Intro: {
    screen: Intro,
    navigationOptions: {
      header: null
    }
  },
  Login: {
    screen: Login,
    navigationOptions: {
      header: null
    }
  },
  Forget: {
    screen: Forget,
    navigationOptions: {
      header: null
    }
  },
  Main: {
    screen: Main,
    navigationOptions: {
      header: null
    }
  },
  Locations: {
    screen: Locations,
    navigationOptions: {
      header: null
    }
  },
  SignUp: {
    screen: SignUp,
    navigationOptions: {
      header: null
    }
  }
});

const Container = createAppContainer(AppNavigator);
export default Container;
