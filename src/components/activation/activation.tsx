import React, { FC } from 'react';
import { Row, Container} from 'react-bootstrap';
import { useNavigate, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import '../family-resource/family-resource.scss';
import ArrowLeft from '../../asset/arrow-left.svg';
interface ActivationProps {}

const Activation: FC<ActivationProps> = () => {

    let navigate = useNavigate(); 
    const routeChange = () =>{ 
        let path = `/home`; 
        navigate(path);
      }
    return (
    <Container fluid>
        <Row>
            <div className="main-wrap">
                <div className="container">
                    <div className="back-btn">
                        <Link to='/home'><img src={ArrowLeft} alt="<"></img><span>Return to home</span></Link>
                    </div>
                    <div className="heading-sec">
                        <h1>Sucess!</h1>
                        <p>Thank you verifying your email. Your account is activated!</p>
                    </div>

                    <div className="heading-sec">
                        <h1>Failed!</h1>
                        <p>Oh no, it seems that there is a problem activating your account at this time. We apologies for the inconvenience. Please contact us and let us know about this issue</p>
                    </div>
                
                </div>
            </div>
        </Row>
    </Container>
    );
};

export default Activation;