import {Button, Input, InputGroup, InputGroupText} from "reactstrap";
import {formatAsHex} from "../galaxy/helpers";
import {useContext} from "react";
import {GalaxySeedContext} from "../context/GalaxySeedContext";

export default function SeedForm() {

  const {state, dispatch} = useContext(GalaxySeedContext);

  const {seed} = state;

  const onClassicSeedClick = () => console.log('use classic seed');
  const onRandomSeedClick = () => console.log('use random seed');

  return (

    <div className="d-flex flex-row">

      <div className="px-1">
        <Button onClick={onClassicSeedClick}>Use classic seed</Button>
      </div>

      <div className="px-1">
        <Button onClick={onRandomSeedClick}>Random seed</Button>
      </div>

      <div className="px-1">
        <InputGroup>
          <InputGroupText>w0</InputGroupText>
          <Input type="text" placeholder={formatAsHex(seed.w0)} defaultValue={formatAsHex(seed.w0)}/>
        </InputGroup>
      </div>

      <div className="px-1">
        <InputGroup>
          <InputGroupText>w1</InputGroupText>
          <Input type="text" placeholder={formatAsHex(seed.w1)} defaultValue={formatAsHex(seed.w1)}/>
        </InputGroup>
      </div>

      <div className="px-1">
        <InputGroup>
          <InputGroupText>w2</InputGroupText>
          <Input type="text" placeholder={formatAsHex(seed.w2)} defaultValue={formatAsHex(seed.w2)}/>
        </InputGroup>
      </div>

      <div className="px-1">
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
      </div>

    </div>
  );
}
