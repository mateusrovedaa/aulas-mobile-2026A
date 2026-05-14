import * as SQLite from 'expo-sqlite';

// SQLite.deleteDatabaseAsync('escola.db');
export const db = SQLite.openDatabaseSync('escola.db');

export function initDb() {
  db.execSync(`
    PRAGMA journal_mode = WAL;
    CREATE TABLE IF NOT EXISTS alunos (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      nome VARCHAR(255) NOT NULL,
      curso TEXT NOT NULL
    );
  `);
}
