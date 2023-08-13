import React from "react";



//1. Mi componente se define en una función
const MyComponent = () => {
  // 2. Memoria de datos
  const [value, setValue] = React.useState('Daniel');
  // 3. Mi componente retorna un elemento react

  return (
    <div>
      <h1>Hola a todos</h1>
    </div>
  )
}

export default MyComponent
