import {render, screen} from '../../../test-utils/testing-library-utils';
import userEvent from '@testing-library/user-event';
import Options from '../Options';
import {OrderDetailsProvider} from "../../../contexts/OrderDetails";

test('update scoop subtotal when scoops change', async () => {
    render(<Options optionType="scoops" />);

    // make sure total starts out £0.00
    const scoopsSubtotal = screen.getByText('Scoops total: $', {exact: false});
    expect(scoopsSubtotal).toHaveTextContent('0.00');

    // update vanilla scoop to 1 and check the subtotal
    const vanillaInput = await screen.findByRole('spinbutton', {name: 'Vanilla'});
    userEvent.clear(vanillaInput);
    userEvent.type(vanillaInput, '1');
    expect(scoopsSubtotal).toHaveTextContent('2.00')
    
    // update chocolate scoop to 2 and check the subtotal
    const chocolateInput = await screen.findByRole('spinbutton', {name: 'Chocolate'});
    userEvent.clear(chocolateInput);
    userEvent.type(chocolateInput, '2');
    expect(scoopsSubtotal).toHaveTextContent('6.00');
});

test("update toppings subtotal when toppings change", async () => {
// render parent component
render(<Options optionType="toppings" />);

// make sure total start out at $0.00
const toppingsTotal = screen.getByText("toppings total: $", {exact: false});
expect(toppingsTotal).toHaveTextContent("0.00");

// add cherries and check subtotal
const cherriesCheckbox = await screen.findByRole("checkbox", {name: "Cherries",});

userEvent.click(cherriesCheckbox);
expect(toppingsTotal).toHaveTextContent("1.50");

// add hot fudge and check subtotal
const hotFudgeCheckbox = screen.getByRole("checkbox", {name: "Hot fudge"});
userEvent.click(hotFudgeCheckbox);
expect(toppingsTotal).toHaveTextContent("3.00");

// remove hot fudge and check subtotal
userEvent.click(hotFudgeCheckbox);
expect(toppingsTotal).toHaveTextContent("1.50");
})