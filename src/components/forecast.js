import {
  Sparklines,
  SparklinesLine,
  SparklinesReferenceLine,
} from 'react-sparklines';

const Forecast = () => {
  let placeholder;

  return (
    <div className="forecast-container">
      <Sparklines
        data={[0, 50, 25, 75, 80, 60, 70, 20, 40, 10, 100]}
        limit={20}
        width={500}
        height={50}
        margin={5}
      >
        <SparklinesLine color="orange" />
        <SparklinesReferenceLine type="mean" />
      </Sparklines>
    </div>
  );
};

export default Forecast;
