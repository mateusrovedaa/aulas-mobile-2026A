# SafeAreaView

## O problema

Em dispositivos modernos, partes da tela são ocupadas pelo sistema operacional:
notch (iPhone), barra de status (Android), barra de navegação (gestos), Dynamic Island, etc.

Sem tratamento, o conteúdo do app pode ficar escondido atrás dessas áreas.

## A solução: react-native-safe-area-context

A biblioteca `react-native-safe-area-context` fornece componentes e hooks que
aplicam automaticamente o espaçamento necessário para que o conteúdo fique
sempre visível.

## Instalação

```bash
npx expo install react-native-safe-area-context
```

## Componentes

### SafeAreaProvider

Deve envolver toda a aplicação (geralmente no `App.js`).
Disponibiliza as informações de área segura para os componentes filhos.

```jsx
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function App() {
  return (
    <SafeAreaProvider>
      {/* restante do app */}
    </SafeAreaProvider>
  );
}
```

### SafeAreaView

Substitui o `View` raiz da tela. Aplica automaticamente padding nas bordas seguras.

```jsx
import { SafeAreaView } from "react-native-safe-area-context";

function MinhasTela() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Text>Conteúdo sempre visível</Text>
    </SafeAreaView>
  );
}
```

## Resumo

| O que usar | Quando |
|---|---|
| `SafeAreaProvider` | Uma vez, na raiz do app |
| `SafeAreaView` | Como container principal de cada tela |
