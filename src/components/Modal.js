import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function ModalComponent({setModal}) {
    return (
        <div
            className="modal show"
            style={{ display: 'block', position: 'initial', color: 'black' }}
        >
            <Modal.Dialog>
                <Modal.Header>
                    <Modal.Title style={{margin: 'auto'}}>השאר פרטים</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <h6>השאר פרטים ונציגנו יחזרו אליך</h6>
                    <Form>
                        <Form.Label>שם מלא</Form.Label>
                        <Form.Control
                            type="text"
                            id="name"
                        />
                        <Form.Label>אימייל</Form.Label>
                        <Form.Control
                            type="email"
                            id="name"
                        />
                        <Form.Label>טלפון</Form.Label>
                        <Form.Control
                            type="phone"
                            id="name"
                        />
                    </Form>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={()=> setModal()}>סגור</Button>
                    <Button variant="primary" onClick={()=> setModal()}>שלח</Button>
                </Modal.Footer>
            </Modal.Dialog>
        </div>
    );
}

export default ModalComponent;