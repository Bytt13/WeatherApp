# 🌦️ React Weather App

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)

A simple and elegant web application for checking the weather forecast, built with React. It allows users to view the current weather and a 5-day forecast for any city in the world, or use their current location for an automatic query.

<img width="1469" alt="Image" src="https://github.com/user-attachments/assets/14722f3d-d835-49f4-a51f-fa9cd9afc07b" />

## 📋 Table of Contents

- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Getting Started](#-getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Setting Up the API Key](#-setting-up-the-api-key)
- [Available Scripts](#-available-scripts)
- [How It Works](#-how-it-works)
- [Project Structure](#-project-structure)
- [API Endpoints](#-api-endpoints)
- [Usage](#-usage)

## ✨ Features

- **Current Weather Display**: Shows temperature, feels-like temperature, humidity, and a weather description (e.g., "clear sky").
- **5-Day Forecast**: Displays a summarized daily forecast, focusing on the weather at noon for each day.
- **Geolocation**: Automatically detects the user's location upon opening the app to display local weather.
- **Search Bar**: Allows users to search for the weather in any city worldwide.
- **Responsive Interface**: Clean design that adapts to different screen sizes.

## 🛠️ Tech Stack

- **React**: The main library for building the user interface.
- **OpenWeatherMap API**: The data source for all meteorological information.
- **CSS3**: For styling, including a gradient background and cards with a glassmorphism effect (`backdrop-filter`).
- **JavaScript (ES6+)**: The base language, using modern features like `async/await` for API calls.

## 🚀 Getting Started

Follow the steps below to get a copy of the project running on your local machine.

### Prerequisites

You will need to have [Node.js](https://nodejs.org/en/) (which includes npm) installed on your computer.

### Installation

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/your-username/your-repository.git](https://github.com/your-username/your-repository.git)
    ```

2.  **Navigate to the project folder:**
    ```bash
    cd project-folder-name
    ```

3.  **Install the dependencies:**
    ```bash
    npm install
    ```

### 🔑 Setting Up the API Key

For the application to fetch weather data, it needs an access key (API Key) from OpenWeatherMap.

Think of this as a **secrets vault**. The application needs the secret key to open the weather data "library." To keep this key secure, we store it in a special file that isn't sent to the repository (thanks to the `.gitignore` file).

1.  **Create an account and get your key:**
    - Go to the [OpenWeatherMap](https://openweathermap.org/api) website and create a free account.
    - On your dashboard, navigate to the "API keys" section and copy your key.

2.  **Create the environment file:**
    - In the root of your project, create a file named `.env`.

3.  **Add your key to the file:**
    - Inside the `.env` file, paste the following line, replacing `"YOUR_API_KEY_HERE"` with the key you copied:
      ```
      REACT_APP_OPENWEATHER_API_KEY=YOUR_API_KEY_HERE
      ```
      The name `REACT_APP_OPENWEATHER_API_KEY` is exactly how the application expects to find the key.

## 📜 Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in your browser. The page will reload automatically when you make changes to the code.

### `npm test`

Launches the test runner in interactive watch mode.

### `npm run build`

Builds the app for production to the `build` folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

## 🧠 How It Works

The project's architecture is component-based, which makes code maintenance and reuse easier.

-   **`App.js`**: This is the **brain** of the application. It manages the overall state, such as weather data (`weatherData`), loading status (`loading`), and potential errors (`error`). This is where the API calls to OpenWeatherMap are made. It also requests the user's geolocation and, if denied, searches for a default city (São Paulo).

-   **`SearchBar.js`**: This component acts as the application's **gatekeeper**. It renders the search bar and button. When the user types a city and submits the form, `SearchBar` notifies `App.js` of the new search.

-   **`CurrWeather.js`**: This is the **main dashboard**, responsible for beautifully and clearly displaying the *current* weather data for the searched city, including the city name, temperature, weather icon, and other details.

-   **`Weekly.js`**: This component acts as an **almanac**, showing the forecast for the next few days. It receives the list of forecasts from the API (which comes in 3-hour intervals) and filters it to show only the weather forecast for noon each day, simplifying the view.

-   **`public/index.html` & `src/index.js`**: These are the application's **entry point**. `index.js` takes the main `App` component and renders it inside the `div` with `id="root"` in the `index.html` file, effectively "booting up" the React application on the web page.

## 📂 Project Structure

Here is an overview of the most important files and folders:

```text
/
├── public/               # Folder for static assets like the main HTML and icons.
│   ├── index.html        # The HTML skeleton where the React app is injected.
│   └── manifest.json     # App info for installation (PWA).
├── src/                  # The "heart" of the application's code.
│   ├── components/       # Reusable UI "Lego pieces".
│   │   ├── CurrWeather.js # Component that displays the current weather.
│   │   ├── SearchBar.js   # The search bar component.
│   │   └── Weekly.js      # Component that shows the forecast for the next days.
│   ├── App.js            # The application's "brain," uniting all components and managing data.
│   ├── App.css           # Styles specific to the App component.
│   ├── index.js          # The entry point that renders the app on the page.
│   └── index.css         # Global styles, like the gradient background.
├── .gitignore            # Tells Git which files and folders to ignore.
├── package.json          # The project's "ID card": defines name, scripts, and dependencies.
└── README.md             # This file you're reading :)
```

## 🔩 API Endpoints (OpenWeatherMap)

The application uses 3 different endpoints to get all the necessary information. An API key (`apiKey`) is required for all calls.

### 1. Fetch Current Weather by City Name

- `GET https://api.openweathermap.org/data/2.5/weather`
  - **Description:** Used in the search bar to get the current weather data for the city the user typed.
  - **URL Parameters:**
    - `q`: The city name (e.g., `Sao Paulo`).
    - `appid`: Your API key.
    - `units`: `metric` (to get the temperature in Celsius).
    - `lang`: `pt_br` (to receive descriptions in Portuguese).
  - **JSON Response:** An object containing details like current temperature, feels-like temperature, humidity, wind speed, weather icon, and the geographic coordinates (`lat`, `lon`) of the city.

### 2. Fetch Weather Forecast by Coordinates

- `GET https://api.openweathermap.org/data/2.5/forecast`
  - **Description:** After finding the city, this endpoint is called using the coordinates obtained in the previous step to fetch the 5-day weather forecast.
  - **URL Parameters:**
    - `lat`: The city's latitude.
    - `lon`: The city's longitude.
    - `appid`: Your API key.
    - `units`: `metric`.
    - `lang`: `pt_br`.
  - **JSON Response:** An object with a `list` of forecasts, where each item represents the weather for a future 3-hour interval.

### 3. Fetch City Name by Coordinates (Geolocation)

- `GET https://api.openweathermap.org/data/2.5/weather`
  - **Description:** This is the first endpoint to be called when the page loads. It uses the latitude and longitude coordinates provided by the user's browser to find the current city name.
  - **URL Parameters:**
    - `lat`: The latitude obtained from the browser.
    - `lon`: The longitude obtained from the browser.
    - `appid`: Your API key.
    - `units`: `metric`.
    - `lang`: `pt_br`.
  - **JSON Response:** The same format as Endpoint 1. The application extracts the `name` field from the response to get the city name and then initiates the full weather data fetch for that city.

## 📝 Usage + GIFs

1.  Start the server (`npm start`).
2.  The page will open with your current location and weather data.
3.  To see the weather for another city, search for its name in the search bar and click "Search".
4.  That's it! You now have the weather for any city in the world for the current day and the next 5 days.

![Image](https://github.com/user-attachments/assets/879884e3-97a1-4fa2-a53d-7922ebf84f4e)
