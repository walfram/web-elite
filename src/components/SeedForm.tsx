import {formatAsHex} from "../galaxy/helpers.tsx";
import {ChangeEvent, useContext} from "react";
import {GalaxySeedContext} from "../context/GalaxySeedContext.tsx";

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
        <button onClick={() => onClassicSeedClick()}>Use classic seed</button>
      </div>

      <div className="px-1">
        <button onClick={() => onRandomSeedClick()}>Random seed</button>
      </div>

      <div className="px-1">
        <div>
          <label>w0</label>
          <input type="text" value={formatAsHex(seed.w0)} onChange={onW0Change}/>
        </div>
      </div>

      <div className="px-1">
        <div>
          <label>w1</label>
          <input type="text" value={formatAsHex(seed.w1)} onChange={onW1Change}/>
        </div>
      </div>

      <div className="px-1">
        <div>
          <label>w2</label>
          <input type="text" value={formatAsHex(seed.w2)} onChange={onW2Change}/>
        </div>
      </div>

      <div className="px-1">
        <div>
          <label>Galaxy</label>
          <input type="select">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            <option>6</option>
            <option>7</option>
            <option>8</option>
          </input>
        </div>
      </div>

    </div>
  );
}
