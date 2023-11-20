
type FormattedPriceProps = {
  value : number;
}

export default function FormattedPrice({value} : FormattedPriceProps) {
  const adjusted = Number.isInteger(value) ? value / 10 : value;

  const formatted = (Math.round(adjusted * 100) / 100).toFixed(1);

  return (
    <span>{formatted}</span>
  );
}
