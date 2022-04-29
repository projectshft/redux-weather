import { SparklinesLine } from "react-sparklines";
import { SparklinesReferenceLine } from "react-sparklines";
import { Sparklines } from "react-sparklines";

const City = (props) => {
    return (
        <div className="row">
            <div className="col">
                <Sparklines data={props.weather.map(item => item.main.temp)}>
                    <SparklinesLine />
                    <SparklinesReferenceLine />
                </Sparklines>
            </div>
            <div className="col">
                <Sparklines data={props.weather.map(item => item.main.pressure)}>
                    <SparklinesLine />
                    <SparklinesReferenceLine />
                </Sparklines>
            </div>
            <div className="col">
                <Sparklines data={props.weather.map(item => item.main.humidity)}>
                    <SparklinesLine />
                    <SparklinesReferenceLine />
                </Sparklines>
            </div>
        </div>
    )
}

export default City;