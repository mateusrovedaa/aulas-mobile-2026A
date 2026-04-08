import { Link, Stack } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={{ flex: 1 }}>
      <Stack.Screen options={{ title: 'Início' }} /> {/* Opcional*/}
      <View style={styles.container}>
        <Text style={styles.titulo}>Bem-vindo ao App!</Text>
        <Text style={styles.descricao}>
          Esta é a tela inicial. Use o link abaixo para navegar.
        </Text>

        <Link href="/sobre" style={styles.link}>
          Ir para Sobre
        </Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
    backgroundColor: '#1e1e2e',
  },
  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#cdd6f4',
    marginBottom: 12,
  },
  descricao: {
    fontSize: 16,
    color: '#a6adc8',
    textAlign: 'center',
    marginBottom: 32,
  },
  link: {
    fontSize: 16,
    fontWeight: '600',
    color: '#89b4fa',
    borderWidth: 1,
    borderColor: '#89b4fa',
    paddingVertical: 12,
    paddingHorizontal: 28,
    borderRadius: 8,
  },
});
