import Card from 'react-bootstrap/Card';

function FooterComponent() {
  return (
    <Card className="bg-dark text-white" style={{marginTop: '10px'}}>
      <Card.Img src="./images/footerImage.jpg" alt="לביא טיפוח עצים" style={{width: '100vw'}}/>
      <Card.ImgOverlay >
        <Card.Title>לביא טיפוח עצים</Card.Title>
        <Card.Text>
          גיזום מקצועי ושירות אדיב
        </Card.Text>
        <Card.Text>0506080043</Card.Text>
      </Card.ImgOverlay>
    </Card>
  );
}

export default FooterComponent;