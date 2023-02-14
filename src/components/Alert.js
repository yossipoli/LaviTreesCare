import Alert from 'react-bootstrap/Alert';
import styled from 'styled-components';

const AlertEnd = styled.p`
  font-size: 0.7rem;
`

function AlertComponent({alert}) {
  return (
    <Alert variant="success">
      <Alert.Heading>{alert.head}</Alert.Heading>
      <p>
        {alert.start}
      </p>
      <hr />
      <p className="mb-0">
        {alert.content}
      </p>
      <AlertEnd className="mb-0">
        {alert.end}
      </AlertEnd>
    </Alert>
  );
}

export default AlertComponent;