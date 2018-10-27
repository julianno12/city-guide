import React from "react";
import { View, ActivityIndicator } from "react-native";

import styles from "./styles";

export interface SplashScreenProps {
    initApp: () => void;
}

export class SplashScreen extends React.Component<SplashScreenProps> {
    componentDidMount() {
        this.props.initApp();
    }

    render() {
        return <View style={styles.container}>
            <ActivityIndicator size={"large"} />
        </View>;
    }
}
