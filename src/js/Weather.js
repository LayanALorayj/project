

class APIService {
  constructor() {
    this.baseURL = "https://api.weatherapi.com/v1/current.json";
    this.apiKey = "a5cc48dfb93a42bb97b73759251709"; 
  }

  async getWeatherData(query) {
    try {
      const response = await fetch(
        `${this.baseURL}?key=${this.apiKey}&q=${query}&aqi=no`
      );

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();

      return {
        city: data.location.name,
        region: data.location.region,
        country: data.location.country,
        temperature: `${data.current.temp_c}°C`,
        description: data.current.condition.text,
        humidity: `${data.current.humidity}%`,
        icon: data.current.condition.icon,
      };
    } catch (error) {
      console.error("Weather API error:", error);
      throw error;
    }
  }
}

const apiService = new APIService();

async function displayWeather() {
  const weatherDisplay = document.getElementById("weather-display");
  weatherDisplay.innerHTML = "<p>Loading weather data...</p>";

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;

        try {
          const weather = await apiService.getWeatherData(`${lat},${lon}`);
          weatherDisplay.innerHTML = `
            <h3>${weather.city}, ${weather.country}</h3>
            <p>Temperature: ${weather.temperature}</p>
            <p>Condition: ${weather.description}</p>
            <p>Humidity: ${weather.humidity}</p>
            <img src="${weather.icon}" alt="Weather icon">
          `;
        } catch (error) {
          weatherDisplay.innerHTML =
            "<p>❌ Failed to fetch weather data</p>";
        }
      },
      (error) => {
        weatherDisplay.innerHTML =
          "<p>⚠️ Location permission denied. Cannot load weather data.</p>";
      }
    );
  } else {
    weatherDisplay.innerHTML =
      "<p>⚠️ Geolocation is not supported in this browser.</p>";
  }
}
document.addEventListener("DOMContentLoaded", displayWeather);
