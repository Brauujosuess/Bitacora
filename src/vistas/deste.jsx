import { Button } from "antd"
import { useNavigate } from "react-router-dom";

const Deste = () => {
 const navigate = useNavigate();

  const handleClick = () =>{
    console.log('click')
    navigate('/newProyect')
  }
  return (
    <>
    <div>Bitacora</div>

    <Button type="primary" onClick={handleClick}>agregar nuevo proyecto +</Button>
</>

  )
}
export default Deste