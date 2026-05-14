import { useEffect, useState } from 'react';
import { Alert, FlatList, StyleSheet, Text, TextInput, Pressable, View } from 'react-native';
import { Stack } from 'expo-router';
import { atualizarAluno, criarAluno, excluirAluno, listarAlunos } from '../data/alunos';

export default function HomeScreen() {
  const [nome, setNome] = useState('');
  const [curso, setCurso] = useState('');
  const [alunos, setAlunos] = useState([]);
  const [editandoId, setEditandoId] = useState(null);

  function carregarAlunos() {
    setAlunos(listarAlunos());
  }

  useEffect(() => {
    carregarAlunos();
  }, []);

  function salvar() {
    if (!nome.trim() || !curso.trim()) {
      Alert.alert('Atenção', 'Preencha todos os campos.');
      return;
    }

    if (editandoId !== null) {
      atualizarAluno(editandoId, nome.trim(), curso.trim());
    } else {
      criarAluno(nome.trim(), curso.trim());
    }

    limparFormulario();
    carregarAlunos();
  }

  function editar(aluno) {
    setEditandoId(aluno.id);
    setNome(aluno.nome);
    setCurso(aluno.curso);
  }

  function limparFormulario() {
    setEditandoId(null);
    setNome('');
    setCurso('');
  }

  function excluir(id, nome) {
    Alert.alert('Excluir', `Remover "${nome}"?`, [
      { text: 'Cancelar', style: 'cancel' },
      {
        text: 'Excluir',
        style: 'destructive',
        onPress: () => {
          excluirAluno(id);
          if (editandoId === id) {
            limparFormulario();
          }
          carregarAlunos();
        },
      },
    ]);
  }

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: editandoId !== null ? 'Editando aluno' : 'SQLite – Editar' }} />

      <Text style={styles.label}>Nome</Text>
      <TextInput
        style={styles.input}
        placeholder="Nome completo"
        placeholderTextColor="#6c7086"
        value={nome}
        onChangeText={setNome}
      />

      <Text style={styles.label}>Curso</Text>
      <TextInput
        style={styles.input}
        placeholder="Ex: Engenharia de Software"
        placeholderTextColor="#6c7086"
        value={curso}
        onChangeText={setCurso}
      />

      <Pressable style={styles.botao} onPress={salvar}>
        <Text style={styles.botaoTexto}>
          {editandoId !== null ? 'Salvar alterações' : 'Salvar'}
        </Text>
      </Pressable>

      {editandoId !== null && (
        <Pressable style={styles.botaoCancelar} onPress={limparFormulario}>
          <Text style={styles.botaoCancelarTexto}>Cancelar edição</Text>
        </Pressable>
      )}

      <FlatList
        data={alunos}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.lista}
        renderItem={({ item }) => (
          <View style={[styles.card, editandoId === item.id && styles.cardEditando]}>
            <View style={styles.info}>
              <Text style={styles.nome}>{item.nome}</Text>
              <Text style={styles.curso}>{item.curso}</Text>
            </View>
            <View style={styles.acoes}>
              <Pressable onPress={() => editar(item)}>
                <Text style={styles.editar}>Editar</Text>
              </Pressable>
              <Pressable onPress={() => excluir(item.id, item.nome)}>
                <Text style={styles.excluir}>Excluir</Text>
              </Pressable>
            </View>
          </View>
        )}
        ListEmptyComponent={
          <Text style={styles.vazio}>Nenhum aluno cadastrado ainda.</Text>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#1e1e2e',
  },
  label: {
    fontSize: 14,
    color: '#6c7086',
    textTransform: 'uppercase',
    letterSpacing: 1,
    marginBottom: 6,
    marginTop: 16,
  },
  input: {
    backgroundColor: '#313244',
    color: '#cdd6f4',
    borderRadius: 10,
    paddingHorizontal: 16,
    paddingVertical: 12,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#45475a',
  },
  botao: {
    backgroundColor: '#89b4fa',
    borderRadius: 10,
    paddingVertical: 14,
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 8,
  },
  botaoTexto: {
    color: '#1e1e2e',
    fontSize: 16,
    fontWeight: '700',
  },
  botaoCancelar: {
    borderRadius: 10,
    paddingVertical: 14,
    alignItems: 'center',
    marginBottom: 8,
    borderWidth: 1,
    borderColor: '#f9e2af',
  },
  botaoCancelarTexto: {
    color: '#f9e2af',
    fontSize: 16,
    fontWeight: '700',
  },
  lista: {
    paddingTop: 16,
  },
  card: {
    backgroundColor: '#313244',
    borderRadius: 10,
    padding: 16,
    marginBottom: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: '#45475a',
  },
  cardEditando: {
    borderColor: '#89b4fa',
  },
  info: {
    flex: 1,
  },
  acoes: {
    alignItems: 'flex-end',
    gap: 10,
    marginLeft: 16,
  },
  nome: {
    fontSize: 16,
    fontWeight: '700',
    color: '#cdd6f4',
    marginBottom: 4,
  },
  curso: {
    fontSize: 14,
    color: '#a6adc8',
  },
  editar: {
    color: '#89b4fa',
    fontWeight: '700',
    fontSize: 14,
  },
  excluir: {
    color: '#f38ba8',
    fontWeight: '700',
    fontSize: 14,
  },
  vazio: {
    color: '#6c7086',
    textAlign: 'center',
    marginTop: 40,
    fontSize: 16,
  },
});
