import React, { useState } from 'react';

const App = () => {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState([]);

  const fakeWeatherData = {
    Delhi: {
      temperature: '42°C',
      condition: 'Sunny',
      humidity: '20%',
    },
    Jaipur: {
      temperature: '33°C',
      condition: 'Rainy',
      humidity: '80%',
    },
    Kolkata: {
      temperature: '36°C',
      condition: 'Cloudy',
      humidity: '60%',
    },
  };

  const handleCityName = (cityName) => {
    setCity(cityName);
    setWeather(fakeWeatherData[cityName]);
  };

  return (
    <div className="min-h-screen w-screen bg-blue-50 flex flex-col items-center justify-center text-center p-4 box-border">
      <h1 className="text-4xl font-bold mb-8 text-blue-700"> Weather App</h1>

      <div className="space-x-4 mb-8">
        <button
          onClick={() => handleCityName('Delhi')}
          className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded"
        >
          Delhi
        </button>
        <button
          onClick={() => handleCityName('Jaipur')}
          className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-2 rounded"
        >
          Jaipur
        </button>
        <button
          onClick={() => handleCityName('Kolkata')}
          className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded"
        >
          Kolkata
        </button>
      </div>

      {weather && (
       <div className="bg-white shadow-md rounded-lg p-6 w-11/12 max-w-5xl text-center">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">{city}</h2>
          <p className="text-lg text-black"><strong>Temperature:</strong> {weather.temperature}</p>
          <p className="text-lg text-black"><strong>Condition:</strong> {weather.condition}</p>
          <p className="text-lg text-black"><strong>Humidity:</strong> {weather.humidity}</p>
        </div>
      )}
    </div>
  );
};

export default App;