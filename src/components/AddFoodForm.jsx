import { useState } from "react";

import Button from "react-bootstrap/Button";
import Form from 'react-bootstrap/Form';


function AddFoodForm(props) {

    const [name, setName] = useState([])
    const [image, setImage] = useState([])
    const [calorias, setCalories] = useState(0)
    const [servings, setServings] = useState(0)

    const handleNameChange = (event) =>{
        setName(event.target.value)
    }
    const handleImageChange = (event) =>{
        setImage(event.target.value)
    }
    const handleCaloriesChange = (event) =>{
        setCalories(event.target.value)
    }
    const handleServingsChange = (event) =>{
        setServings(event.target.value)
    }

    const handleSubmitForm = (event) =>{
        event.preventDefault() //=> previene el comportamiento usual del form

        const newFood= {
            name:name,
            image: image,
            calories: calorias,
            servings: servings
        }

        props.setFood((food)=>{
            const startClone = [...food]
            startClone.unshift(newFood)
            return startClone
        })
        props.setFoodDisplay((food)=>{
            const startClone = [...food]
            startClone.unshift(newFood)
            return startClone
        })

        //! Limpiar los campos
        setName("")
        setImage("")
        setCalories(0)
        setServings(0)
    
    }


  return (
    <div>
      <h1>Formulario</h1>
      <Form>
      <Form.Group className="m-3">
        <Form.Label htmlFor="name">Nombre</Form.Label>
        <Form.Control type="text" name="name" value={name} onChange={handleNameChange} maxLength={10}/>
      </Form.Group>
        <br />
        <Form.Group className="m-3">
          <Form.Label htmlFor="imagen">Imagen</Form.Label>
          <Form.Control type="text" name="image" value={image} onChange={handleImageChange}/>
        </Form.Group>
        <br />
        <Form.Group className="m-3">
          <Form.Label htmlFor="calorias">Calorias</Form.Label>
          <Form.Control type="number" name="calorias" value={calorias} onChange={handleCaloriesChange}/>
        </Form.Group>
         <br />
        <Form.Group className="m-3">
          <Form.Label htmlFor="servings">Servings</Form.Label>
          <Form.Control type="number" name="servings" value={servings} onChange={handleServingsChange}/>
        </Form.Group>
        <br />
        <Button variant="primary" onClick={handleSubmitForm}>Crear</Button>
      </Form>
    </div>
  )
}

export default AddFoodForm
