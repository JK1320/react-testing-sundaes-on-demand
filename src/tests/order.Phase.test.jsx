import {render, screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../App";

test("order phases for happy path", () => {
    // render the app 
    render(<App />);

    // add ice cream scoops and toppings

    // find and click order button on oder entry page

    // check summary information based on order

    // accepts terms and conditions and click button to confirm order

    // confirmation order number on confirmation page

    // click "new order" button on confirmation page

    // check scoops and topping subtotals have been reset

    // do we need to await anything to avoid test errors?
})