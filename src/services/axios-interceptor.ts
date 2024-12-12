import axios from 'axios';

// Create an Axios instance
const apiClient = axios.create({
  baseURL: 'https://b795b019-1f84-41f4-93a3-a702d686c75a.mock.pstmn.io', // Base URL for the API
  timeout: 5000, // Request timeout limit in milliseconds
  headers: {
    'Content-Type': 'application/json', // Default content type for requests
  },
});

// Request interceptor
apiClient.interceptors.request.use(
  (config) => {
    // Modify the request before it is sent
    // Example: Add authentication token to the headers
    // config.headers.Authorization = `Bearer ${token}`;

    // Uncomment the line below to log the request configuration
    // console.log('Request Interceptor:', config);
    return config; // Return the modified config
  },
  (error) => {
    // Log request errors
    console.error('Request Error:', error);
    return Promise.reject(error); // Reject the promise with the error
  }
);

// Response interceptor
apiClient.interceptors.response.use(
  (response) => {
    // Handle the response data
    // Uncomment the line below to log the response
    // console.log('Response Interceptor:', response);
    return response.data; // Return only the response data
  },
  (error) => {
    // Log response errors
    console.error('Response Error:', error);

    // Check for specific HTTP status codes
    if (error.response) {
      const { status } = error.response;

      if (status === 401) {
        // Handle unauthorized error
        console.error('Unauthorized! Redirecting to login...');
        // Optionally, redirect the user to the login page
      } else if (status === 500) {
        // Handle internal server error
        console.error('Server Error! Please try again later.');
      } else if (status === 404) {
        // Handle not found error
        console.error('404 Not Found.');
      }
    }
    return Promise.reject(error); // Reject the promise with the error
  }
);

export default apiClient;
