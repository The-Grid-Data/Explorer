export async function GET(request: Request) {
  return new Response('Authentication Required!', {
    status: 401,
    headers: {
      'WWW-Authenticate': 'Basic realm="Admin Area"'
    }
  });
}
