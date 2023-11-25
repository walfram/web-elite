import {Button, Col, Container, Form, FormGroup, Input, InputGroup, InputGroupText, Label, Row} from "reactstrap";
import {formattedSeed} from "../galaxy/helpers";
import {classicSeed} from "../galaxy/seed";
import {useContext} from "react";
import {GalaxySeedContext} from "../context/GalaxySeedContext";

export default function SeedForm() {

  const currentSeed = useContext(GalaxySeedContext);

  return (

    <Container fluid>
      <Row>

        <Col md={4}>
          <InputGroup>
            <Button>
              Use classic seed
            </Button>
            <Input type="text" placeholder={formattedSeed(classicSeed())} defaultValue={formattedSeed(currentSeed)}/>
          </InputGroup>
        </Col>

        <Col md={4}>
          <InputGroup>
            <InputGroupText>Galaxy</InputGroupText>
            <Input type="select">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
              <option>6</option>
              <option>7</option>
              <option>8</option>
            </Input>
          </InputGroup>
        </Col>

      </Row>
    </Container>
  );
}
