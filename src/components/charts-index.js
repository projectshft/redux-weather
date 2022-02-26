//import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchCharts } from '../actions';
import { SparklinesLine } from 'react-sparklines';
import { Sparklines } from 'react-sparklines'
import { SparklinesReferenceLine } from 'react-sparklines';

//import _ from 'lodash';

const ChartsIndex = () => {
  const charts = useSelector(state => state.charts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCharts());
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fetchCharts]);

  function renderCharts() {
    return (
      <Sparklines data={charts}>
        <SparklinesLine />
        <SparklinesReferenceLine type="avg" />
      </Sparklines> 
    )
  }            
};

export default ChartsIndex;