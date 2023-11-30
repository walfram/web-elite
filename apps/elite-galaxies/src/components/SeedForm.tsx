import {Button, Input, InputGroup, InputGroupText} from "reactstrap";
import {formatAsHex} from "../galaxy/helpers";
import {ChangeEvent, useContext, useState} from "react";
import {GalaxySeedContext} from "../context/GalaxySeedContext";

export default function SeedForm() {
  console.log('seed form render');

  const {state, dispatch} = useContext(GalaxySeedContext);

  const {seed} = state;

  // const [seed, setSeed] = useState(state.seed);

  const onClassicSeedClick = () => dispatch({action: "use-classic-seed"});
  const onRandomSeedClick = () => dispatch({action: "use-random-seed"});
  const onW0Change = (event: ChangeEvent<HTMLInputElement>) => dispatch({action: "update-w0", payload: event.currentTarget.value});
  const onW1Change = (event: ChangeEvent<HTMLInputElement>) => dispatch({action: "update-w1", payload: event.currentTarget.value});
  const onW2Change = (event: ChangeEvent<HTMLInputElement>) => dispatch({action: "update-w2", payload: event.currentTarget.value});

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
          <Input type="text" value={formatAsHex(seed.w0)} onChange={onW0Change}/>
        </InputGroup>
      </div>

      <div className="px-1">
        <InputGroup>
          <InputGroupText>w1</InputGroupText>
          <Input type="text" value={formatAsHex(seed.w1)} onChange={onW1Change}/>
        </InputGroup>
      </div>

      <div className="px-1">
        <InputGroup>
          <InputGroupText>w2</InputGroupText>
          <Input type="text" value={formatAsHex(seed.w2)} onChange={onW2Change}/>
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
