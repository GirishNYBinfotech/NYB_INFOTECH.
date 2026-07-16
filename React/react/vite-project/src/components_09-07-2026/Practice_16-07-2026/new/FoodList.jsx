import { useDispatch } from "react-redux";
import { addItem } from "./cartSlice";


function FoodList() {

  const dispatch = useDispatch();

  const foods = [
    { id: 1, 
    name:"Pizza" },
    { id: 2, 
    name: "Burger" },
    { id: 3, 
    name: "Biryani" }
  ];

  return (
    <div>

      <h2>Food Menu</h2>

      {foods.map(food => (

        <div key={food.id}>

          {food.name}

          <button
            onClick={() => dispatch(addItem(food))}
          >
            Add
          </button>

        </div>

      ))}

    </div>
  );
}

export default FoodList;