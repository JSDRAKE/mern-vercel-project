import React, { useState } from "react";
import axios from "axios";
import "../styles/BorrarEquipo.css";

const EliminarEquipo = () => {
  const [model, setModel] = useState("");
  const [message, setMessage] = useState("");

  const handleDelete = async (e) => {
    e.preventDefault();

    try {
      const apiUrl = import.meta.env.VITE_API_BASE_URL;
      const response = await axios.delete(`${apiUrl}/deleteRig/${model}`);

      if (response.status === 200) {
        setMessage(`Equipo con modelo "${model}" eliminado con éxito.`);
      }
    } catch (error) {
      setMessage(`Error al eliminar el equipo con modelo "${model}".`);
    }

    setModel("");
  };

  return (
    <div>
      <div>
        <h2>Eliminar Equipo</h2>

        <form id="borrar-equipo" onSubmit={handleDelete}>
          <label htmlFor="model">Modelo:</label>

          <input
            type="text"
            id="model"
            name="model"
            value={model}
            onChange={(e) => setModel(e.target.value)}
          />

          <button type="submit">Eliminar</button>
        </form>
        {message && <p id="p-borrar-equipo">{message}</p>}
      </div>
    </div>
  );
};

export default EliminarEquipo;
