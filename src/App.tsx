import React from "react";
import { View } from "react-native";
import { Provider } from "react-redux";
import { createSwitchNavigator, createStackNavigator } from "react-navigation";

import * as routes from "./Routes";
import { store } from "./Store";

import { SplashScreen } from "./Pages/SplashScreen";
import Welcome from "./Pages/Onboarding/Welcome";

const UnauthorizedStack = createStackNavigator({
    [routes.Unauthorized.Welcome]: Welcome
}, {
    initialRouteName: routes.Unauthorized.Welcome,
    headerMode: "none"
});

// const LoggedInStack = createStackNavigator({
// }, {
//     headerMode: "none"
// });

const AppNavigator = createSwitchNavigator({
    [routes.Root.SplashScreen]: SplashScreen,
    // [routes.Root.Authorized]: LoggedInStack,
    [routes.Root.Unauthorized]: UnauthorizedStack
}, { initialRouteName: routes.Root.Unauthorized });

export default () =>
    <Provider store={store}>
        <View style={{ flex: 1 }}>
            <AppNavigator />
        </View>
    </Provider>;
