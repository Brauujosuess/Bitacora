import { Button, Form, Input } from "antd";
import { useNavigate } from "react-router-dom";
// import { useEffect } from "react";
import { dataPost } from "../solicitudes/login_apis";
function Login(){
  const naviagate =  useNavigate();

  const OnFinish = async (values) => {
    console.log("Los datos del usuario son:", values);

    const response = await dataPost(values);
    console.log("Respuesta de la API:", response);
    if (response.message === "Usuario encontrado") {
        console.log("Usuario encontrado:", response.data);
         naviagate('/deste'); 
   

    } else {
        console.log("Usuario no encontrado");
        alert('Usuario no registrado en la base de datos. Inténtalo de nuevo.');
    }
};

    return(
      <>
        <div>
            <h1>Login</h1>
        </div>
        <Form 
        name="basic"
        labelCol={{
            span: 8,
        }}
        onFinish={OnFinish}
        >
            <Form.Item
            label="Correo"
            name="correo"
            rules={[
                {
                    required: true,
                    message: "Por favor ingrese tu correo",
                    
                },
            ]}
            >
                <Input />
            </Form.Item>
            <Form.Item
            label="Password"
            name="password"
            rules={[
                {
                    required: true,
                    message: "Por favor ingrese tu contraseña",
                },
            ]}
            >
                <Input.Password />
            </Form.Item>

            <Form.Item
            wrapperCol={{
                offset: 8,
                span: 16,
            }}
            >
                <Button type="primary" htmlType="submit">
                    Ingresar
                </Button>
            </Form.Item>

        </Form>
        </>
    )
}
export default Login;