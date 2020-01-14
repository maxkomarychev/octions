export default function request(token, method, path, previews, inputs) {
  const requestWithAuth = request.defaults({
    headers: {
      authorization: `Bearer ${token}`
    },
    mediaType: {
      previews
    }
  });
  return requestWithAuth(`${method} ${path}`, inputs);
}
