import { useState } from 'react';
import PropTypes from 'prop-types';
import { Col, Toast, ToastContainer, Button } from 'react-bootstrap';

const DefaultButton = ({ location, handleDefaultSet }) => {
  const [show, setShow] = useState(false);

  const handleDefaultClick = () => {
    handleDefaultSet();
    setShow(true);
  };

  return (
    <Col className="d-flex justify-content-center" md={1}>
      <ToastContainer position="top-start" className="m-5">
        <Toast onClose={() => setShow(false)} show={show} delay={3000} autohide>
          <Toast.Header>
            <strong className="me-auto">Default Set</strong>
          </Toast.Header>
          <Toast.Body>
            {location} has been set to default. Try refreshing the page!
          </Toast.Body>
        </Toast>
      </ToastContainer>
      <Button onClick={handleDefaultClick} className="btn-add-default">
        Set as Default
      </Button>
    </Col>
  );
};

DefaultButton.propTypes = {
  location: PropTypes.string,
  handleDefaultSet: PropTypes.func,
};

export default DefaultButton;
