const API_URL = 'http://localhost:3000/api';
const API_VERSION = 'v1';

export const fetchEventData = async token => {
  return await fetchApiData('events', token);
};

export const putEvent = async (data, token) => {
  return await postApiData(data, 'events', token);
};

export const deleteEvent = async (id, token) => {
  return await deleteApiData(`events/${id}`, token);
};

export const authorizeUser = async (email, password) => {
  return await authorizeUserData(email, password);
};

function fetchApiData(endpoint, token) {
  const options = {
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + token
    }
  };
  return fetch(`${API_URL}/${API_VERSION}/${endpoint}/`, options).then(res =>
    res.json()
  );
}

function deleteApiData(endpoint, token) {
  const options = {
    method: 'DELETE',
    headers: {
      Authorization: 'Bearer ' + token
    }
  };
  return fetch(`${API_URL}/${API_VERSION}/${endpoint}/`, options).then(res =>
    res.json()
  );
}

function authorizeUserData(email, password) {
  const options = {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ auth: { email, password } })
  };
  return fetch(`${API_URL}/${API_VERSION}/user_token/`, options).then(res =>
    res.json()
  );
}

function postApiData(data, endpoint, token) {
  const options = {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + token
    },
    body: JSON.stringify(data)
  };
  return fetch(`${API_URL}/${API_VERSION}/${endpoint}/`, options).then(res =>
    res.json()
  );
}
