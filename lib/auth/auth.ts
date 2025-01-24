export function checkAuth(basicAuth: string): boolean {
  const authValue = basicAuth.split(' ')[1];
  const [user, pwd] = atob(authValue).split(':');

  const validUser = process.env.ADMIN_USER || 'admin';
  const validPassword = process.env.ADMIN_PASSWORD || 'password';

  return user === validUser && pwd === validPassword;
}
