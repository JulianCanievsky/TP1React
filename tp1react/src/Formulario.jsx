import { useState } from "react";
import "./Formulario.css";

function Formulario({ setCitas }) {
  const [mascota, setMascota] = useState("");
  const [dueno, setDueno] = useState("");
  const [fecha, setFecha] = useState("");
  const [hora, setHora] = useState("");
  const [sintomas, setSintomas] = useState("");

  function agregarCita(e) {
    e.preventDefault();

    const nuevaCita = {
      id: Date.now(),
      mascota,
      dueño: dueno,
      fecha,
      hora,
      sintomas,
    };

    setCitas((prev) => [...prev, nuevaCita]);

    setMascota("");
    setDueno("");
    setFecha("");
    setHora("");
    setSintomas("");
  }

  return (
    <div className="formulario">
      <h2>Crear mi Cita</h2>

      <form onSubmit={agregarCita}>
        <label>Nombre Mascota</label>
        <input
          type="text"
          value={mascota}
          onChange={(e) => setMascota(e.target.value)}
        />

        <label>Nombre Dueño</label>
        <input
          type="text"
          value={dueno}
          onChange={(e) => setDueno(e.target.value)}
        />

        <label>Fecha</label>
        <input
          type="date"
          value={fecha}
          onChange={(e) => setFecha(e.target.value)}
        />

        <label>Hora</label>
        <input
          type="time"
          value={hora}
          onChange={(e) => setHora(e.target.value)}
        />

        <label>Síntomas</label>
        <textarea
          value={sintomas}
          onChange={(e) => setSintomas(e.target.value)}
        ></textarea>

        <button type="submit">Agregar Cita</button>
      </form>
    </div>
  );
}

export default Formulario;