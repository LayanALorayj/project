/**
 * API Integration JavaScript File
 * 
 * This file contains API integration functionality that trainees will enhance.
 * Complete each API task by implementing the required functionality.
 */

// TODO: Task 8 - Implement external API integration

/**
 * Main API service class
 * Trainees will enhance this class with proper API integration
 */
class APIService {
    constructor() {
        this.baseURL = 'https://api.weatherapi.com/v1/current.json?key=a5cc48dfb93a42bb97b73759251709&q=Riyadh&aqi=n';
        this.apiKey = 'a5cc48dfb93a42bb97b73759251709'; // TODO: Add API key management
    }

    // TODO: Implement weather API integration
    async getWeatherData() {
        // Add weather API integration here
        // Should fetch weather data for the specified city
        let city = 'Riyadh';
        console.log(`Fetching weather data for ${city}`);
        
        try {
        const response = await fetch(`${this.baseURL}?key=${this.apiKey}&q=${city}&aqi=no`);
            // TODO: Implement actual API call
            // const response = await fetch(`${this.baseURL}/weather?city=${city}`);
            // return await response.json();
             const data = await response.json();
            // Placeholder response
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

    // TODO: Implement news API integration
    async getNewsData(category = 'general') {
        // Add news API integration here
        // Should fetch news data for the specified category
        console.log(`Fetching news data for category: ${category}`);
        
        try {
            // TODO: Implement actual API call
            // const response = await fetch(`${this.baseURL}/news?category=${category}`);
            // return await response.json();
            
            // Placeholder response
            return {
                articles: [
                    {
                        title: 'Sample News Article',
                        description: 'This is a sample news article for learning purposes',
                        url: '#',
                        publishedAt: new Date().toISOString()
                    }
                ]
            };
        } catch (error) {
            console.error('News API error:', error);
            throw error;
        }
    }

    // TODO: Implement currency conversion API
    async convertCurrency(from, to, amount) {
        // Add currency conversion API integration here
        // Should convert between different currencies
        console.log(`Converting ${amount} from ${from} to ${to}`);
        
        try {
            // TODO: Implement actual API call
            // const response = await fetch(`${this.baseURL}/convert?from=${from}&to=${to}&amount=${amount}`);
            // return await response.json();
            
            // Placeholder response
            return {
                from: from,
                to: to,
                amount: amount,
                converted: amount * 1.5, // Placeholder conversion rate
                rate: 1.5
            };
        } catch (error) {
            console.error('Currency API error:', error);
            throw error;
        }
    }

    // TODO: Implement error handling for API calls
    handleAPIError(error, context) {
        // Add comprehensive error handling here
        // Should handle different types of API errors gracefully
        console.error(`API Error in ${context}:`, error);
        
        // TODO: Implement user-friendly error messages
        // TODO: Implement retry logic for failed requests
        // TODO: Implement fallback data when APIs are unavailable
    }

    // TODO: Implement API response caching
    cacheResponse(key, data, ttl = 300000) {
        // Add response caching logic here
        // Should cache API responses to reduce API calls
        const cacheData = {
            data: data,
            timestamp: Date.now(),
            ttl: ttl
        };
        
        try {
            localStorage.setItem(`api_cache_${key}`, JSON.stringify(cacheData));
            console.log(`Cached response for key: ${key}`);
        } catch (error) {
            console.error('Cache storage error:', error);
        }
    }

    // TODO: Implement cached response retrieval
    getCachedResponse(key) {
        // Add cached response retrieval logic here
        // Should return cached data if it's still valid
        try {
            const cached = localStorage.getItem(`api_cache_${key}`);
            if (cached) {
                const cacheData = JSON.parse(cached);
                const now = Date.now();
                
                if (now - cacheData.timestamp < cacheData.ttl) {
                    console.log(`Retrieved cached response for key: ${key}`);
                    return cacheData.data;
                } else {
                    // Cache expired, remove it
                    localStorage.removeItem(`api_cache_${key}`);
                }
            }
        } catch (error) {
            console.error('Cache retrieval error:', error);
        }
        
        return null;
    }
}

/**
 * Utility functions for API integration
 * Trainees will use these functions throughout their API tasks
 */

// TODO: Implement API key management
function setAPIKey(key) {
    // Add API key management logic here
    // Should securely store and manage API keys
    console.log('API key set');
}

// TODO: Implement API rate limiting
function checkRateLimit() {
    // Add rate limiting logic here
    // Should prevent too many API calls in a short time
    return true;
}

// TODO: Implement API response validation
function validateAPIResponse(response) {
    // Add response validation logic here
    // Should validate that API responses are in expected format
    return response && typeof response === 'object';
}

// Initialize API service
const apiService = new APIService();

// Example usage functions for trainees to enhance
async function displayWeather() {
    try {
        // TODO: Get user's location or city input
        const city = 'Riyadh'; // TODO: Make this dynamic
        const weather = await apiService.getWeatherData(city);
        
        // TODO: Display weather data in the UI
        console.log('Weather data:', weather);
        
    } catch (error) {
        apiService.handleAPIError(error, 'weather display');
    }
}

async function displayNews() {
    try {
        const news = await apiService.getNewsData('technology');
        
        // TODO: Display news data in the UI
        console.log('News data:', news);
        
    } catch (error) {
        apiService.handleAPIError(error, 'news display');
    }
}

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        APIService,
        setAPIKey,
        checkRateLimit,
        validateAPIResponse,
        displayWeather,
        displayNews
    };
}
