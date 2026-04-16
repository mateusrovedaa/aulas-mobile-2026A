# React Hooks

Hooks são funções especiais do React que permitem usar **estado** e outros recursos do React dentro de componentes funcionais, sem precisar escrever classes.

> Regra fundamental: hooks sempre começam com `use` e só podem ser chamados no nível raiz do componente (nunca dentro de `if`, `for` ou funções aninhadas).

---

## useState

Armazena um valor que, quando alterado, faz o React **redesenhar o componente** automaticamente.

### Sintaxe

```js
const [valor, setValor] = useState(valorInicial);
```

| Parte | O que é |
|---|---|
| `valor` | O estado atual |
| `setValor` | Função para atualizar o estado |
| `valorInicial` | O valor com que o estado começa |

### Exemplos

```jsx
// Contador
const [contador, setContador] = useState(0);

<Button onPress={() => setContador(contador + 1)} title="+" />
<Text>{contador}</Text>
```

```jsx
// Mostrar / ocultar
const [visivel, setVisivel] = useState(false);

<Button onPress={() => setVisivel(!visivel)} title="Toggle" />
{visivel && <Text>Olá!</Text>}
```

### Como funciona

1. Na primeira renderização, `valor` recebe `valorInicial`.
2. Ao chamar `setValor(novoValor)`, o React agenda uma nova renderização.
3. Na próxima renderização, `valor` já é `novoValor`.

---

## useEffect

Executa um **efeito colateral** em resposta a eventos do ciclo de vida do componente: montagem, atualização ou desmontagem.

Exemplos de efeitos colaterais: buscar dados de uma API, iniciar um temporizador, assinar um evento, atualizar o título da página.

### Sintaxe

```js
useEffect(() => {
  // código do efeito

  return () => {
    // limpeza (opcional) — executada antes do próximo efeito
    // ou quando o componente for desmontado
  };
}, [dependencias]);
```

### Array de dependências

| Declaração | Quando o efeito roda |
|---|---|
| `useEffect(fn, [])` | Só na **montagem** do componente |
| `useEffect(fn, [dep])` | Na montagem **e** toda vez que `dep` mudar |
| `useEffect(fn)` | Em **toda** renderização |

### Exemplos

```jsx
// Roda só na montagem
useEffect(() => {
  console.log('Componente montado!');
}, []);
```

```jsx
// Temporizador que inicia/para quando `ativo` muda
useEffect(() => {
  if (!ativo) return;

  const id = setInterval(() => {
    setSegundos((s) => s + 1);
  }, 1000);

  return () => clearInterval(id); // limpeza: cancela o intervalo
}, [ativo]);
```

```jsx
// Observa mudança de estado específico
useEffect(() => {
  console.log('O contador mudou para:', contador);
}, [contador]);
```

### A função de limpeza

O `return` dentro do `useEffect` é opcional mas importante quando o efeito cria recursos que precisam ser cancelados (intervalos, listeners, subscriptions):

```jsx
useEffect(() => {
  const subscription = evento.subscribe(handler);
  return () => subscription.unsubscribe(); // evita memory leak
}, []);
```

---

## Usando os dois juntos

É comum usar `useState` para armazenar dados e `useEffect` para buscá-los ou reagir às mudanças:

```jsx
const [dados, setDados] = useState(null);

useEffect(() => {
  fetch('https://api.exemplo.com/dados')
    .then((res) => res.json())
    .then((json) => setDados(json));
}, []); // busca só uma vez, na montagem
```

---

## Telas do projeto

| Arquivo | Rota | O que demonstra |
|---|---|---|
| `app/index.js` | `/` | Tela inicial com links |
| `app/use-state.js` | `/use-state` | Contador e toggle com useState |
| `app/use-effect.js` | `/use-effect` | Temporizador com useEffect + limpeza |
