import {Col, DropdownItem, DropdownMenu, DropdownToggle, Form, FormGroup, Input, Label, Row, UncontrolledDropdown} from "reactstrap";
import {formattedSeed} from "../galaxy/helpers";
import {classicSeed} from "../galaxy/seed";

export default function SeedSelect() {

  // const seed = useContext(GalaxySeedContext);

  return (
    <Form>
      <Row className="row-cols-lg-8 g-3 align-items-center">
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

          <FormGroup noMargin floating>
            <Input name="defaultSeed" id="w0" placeholder="0x5A4A,0x0248,0xB753" type="text" bsSize="sm"/>
            <Label for="w0">
              w0
            </Label>
          </FormGroup>
        </Col>

        <Col>

          <FormGroup noMargin floating>
            <Input name="defaultSeed" id="w1" placeholder="0x5A4A,0x0248,0xB753" type="text" bsSize="sm"/>
            <Label for="w1">
              w1
            </Label>
          </FormGroup>

        </Col>

        <Col>

          <FormGroup noMargin floating>
            <Input name="defaultSeed" id="w2" placeholder="0x5A4A,0x0248,0xB753" type="text" bsSize="sm"/>
            <Label for="w2">
              w2
            </Label>
          </FormGroup>

        </Col>

        <Col>

          <FormGroup noMargin floating>
            <Input
              id="galaxyId"
              name="galaxyId"
              placeholder="Galaxy Id"
              type="select"
              bsSize="sm"
            >
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
              <option>6</option>
              <option>7</option>
              <option>8</option>
            </Input>
            <Label for="exampleEmail">
              Galaxy Id
            </Label>
          </FormGroup>


        </Col>
      </Row>
    </Form>
  );
}
