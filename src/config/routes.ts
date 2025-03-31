export const Routes = {
  changePassword: '/change-password',
  home: '/',
  login: '/login',
  logout: '/logout',
  movies: 'movies',
  settings: '/settings/',
  signup: '/signup',
  profile: '/profile',
};

function buildUrlParam(baseUrl: string, params: { [key: string]: string | number | boolean | Array<string | number | boolean> }): string {
  const queryString = Object.entries(params)
    .flatMap(([key, value]) =>
      Array.isArray(value)
        ? value.map(v => `${encodeURIComponent(key)}=${encodeURIComponent(v)}`)  // Trata arrays
        : `${encodeURIComponent(key)}=${encodeURIComponent(value)}`
    )
    .join('&');

  return queryString ? `${baseUrl}?${queryString}` : baseUrl;
}