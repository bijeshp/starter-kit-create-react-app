import axios from 'axios';

const serviceEndPointBaseURL = process.env.REACT_APP_API_ENDPOINT;
// const headerConfig = { Authorization: `Bearer ${process.env.REACT_APP_AUTH_TOKEN}` };

const axiosInstance = axios.create({
  baseURL: `${serviceEndPointBaseURL}/v1`,
  timeout: 10000,
  // headers: headerConfig,
  withCredentials: true,
});

export default axiosInstance;
