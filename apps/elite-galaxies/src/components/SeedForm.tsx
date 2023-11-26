import {Button, Input, InputGroup, InputGroupText} from "reactstrap";
import {formatAsHex, formattedSeed} from "../galaxy/helpers";
import {ChangeEvent, useContext, useEffect, useState} from "react";
import {GalaxySeedContext} from "../context/GalaxySeedContext";
import {classicSeed} from "../galaxy/seed";

export default function SeedForm() {

  const {contextSeed, updateContextSeed} = useContext(GalaxySeedContext);
  const [seed, setSeed] = useState(contextSeed);
  console.log("render", formattedSeed(contextSeed));

  const onClassicSeedClick = () => {
    updateContextSeed(classicSeed());
    // setSeed(contextSeed); // not sure
  }

  const onRandomSeedClick = () => {
    const e0 = Math.round(Math.random() * 0x10000);
    const e1 = Math.round(Math.random() * 0x10000);
    const e2 = Math.round(Math.random() * 0x10000);

    updateContextSeed({
      w0: e0,
      w1: e1,
      w2: e2
    });

    // setSeed(contextSeed);
  }

  useEffect(() => {
    console.log("context seed changed to", formattedSeed(contextSeed));
    setSeed(contextSeed);
  }, [contextSeed]);

  const changeSeed = (e : ChangeEvent<HTMLInputElement>) => {
    console.log("change seed", e);
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
          <Input type="text" placeholder={formatAsHex(seed.w0)} value={formatAsHex(seed.w0)} onChange={changeSeed}/>
        </InputGroup>
      </div>

      <div className="px-1">
        <InputGroup>
          <InputGroupText>w1</InputGroupText>
          <Input type="text" placeholder={formatAsHex(seed.w1)} value={formatAsHex(seed.w1)}/>
        </InputGroup>
      </div>

      <div className="px-1">
        <InputGroup>
          <InputGroupText>w2</InputGroupText>
          <Input type="text" placeholder={formatAsHex(seed.w2)} value={formatAsHex(seed.w2)}/>
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
