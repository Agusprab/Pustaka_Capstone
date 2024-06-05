/* eslint-disable no-underscore-dangle */
const api = (() => {
  const BASE_URL = 'https://backendpustakacapstone-production.up.railway.app';

    async function _fetchWithAuth(url, options = {}) {
      return fetch(url, {
        ...options,
        headers: {
          ...options.headers,
          // eslint-disable-next-line no-use-before-define
          Authorization: `Bearer ${getAccessToken()}`,
        },
      });
    }

  function putAccessToken(token) {
    localStorage.setItem('accessToken', token);
  }

  function getAccessToken() {
    return localStorage.getItem('accessToken');
  }

  async function register({ name, email, password }) {
    const response = await fetch(`${BASE_URL}/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        email,
        password,
      }),
    });

    const responseJson = await response.json();
    const { status, message } = responseJson;

    if (status !== 'success') {
      throw new Error(message);
    }

    const { data: { user } } = responseJson;

    return user;
  }

  async function login({ email, password }) {
    const response = await fetch(`${BASE_URL}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const responseJson = await response.json();

    return responseJson;
  }

  async function getOwnProfile() {
    const response = await _fetchWithAuth(`${BASE_URL}/me`);

    const responseJson = await response.json();

    return responseJson;
  }

  return {
    putAccessToken,
    getAccessToken,
    register,
    login,
    getOwnProfile,

  };
})();

export default api;
