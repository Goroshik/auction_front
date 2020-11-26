export function makeRequestData(params = {}) {
  const token = localStorage.getItem('token');

  return {
    headers: makeAuthHeader(token),
    params
  };
}

function makeAuthHeader(token) {
  if (token) {
    return { Authorization: 'Barear ' + token };
  }

  return {};
}
