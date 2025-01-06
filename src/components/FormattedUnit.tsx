import {Unit} from "../galaxy/commodities.tsx";

type FormattedUnitProps = {
  value : Unit;
}

export default function FormattedUnit({value} : FormattedUnitProps) {
  let formatted;

  switch (value) {
    case Unit.TONNES:
      formatted = 'T'; break;

    case Unit.KILOGRAMS:
      formatted = 'Kg'; break;

    case Unit.GRAMS:
      formatted = 'g'; break;

    default:
      formatted = 'Unknown unit';
  }

  return (
    <span>{formatted}</span>
  );
}
