import * as React from "react";
import { View, Text } from "react-native";

import * as config from "../../../Services/Configuration";

import styles from "./styles";
import Logger from "../../../Services/Logger";

const TAG = "Welcome";

export default class Welcome extends React.Component {
    componentDidMount() {
        Logger.logDebug(TAG, "Test log");
    }

    render() {
        return <View style={styles.container}>
            <Text>{config.AppName}, {config.AppBaseUri}, {config.IsDebug ? "DEBUG" : "NON DEBUG"}</Text>
        </View>
    }
}
