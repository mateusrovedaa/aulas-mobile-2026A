import { Link, Stack } from 'expo-router';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function UseEffectScreen() {
  const [segundos, setSegundos] = useState(0);
  const [ativo, setAtivo] = useState(false);
  const [largura, setLargura] = useState(100);

  // Exemplo 1: efeito com intervalo (roda quando `ativo` muda)
  useEffect(() => {
    if (!ativo) return;

    const intervalo = setInterval(() => {
      setSegundos((s) => s + 1);
    }, 1000);

    // Função de limpeza: cancela o intervalo quando o componente
    // for desmontado ou quando `ativo` mudar para false
    return () => clearInterval(intervalo);
  }, [ativo]);

  // Exemplo 2: efeito que observa mudança de estado
  useEffect(() => {
    // Esse efeito roda toda vez que `segundos` muda
    const novaLargura = Math.min(100, segundos * 5);
    setLargura(novaLargura);
  }, [segundos]);

  return (
    <View style={{ flex: 1 }}>
      <Stack.Screen options={{ title: 'useEffect' }} />
      <View style={styles.container}>

        <Text style={styles.titulo}>useEffect</Text>
        <Text style={styles.descricao}>
          Executa um efeito colateral em resposta a eventos do ciclo de vida do componente (montagem, atualização, desmontagem).
        </Text>

        {/* Exemplo 1: Temporizador */}
        <View style={styles.card}>
          <Text style={styles.cardTitulo}>Exemplo 1 — Temporizador</Text>
          <Text style={styles.codigo}>
            {"useEffect(() => {\n  // roda quando 'ativo' muda\n  const id = setInterval(...)\n  return () => clearInterval(id) // limpeza\n}, [ativo])"}
          </Text>

          <Text style={styles.valor}>{segundos}s</Text>

          {/* barra de progresso */}
          <View style={styles.barraFundo}>
            <View style={[styles.barraPreenchida, { width: `${largura}%` }]} />
          </View>

          <View style={styles.botoes}>
            <TouchableOpacity
              style={[styles.botao, ativo ? styles.botaoPerigo : styles.botaoSucesso]}
              onPress={() => setAtivo(!ativo)}
            >
              <Text style={styles.botaoTexto}>{ativo ? 'Pausar' : 'Iniciar'}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.botao, styles.botaoNeutro]}
              onPress={() => { setAtivo(false); setSegundos(0); setLargura(0); }}
            >
              <Text style={styles.botaoTexto}>Resetar</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Exemplo 2: Explicação da dependência */}
        <View style={styles.card}>
          <Text style={styles.cardTitulo}>Exemplo 2 — Array de dependências</Text>
          <Text style={styles.codigo}>
            {"useEffect(() => {\n  // ...\n}, [segundos]) // roda toda vez\n           // que 'segundos' muda"}
          </Text>
          <View style={styles.tabelinha}>
            <View style={styles.linha}>
              <Text style={styles.celulaCodigo}>{'[], [dep]'}</Text>
              <Text style={styles.celulaDesc}>array vazio = roda só na montagem</Text>
            </View>
            <View style={styles.linha}>
              <Text style={styles.celulaCodigo}>{'[dep]'}</Text>
              <Text style={styles.celulaDesc}>roda quando dep muda</Text>
            </View>
            <View style={styles.linha}>
              <Text style={styles.celulaCodigo}>{'(sem [])'}</Text>
              <Text style={styles.celulaDesc}>roda em cada renderização</Text>
            </View>
          </View>
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
    color: '#a6e3a1',
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
    fontSize: 12,
    color: '#cba6f7',
    backgroundColor: '#11111b',
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderRadius: 6,
    marginBottom: 16,
    alignSelf: 'stretch',
    lineHeight: 18,
  },
  valor: {
    fontSize: 56,
    fontWeight: 'bold',
    color: '#cdd6f4',
    marginBottom: 12,
  },
  barraFundo: {
    width: '100%',
    height: 10,
    backgroundColor: '#313244',
    borderRadius: 5,
    marginBottom: 16,
    overflow: 'hidden',
  },
  barraPreenchida: {
    height: '100%',
    backgroundColor: '#a6e3a1',
    borderRadius: 5,
  },
  botoes: {
    flexDirection: 'row',
    gap: 12,
  },
  botao: {
    paddingVertical: 10,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignItems: 'center',
  },
  botaoSucesso: { backgroundColor: '#a6e3a1' },
  botaoPerigo: { backgroundColor: '#f38ba8' },
  botaoNeutro: { backgroundColor: '#585b70' },
  botaoTexto: {
    fontWeight: 'bold',
    color: '#1e1e2e',
    fontSize: 15,
  },
  tabelinha: {
    alignSelf: 'stretch',
    gap: 8,
  },
  linha: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  celulaCodigo: {
    fontFamily: 'monospace',
    fontSize: 12,
    color: '#fab387',
    backgroundColor: '#11111b',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
    width: 90,
    textAlign: 'center',
  },
  celulaDesc: {
    fontSize: 13,
    color: '#a6adc8',
    flex: 1,
  },
  voltar: {
    marginTop: 8,
    fontSize: 15,
    color: '#a6e3a1',
  },
});
