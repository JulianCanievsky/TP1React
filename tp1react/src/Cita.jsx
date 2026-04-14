import "./Cita.css";

function Cita({ cita, citas, setCitas }) {
  function eliminarCita() {
    const confirmar = window.confirm(
      "¿Seguro que querés eliminar esta cita?"
    );

    if (confirmar) {
      const nuevasCitas = citas.filter(
        (c) => c.id !== cita.id
      );

      setCitas(nuevasCitas);
    }
  }

  return (
    <div className="cita">
      <p>Mascota: <span>{cita.mascota}</span></p>
      <p>Dueño: <span>{cita.dueño}</span></p>
      <p>Fecha: <span>{cita.fecha}</span></p>
      <p>Hora: <span>{cita.hora}</span></p>
      <p>Síntomas: <span>{cita.sintomas}</span></p>

     <button onClick={eliminarCita}>
  Eliminar ×
</button>
    </div>
  );
}

export default Cita;