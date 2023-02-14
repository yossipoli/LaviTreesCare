import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';

function SpinnerButton() {
  return (
    <>
      <Button 
      variant="primary"
      style={{margin: '5px'}}
       disabled>
        <Spinner
          as="span"
          animation="border"
          size="sm"
          role="status"
          aria-hidden="true"
        />
        <span className="visually-hidden">Loading...</span>
      </Button>{' '}
    </>
  );
}

export default SpinnerButton;