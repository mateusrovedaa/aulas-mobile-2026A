import { View, Text, Pressable } from "react-native";

export default function App() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Universal React with Expo</Text>
      <Text>Texto do Roveda</Text>
      <Pressable>
        <Text>I'm pressable!</Text>
      </Pressable>
    </View>
  );
}
