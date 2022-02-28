import classes from "./AvailableMeals.module.css";
import MealItem from "./MealItem/MealItem";
import Card from "../UI/Card";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Sushi",
    description: "Los mejores pescados y verduras",
    price: 11990,
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "¡Una especialidad alemana!",
    price: 16500,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "Corte americano, sabor de excelencia",
    price: 22990,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Saludable y verde...",
    price: 18990,
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
