import {formatAsHex} from "../galaxy/helpers.tsx";
import {ChangeEvent} from "react";
import {useAppDispatch, useAppSelector} from "../store/store.ts";
import {changeGalaxyId, changeW0, changeW1, changeW2, switchToClassicSeed, switchToRandomSeed} from "../store/GalaxySlice.ts";

export default function SeedForm() {
  console.log('SeedForm rendered');

  const seed = useAppSelector(state => state.galaxy.seed);
  const dispatch = useAppDispatch();

  function onClassicSeedClick() {
    dispatch(switchToClassicSeed());
  }

  function onRandomSeedClick() {
    dispatch(switchToRandomSeed());
  }

  function onW0Change(event: ChangeEvent<HTMLInputElement>) {
    dispatch(changeW0(Number(event.currentTarget.value)));
  }

  function onW1Change(event: ChangeEvent<HTMLInputElement>) {
    dispatch(changeW1(Number(event.currentTarget.value)))
  }

  function onW2Change(event: ChangeEvent<HTMLInputElement>) {
    dispatch(changeW2(Number(event.currentTarget.value)));
  }

  function onGalaxyIdChange(event: ChangeEvent<HTMLSelectElement>) {
    dispatch(changeGalaxyId(Number(event.currentTarget.value)));
  }

  return (
      <div>
        <button onClick={() => onClassicSeedClick()}>Use classic seed</button>
        <button onClick={() => onRandomSeedClick()}>Random seed</button>

        <div>
          <label>w0</label>
          <input type="text" value={formatAsHex(seed.w0)} onChange={onW0Change}/>
        </div>

        <div>
          <label>w1</label>
          <input type="text" value={formatAsHex(seed.w1)} onChange={onW1Change}/>
        </div>

        <div>
          <label>w2</label>
          <input type="text" value={formatAsHex(seed.w2)} onChange={onW2Change}/>
        </div>

        <div>
          <label>Galaxy</label>
          <select onChange={onGalaxyIdChange}>
            {
              [...Array(8)].map((galaxyId, idx) => <option value={idx}>{galaxyId}</option>)
            }
          </select>
        </div>

      </div>
  );
}
