import Cake from "./Cake";
import "./Cakes.css";

const Cakes = ({ cakes }) => {
  return (
    <div className="cake-items">
      {cakes.map((cake) => (
        <Cake key={cake.id} cake={cake} />
      ))}
    </div>
  );
};
export default Cakes;
