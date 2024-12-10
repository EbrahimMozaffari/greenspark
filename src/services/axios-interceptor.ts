import axios from 'axios';

// ایجاد نمونه Axios
const apiClient = axios.create({
  baseURL: 'https://b795b019-1f84-41f4-93a3-a702d686c75a.mock.pstmn.io',
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Interceptor برای درخواست‌ها
apiClient.interceptors.request.use(
  (config) => {
    console.log('Request Interceptor:', config);
    // می‌توانید توکن احراز هویت را اینجا اضافه کنید
    // config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  (error) => {
    console.error('Request Error:', error);
    return Promise.reject(error);
  }
);

// Interceptor برای پاسخ‌ها
apiClient.interceptors.response.use(
  (response) => {
    console.log('Response Interceptor:', response);
    return response.data; // فقط داده‌ها را برمی‌گرداند
  },
  (error) => {
    console.error('Response Error:', error);
    if (error.response) {
      const { status } = error.response;
      if (status === 401) {
        console.error('Unauthorized! Redirecting to login...');
        // می‌توانید کاربر را به صفحه لاگین هدایت کنید
      } else if (status === 500) {
        console.error('Server Error! Please try again later.');
      } else if (status === 404) {
        console.error('404 Not Found.');
      }
    }
    return Promise.reject(error);
  }
);

export default apiClient;

