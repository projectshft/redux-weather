import { SparklinesLine } from "react-sparklines";
import { SparklinesReferenceLine } from "react-sparklines";
import { Sparklines } from "react-sparklines";

import './City.css';

const City = (props) => {
    console.dir(props.weather)
    return (
        <tr className="City">
            <td>{props.name}</td>
            <td className="col">
                <Sparklines data={props.weather.map(item => (1.8 * (item.temp - 273) + 32))} height={125}>
                    <SparklinesLine min="0" max="600" style={{stroke:"#ffaf63", fill:"#ffaf63", fillOpacity:".125"}}/>
                    <SparklinesReferenceLine />
                </Sparklines>
                <p>{`${props.averages.avgTemp}\u00b0 F`}</p>
            </td>
            <td className="col">
                <Sparklines data={props.weather.map(item => item.pressure)} height={125}>
                    <SparklinesLine style={{stroke:"#00800b", fill:"#00800b", fillOpacity:".125"}}/>
                    <SparklinesReferenceLine />
                </Sparklines>
                <p>{`${props.averages.avgPress} hPa`}</p>
            </td>
            <td className="col">
                <Sparklines data={props.weather.map(item => item.humidity)} height={125}>
                    <SparklinesLine style={{stroke:"#2b2b2b", fill:"#2b2b2b", fillOpacity:".125"}}/>
                    <SparklinesReferenceLine />
                </Sparklines>
                <p>{`${props.averages.avgHum}%`}</p>
            </td>
        </tr>
    )
}

export default City;