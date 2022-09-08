import React, {useState} from 'react';
import './SummaryForm.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Popover from 'react-bootstrap/Popover';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';



const SummaryForm = ({setOrderPhase}) => {
    const [toChecked, setToChecked] = useState(false);

    function handleSubmit(event) {
event.preventDefault();

// pass along to the next phase
// The next page will handle submitting order from context
setOrderPhase("completed");
    }

     const popover = (
       <Popover id="termsandcontions-popover">
         <Popover.Body>
           No ice cream will actually be delivered
         </Popover.Body>
       </Popover>
     );

    const checkboxLabel = (
      <span>
        I agree to
        <OverlayTrigger placement="right" overlay={popover}>
          <span style={{ color: "blue" }}>Terms and conditions</span>
        </OverlayTrigger>
      </span>
    )

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group controlId="terms-and-conditions">
                <Form.Check 
                type="checkbox"
                checked={toChecked}
                onChange={(e) => setToChecked(e.target.checked)}
                label={checkboxLabel}
                />
            </Form.Group>
            <Button variant="primary" type="submit" disabled={!toChecked}>Confirm Order</Button>
        </Form>
    )
}

export default SummaryForm;
