import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';
import { useSelector } from 'react-redux';

function Chart({ id, type }) {
  const location = useSelector((state) => state.locations.entries[id]);

  const data = location.list.map((item) => {
    return item.main[type];
  });

  const getAverage = (array) => Math.round(array.reduce((a, b) => a + b) / array.length);

  const average = getAverage(data);

  return (
    <>
      <Sparklines data={data}>
        <SparklinesLine />
        <SparklinesReferenceLine type="avg" />
      </Sparklines>
      <p className="mb-0">{`Average: ${average}`}</p>
    </>

  )

}

export default Chart;