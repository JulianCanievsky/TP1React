import Cita from "./Cita";
import "./Listado.css";

function Listado({ citas, setCitas }) {
  return (
    <div className="listado">
      <h2>Administra tus citas</h2>

      {citas.map((cita) => (
        <Cita
          key={cita.id}
          cita={cita}
          citas={citas}
          setCitas={setCitas}
        />
      ))}
    </div>
  );
}

export default Listado;