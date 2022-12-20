import _ from 'lodash';
import React from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';

const average = (data) => {
    return _.round( _.sum(data)/data.length);
}

// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => {
    return (
        <div>
            <Sparklines height={props.height} width={props.width} data={props.data}>
                <SparklinesLine color={props.color} />
                <SparklinesReferenceLine type="avg" />
            </Sparklines>
            <div>{average(props.data)} {props.units}</div>
        </div>
    );
}