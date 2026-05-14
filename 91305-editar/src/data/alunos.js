import { db, initDb } from './db';

initDb();

export function listarAlunos() {
  return db.getAllSync('SELECT * FROM alunos ORDER BY id DESC');
}

export function criarAluno(nome, curso) {
  db.runSync('INSERT INTO alunos (nome, curso) VALUES (?, ?)', [nome, curso]);
}

export function atualizarAluno(id, nome, curso) {
  db.runSync('UPDATE alunos SET nome = ?, curso = ? WHERE id = ?', [nome, curso, id]);
}

export function excluirAluno(id) {
  db.runSync('DELETE FROM alunos WHERE id = ?', [id]);
}
