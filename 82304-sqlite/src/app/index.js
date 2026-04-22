import { useEffect, useState } from 'react';
import { Alert, FlatList, StyleSheet, Text, TextInput, Pressable, View } from 'react-native';
import { Stack } from 'expo-router';
import { db, initDb } from '../data/db';

initDb();

function getAlunos() {
  return db.getAllSync('SELECT * FROM alunos ORDER BY id DESC');
}

function insertAluno(nome, curso) {
  db.runSync('INSERT INTO alunos (nome, curso) VALUES (?, ?)', [nome, curso]);
}

function deleteAluno(id) {
  db.runSync('DELETE FROM alunos WHERE id = ?', [id]);
}

export default function HomeScreen() {
  const [nome, setNome] = useState('');
  const [curso, setCurso] = useState('');
  const [alunos, setAlunos] = useState([]);

  function carregarAlunos() {
    setAlunos(getAlunos());
  }

  useEffect(() => {
    carregarAlunos();
  }, []);

  function salvar() {
    if (!nome.trim() || !curso.trim()) {
      Alert.alert('Atenção', 'Preencha todos os campos.');
      return;
    }
    insertAluno(nome.trim(), curso.trim());
    setNome('');
    setCurso('');
    carregarAlunos();
  }

  function excluir(id, nome) {
    Alert.alert('Excluir', `Remover "${nome}"?`, [
      { text: 'Cancelar', style: 'cancel' },
      {
        text: 'Excluir',
        style: 'destructive',
        onPress: () => {
          deleteAluno(id);
          carregarAlunos();
        },
      },
    ]);
  }

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: 'SQLite' }} />

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
        <Text style={styles.botaoTexto}>Salvar</Text>
      </Pressable>

      <FlatList
        data={alunos}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.lista}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <View style={styles.info}>
              <Text style={styles.nome}>{item.nome}</Text>
              <Text style={styles.curso}>{item.curso}</Text>
            </View>
            <Pressable onPress={() => excluir(item.id, item.nome)}>
              <Text style={styles.excluir}>Excluir</Text>
            </Pressable>
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
  info: {
    flex: 1,
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
