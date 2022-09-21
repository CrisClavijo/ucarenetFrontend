import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';
import 'primeicons/primeicons.css';
import { Button } from 'primereact/button';
import { Checkbox } from 'primereact/checkbox';
import { Dialog } from 'primereact/dialog';
import { Divider } from 'primereact/divider';
import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import { ProgressBar } from 'primereact/progressbar';
import 'primereact/resources/primereact.min.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import { classNames } from 'primereact/utils';
import React, { FC, useRef, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import './Login.css';
import httpBaseurl from "../../http-common";
import { useNavigate } from 'react-router';

interface LoginProps {



}

const Login: FC<LoginProps> = () => {
    let navigate = useNavigate(); 
    let [userlogincheck, Checkisloggedin] = useState(  localStorage.getItem('USRDATA')?  (JSON.parse( localStorage.getItem('USRDATA') || '' )) : '')
    const [showMessage, setShowMessage] = useState(false);
    const [loading1, setLoading1] = useState(false);

    const [formData, setFormData] = useState({});
    const defaultValues = {
       
        email: '',
        password: '',       
        remember: false
    }

 

    const { control, formState: { errors }, handleSubmit, reset } = useForm({ defaultValues });



    if(Object.keys(userlogincheck).length >0){

        navigate('/dashboard');
    
       
    
    }


    const onSubmit = (data) => {
        setFormData(data);
        setLoading1(true);
// Login



const loginData = { Email: data.email, Password: data.password, RememberMe: false, Channel:"W",PlayerId:"" };

axios.post('https://ucarenet-staging.azurewebsites.net/account/login', loginData)
        .then(response => {
            setLoading1(false);
            if( Object.keys(response.data.result.data).length>0){
                let IsLoggedInUser  = response.data.result.data;
                
               // console.log(response.data.result.data.id);
                localStorage.setItem('USRDATA', JSON.stringify(IsLoggedInUser));
                localStorage.setItem('IsLogedIn', 'true');
                let today: object = new Date();

                localStorage.setItem('LoginDate', JSON.stringify(today));
                navigate('/dashboard');
            }
           
        
        })
        .catch(error => {
            setShowMessage(true);

            console.error('There was an error!', error);
        });




        
     
    };

    const getFormErrorMessage = (name) => {
        return errors[name] && <small className="p-error">{errors[name].message}</small>
    };

    

    const dialogFooter = <div className="flex justify-content-center"><Button label="OK" className="p-button-text" autoFocus onClick={() => setShowMessage(false)} /></div>;
    const passwordHeader = <h6>Pick a password</h6>;
    const passwordFooter = (
        <React.Fragment>
            <Divider />
            <p className="mt-2">Suggestions</p>
            <ul className="pl-2 ml-2 mt-0" style={{ lineHeight: '1.5' }}>
                <li>At least one lowercase</li>
                <li>At least one uppercase</li>
                <li>At least one numeric</li>
                <li>Minimum 8 characters</li>
            </ul>
        </React.Fragment>
    );

    const ProgressBarExecute = () => (
        <div id="results" className="search-results">
          <ProgressBar mode="indeterminate"  style={{ height: '6px' }} color="#EC6571"/>

        </div>
      )
    return (
        

        <div className="main-wrap">
            <div className="login-wrap">
                <div className="container">
                    <div className="row justify-content-center">
                    <div className="col-10 col-lg-4 col-md-5">
                        <div className="login-main">
                        <h3 className="text-center">Login to your account</h3>
                        <Dialog visible={showMessage} onHide={() => setShowMessage(false)} position="top" footer={dialogFooter} showHeader={false} breakpoints={{ '960px': '80vw' }} style={{ width: '30vw' }}>
                            <div className="flex justify-content-center flex-column pt-6 px-3" style={{textAlign: 'center', paddingTop:'45px'}}>
                                <i className="pi pi-times-circle" style={{ fontSize: '5rem', color: 'var(--red-500)' }}></i>
                                <h5 style={{paddingTop: '10px'}}>Wrong Email or password!</h5>
                                <p style={{ lineHeight: 1.5, textIndent: '1rem' }}>
                                    {/* Your account is registered under name <b>{formData.email}</b> ; it'll be valid next 30 days without activation. Please check <b>{formData.email}</b> for activation instructions. */}
                                </p>
                            </div>
                        </Dialog>
                <form onSubmit={handleSubmit(onSubmit)} className="p-fluid">
                    <div className="field-outer">
                        <span className=" p-input-icon-right" style={{ textAlign: 'left'}}>
                        <label htmlFor="email" className={classNames({ 'p-error': !!errors.email ,  'form-label': 'form-label', 'form-label-l': 'form-label-l' })}>Email</label>
                            
                            <Controller name="email" control={control}
                                rules={{ required: 'Email is required.', pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i, message: 'Invalid email address. E.g. example@email.com' }}}
                                render={({ field, fieldState }) => (
                                    <InputText id={field.name} {...field} className={classNames({ 'p-invalid': fieldState.error })} />
                            )} />
                            </span>
                        {getFormErrorMessage('email')}
                    </div>
                    <div className="field-outer">
                        <span className="p-input-icon-right" style={{ textAlign: 'left'}}>
                        <label htmlFor="password" className={classNames({ 'p-error': errors.password ,  'form-label': 'form-label' })}>Password</label>
                        
                            <Controller name="password" control={control} rules={{ required: 'Password is required.' }} render={({ field, fieldState }) => (
                                <Password id={field.name} {...field} toggleMask className={classNames({ 'p-invalid': fieldState.error })} header={passwordHeader} footer={passwordFooter} />
                            )} />
                            </span>
                        {getFormErrorMessage('password')}
                    </div>                   
                    {/*<div className="field-checkbox">
                        <Controller name="remember" control={control} rules={{ required: false }} render={({ field, fieldState }) => (
                            <Checkbox inputId={field.name} onChange={(e) => field.onChange(e.checked)}   />
                        )} />
                        <label htmlFor="accept" className={classNames({ 'p-error': errors.remember })}>Remember Me*</label>
                        </div>*/}
                    <p className="text-end"><a href="#">I forgot my password</a></p>
                    <p className="text-center btn"><Button type="submit" label="Log In"  iconPos="right" loading={loading1}  style={{ background:'#b02a37'}}  /></p>
                    { loading1 ? <ProgressBarExecute /> : null }
                </form>
                </div>
                    </div>
                    </div>
                </div>
                </div>
                <div className="image-with-text-wrap">
                <div className="container">
                <div className="image-with-text-outer">
                    <div className="row">
                    <div className="col-md-6">
                        <div className="image-with-text">
                        <h3>Lorem, ipsum dolor sit amet, consectetur, ipsum dolor sit amet,</h3>
                        <p>Lorem ipsum dolor, sit amet, consectetur adipisicing elit. Delectus suscipit molestias nisi placeat quibusdam totam cumque dolorum distinctio veritatis? Autem aliquam doloribus id nam magnam, aut non beatae ab commodi.</p>
                        <a href="#" className="btn btn-danger">Register Cta</a>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="image-with-fig">
                        <img src="https://via.placeholder.com/546x266" alt="PIC"></img>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            <div className="container">
                <div className="newsletter-outer">
                <div className="row justify-content-center">
                    <div className="col-lg-7">
                    <div className="newsletter-inner">
                        <h4>Sign up for our newsletter title</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci quis deleniti, sit nihil. Quae incidunt suscipit, aspernatur. Deserunt, eum sunt consequatur doloremque, doloribus, sit non quos vero laborum odio a?</p>
                        <div className="row justify-content-center">
                        <div className="col-md-10 col-xl-9 col-lg-10">
                            <form action="">
                            <div className="input-group input-group-lg">
                                <input type="email" className="form-control" placeholder="Email"></input>
                                <button className="btn btn-danger" type="submit" id="button-addon2">Submit</button>
                            </div>
                            </form>
                        </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </div>
    );
        };

export default Login;
