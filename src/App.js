import react, {useState, useEffect} from "react";
import './App.css';
import SearchBar from './components/SearchBar';
import CurrWeather from './components/CurrWeather';
import Weekly from './components/Weekly';

//api from openweather
const apiKey = process.env.REACT_APP_OPENWEATHER_API_KEY;

function App(){
    const [weatherData, setWeatherData] = useState(null); //keep the data about the weather
    const [city, setCity] = useState(''); //keep the city
    const [loading, setLoading] = useState(true); //if we are waiting for the API
    const [error, setError] = useState(null); //error

    const searchWeather = async(cityForSearch) => {
        setLoading(true);
        setError(null);
        setWeatherData(null);

        try {
            //Search the current weather of the city
            const currWeatherResponse = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityForSearch}&appid=${apiKey}&units=metric&lang=pt-br`);
            if(!currWeatherResponse.ok) throw new Error('City could not be found, try again');
            const currweatherData = await currWeatherResponse.json();

            //using the coordinates, we create a weekly data of the weather
            const { lat, lon } = currweatherData.coord;
            const weekResponse = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&exclude=current,minutely,hourly,alerts&appid=${apiKey}&units=metric&lang=pt-br`);
            if(!weekResponse.ok) throw new Error('The data of the week could not be found');
            const weekData = await weekResponse.json();

            //show the data
            setWeatherData({current: currweatherData, forecast: weekData});
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false); //even if the process doesnt work, we stop the loading
        }
    };

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
            async (position) => {
                const {latitude, longitude} = position.coords;
                setLoading(true);
                setError(null);

                try {
                    //search the city using coordinates, inverted process
                    const cityResponse = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric&lang=pt_br`);
                    const cityData = await cityResponse.json();
                    const initialCity = cityData.name;

                    //with the city, we show the weather
                    searchWeather(initialCity);
                    setCity(initialCity); //update the city
                } catch(error) {    
                    setError("An error has occured, please search manually");
                    setLoading(false);
                }
            }, 
            (error) => {
                //if the location be denied, we get the weather of a default city
                console.error('An error has occured: ', error);
                setError("Access Denied, returning to the default city");
                searchWeather('Sao Paulo') //default city
                setCity('Sao Paulo');
            }
        );
    }, []);

    const handleSearch = (searchedCity) => {
        setCity(searchedCity);
        searchWeather(searchedCity);
    }
    return (
        <div className = "App">
            <header className = "App-header">
                <h1>Weather</h1>
                <SearchBar onSearch = {handleSearch}/>
                {loading && <p className = "message">Loading...</p>}
                {error && <p className = "error-message">{error}</p>}

                {weatherData && (
                    <>
                        <CurrWeather data = {weatherData.current}/>
                        <Weekly data = {weatherData.forecast.list}/>
                    </>
                )}
            </header>
        </div>
    ); //returning the page
}

export default App;