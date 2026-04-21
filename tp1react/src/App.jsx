import { useState, useEffect } from "react";
import Formulario from "./Formulario";
import Listado from "./Listado";
import "./App.css";

function App() {
  const [citas, setCitas] = useState(() => {
  const datos = localStorage.getItem("citas");
  return datos ? JSON.parse(datos) : [];
});
  useEffect(() => {
  localStorage.setItem("citas", JSON.stringify(citas));
}, [citas]);

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