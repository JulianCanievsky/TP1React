import Cita from "./Cita";
import "./Listado.css";

function Listado({ citas }) {
  return (
    <>
      <h2>Administra tus citas</h2>
      {citas.map((cita) => (
        <Cita key={cita.id} cita={cita} />
      ))}
    </>
  );
}

export default Listado;