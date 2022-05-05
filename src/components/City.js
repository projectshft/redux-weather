import PropTypes from 'prop-types';
import { useSelector } from "react-redux";
import { SparklinesLine } from "react-sparklines";
import { SparklinesReferenceLine } from "react-sparklines";
import { Sparklines } from "react-sparklines";
import './City.css';

const City = (props) => {
    const cityData = useSelector(({cities}) => {
        return cities.entries[props.id]
    });

    const createSparklinesDataArray = dataType => {
        switch (dataType) {
            case 'temperature':
                return cityData.weather.map(item => (1.8 * (item.temp - 273) + 32));
            case 'pressure':
                return cityData.weather.map(item => item.pressure);
            case 'humidity':
                return  cityData.weather.map(item => item.humidity);
            default:
                return;
        }
    }

    return (
        <tr className="City">
            <td>{cityData.name}</td>
            <td className="col">
                <Sparklines data={createSparklinesDataArray('temperature')} height={125}>
                    <SparklinesLine style={{stroke:"#ffaf63", fill:"#ffaf63", fillOpacity:".125"}}/>
                    <SparklinesReferenceLine />
                </Sparklines>
                <p>{`${cityData.averages.avgTemp}\u00b0 F`}</p>
            </td>
            <td className="col">
                <Sparklines data={createSparklinesDataArray('pressure')} height={125}>
                    <SparklinesLine style={{stroke:"#00800b", fill:"#00800b", fillOpacity:".125"}}/>
                    <SparklinesReferenceLine />
                </Sparklines>
                <p>{`${cityData.averages.avgPress} hPa`}</p>
            </td>
            <td className="col">
                <Sparklines data={createSparklinesDataArray('humidity')} height={125}>
                    <SparklinesLine style={{stroke:"#2b2b2b", fill:"#2b2b2b", fillOpacity:".125"}}/>
                    <SparklinesReferenceLine />
                </Sparklines>
                <p>{`${cityData.averages.avgHum}%`}</p>
            </td>
        </tr>
    )
}

City.propTypes = {
    id: PropTypes.number.isRequired
}

export default City;