import { useState } from "react";
import Formulario from "./Formulario";
import Listado from "./Listado";
import "./App.css";

function App() {
  const [citas] = useState([
    { id: 1, mascota: "Nina", dueño: "Martin", fecha: "2021-08-05", hora: "08:20", sintomas: "Le duele la pierna" },
    { id: 2, mascota: "Sifon", dueño: "Flecha", fecha: "2023-08-05", hora: "09:24", sintomas: "Duerme mucho" },
    { id: 3, mascota: "Floki", dueño: "Ari", fecha: "2023-08-05", hora: "16:15", sintomas: "No está comiendo" },
  ]);

  return (
    <div className="container">
      <h1>ADMINISTRADOR DE PACIENTES</h1>
      <div className="row">
        <div className="one-half column">
          <Formulario />
        </div>
        <div className="one-half column">
<Listado citas={citas} />    
    </div>
      </div>
    </div>
  );
}

export default App;