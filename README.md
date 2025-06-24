# 🌦️ React Weather App

Uma aplicação web simples e elegante para consulta de previsão do tempo, construída com React. Permite que os usuários vejam o tempo atual e a previsão para os próximos 5 dias de qualquer cidade do mundo, ou usem sua localização atual para uma consulta automática.

![Placeholder para GIF ou Screenshot do App](https://via.placeholder.com/800x450.png?text=Adicione+um+GIF+do+seu+app+aqui!)


## 📋 Índice

- [Funcionalidades](#-funcionalidades)
- [Tecnologias Utilizadas](#-tecnologias-utilizadas)
- [Como Executar o Projeto](#-como-executar-o-projeto)
  - [Pré-requisitos](#pré-requisitos)
  - [Instalação](#instalação)
  - [Configurando a Chave da API](#-configurando-a-chave-da-api)
- [Scripts Disponíveis](#-scripts-disponíveis)
- [Como Funciona](#-como-funciona)

## ✨ Funcionalidades

- **Exibição do Tempo Atual**: Mostra a temperatura, sensação térmica, umidade e uma descrição do tempo (ex: "céu limpo").
- **Previsão para os Próximos 5 Dias**: Exibe a previsão diária de forma resumida, focando no tempo ao meio-dia de cada dia.
- **Geolocalização**: Detecta automaticamente a localização do usuário ao abrir o app para exibir o tempo local.
- **Barra de Busca**: Permite que o usuário pesquise o tempo de qualquer cidade do mundo.
- **Interface Responsiva**: Design limpo e que se adapta a diferentes tamanhos de tela.

## 🛠️ Tecnologias Utilizadas

- **React**: Biblioteca principal para a construção da interface de usuário.
- **OpenWeatherMap API**: Fonte de dados para todas as informações meteorológicas.
- **CSS3**: Para estilização, incluindo um fundo gradiente e cartões com efeito de vidro (`backdrop-filter`).
- **JavaScript (ES6+)**: Linguagem base com funcionalidades modernas, como `async/await` para chamadas de API.

## 🚀 Como Executar o Projeto

Siga os passos abaixo para ter uma cópia do projeto rodando na sua máquina local.

### Pré-requisitos

Você vai precisar ter o [Node.js](https://nodejs.org/en/) (que já vem com o npm) instalado no seu computador.

### Instalação

1.  **Clone o repositório:**
    ```bash
    git clone [https://github.com/seu-usuario/seu-repositorio.git](https://github.com/seu-usuario/seu-repositorio.git)
    ```

2.  **Navegue até a pasta do projeto:**
    ```bash
    cd nome-da-pasta-do-projeto
    ```

3.  **Instale as dependências:**
    ```bash
    npm install
    ```

### 🔑 Configurando a Chave da API

Para que a aplicação possa buscar os dados do tempo, ela precisa de uma chave de acesso (API Key) do OpenWeatherMap.

Pense nisso como um **cofre de segredos**. A aplicação precisa da chave secreta para abrir a "biblioteca" de dados do tempo. Para manter essa chave segura, nós a guardamos em um arquivo especial que não é enviado para o repositório (graças ao arquivo `.gitignore`).

1.  **Crie sua conta e obtenha a chave:**
    - Vá até o site [OpenWeatherMap](https://openweathermap.org/api) e crie uma conta gratuita.
    - No seu painel, navegue até a seção "API keys" e copie a sua chave.

2.  **Crie o arquivo de ambiente:**
    - Na raiz do seu projeto, crie um arquivo chamado `.env`.

3.  **Adicione sua chave ao arquivo:**
    - Dentro do arquivo `.env`, cole a seguinte linha, substituindo `"SUA_CHAVE_API_AQUI"` pela chave que você copiou:
      ```
      REACT_APP_OPENWEATHER_API_KEY=SUA_CHAVE_API_AQUI
      ```
      O nome `REACT_APP_OPENWEATHER_API_KEY` é exatamente como a aplicação espera encontrar a chave.

## 📜 Scripts Disponíveis

No diretório do projeto, você pode executar:

### `npm start`

Executa o aplicativo no modo de desenvolvimento.
Abra [http://localhost:3000](http://localhost:3000) para visualizá-lo no seu navegador. A página irá recarregar automaticamente quando você fizer alterações no código.

### `npm test`

Inicia o executor de testes no modo de observação interativo.

### `npm run build`

Cria a versão de produção do aplicativo na pasta `build`.
Ele agrupa o React corretamente em modo de produção e otimiza a construção para o melhor desempenho.

## 🧠 Como Funciona

A arquitetura do projeto é baseada em componentes, o que facilita a manutenção e a reutilização do código.

-   **`App.js`**: É o **cérebro** da aplicação. Ele gerencia o estado geral, como os dados do tempo (`weatherData`), o estado de carregamento (`loading`) e possíveis erros (`error`). É aqui que as chamadas à API OpenWeatherMap são feitas. Ele também solicita a geolocalização do usuário e, caso seja negada, busca por uma cidade padrão (São Paulo).

-   **`SearchBar.js`**: Este componente funciona como o **porteiro** da aplicação. Ele renderiza a barra de busca e o botão. Quando o usuário digita uma cidade e envia o formulário, o `SearchBar` avisa o `App.js` sobre a nova busca.

-   **`CurrWeather.js`**: É o **painel principal**, responsável por exibir de forma bonita e clara os dados do tempo *atual* da cidade pesquisada, incluindo o nome da cidade, temperatura, ícone do tempo e outros detalhes.

-   **`Weekly.js`**: Funciona como um **almanaque**, mostrando a previsão para os próximos dias. Ele recebe a lista de previsões da API (que vem em intervalos de 3 horas) e filtra para mostrar apenas a previsão do tempo para o meio-dia de cada dia, simplificando a visualização.

-   **`public/index.html` e `src/index.js`**: São a porta de entrada da aplicação. O `index.js` pega o componente principal `App` e o renderiza dentro da `div` com `id="root"` no arquivo `index.html`, efetivamente "ligando" a aplicação React na página web.
