import {Button, Input, InputGroup, InputGroupText} from "reactstrap";
import {formatAsHex, formattedSeed} from "../galaxy/helpers";
import {useContext} from "react";
import {GalaxySeedContext} from "../context/GalaxySeedContext";
import {classicSeed} from "../galaxy/seed";

export default function SeedForm() {

  const {seed, updateSeed} = useContext(GalaxySeedContext);

  const onClassicSeedClick = () => {
    updateSeed(classicSeed());
  }

  const onRandomSeedClick = () => {
    const e0 = Math.round(Math.random() * 0x10000);
    const e1 = Math.round(Math.random() * 0x10000);
    const e2 = Math.round(Math.random() * 0x10000);
    updateSeed({
      w0: e0,
      w1: e1,
      w2: e2
    });
  }

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
          <Input type="text" placeholder={formatAsHex(seed.w0)} defaultValue={formatAsHex(seed.w0)} className="w-25"/>
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
