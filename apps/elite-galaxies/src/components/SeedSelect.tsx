import {Col, Form, FormGroup, Input, Label, Row} from "reactstrap";
import {formattedSeed} from "../galaxy/helpers";
import {classicSeed} from "../galaxy/seed";

export default function SeedSelect() {

  // const seed = useContext(GalaxySeedContext);

  return (
    <Form>
      <Row className="row-cols-lg-auto g-3 align-items-center">
        <Col>
          <FormGroup check>
            <Input id="defaultSeedValue" name="seedType" type="radio" defaultChecked={true} defaultValue={"classic"}/>
            <Label check for="defaultSeedValue">
              classic seed {formattedSeed(classicSeed())}
            </Label>
          </FormGroup>
        </Col>
        <Col>
          <FormGroup check>
            <Input id="customSeedSelect" name="seedType" type="radio" defaultValue={"custom"}/>
            <Label check for="customSeedSelect">
              custom seed
            </Label>
          </FormGroup>
        </Col>
        <Col>
          <Label className="visually-hidden" for="customSeedValue">
            Email
          </Label>
          <Input name="defaultSeed" id="customSeedValue" placeholder="0x5A4A,0x0248,0xB753" type="text"/>
        </Col>
      </Row>
    </Form>
  );
}
