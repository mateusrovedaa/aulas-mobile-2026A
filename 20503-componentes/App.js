import { View, Text, Button, Image, TextInput } from "react-native";

export default function App() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Button title="Clique me" color="#000000" />
      <Text>Universal React with Expo</Text>
      <Image
        style={{ width: "200px", height: "200px" }}
        source={{
          uri: "https://reactnative.dev/img/tiny_logo.png",
        }}
      />
      <TextInput
        placeholder="useless placeholder"
        keyboardType="default"
        inputMode="none"
      />
    </View>
  );
}
