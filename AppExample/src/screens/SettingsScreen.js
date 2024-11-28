import { Button, View } from "react-native";

export default function SettingsScreen({navigation}) {
    return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            <Button
                onPress={() => navigation.navigate("Home")}
                title="Go to Home"
            />
        </View>
    );
}