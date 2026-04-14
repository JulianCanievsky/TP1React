import { useState } from "react";
import Formulario from "./Formulario";
import Listado from "./Listado";
import "./App.css";

function App() {
  const [citas, setCitas] = useState([
    {
      id: 1,
      mascota: "Nina",
      dueño: "Martin",
      fecha: "2021-08-05",
      hora: "08:20",
      sintomas: "Le duele la pierna",
    },
    {
      id: 2,
      mascota: "Sifon",
      dueño: "Flecha",
      fecha: "2023-08-05",
      hora: "09:24",
      sintomas: "Duerme mucho",
    },
  ]);

  return (
    <div>
      <h1>ADMINISTRADOR DE PACIENTES</h1>

      <div className="container">
        <Formulario setCitas={setCitas} />
        <Listado citas={citas} setCitas={setCitas} />
      </div>
    </div>
  );
}

export default App;