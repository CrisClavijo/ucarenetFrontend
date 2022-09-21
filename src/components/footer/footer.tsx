import React from 'react'
import {  Row, Col} from 'react-bootstrap';
import { useNavigate, Link  } from 'react-router-dom';
import ImgFooter from '../../asset/ImgFooter.png';
import Facebook from '../../asset/social_media_icon/sm_icon_facebook.svg';
import Instagram from '../../asset/social_media_icon/sm_icon_inastagram.svg';
import Linkedln from '../../asset/social_media_icon/sm_icon_linkedin.svg';
import Twitter from '../../asset/social_media_icon/sm_icon_twitter.svg';
import './footer.scss';


const Footer = (): JSX.Element =>{

    let navigate = useNavigate(); 
    const routeChange = () =>{ 
        let path = `/familyresource`; 
        navigate(path);
        
      }
    return (

<footer className="footer-container">
  <div> 
      <Row className='footer-img-container'>
          <Col> 
            <div className="logo-carenet"><img src={ImgFooter} alt="img" /></div>
          </Col>
      </Row>
      <Row>
          <Col className='address-container' lg={3} md={11} sm={11}  >
              <div className='footer-address'>
                uCarenet Technologies, Inc. 
                140 Yonge Street, Suite 200, 
                Toronto, ON Canada M5P 1X6
              </div>
          </Col>
          <Col>
                <div className='footer-category-container flex-wrap'>
                    <div className="col-sm-6  col-lg-2 col-6">
                        <div className='category-container'>
                            <div className='title'>
                            For Families
                            </div>
                            <div className='subtitle'>
                                <Link to='search-cg'>
                            Find a caregiver
                            </Link>
                            </div>
                            <div className='subtitle'>
                            <Link to='/familyresource'>Resources for Families</Link>
                            </div>
                            <div className='subtitle'>
                            <Link to='remote-care-monitoring'>
                            Remote care monitoring
                            </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6  col-lg-2 col-6">
                        <div className='category-container'>
                            <div className='title'>
                                <Link to='search-cg'>
                                    Find a caregiver
                                </Link>
                            </div>
                            <div className='subtitle'>
                                <Link to='search-cs'>
                                    Find a job
                                </Link>
                            </div>
                            <div className='subtitle'>
                                <Link to='background-check-landing'>
                                    Background check
                                </Link>
                            </div>
                            <div className='subtitle'>
                            Client management app
                            </div>
                            <div className='subtitle'>
                            Client management app
                            </div>
                            <div className='subtitle'>
                            Care translation app
                            </div>
                            <div className='subtitle'>
                                <Link to='cgr-center'>
                                    Resources for caregives
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6  col-lg-3 col-6 line-space-footer">
                        <div className='category-container'>
                            <div className='title'>
                            For Healthcare 
                            </div>
                            <div className='subtitle'>
                            Senior Patient Monitoring & Care 
                            </div>
                            <div className='subtitle'>
                            Palliative monitoring & care 
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6  col-lg-2 col-6 line-space-footer">
                        <div className='category-container'>
                            <div className='title'>
                            Corporate 
                            </div>
                            <div className='subtitle'>
                            Our story, tech & values
                            </div>
                            <div className='subtitle'>
                            Careers
                            </div>
                            <div className='subtitle'>
                            Investor information
                            </div>
                            <div className='subtitle'>
                            Media 
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6  col-lg-2 col-6">
                        <div className='category-container'>
                            <div className='title'>
                            General
                            </div>
                            <div className='subtitle'>
                            Contact us
                            </div>
                            <div className='subtitle'>
                            FAQ
                            </div>
                            <div className='subtitle'>
                            Legal & policies
                            </div>
                        </div>
                    </div>
                    <div className="container-space col-6">

                    </div>
                </div>
          </Col>
          
      </Row>
  </div>
  <div className='copyright-container'>
       <Row>
          <Col className='networks' >
            <div className="icons"><img src={Linkedln} alt="img" /></div>
            {/* <div className='network'>Linkedln</div> */}
            <div className="icons"><img src={Facebook} alt="img" /></div>
            {/* <div className='network'>Facebook</div>    */}
            <div className="icons"><img src={Twitter } alt="img" /></div>
            {/* <div className='network'>Twitter</div>    */}
            <div className="icons"><img src={Instagram} alt="img" /></div>
            {/* <div className='network'>Instagram</div> */}
          </Col>
      </Row>
      <Row>
          <Col className='company'>
              <span className='date-company'>
                Copyright 2021 © uCarenet Technologies, Inc. All rights reserved
              </span>
          </Col>
      </Row>
  </div>

   
</footer>

);
};
export default Footer;