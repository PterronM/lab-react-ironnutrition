import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Col from 'react-bootstrap/Col';
import Collapse from 'react-bootstrap/Collapse';
import Row from 'react-bootstrap/Row';

import './App.css';
import foods from './foods.json';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';
import SearchForm from './components/SearchForm';
import { Button } from 'react-bootstrap';


function App() {
  const [food, setFood] = useState(foods);
  const [foodDisplay, setFoodDisplay] = useState(foods);
  const [isFormShowing, setIsFormShowing] = useState(false);


  const filterFood = (search) => {
    const newArrFood = food.filter((eachFood) => {
        let nameMay = eachFood.name.toUpperCase()
        let searchMay = search.toUpperCase()
      if (nameMay.includes(searchMay)) {
        return true;
      } else {
        return false;
      }
    });

    setFoodDisplay(newArrFood);
  };

  const removeFood = (name)=>{
    const arrFoodModif = foodDisplay.filter((eachFood)=>{
      if(eachFood.name === name){
        return false; //No se incluye en el nuevo array
      }else{
        return true;
      }
    })
    setFoodDisplay(arrFoodModif)
  }

  return (
    <div className="App">
      <Button className='mt-5 mb-5' variant='warning' onClick={()=>{setIsFormShowing(!isFormShowing)}}>Ver Formulario</Button>
      <Collapse in={isFormShowing}>
      <div>
        <AddFoodForm setFood={setFood} setFoodDisplay={setFoodDisplay} />
      </div>
      </Collapse>

      
      <SearchForm filterFood = {filterFood}/>

    {foodDisplay.length === 0 ? <img src="https://previews.123rf.com/images/mironovkonstantin/mironovkonstantin2104/mironovkonstantin210400101/167794420-grunge-sucio-dibujado-a-mano-cruz-x-con-trazos-de-pincel-ilustraci%C3%B3n-vectorial-aislado-sobre-fondo.jpg" width="400px"></img> : null}
      <Row>
        {foodDisplay.map((eachFood) => {
          return (
            <Col>
              <FoodBox foodProps={eachFood} key={eachFood.name} removeFood={removeFood} />
            </Col>
          );
        })}
      </Row>
    </div>
  );
}

export default App;
