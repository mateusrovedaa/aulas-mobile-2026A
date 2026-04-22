import { Link, Stack } from 'expo-router';
import { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function UseStateScreen() {
  // useState retorna [valorAtual, funçãoParaAtualizar]
  // O argumento é o valor inicial
  const [contador, setContador] = useState(0);
  const [visivel, setVisivel] = useState(false);

  return (
    <View style={{ flex: 1 }}>
      <Stack.Screen options={{ title: 'useState' }} />
      <View style={styles.container}>

        <Text style={styles.titulo}>useState</Text>
        <Text style={styles.descricao}>
          Guarda um valor que, quando alterado, faz o componente redesenhar a tela automaticamente.
        </Text>

        {/* Exemplo 1: Contador */}
        <View style={styles.card}>
          <Text style={styles.cardTitulo}>Exemplo 1 — Contador</Text>
          <Text style={styles.codigo}>
            {'const [contador, setContador] = useState(0)'}
          </Text>
          <Text style={styles.valor}>{contador}</Text>
          <View style={styles.botoes}>
            <TouchableOpacity
              style={[styles.botao, styles.botaoPerigo]}
              onPress={() => setContador(contador - 1)}
            >
              <Text style={styles.botaoTexto}>−</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.botao, styles.botaoNeutro]}
              onPress={() => setContador(0)}
            >
              <Text style={styles.botaoTexto}>Reset</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.botao, styles.botaoSucesso]}
              onPress={() => setContador(contador + 1)}
            >
              <Text style={styles.botaoTexto}>+</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Exemplo 2: Mostrar/Ocultar */}
        <View style={styles.card}>
          <Text style={styles.cardTitulo}>Exemplo 2 — Mostrar / Ocultar</Text>
          <Text style={styles.codigo}>
            {'const [visivel, setVisivel] = useState(false)'}
          </Text>
          <TouchableOpacity
            style={[styles.botao, styles.botaoPrimario, { marginBottom: 12 }]}
            onPress={() => setVisivel(!visivel)}
          >
            <Text style={styles.botaoTexto}>
              {visivel ? 'Ocultar mensagem' : 'Mostrar mensagem'}
            </Text>
          </TouchableOpacity>
          {visivel && (
            <Text style={styles.mensagemOculta}>
              Olá! O estado "visivel" é true agora.
            </Text>
          )}
        </View>

        <Link href="/" style={styles.voltar}>
          ← Voltar
        </Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
    paddingTop: 28,
    backgroundColor: '#1e1e2e',
  },
  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#89b4fa',
    marginBottom: 8,
  },
  descricao: {
    fontSize: 15,
    color: '#a6adc8',
    textAlign: 'center',
    marginBottom: 24,
    lineHeight: 22,
  },
  card: {
    backgroundColor: '#181825',
    borderRadius: 12,
    padding: 20,
    width: '100%',
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#313244',
    alignItems: 'center',
  },
  cardTitulo: {
    fontSize: 14,
    fontWeight: '700',
    color: '#6c7086',
    textTransform: 'uppercase',
    letterSpacing: 1,
    marginBottom: 10,
  },
  codigo: {
    fontFamily: 'monospace',
    fontSize: 13,
    color: '#cba6f7',
    backgroundColor: '#11111b',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 6,
    marginBottom: 16,
    alignSelf: 'stretch',
    textAlign: 'center',
  },
  valor: {
    fontSize: 64,
    fontWeight: 'bold',
    color: '#cdd6f4',
    marginBottom: 16,
  },
  botoes: {
    flexDirection: 'row',
    gap: 10,
  },
  botao: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    minWidth: 60,
    alignItems: 'center',
  },
  botaoSucesso: { backgroundColor: '#a6e3a1' },
  botaoPerigo: { backgroundColor: '#f38ba8' },
  botaoNeutro: { backgroundColor: '#585b70' },
  botaoPrimario: { backgroundColor: '#89b4fa' },
  botaoTexto: {
    fontWeight: 'bold',
    color: '#1e1e2e',
    fontSize: 16,
  },
  mensagemOculta: {
    color: '#a6e3a1',
    fontSize: 15,
    textAlign: 'center',
    fontStyle: 'italic',
  },
  voltar: {
    marginTop: 8,
    fontSize: 15,
    color: '#89b4fa',
  },
});
