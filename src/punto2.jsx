import React, { useState } from 'react';

function calcularPago() {
  const [duracion, setduracion] = useState(0);
  const [precio, setprecio] = useState(null);

  function calcularPrecio(minutos) {
    let coste = 0;
    if (minutos <= 3) {
      coste = 100;
    } else {
      coste = 100 + (minutos - 3) * 50;
    }
    return coste;
  }

  function botonCalcular() {
    const precio = calcularPrecio(duracion);
    setprecio(precio);
  }

  return (
    <div>
        <h3>Segundo punto: Calcular costo de llamadas.</h3>
      <label>
        Ingrese cuántos minutos duró la llamada:
        <br></br> 
        <input type="number" value={duracion} onChange={(e) => setduracion(e.target.value)} />
      </label>
      <br></br> 
      <button onClick={botonCalcular}>Calcular coste</button>
      {precio && <div>Total coste: {precio} pesos</div>}
      <br></br> 
    </div>
  );
}

export default calcularPago;