import EncryptedStorage from 'react-native-encrypted-storage';
import axios from 'axios';

const getToken = async () => {
  try {
    const token = await EncryptedStorage.getItem('user_token');
    return token;
  } catch (error) {
    console.error('Failed to retrieve token:', error);
    return null;
  }
};

const apiUrl = 'https://blog-app-backend-1vtn.onrender.com/';

// Common Axios configuration
axios.defaults.headers.post['Content-Type'] = 'application/json';

// Create a public Axios instance for unauthenticated requests
const publicRequest = axios.create({
  baseURL: apiUrl,
});

// Create a private Axios instance for authenticated requests
const privateRequest = axios.create({
  baseURL: apiUrl,
});

//

const privateReqWithFile = axios.create({
  baseURL: apiUrl,
  headers: {
    'Content-Type': 'multipart/form-data',
  },
});

privateReqWithFile.interceptors.request.use(
  config => {
    const token = getToken();
    // const token = useStore.getState().token;

    if (token && config.headers) {
      config.headers.Authorization = `Bearer ${token}`;
      config.headers['Content-Type'] = 'multipart/form-data';
    }

    return config;
  },
  error => {
    console.error('Request error:', error);
    return Promise.reject(error);
  },
);

// Add a request interceptor to the private instance
privateRequest.interceptors.request.use(
  config => {
    // Retrieve the token from the Zustand store
    // const token = useStore.getState().token;
    const token = getToken();

    if (token && config.headers) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  error => {
    return Promise.reject(error);
  },
);

// Add a response interceptor to handle errors and responses
privateRequest.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    console.error('Response error:', error?.response);

    if (error?.response?.status === 401) {
      EncryptedStorage.removeItem('user_token');
      // Handle unauthorized access
      // useStore.getState().clearUserInfo();
      // Clear user info from Zustand store
    }

    return Promise.reject(error);
  },
);

export {privateRequest, publicRequest, privateReqWithFile};
