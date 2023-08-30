import React, { useState } from 'react';

function convertirTiempoSeg() {
  const [tiempoEnSeg, settiempoEnSeg] = useState(0);
  const [convertir, setconvertir] = useState(null);

  function convertirSeg(tiempoEnSeg) {
    const horas = Math.floor(tiempoEnSeg / 3600);
    const minutos = Math.floor((tiempoEnSeg % 3600) / 60);
    const seg = tiempoEnSeg % 60;
    return { horas, minutos, seg };
  }

  function botonConvertir() {
    const convertir = convertirSeg(tiempoEnSeg);
    setconvertir(convertir);
  }

  return (
    <div>
        <h1>Parcial 1</h1>
        <h2>Isabella Durán Nagles cód 2210296</h2>
        <h3>Primer punto: Convertir de segundos a horas.</h3>
      <label>
        Ingrese el tiempo a calcular en segundos:
        <br></br> 
        <input type="number" value={tiempoEnSeg} onChange={(e) => settiempoEnSeg(e.target.value)} />
      </label>
      <br></br> 
      <button onClick={botonConvertir}>Convertir</button>
      {convertir && (
        <div>
          Resultado: {convertir.horas} horas, {convertir.minutos} minutos, {convertir.seg} seg
        </div>
      )}
    </div>
  );
}

export default convertirTiempoSeg;