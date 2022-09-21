import "primereact/resources/themes/lara-light-indigo/theme.css";  
import "primereact/resources/primereact.min.css";                  
import "primeicons/primeicons.css";    
import 'bootstrap/dist/css/bootstrap.min.css';
import React ,{ useRef, useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { Row,Col} from 'react-bootstrap';
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';


import './sign-up.scss';


const SignUp = () => {    
 
    let navigate = useNavigate(); 
    const routeChange = (path) =>{ 
        //let path = `newPath`; 
        navigate(path);
    }
    const toast = useRef(null);

    const reginfo = {

        Type : '',
        FirstName:'',
        LastName:'',
        UsrID:'',
        TypeID:''
       

    }
   
    const handleChange = useCallback(
        (type) => () => {
          console.log(type);
          reginfo.Type = type;
          localStorage.setItem('regInfo', JSON.stringify(reginfo));
          const userJson = localStorage.getItem('regInfo');
          let values =   userJson != null ? JSON.parse(userJson):'' ; 
         
            if(values.Type === 'CG'){
                navigate('/sign-up-job');
            }
            if(values.Type === 'CS'){
                navigate('/sign-up-care');

            }
            else{
                toast.current.show({ severity: 'error', summary: 'registration', detail: 'registration Type is missing contact ucarenet development team', life: 3000 });


            }

                

            

        },
        [],
      )
    return(
        <>
            <Toast ref={toast}></Toast>
            <Row className="col-lg-12 col-12 mx-auto">
                <Col lg={12} className="p-0 col-12">
                    <div className="container sign-up">
                        <Row>
                            <Col lg={6} md={6} className="align-content-center d-flex p-0">
                                <div className="container">
                                    <Row>
                                        <Col>
                                            <div className="title-sign-up">
                                                Find Care
                                            </div>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <div className="title-sign-up-description">
                                            For seniors and families looking for care
                                            </div>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <div className="image-sign-up">

                                            </div>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <div className="register-sign-up-btn">
                                            <Button label="REGISTER AS A CARE SEEKER" className="p-button-danger" onClick={handleChange('CS')}/>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                            </Col>
                            <Col lg={6} md={6} className="align-content-center d-flex p-0">
                                <div className="container">
                                    <Row>
                                        <Col>
                                            <div className="title-sign-up">
                                                Find a Job
                                            </div>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <div className="title-sign-up-description">
                                                For seniors and families looking for care
                                            </div>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <div className="image-sign-up">

                                            </div>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <div className="register-sign-up-btn">
                                                <Button label="REGISTER AS A CAREGIVER" className="p-button-danger" onClick={handleChange('CG')}/>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Col>
            </Row>
        </>
    );
}

export default SignUp;