import { Text, StyleSheet } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";

// SafeAreaProvider deve envolver toda a aplicação.
// SafeAreaView aplica automaticamente o padding das áreas seguras
// (notch, barra de status, barra de navegação).

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.tela}>
        <Text style={styles.titulo}>SafeAreaView</Text>
        <Text style={styles.texto}>
          Este conteúdo nunca ficará escondido atrás da barra de status,
          notch ou barra de navegação do dispositivo.
        </Text>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  tela: {
    flex: 1,
    backgroundColor: "#e3f2fd",
    padding: 16,
  },
  titulo: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#1565c0",
    marginBottom: 12,
  },
  texto: {
    fontSize: 15,
    color: "#333",
    lineHeight: 22,
  },
});
