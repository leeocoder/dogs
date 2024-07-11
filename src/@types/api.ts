const baseURL = 'https://dogsapi.origamid.dev/json';

export function TOKEN_POST(body: any) {
  return {
    url: `${baseURL}/jwt-auth/v1/token`,
    options: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    },
  };
}

export function TOKEN_VALIDATE_POST(token: string) {
  return {
    url: `${baseURL}/jwt-auth/v1/token/validate`,
    options: {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  };
}

export function USER_GET(token: string) {
  return {
    url: `${baseURL}/api/user`,
    options: {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  };
}

export function USER_POST(body: any) {
  return {
    url: `${baseURL}/api/user`,
    options: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    },
  };
}
