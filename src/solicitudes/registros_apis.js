export const PostRegistro = async(data) => {
  console.log("Los datos a enviar a la BD son:", data);
  const urlPost = 'http://localhost:2000/modelo/registro_modelo.php';

  const response = await fetch(urlPost, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const responseJson = await response.json();
  console.log("La respuesta del servidor es:", responseJson.message);

  return responseJson;
};



