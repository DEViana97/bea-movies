import Cookies from 'js-cookie';

const baseURL = `${process.env.NEXT_PUBLIC_API_URL}/api/auth/login`;

export const authService = {
  login: async (username: string, password: string) => {
    const response = await fetch(`${baseURL}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password }),
    });

    const data = await response.json();
    if (data.status === 401) {
      throw new Error(data.data.message);
    }

    console.log('Token recebido:', data.data.access_token);
    console.log('User recebido:', data.data.user);

    Cookies.set('user', JSON.stringify(data.data.user), { 
      expires: 7,
      path: '/',
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax', // Para facilitar testes
    });
    Cookies.set('token', data.data.access_token, { 
      expires: 7,
      path: '/',
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
    });

    return data; // Retorna os dados, mas deixa o redirecionamento para o AuthProvider
  },

  logout: () => {
    Cookies.remove('user', { path: '/' });
    Cookies.remove('token', { path: '/' });
  },

  getCurrentUser: async () => {
    const user = Cookies.get('user');
    if (!user) {
      throw new Error('No user logged in');
    }
    return JSON.parse(user);
  },

  getCurrentToken: async () => {
    const token = Cookies.get('token');
    if (!token) {
      throw new Error('No token logged in');
    }
    return token;
  },
};