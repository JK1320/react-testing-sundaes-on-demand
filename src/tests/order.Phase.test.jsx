import {render, screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../App";

test("order phases for happy path", async () => {
    // render the app 
    // don't need to wrap in provider as already wrapped
    render(<App />);

    // add ice cream scoops and toppings
    const vanillaInput = await screen.findByRole("spinbutton", {name: "Vanilla"});
    userEvent.clear(vanillaInput);
    userEvent.type(vanillaInput, "1");

    const chocolateInput = screen.getByRole("spinbutton", {name: "Chocolate"});
    userEvent.clear(chocolateInput);
    userEvent.type(chocolateInput, "2");

    const cherriesCheckbox = await screen.findByRole("checkbox", {name: "Cherries"});
    userEvent.click(cherriesCheckbox);

    // find and click order summary button on oder entry page
    const orderSummaryButton = screen.getByRole("button", {name: /order sundae/i,});
    userEvent.click(orderSummaryButton);

    // check summary information based on order
    const summaryHeading = screen.getByRole("heading", {name: "Order Summary"});
    expect(summaryHeading).toBeInTheDocument();

    const scoopsHeading = screen.getByRole("heading", {
       name: "Scoops: $6.00",
     });
     expect(scoopsHeading).toBeInTheDocument();

    const toppingsHeading = screen.getByRole("heading", {
        name: "Toppings: $1.50",
      });
      expect(toppingsHeading).toBeInTheDocument();

      // check summary option items
      expect(screen.getByText("1 Vanilla")).toBeInTheDocument();
      expect(screen.getByText("2 Chocolate")).toBeInTheDocument();
      expect(screen.getByText("Cherries")).toBeInTheDocument();

      // // alternatively 
      const optionItems = screen.getAllByRole("listitem");
      const optionItemsText = optionItems.map((item) => item.textContent);
      expect(optionItemsText).toEqual(["1 Vanilla", "2 Chocolate", "Cherries"]);

    // accepts terms and conditions and click button to confirm order
    const toCheckBox = screen.getByRole("checkbox", {name: /terms and conditions/i,});
    userEvent.click(toCheckBox);

    const confirmOrderButton = screen.getByRole("button", {name: /confirm order/i,});
    userEvent.click(confirmOrderButton);

    // expect "loading" to show
const loading = screen.getByText(/loading/i);
expect(loading).toBeInTheDocument();

    // confirmation order number on confirmation page
    // this one is async as there is a post request to server before it shows us the text (in between) 
    // & confirmation pages
    const thankYouHeader = await screen.findByRole("heading", {name: /thank you/i,});
    expect(thankYouHeader).toBeInTheDocument();

    // expect that "loading" has disappeared
    const notLoading = screen.queryByText('loading');
    expect(notLoading).not.toBeInTheDocument();

    const orderNumber = await screen.findByText(/order number/i);
    expect(orderNumber).toBeInTheDocument();

    // click "new order" button on confirmation page
    const newOrderButton = screen.getByRole("button", {name: /new order/i,});
    userEvent.click(newOrderButton);

    // check scoops and toppings subtotals have been reset
    const scoopsTotal = screen.getByText("Scoops total: $0.00");
    expect(scoopsTotal).toBeInTheDocument();

    const toppingsTotal = screen.getByText("Toppings total: $0.00");
    expect(toppingsTotal).toBeInTheDocument();

    // do we need to await anything to avoid test errors?
    // wait for items to appear so that testing library doesn't get angry about
    // happening after test is over
    await screen.findByRole("spinbutton", {name: "Vanilla"});
    await screen.findByRole("checkbox", { name: "Cherries" });
});

test('Toppings header is not on summary page if no toppings ordered', async () => {
// render App
  render(<App />);

  // Add ice creams scoops and toppings
  const vanillaInput = await screen.findByRole("spinbutton", {name: "Vanilla"});
    userEvent.clear(vanillaInput);
    userEvent.type(vanillaInput, "1");

     const chocolateInput = screen.getByRole("spinbutton", {name: "Chocolate"});
    userEvent.clear(chocolateInput);
    userEvent.type(chocolateInput, "2");

    // find and click order summary button
const orderSummaryButton = screen.getByRole("button", {name: /order sundae/i,});
    userEvent.click(orderSummaryButton);

    const scoopsHeading = screen.getByRole("heading", {
       name: "Scoops: $6.00",
     });
     expect(scoopsHeading).toBeInTheDocument();

    const toppingsHeading = screen.queryByRole("heading", {
        name: /toppings/i,
      });
      expect(toppingsHeading).not.toBeInTheDocument();
});