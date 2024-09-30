export const dataPost = async(data) => {
     console.log("los datos a enviR SON:",data);

    const urlPost = 'http://localhost:2000/modelo/login_modelo.php';
    const response = await fetch(urlPost,{
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const responseJson = await response.json();        
  console.log("La respuesta del servidor es:",responseJson);
  return responseJson;
        };