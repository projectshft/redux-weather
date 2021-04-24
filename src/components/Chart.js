import {Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';

export default function Chart ({data, stat}) {
  const valueFormatter = (value, dataType) => {
    switch (dataType) {
      case 'temp':
        return `${Math.round(((value - 273.15)*(9/5) + 32))} °F`;
      case 'pressure':
        return `${Math.round(value, 0)} hPa`;
      case 'humidity':
        return `${Math.round(value, 0)} %`
      default:
        return value;
    }
  }
  
  return (
    <td>
      <Sparklines data={data[stat]} width={300}>
        <SparklinesLine />
        <SparklinesReferenceLine type="mean" />
      </Sparklines>
      <p>{valueFormatter((data[stat].reduce((a, b) => (a + b))/ data[stat].length), stat)}</p>
    </td>
  )
}