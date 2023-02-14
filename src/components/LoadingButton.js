import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';

export default function LoadingButton({setModal}) {
    return (
        <Button
            variant="success"
            style={{ margin: '5px' }}
            onClick={()=> setModal()}
            >
            <Spinner
                as="span"
                animation="grow"
                size="sm"
                role="status"
                aria-hidden="true"

            />
            {" "} להשארת פרטים {" "}
            <Spinner
                as="span"
                animation="grow"
                size="sm"
                role="status"
                aria-hidden="true"

            />
        </Button>
    )
}