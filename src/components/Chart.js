import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';
import _ from 'lodash';
import React from 'react';

function average(data) {
    console.log(data);
    return _.round(_.sum(data)/data.length);
}

function Chart (props) {
    return(
    <div>
        <Sparklines height={100} width={150} data={props.data}>
          <SparklinesLine color={props.color} />
          <SparklinesReferenceLine type="avg" />
        </Sparklines>
        <div><strong>{average(props.data)} {props.units}</strong></div>
    </div>

    )
}

export default Chart;
