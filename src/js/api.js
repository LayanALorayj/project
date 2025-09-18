/**
 * API Integration JavaScript File
 * Simplified for beginners with fetch to display weather data
 */

class APIService {
    constructor() {
        // Base URL for WeatherAPI
        this.baseURL = 'https://api.weatherapi.com/v1/current.json';
        this.apiKey = 'a5cc48dfb93a42bb97b73759251709';
    }

    /**
     * Fetches weather data for a city using fetch()
     * @param {string} city - The city name to get weather for
     */
    async getWeatherData(city = 'Riyadh') {
        try {
            // Make HTTP GET request with fetch
            const response = await fetch(`${this.baseURL}?key=${this.apiKey}&q=${city}&aqi=no`);

            // Check if the request was successful
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            // Convert response to JSON
            const data = await response.json();

            // Return formatted weather data
            return {
                city: data.location.name,
                temperature: `${data.current.temp_c}°C`,
                description: data.current.condition.text,
                humidity: `${data.current.humidity}%`
            };
        } catch (error) {
            console.error('Weather API error:', error);
            throw error;
        }
    }

    /**
     * Simple error handler
     * @param {Error} error - The error object
     * @param {string} context - Where the error occurred
     */
    handleAPIError(error, context) {
        console.error(`Error in ${context}:`, error.message);
        return { error: true, message: `Failed to load ${context} data` };
    }
}

/**
 * Beginner-friendly fetch explanation:
 * 
 * What is fetch?
 * - fetch() is a way to get data from APIs (like weather information)
 * - It returns a Promise, so we use 'async' and 'await'
 * 
 * Basic structure:
 * async function getData() {
 *   try {
 *     const response = await fetch('https://api.example.com/data');
 *     if (!response.ok) throw new Error('Request failed');
 *     const data = await response.json();
 *     return data;
 *   } catch (error) {
 *     console.error('Error:', error);
 *   }
 * }
 * 
 * Key points:
 * 1. Use try/catch to handle errors
 * 2. Check response.ok for successful requests
 * 3. Use response.json() to get data
 * 4. Use async/await for clean code
 */

// Initialize API service
const apiService = new APIService();

// Function to update weather display in HTML
async function displayWeather() {
    try {
        // Get the weather display element
        const weatherDisplay = document.getElementById('weather-display');
        
        // Show loading message
        weatherDisplay.innerHTML = '<p>Loading weather data...</p>';

        // Fetch weather data
        const weather = await apiService.getWeatherData('Riyadh');

        // Update HTML with weather data
        weatherDisplay.innerHTML = `
            <h3>${weather.city}</h3>
            <p>Temperature: ${weather.temperature}</p>
            <p>Condition: ${weather.description}</p>
            <p>Humidity: ${weather.humidity}</p>
        `;
    } catch (error) {
        const weatherDisplay = document.getElementById('weather-display');
        const errorResponse = apiService.handleAPIError(error, 'weather display');
        weatherDisplay.innerHTML = `<p class="text-danger">${errorResponse.message}</p>`;
    }
}

// Run displayWeather when page loads
document.addEventListener('DOMContentLoaded', displayWeather);

// Add event listener for refresh button
document.getElementById('fetch-weather').addEventListener('click', displayWeather);