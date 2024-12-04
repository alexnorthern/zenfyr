export const publicRoutes = Object.freeze({
  home: '/',
  faq: '/faq',
  catalog: '/catalog',
  freehost: '/freehost',
  about: '/about',
  contacts: '/contacts',
  gameHost: '/host/[gameId]',
});

export const authRoutes = Object.freeze({
  login: '/auth/login',
  signup: '/auth/signup',
});

export const apiRoutes = Object.freeze({
  users: '/api/users',
  hosts: '/api/hosts',
});

export const generateDynamicRoute = {
  gameHost: (gameId: string) => `/host/${gameId}`,
};