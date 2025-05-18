import React, { useState } from "react";
import { Mail } from "lucide-react";
import "../styles/RSVP.css";

const RSVP = () => {
  const [cantidad, setCantidad] = useState(1);
  const [personas, setPersonas] = useState([
    { nombre: "", apellido: "", dieta: "" },
  ]);
  const [mensaje, setMensaje] = useState("");

  const handleCantidadChange = (e) => {
    const valor = parseInt(e.target.value);
    setCantidad(valor);
    const nuevasPersonas = Array.from(
      { length: valor },
      (_, i) => personas[i] || { nombre: "", apellido: "", dieta: "" }
    );
    setPersonas(nuevasPersonas);
  };

  const handleInputChange = (index, campo, valor) => {
    const nuevasPersonas = [...personas];
    nuevasPersonas[index][campo] = valor;
    setPersonas(nuevasPersonas);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí podrías manejar el envío (por ejemplo, enviar a un backend o mostrar confirmación)
    console.log({ personas, mensaje });
    alert("¡Gracias por confirmar!");
  };

  return (
    <section className="rsvp-section">
      <div className="rsvp-container">
        <Mail className="rsvp-icon" size={40} />
        <h2>CONFIRMÁ TU ASISTENCIA</h2>
        <p>¿Por cuántas personas confirmás?</p>
        <select
          value={cantidad}
          onChange={handleCantidadChange}
          className="rsvp-select"
        >
          {[1, 2, 3, 4, 5].map((num) => (
            <option key={num} value={num}>
              {num}
            </option>
          ))}
        </select>

        <form onSubmit={handleSubmit} className="rsvp-form">
          {personas.map((persona, index) => (
            <div className="rsvp-persona" key={index}>
              <h4>Persona {index + 1}</h4>
              <input
                type="text"
                placeholder="Nombre *"
                value={persona.nombre}
                onChange={(e) =>
                  handleInputChange(index, "nombre", e.target.value)
                }
                required
              />
              <input
                type="text"
                placeholder="Apellido *"
                value={persona.apellido}
                onChange={(e) =>
                  handleInputChange(index, "apellido", e.target.value)
                }
                required
              />
              <select
                value={persona.dieta}
                onChange={(e) =>
                  handleInputChange(index, "dieta", e.target.value)
                }
                className="rsvp-dieta-select"
              >
                <option value="">Sin requerimiento</option>
                <option value="Sin TACC">Sin TACC</option>
                <option value="Celiaco">Celiaco</option>
                <option value="Vegetariano">Vegetariano</option>
                <option value="Vegano">Vegano</option>
              </select>
            </div>
          ))}

          <textarea
            placeholder="¿Querés dejar un mensaje para los novios?"
            value={mensaje}
            onChange={(e) => setMensaje(e.target.value)}
            className="rsvp-mensaje"
          />

          <button type="submit" className="rsvp-boton">
            Confirmar asistencia
          </button>
        </form>
      </div>
    </section>
  );
};

export default RSVP;
