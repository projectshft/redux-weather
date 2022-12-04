import React from 'react'
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines'
import { useSelector } from 'react'

const Weather = () => {
  const forecasts = useSelector((state) => state.forecasts);
  const error = useSelector((state) => state.forecasts.error);
  const city = [];

  return (
    <div>
      <Sparklines data={temp} width={150} height={150}>
      <SparklinesReferenceLine type="avg" />
      </Sparklines>
      <h4 className="text-center">{average}{unit}</h4>
    </div>
  )
}

export default Weather