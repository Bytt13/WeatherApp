# 🌦️ React Weather App


![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)


Uma aplicação web simples e elegante para consulta de previsão do tempo, construída com React. Permite que os usuários vejam o tempo atual e a previsão para os próximos 5 dias de qualquer cidade do mundo, ou usem sua localização atual para uma consulta automática.

<img width="1469" alt="Image" src="https://github.com/user-attachments/assets/14722f3d-d835-49f4-a51f-fa9cd9afc07b" />


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

[Clique aqui para ir diretamente ao site](weatherapp-3y0.pages.dev)(permita o uso da sua localização)


Siga os passos abaixo para ter uma cópia do projeto rodando na sua máquina local.

### Pré-requisitos

Você vai precisar ter o [Node.js](https://nodejs.org/en/) (que já vem com o npm) instalado no seu computador.

### Instalação

1.  **Clone o repositório:**
    ```bash
    git clone https://github.com/Bytt13/WeatherApp.git
    ```

2.  **Navegue até a pasta do projeto:**
    ```bash
    cd WeatherApp
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

# 📂 Estrutura do Projeto

Aqui está uma visão geral dos arquivos e pastas mais importantes:

```text
/
├── public/                # Pasta dos "arquivos estáticos" como o HTML principal e ícones.
│   ├── index.html         # O esqueleto HTML onde a aplicação React é injetada.
│   └── manifest.json      # Informações do app para instalação (PWA).
├── src/                   # O "coração do código" da aplicação.
│   ├── components/        # "Peças de Lego" reutilizáveis da interface.
│   │   ├── CurrWeather.js # Componente que exibe o tempo atual.
│   │   ├── SearchBar.js   # Componente da barra de busca.
│   │   └── Weekly.js      # Componente que mostra a previsão dos próximos dias.
│   ├── App.js             # O "cérebro" da aplicação, que une todos os componentes e gerencia os dados.
│   ├── App.css            # Estilos específicos do componente App.
│   ├── index.js           # Ponto de entrada que renderiza a aplicação na página.
│   └── index.css          # Estilos globais, como o fundo gradiente.
├── .gitignore             # Diz ao Git quais arquivos e pastas ignorar.
├── package.json           # O "RG" do projeto: define nome, scripts e dependências.
└── README.md              # Este arquivo que você está lendo :)
```

## 🔩 Endpoints da API (OpenWeatherMap)

A aplicação utiliza 3 endpoints diferentes para obter todas as informações necessárias. Uma chave de API (`apiKey`) é necessária para todas as chamadas.

### 1. Buscar Clima Atual por Nome da Cidade

- `GET https://api.openweathermap.org/data/2.5/weather`
  - **Descrição:** Usado na barra de pesquisa para obter os dados do clima atual da cidade que o usuário digitou.
  - **Parâmetros da URL:**
    - `q`: O nome da cidade (ex: `Sao Paulo`).
    - `appid`: Sua chave de API.
    - `units`: `metric` (para obter a temperatura em Celsius).
    - `lang`: `pt_br` (para receber as descrições em português).
  - **Resposta (JSON):** Um objeto contendo detalhes como temperatura atual, sensação térmica, umidade, velocidade do vento, ícone do clima e as coordenadas geográficas (`lat`, `lon`) da cidade.

### 2. Buscar Previsão do Tempo por Coordenadas

- `GET https://api.openweathermap.org/data/2.5/forecast`
  - **Descrição:** Após encontrar a cidade, este endpoint é chamado usando as coordenadas obtidas no passo anterior para buscar a previsão do tempo para os próximos 5 dias.
  - **Parâmetros da URL:**
    - `lat`: A latitude da cidade.
    - `lon`: A longitude da cidade.
    - `appid`: Sua chave de API.
    - `units`: `metric`.
    - `lang`: `pt_br`.
  - **Resposta (JSON):** Um objeto com uma lista (`list`) de previsões, onde cada item representa o clima para um intervalo de 3 horas futuro.

### 3. Buscar Nome da Cidade por Coordenadas (Geolocalização)

- `GET https://api.openweathermap.org/data/2.5/weather`
  - **Descrição:** Este é o primeiro endpoint a ser chamado quando a página carrega. Ele usa as coordenadas de latitude e longitude fornecidas pelo navegador do usuário para descobrir o nome da cidade atual.
  - **Parâmetros da URL:**
    - `lat`: A latitude obtida do navegador.
    - `lon`: A longitude obtida do navegador.
    - `appid`: Sua chave de API.
    - `units`: `metric`.
    - `lang`: `pt_br`.
  - **Resposta (JSON):** O mesmo formato do Endpoint 1. A aplicação extrai o campo `name` da resposta para saber o nome da cidade e, em seguida, inicia a busca completa do clima para aquela cidade.


## 📝 Como Usar + GIFs caso queira visualizar como funciona

1.  Inicie o servidor (`npm start`).
2.  A página abrirá com sua localização e dados de clima atuais.
3.  Para ver o clima de outra cidade, pesquise pelo nome da barra de busca, e clique em "Search".
4.  Pronto! você já tem em suas mãos o clima de qualquer cidade do mundo pelos proximos 5 dias + dia atual.

![Image](https://github.com/user-attachments/assets/879884e3-97a1-4fa2-a53d-7922ebf84f4e)
