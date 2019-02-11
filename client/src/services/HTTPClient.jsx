import axios from 'axios';
/* eslint import/no-extraneous-dependencies: "off" */
import Config from 'Config';

/** This class handles all HTTP requests. */
class HTTPClient {
  baseURL = ''

  constructor() {
    this.baseURL = `${Config.baseURL}/api`;
    this.axiosClient = axios.create();
    this.token = '';

    // Add a request interceptor
    this.axiosClient.interceptors.request.use(
      (request) => {
        // Do something before request is sent
        const method = request.method.toUpperCase();
        const url = request.url.replace(this.baseURL, '');
        console.log(`Request: ${method} ${url}`);
        return request;
      },
      (error) => {
        // Do something with request error
        console.log(error);
        // Stores.HTTPStore.SetError(error);
        return Promise.reject(error);
      },
    );

    // Add a response interceptor
    this.axiosClient.interceptors.response.use(
      (response) => {
        // Do something with response data
        const { status, statusText } = response;
        console.log(`Response: ${status} ${statusText}`);
        return response;
      },
      (error) => {
        // Do something with response error
        if (error.response.status == 401 && this.token != null && this.token.length) {
          this.callback();
          window.location.replace('login?conflict');
        }
        return Promise.reject(error);
      },
    );
  }

  SetAuthenticationCallback(callback) {
    this.callback = callback;
  }

  SetAuthenticationToken(token) {
    this.token = token;
    this.axiosClient.defaults.headers.common['Authentication-Token'] = token;
  }

  /** This method executes a REST GET request */
  Get(url) {
    return this.axiosClient.get(`${this.baseURL}/${url}`);
  }

  Patch(url) {
    return this.axiosClient.patch(`${this.baseURL}/${url}`);
  }

  /** This method executes a REST POST request */
  Post(url, data) {
    return this.axiosClient.post(`${this.baseURL}/${url}`, data);
  }

  /** This method executes a REST PUT request */
  Put(url, data) {
    return this.axiosClient.put(`${this.baseURL}/${url}`, data);
  }

  /** This method executes a REST DELETE request */
  Delete(url) {
    return this.axiosClient.delete(`${this.baseURL}/${url}`);
  }
}

const httpClient = new HTTPClient();
export default httpClient;
