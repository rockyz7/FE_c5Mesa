import React from 'react'

const App = () => {
  const pacientes = [{
    id: 1,
    nombre: "Firulais",
    edad: 11,
    sexo: "macho",
    raza: "pastor alemán",
    tamanio: "grande"
  },
  {
    id: 2,
    nombre: "Maya",
    edad: 13,
    sexo: "Hembra",
    raza: "pug",
    tamanio: "chico" 
  },
  {  
    id: 3,
    nombre: "Pipo",
    edad: 5,
    sexo: "macho",
    raza: "Schnauzer",
    tamanio: "mediano" },
  {  
    id: 4,
    nombre: "Pacha",
    edad: 2,
    sexo: "hembra",
    raza: "mestizo",
    tamanio: "chico" }]

  return (
    <div>
      <h1>Clientes caninos de Veterinaria</h1>
      {pacientes.map((item) => (
        <>
        <h2>{item.nombre}</h2>
       <ul>
       <li key={item.id}>Edad: {item.edad}</li>
         <li key={item.id}>Sexo: {item.sexo}</li>
         <li key={item.id}>Raza: {item.raza}</li>
         <li key={item.id}>Tamanio: {item.tamanio}</li>
       </ul>
        </>
       
      ))}

      
      </div>
  )
}

export default App
