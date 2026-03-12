import { View, Text, ScrollView, StyleSheet } from "react-native";

export default function App() {
  return (
    <View style={styles.tela}>

      {/* 1. ESTILO INLINE */}
      <Text style={{ fontSize: 20, fontWeight: "bold", color: "#1565c0" }}>
        Estilo inline
      </Text>
      <Text style={{ color: "#555", marginTop: 4 }}>
        O estilo fica direto na prop style do componente.
      </Text>

      {/* 2. STYLESHEET */}
      <Text style={styles.titulo}>StyleSheet</Text>
      <Text style={styles.descricao}>
        Os estilos ficam fora do componente, organizados e reutilizáveis.
      </Text>

      {/* 3. FLEX */}
      <Text style={styles.titulo}>Flex</Text>

      <ScrollView style={styles.scroll}>

        {/* padrão: column */}
        <Text style={styles.label}>padrão (column) — itens empilhados</Text>
        <View style={styles.coluna}>
          <View style={[styles.bloco, { backgroundColor: "#ef9a9a" }]} />
          <View style={[styles.bloco, { backgroundColor: "#90caf9" }]} />
          <View style={[styles.bloco, { backgroundColor: "#a5d6a7" }]} />
        </View>

        {/* row: itens lado a lado */}
        <Text style={styles.label}>flexDirection: row</Text>
        <View style={styles.linha}>
          <View style={[styles.bloco, { backgroundColor: "#ef9a9a" }]} />
          <View style={[styles.bloco, { backgroundColor: "#90caf9" }]} />
          <View style={[styles.bloco, { backgroundColor: "#a5d6a7" }]} />
        </View>

        {/* justifyContent */}
        <Text style={styles.label}>justifyContent: space-between</Text>
        <View style={[styles.linha, { justifyContent: "space-between" }]}>
          <View style={[styles.bloco, { backgroundColor: "#ef9a9a" }]} />
          <View style={[styles.bloco, { backgroundColor: "#90caf9" }]} />
          <View style={[styles.bloco, { backgroundColor: "#a5d6a7" }]} />
        </View>

        {/* alignItems */}
        <Text style={styles.label}>alignItems: center</Text>
        <View style={[styles.linha, { alignItems: "center", height: 80 }]}>
          <View style={[styles.bloco, { backgroundColor: "#ef9a9a", height: 30 }]} />
          <View style={[styles.bloco, { backgroundColor: "#90caf9", height: 60 }]} />
          <View style={[styles.bloco, { backgroundColor: "#a5d6a7", height: 45 }]} />
        </View>

        {/* flex proporção */}
        <Text style={styles.label}>flex: proporção</Text>
        <View style={styles.linha}>
          <View style={[styles.bloco, { flex: 1, backgroundColor: "#ef9a9a" }]} />
          <View style={[styles.bloco, { flex: 2, backgroundColor: "#90caf9" }]} />
          <View style={[styles.bloco, { flex: 1, backgroundColor: "#a5d6a7" }]} />
        </View>

      </ScrollView>

    </View>
  );
}

const styles = StyleSheet.create({
  tela: {
    flex: 1,
    padding: 24,
    backgroundColor: "#fafafa",
    gap: 8,
  },
  titulo: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
    marginTop: 16,
  },
  descricao: {
    color: "#555",
    marginTop: 4,
  },
  label: {
    fontSize: 12,
    color: "#888",
    fontFamily: "monospace",
  },
  scroll: {
    flex: 1,
  },
  coluna: {
    flexDirection: "column",
    backgroundColor: "#eeeeee",
    borderRadius: 6,
    padding: 4,
    alignSelf: "flex-start",
  },
  linha: {
    flexDirection: "row",
    backgroundColor: "#eeeeee",
    borderRadius: 6,
    padding: 4,
  },
  bloco: {
    width: 48,
    height: 48,
    borderRadius: 4,
    margin: 3,
  },
});
