import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchCharts } from '../actions';
import _ from 'lodash';

const ChartsIndex = () => {
  const charts = useSelector(state => state.charts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCharts());
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fetchCharts]);

  function renderCharts() {
    if (!_.isEmpty(charts)) {
      return charts.order.map((chartID) => (
        <li className="list-group-item" key={chartID}>
          <Link to={`/posts/${chartID}`}>{charts.entries[chartID].title}</Link>
        </li>
      ));
    }
    return <div>Please enter city name to see weather charts</div>;
  }

  return (
    <div>
      <ul className="list-group">{renderCharts()}</ul>
    </div>
  );
};

export default ChartsIndex;