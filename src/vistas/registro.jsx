import { Button, Form, Input } from "antd";
import { PostRegistro } from "../solicitudes/registros_apis";
import { useNavigate } from "react-router-dom";

function Registro() {
  const navigate = useNavigate();
 
  const onFinish = async (values) => {
    console.log("Los datos del usuario son:", values);

    const dataUser = values.correo;
    localStorage.setItem('dataUser', dataUser);

    const response = await PostRegistro(values);

    if (response.message === 'El usuario ya existe') {
      alert('El usuario ya está registrado. Intente con otro correo.');
    } else {
      navigate('/login');
    }
  };


  return (
    <>
      <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        onFinish={onFinish} 
      >
        <Form.Item
          label="Correo"
          name="correo" 
          rules={[
            {
              required: true,
              message: "Por favor ingrese un correo",
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
              message: "Por favor ingrese una contraseña",
            },
          ]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item
          label="Confirmar password"
          name="confirmarPassword" // Corrige el nombre del campo
          rules={[
            {
              required: true,
              message: "Por favor confirme su contraseña",
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
            Enviar
          </Button>
        </Form.Item>
      </Form>
    </>
  );
}

export default Registro;