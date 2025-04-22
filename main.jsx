
import React from "react";
import ReactDOM from "react-dom/client";

const App = () => {
  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial' }}>
      <h1>Asistente RAM</h1>
      <p>Hola, soy el Asistente RAM, ¿en qué puedo ayudarte hoy?</p>
      <button onClick={() => alert('Aquí iría una respuesta sobre medicamentos.')}>Consultar fármaco</button>
    </div>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
