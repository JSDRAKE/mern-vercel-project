import React, { useState } from "react";
import axios from "axios";
import "../styles/AgregarEquipo.css";

const AgregarEquipo = () => {
  const [formData, setFormData] = useState({
    brand: "",
    model: "",
    type: "",
    frecuencyRange: "",
    mode: "",
    powerSupply: "",
    manufactured: "",
    img: "",
  });

  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const apiUrl = import.meta.env.VITE_API_BASE_URL;

  const handleChange = (e) => {
    setFormData({
      ...formData,

      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(false);

    try {
      const response = await axios.post(`${apiUrl}/createRig`, formData);

      if (response.status === 201) {
        setSuccess(true);

        setFormData({
          brand: "",
          model: "",
          type: "",
          frecuencyRange: "",
          mode: "",
          powerSupply: "",
          manufactured: "",
          img: "",
        });
      }
    } catch (error) {
      setError(error.response.data.message || "Error al agregar el equipo");
    }
  };

  return (
    <div>
      <h2>Agregar Equipo</h2>
      <form id="formulario-agregar" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="brand">Marca: </label>

          <input
            type="text"
            name="brand"
            id="brand"
            className="form-control"
            value={formData.brand}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="model">Modelo: </label>

          <input
            type="text"
            name="model"
            id="model"
            className="form-control"
            value={formData.model}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="type">Tipo: </label>

          <input
            type="text"
            name="type"
            id="type"
            className="form-control"
            value={formData.type}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="frecuencyRange">Rango de Frecuencia: </label>

          <input
            type="text"
            name="frecuencyRange"
            id="frecuencyRange"
            className="form-control"
            value={formData.frecuencyRange}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="model">Modos: </label>

          <input
            type="text"
            name="mode"
            id="mode"
            className="form-control"
            value={formData.mode}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="power-supply">Alimentación: </label>

          <input
            type="text"
            name="powerSupply"
            id="powerSupply"
            className="form-control"
            value={formData.powerSupply}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="manufacturedr">Año de Fabricación: </label>

          <input
            type="text"
            name="manufactured"
            id="manufactured"
            className="form-control"
            value={formData.manufactured}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="img">Imagen: </label>

          <input
            type="text"
            name="img"
            id="img"
            className="form-control"
            value={formData.img}
            onChange={handleChange}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Agregar Equipo
        </button>
      </form>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {success && (
        <p style={{ color: "green" }}>Equipo agregado correctamente</p>
      )}
    </div>
  );
};

export default AgregarEquipo;
