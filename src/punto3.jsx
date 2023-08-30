import React, { useState } from 'react';

function SaludoHora() {
  const [nombre, setNombre] = useState('');
  const [hora, setHora] = useState('');

  function obtenerSaludo(hora) {
    const horaNum = parseInt(hora);
    if (horaNum >= 5 && horaNum < 12) {
      return `Buenos días, ${nombre}`;
    } else if (horaNum >= 12 && horaNum < 18) {
      return `Buenas tardes, ${nombre}`;
    } else {
      return `Buenas noches, ${nombre}`;
    }
  }

  function handleSaludoClick() {
    const saludo = obtenerSaludo(hora);
    console.log(saludo);
    alert(saludo);
  }

  return (
    <div>
        <h3>Tercer punto: Saludo según la hora.</h3>
      <label>
        ¡Hola! ¿Cúal es tu nombre?:
        <br></br> 
        <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />
        <br></br> 
      </label>
    
      <label>
        ¿Qué hora es? (en formato HH:MM con 24 horas):
        <p>Por ejemplo: Puedes poner 22:58, note olvides de poner ":".</p>
        <input type="text" value={hora} onChange={(e) => setHora(e.target.value)} />
      </label>
      <br />
      <button onClick={handleSaludoClick}>Haz click para una sorpresa</button>
    </div>
  );
}

export default SaludoHora;