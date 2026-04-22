import { Link, Stack } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={{ flex: 1 }}>
      <Stack.Screen options={{ title: 'React Hooks' }} />
      <View style={styles.container}>
        <Text style={styles.titulo}>React Hooks</Text>
        <Text style={styles.descricao}>
          Hooks são funções especiais do React que permitem usar estado e outros recursos dentro de componentes funcionais.
        </Text>

        <Text style={styles.subtitulo}>Escolha um hook para explorar:</Text>

        <Link href="/use-state" style={[styles.link, styles.linkEstado]}>
          useState
        </Link>

        <Link href="/use-effect" style={[styles.link, styles.linkEfeito]}>
          useEffect
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
    fontSize: 32,
    fontWeight: 'bold',
    color: '#cdd6f4',
    marginBottom: 12,
  },
  subtitulo: {
    fontSize: 14,
    color: '#6c7086',
    marginBottom: 16,
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  descricao: {
    fontSize: 16,
    color: '#a6adc8',
    textAlign: 'center',
    marginBottom: 40,
    lineHeight: 24,
  },
  link: {
    fontSize: 18,
    fontWeight: '700',
    paddingVertical: 14,
    paddingHorizontal: 36,
    borderRadius: 10,
    marginBottom: 16,
    width: 220,
    textAlign: 'center',
  },
  linkEstado: {
    backgroundColor: '#89b4fa22',
    color: '#89b4fa',
    borderWidth: 1,
    borderColor: '#89b4fa',
  },
  linkEfeito: {
    backgroundColor: '#a6e3a122',
    color: '#a6e3a1',
    borderWidth: 1,
    borderColor: '#a6e3a1',
  },
});
