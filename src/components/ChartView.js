import { PropTypes } from 'prop-types';
import {
  Sparklines,
  SparklinesLine,
  SparklinesReferenceLine,
  SparklinesBars,
} from 'react-sparklines';

const ChartView = ({ data, lineColor }) => (
  <Sparklines data={data} limit={5} width={100} height={50} margin={5}>
    <SparklinesBars style={{ fillOpacity: '.1' }} />
    <SparklinesLine color={lineColor} style={{ fill: 'none' }} />
    <SparklinesReferenceLine type="avg" />
  </Sparklines>
);

ChartView.propTypes = {
  data: PropTypes.array.isRequired,
  lineColor: PropTypes.string.isRequired,
};

export default ChartView;
