
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function FoodBox({ foodProps,removeFood }) {


  const { name, calories, image, servings } = foodProps;


  return (
    <Card>
    <Card.Body>
      <Card.Title>{name}</Card.Title>
      <Card.Img variant="top" src={image} alt="img" width="100px" />
      <p>Calories:{calories}</p>
      <p>Serving:{servings}</p>
      <p>Total Calories:{calories * servings}</p>
      <Button variant="primary" onClick={()=>removeFood(name)}>Borrar</Button>
    </Card.Body>
    </Card>
  );
}

export default FoodBox;
