import Carousel from 'react-bootstrap/Carousel';
import styled from 'styled-components';

const Image = styled.img`
    width: 600px;
    height: 300px;
    max-width: 600px;
    max-height: 300px;
    min-width: 600px;
    min-height: 300px;
`

const ImageTitle = styled.h3`
    color: burlywood;
    background-color: black;
    opacity: 0.7;
    font-weight: bolder;
`

const Peregraph = styled.p`
    background-color: black;
    opacity: 0.7;
    color: whitesmoke;
`

function Pics({ pics }) {
    return (
        <Carousel style={{margin: '20px'}}>
            {pics.map(pic =>
                <Carousel.Item key={pic.imgTitle}>
                    <Image
                        className="d-block w-100"
                        src={pic.src}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <ImageTitle>{pic.imgTitle}</ImageTitle>
                        <Peregraph>{pic.peregraph}</Peregraph>

                    </Carousel.Caption>
                </Carousel.Item>
            )}
        </Carousel>
    );
}

export default Pics;