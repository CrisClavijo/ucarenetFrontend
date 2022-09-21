import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useRef, useState } from 'react';
import { Badge, Col, Container, OverlayTrigger, Popover, Row } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';
import { Link, useNavigate } from 'react-router-dom';
import CloseIcon from '../../asset/CloseIcon.png';
import HamburgerIcon from '../../asset/HamburguerIcon.svg';
import Messages from '../../asset/Icons_new/Messages.svg';
import Profile_Icon from '../../asset/Icons_new/Profile_Icon.svg';
import sign_off from '../../asset/Icons_new/sign_off.svg';
import LogoHeader from '../../asset/LogoHeader.svg';
import SearchIcon from '../../asset/SearchIcon.svg';
import { homePage } from './../../constants/AppConfig';
import './header.scss';



const SearchComponent = (props) =>{
    const inputRef= useRef(null);
  
    return (
        <Container className='search-site'>
            <Row>
                <Col>                      
                    <form className="nosubmit">
                        <input  autoFocus ref={inputRef} className="nosubmit" type="search" placeholder="Search across site" />
                        {props.closeIconVisible ? 
                            <span>
                                <img src={CloseIcon} alt="Close Icon" onClick={() => props.handleClickSearch(inputRef)} className='close-icon' />
                            </span>
                            : ""
                        }
                    </form>
                </Col>
            </Row>
        </Container>
    );
}

const Header = () => {
    let navigate = useNavigate(); 
    let [showElement,setShowElement] = useState(false);

    let [userlogincheck, Checkisloggedin] = useState(localStorage.getItem('USRDATA')?  (JSON.parse( localStorage.getItem('USRDATA') || '' )) : '')
    const [show, setShow] = useState(false);
    const [target, setTarget] = useState(null);
    const [showSearch, setShowSearch] = useState(false);

    const ref = useRef(null);


    const  checkLogin = ()=>{

        if(localStorage.getItem('USRDATA') && Object.keys(userlogincheck).length >0){
  
            setShowElement(true); 
           
        
        }
        else{

            setShowElement(false) ;

        }
        
     };

    useEffect(() => {
        // Update the document title using the browser API
        checkLogin();

        

      });
    const handleClick = (event) => {
        setShow(!show);
        setTarget(event.target);
    };

   
    const handleClickSearch = () =>{
        setShowSearch(!showSearch);
        // if(!showSearch){
        //     inputRef.current.focus();
        // }
    }
    const SignInHandler = () =>{ 
        let path = `/login`; 
        if(localStorage.getItem('USRDATA') && Object.keys(userlogincheck).length >0){
  
          navigate('/dashboard');    
         
      
      }else{
          navigate(path);
  
      }
      }
      const SignOutHandler = () =>{ 
          let path = `/login`; 
          if(localStorage.getItem('USRDATA') && Object.keys(userlogincheck).length >0){
    
              localStorage.clear();
              navigate(path);
        
        }
        }
        const HomeHandler = () =>{ 
            let path = `/`; 
            navigate(path);
          }
    // const searchContainer = ();

    const overLayOptions =(
        <div className='acordion-header-container'>
            <div  className="search-container-dropdown-mb">
                <SearchComponent closeIconVisible={false} />
            </div>
           
            <Accordion defaultActiveKey="0" flush>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>For Families</Accordion.Header>       
                    <Accordion.Body>
                        <div className='subtitle' onClick={handleClick}>
                            <Link to='search-cgl '>
                            Find a caregiver
                            </Link>
                        </div>
                        <div className='subtitle'onClick={handleClick}>
                            <Link to='familyresource '>
                                Resources for Families
                            </Link>
                        </div>
                        <div className='subtitle'onClick={handleClick}>
                            <Link to='remote-care-monitoring'>Remote care monitoring</Link>
                        </div>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>For Caregivers</Accordion.Header>
                    <Accordion.Body>
                    <div className='subtitle' onClick={handleClick}>
                    <Link to='search-csl'>
                        Find a job
                        </Link>
                        </div>
                        <div className='subtitle'onClick={handleClick}>
                            <Link to='background-check-landing'>
                                Background check
                            </Link>
                        </div>
                        <div className='subtitle'>
                        Client management app
                        </div>
                        <div className='subtitle'>
                        Care translation app
                        </div>
                        <div className='subtitle'>
                            <Link to='cgr-center'>
                                Resources for caregivers
                            </Link>
                        </div>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>For Healthcare</Accordion.Header>
                    <Accordion.Body>
                    <div className='subtitle-body'>
                        Senior Patient Monitoring & Care 
                        </div>
                        <div className='subtitle-body'>
                        Palliative Monitoring & Care 
                        </div>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                    <Accordion.Header>About us</Accordion.Header>
                    <Accordion.Body>
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
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion> 
           <div className='overContactus'onClick={handleClick}>               
                <p>Contact us</p>
                      
                <p>FAQ</p>
                    
                <p>Legal & policies</p>
            </div>      
        </div>
    );
    
    const optionsContainer = (
        <Row> 
            <Col className='logo'>
                <Link to="/">
                <div><img src={LogoHeader} alt="img" onClick={()=>HomeHandler()}/></div>
                </Link>
            </Col>
            <Col className='menu-container' xs={6}>
                <div>
                    <div className="flex-row f-right">
                        <div  className="flex-row search-icon">
                            <div><img onClick={() => handleClickSearch()} src={SearchIcon} alt="img" className='search-icon' /></div>
                        </div>
                        <div className="flex-row button-option">
                            <div className='button-sign-up' onClick={()=>navigate('/sign-up')}>{homePage.header.btnSignUp}</div>
                            <span className='space-buttons'></span>
                            {!showElement?<div   className='button-sign-in' onClick={()=>SignInHandler()}>Sign In</div>:<></> }
                        </div>
                        <div className="flex-row f-left">
                            <div><img src={Messages} alt="img"/></div>
                            <Badge pill bg="danger">
                                 3
                            </Badge>
                        </div>                                       
                        <div className="flex-row f-left-user">
                            <div><img src={Profile_Icon} alt="img"/></div>
                        </div>
                        <div  style={{ display: showElement  ? "block" : "none" }} className="flex-row sign_out" onClick={()=>SignOutHandler()}>
                             <p>Sign out</p>
                        </div>
                        <div className="flex-row sign_icon" style={{ display: showElement  ? "block" : "none" }}>
                            <div><img src={sign_off} alt="img"/></div>
                            </div>
                         
                        <div className="flex-row menu-hamburger">
                            <div className='menu'>Menu</div>
                            <span className='space-menu-hamburger'></span>
                            <div className='hamburger-container' ref={ref}>

                                {/* <Overlay
                                    show={show}
                                    target={target}
                                    placement="bottom"
                                    container={ref}
                                    containerPadding={20}
                                >
                                    <Popover id="popover-contained">
                                    <Popover.Body>
                                            {overLayOptions}
                                        </Popover.Body>
                                    </Popover>
                                </Overlay> */}
                                <OverlayTrigger
                                    trigger="click"
                                    show={show}
                                    key="bottom"    
                                    placement="bottom"
                                    overlay={
                                        <Popover id={`popover-header-dropdown`} className={`popover-header-dropdown`}>
                                        <Popover.Body>
                                            {overLayOptions}
                                        </Popover.Body>
                                        </Popover>
                                    }
                                >
                                    <img src={show ? CloseIcon : HamburgerIcon} className="hand" alt="img" onClick={handleClick}/>
                                </OverlayTrigger>
                            </div>
                            {/* <div className="flex-row sign_icon">
                            <div><img src={sign_off} alt="img"/></div>
                            </div> */}
                        </div>
                    </div>
                </div>                 
            </Col>
        </Row>
    );


    return (
        <header className='header-container'> 
            <div>
                {showSearch ?   <SearchComponent closeIconVisible={true} handleClickSearch={handleClickSearch} /> : ""}
                {!showSearch ? optionsContainer : ""}
            </div>
        </header>
    );
};

export default Header;