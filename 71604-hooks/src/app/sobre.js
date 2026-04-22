import { Link, Stack } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

export default function SobreScreen() {
  return (
    <View>
      <Stack.Screen options={{ title: 'Sobre' }} />
      <View style={styles.container}>
        <Text style={styles.titulo}>Sobre o App</Text>
        <Text style={styles.descricao}>
          Este projeto demonstra o uso do Expo Router com a estrutura de pastas{' '}
          <Text style={styles.destaque}>src/app</Text>.
        </Text>
        <Text style={styles.descricao}>
          Cada arquivo dentro de <Text style={styles.destaque}>src/app/</Text>{' '}
          se torna automaticamente uma rota da aplicação.
        </Text>

        <Link href="/" style={styles.link}>
          Voltar ao Início
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
    marginBottom: 16,
    lineHeight: 24,
  },
  destaque: {
    color: '#a6e3a1',
    fontWeight: '600',
  },
  link: {
    marginTop: 16,
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
