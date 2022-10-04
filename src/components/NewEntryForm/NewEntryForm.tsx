import { Form } from "semantic-ui-react";
import ButtonSaveOrCancel from "../ButtonSaveOrCancel/ButtonSaveOrCancel";

const NewEntryForm = () => {
  return (
    <Form unstackable>
      <Form.Group>
        <Form.Input
          icon="tags"
          width={12}
          label="Description"
          placeholder="New shinny thing"
        />
        <Form.Input
          icon="dollar"
          width={4}
          label="Value"
          placeholder="1000"
          iconPosition="left"
        />
      </Form.Group>
      <ButtonSaveOrCancel />
    </Form>
  );
};

export default NewEntryForm;
