import React from "react";



const MyComponentAsync = () => {
  const [name, setName] = React.useState('Daniel');


  React.useEffect(() => {
    console.log(name)
    setName('Josele')
    console.log(name)
  }, [name])
  return (
    <div>hello my name is {name}</div>
  )
}

export default MyComponentAsync