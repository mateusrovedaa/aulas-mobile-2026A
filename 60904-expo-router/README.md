# Expo Router

O Expo Router é um roteador baseado em arquivos para React Native e web. Cada arquivo dentro da pasta `src/app/` se torna automaticamente uma rota.


## Instalação

```bash
npx expo install expo-router react-native-screens react-native-safe-area-context expo-linking expo-constants expo-status-bar
```

## Estrutura do projeto

```
src/
└── app/
    ├── _layout.js   ← layout raiz (obrigatório)
    ├── index.js     ← tela inicial  →  rota "/"
    └── sobre.js     ← tela sobre    →  rota "/sobre"
```

## Arquivos especiais

| Arquivo | Função |
|---|---|
| `_layout.js` | Define o layout compartilhado entre telas (ex: header, tabs) |
| `index.js` | Rota raiz `/` |
| `[id].js` | Rota dinâmica, ex: `/produto/42` |

## Configuração necessária

### package.json
O campo `main` deve apontar para o entry point do expo-router no `package.json`:
```json
{
  "main": "expo-router/entry"
}
```

### app.json
As opções scheme e plugins precisam ser adicionadas ao `app.json`:
```json
{
  "scheme": "nome-projeto",
  "plugins": [
    "expo-router"
  ]
}
```

## Navegação

### Com `<Link>` (componente)
```jsx
import { Link } from 'expo-router';

<Link href="/sobre">Ir para Sobre</Link>
<Link href="/">Voltar</Link>
```

### Com `router` (imperativo)
```jsx
import { useRouter } from 'expo-router';

const router = useRouter();

router.push('/sobre');    // navega para /sobre
router.back();            // volta para a tela anterior
router.replace('/home');  // substitui a tela atual (sem histórico)
```

### Rotas dinâmicas
```jsx
// arquivo: src/app/produto/[id].js
import { useLocalSearchParams } from 'expo-router';

const { id } = useLocalSearchParams();
```

```jsx
// navegando com parâmetro
<Link href="/produto/42">Ver produto</Link>
// ou
router.push('/produto/42');
```

## SafeAreaProvider e SafeAreaView

Dispositivos modernos têm notch, câmera perfurada ou barra de gestos que podem sobrepor o conteúdo do app. O `react-native-safe-area-context` expõe as medidas dessas áreas para que o layout as respeite.

| Componente | Onde usar | Por quê |
|---|---|---|
| `SafeAreaProvider` | `_layout.js` (uma vez, no topo) | Calcula e fornece as medidas de safe area para toda a árvore |
| `SafeAreaView` | Em telas específicas | Adiciona padding automático nas bordas que teriam conteúdo cortado |

O `Stack` do expo-router já protege o header automaticamente. O `SafeAreaView` é necessário nas telas quando há conteúdo fora do header — por exemplo, um botão fixo no rodapé.

```jsx
// src/app/_layout.js — SafeAreaProvider uma vez só, no topo
import { Stack } from 'expo-router';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <Stack />
    </SafeAreaProvider>
  );
}
```

```jsx
// src/app/tela.js — SafeAreaView quando necessário na tela
import { SafeAreaView } from 'react-native-safe-area-context';

export default function TelaScreen() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* conteúdo protegido nas bordas */}
    </SafeAreaView>
  );
}
```

> Referência: [react-native-safe-area-context](https://docs.expo.dev/versions/latest/sdk/safe-area-context/)

---

## Layout com Stack (pilha)

```jsx
// src/app/_layout.js
import { Stack } from 'expo-router';

export default function RootLayout() {
  return <Stack />;
}
```

Personalizar o header de uma tela específica:
```jsx
// src/app/sobre.js
import { Stack } from 'expo-router';

export default function SobreScreen() {
  return (
    <View>
      <Stack.Screen options={{ title: 'Sobre', headerShown: true }} />
      {/* conteúdo da tela */}
    </View>
  );
}
```

## Layout com Tabs (abas)

```jsx
// src/app/_layout.js
import { Tabs } from 'expo-router';

export default function RootLayout() {
  return (
    <Tabs>
      <Tabs.Screen name="index" options={{ title: 'Início' }} />
      <Tabs.Screen name="perfil" options={{ title: 'Perfil' }} />
    </Tabs>
  );
}
```
