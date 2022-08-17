import Options from "./Options";
import Button from "react-bootstrap/Button";
import {useOrderDetails} from "../../contexts/OrderDetails";

export default function OrderEntry({setOrderPhase}) {
  const [orderDetails] = useOrderDetails();

  // disable order button if there aren't any scoops ordered
const orderDisabled = orderDetails.totals.scoops === "$0.00";

    return (
      <div>
        <h1>Design Your Sundae!</h1>
        <Options optionType="scoops" />
        <Options optionType="toppings" />
        <h2>Grand Total: {orderDetails.totals.grandTotal}</h2>
        <Button disabled={orderDisabled} onClick={() => setOrderPhase("review")}>Order Sundae!</Button>
      </div>
    ); 
};