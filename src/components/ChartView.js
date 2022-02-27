import { Col } from 'react-bootstrap';
import { Sparklines, SparklinesLine } from 'react-sparklines';

const ChartView = () => {
  let butts;

  return (
    <Col md={{ span: 6, offset: 3 }}>
      <Sparklines
        data={[5, 10, 5, 20, 8, 15]}
        limit={5}
        width={100}
        height={50}
        margin={5}
      >
        <SparklinesLine />
      </Sparklines>
    </Col>
  );
};

export default ChartView;
