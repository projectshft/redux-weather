import {
  Sparklines,
  SparklinesLine,
  SparklinesReferenceLine,
} from "react-sparklines";

import _ from "lodash";

//Average data so we can get the line

function average(data) {
  if (!data) {
    return;
  }
  if (data.length > 0) return _.round(_.sum(data) / data.length);
}

//The actual graphs
const Chart = (props) => {
  return (
    <div>
      <Sparklines height={100} width={130} margin={10} data={props.data}>
        <SparklinesLine color={props.color} />
        <SparklinesReferenceLine type="avg" />
      </Sparklines>
      <div>
        {average(props.data)} {props.units}
      </div>
    </div>
  );
};

export default Chart;
