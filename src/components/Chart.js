import {Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';

export default function Chart ({data, stat}) {
  return (
    <td>
      <Sparklines data={data[stat]} width={300}>
        <SparklinesLine />
        <SparklinesReferenceLine type="mean" />
      </Sparklines>
    </td>
  )
}