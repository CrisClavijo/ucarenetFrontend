import 'bootstrap/dist/css/bootstrap.css';
import React, { FC, useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import './dashboard.scss';

interface DashboardProps {


    

}

    
    const DashBoard: FC<DashboardProps> = () => {
        let navigate = useNavigate(); 
    
        let [loading1, setLoading1] = useState(localStorage.getItem('USRDATA')?  (JSON.parse( localStorage.getItem('USRDATA') || '' )) : '');
        useEffect(() => {
            const interval = setInterval(() => {
                if(Object.keys(loading1).length >0){           
                
                   
                
                }
                else{
                    navigate('/');    
                    clearInterval(interval);
                }
            }, 1000);
            return () => clearInterval(interval);
          }, []);
    
        
    
        const LoadLoggedInUsers = () => (
            <div  className="title">
                    Welcome <label>{loading1.fullname}</label> with UserID : <label>{loading1.id}</label>
            </div>
          )
      return (
        <>
          <div className='home-page'>
            <div className="flex-container home-container">
              <div className="head bg-light">
                <div className="title">
                   Dashboard,
                   { Object.keys(loading1).length >0 ? <LoadLoggedInUsers /> : null }
                </div>
               
                </div>
            </div>
    
          </div>
        </>
      );
    };

export default DashBoard;



