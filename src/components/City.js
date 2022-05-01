import { SparklinesLine } from "react-sparklines";
import { SparklinesReferenceLine } from "react-sparklines";
import { Sparklines } from "react-sparklines";

const City = (props) => {
    console.dir(props.weather)
    return (
        <tr>
            <td>{props.name}</td>
            <td className="col">
                <Sparklines data={props.weather.map(item => (1.8 * (item.main.temp - 273) + 32))}>
                    <SparklinesLine style={{stroke:"#ffaf63", fill:"#ffaf63", fillOpacity:".125"}}/>
                    <SparklinesReferenceLine />
                </Sparklines>
                <p>{`${Math.round(props.weather.reduce((acc, obj) => acc + (1.8 * (obj.main.temp - 273) + 32), 0) / props.weather.length)}\u00b0 F`}</p>
            </td>
            <td className="col">
                <Sparklines data={props.weather.map(item => item.main.pressure)}>
                    <SparklinesLine style={{stroke:"#00800b", fill:"#00800b", fillOpacity:".125"}}/>
                    <SparklinesReferenceLine />
                </Sparklines>
                <p>{`${Math.round(props.weather.reduce((acc, obj) => acc + obj.main.pressure, 0) / props.weather.length)} hPa`}</p>
            </td>
            <td className="col">
                <Sparklines data={props.weather.map(item => item.main.humidity)}>
                    <SparklinesLine style={{stroke:"#2b2b2b", fill:"#2b2b2b", fillOpacity:".125"}}/>
                    <SparklinesReferenceLine />
                </Sparklines>
                <p>{`${Math.round(props.weather.reduce((acc, obj) => acc + obj.main.humidity, 0) / props.weather.length)}%`}</p>
            </td>
        </tr>
    )
}

export default City;