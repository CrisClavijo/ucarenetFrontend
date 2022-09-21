import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Row,Col } from 'react-bootstrap';
import './contact-us.scss';
import Facebook from '../../asset/social_media_icon/sm_icon_facebook.svg';
import Instagram from '../../asset/social_media_icon/sm_icon_inastagram.svg';
import Linkedln from '../../asset/social_media_icon/sm_icon_linkedin.svg';
import Twitter from '../../asset/social_media_icon/sm_icon_twitter.svg';
import { useFormik } from 'formik';
import { InputText } from 'primereact/inputtext';
import { Dropdown } from 'primereact/dropdown';
import { classNames } from 'primereact/utils';
import { InputTextarea } from 'primereact/inputtextarea';
import { Button } from 'primereact/button';


const ContactUs = () => {

    const [formData, setFormData] = useState({});


    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            subject: null,
            messagge: ''
        },
        validate: (data) => {
            let errors = {};

            if (!data.firstName) {
                errors['firstName'] = 'First Name is required.';
            }

            if (!data.lastName) {
                errors['lastName'] = 'Last Name is required.';
            }

            if (!data.email) {
                errors['email'] = 'Email is required.';
            }
            else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(data.email)) {
                errors['email'] = 'Invalid email address. E.g. example@email.com';
            }
            if (data.subject === null) {
                errors['subject'] = 'Select one option';
            }
            if (!data.messagge) {
                errors['messagge'] = 'Messagge is required.';
            }

            return errors;
        },
        onSubmit: (data) => {
            setFormData(data);

            formik.resetForm();
        }
    });

    const isFormFieldValid = (name) => !!(formik.touched[name] && formik.errors[name]);
    const getFormErrorMessage = (name) => {
        return isFormFieldValid(name) && <small className="p-error">{formik.errors[name]}</small>;
    };

    const subjectOptions = [
        { id:1, name:'Corporate Demo Requests'},
        { id:2, name:'Reporting Tech Issues'},
        { id:3, name:'General Questions'}
    ]

    return (
        <Row className='contact-us'>
            <Col className='content-contact p-0'>
                <div className='d-flex flex-wrap'>
                    <div className='col-lg-6 col-12 content-detail'>
                        <div className='detail-contact'>
                            <h3>Contact Us!</h3>
                            <p>Have a question or need to get in touch?</p>
                            <p>Fill out the form and our team will get back to you shortly or call us Toll-Free at</p>
                            <p className='mobile-phone'>+1 (844) 698-2273</p>
                        </div>
                        <div className='direction-contact'>UCARENET TECHNOLOGIES 140 YOUNG STREET, SUITE 200, TORONTO, ON CANADA M5P 1X6</div>
                        <div>
                            <div className='networks' >
                                <div className="icons"><img src={Linkedln} alt="img" /></div>
                                <div className="icons"><img src={Facebook} alt="img" /></div>
                                <div className="icons"><img src={Twitter } alt="img" /></div>
                                <div className="icons"><img src={Instagram} alt="img" /></div>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-6 col-12 content-form '>
                        <form onSubmit={formik.handleSubmit} className="p-fluid text-headers-input">
                            <div className='d-flex flex-wrap'>
                                <div className="field col-lg-6 col-12">
                                    <div>First Name*</div>
                                    <span className="p-float-label col-lg-11 col-12">
                                        <InputText id="firstName" name="firstName" placeholder='John' value={formik.values.firstName} onChange={formik.handleChange} autoFocus className={classNames({ 'p-invalid': isFormFieldValid('firstName') })} />
                                    </span>
                                    {getFormErrorMessage('firstName')}
                                </div>
                                <div className="field col-lg-6 col-12">
                                    <div>Last Name*</div>
                                    <span className="p-float-label">
                                        <InputText id="lastName" name="lastName" placeholder='Allen' value={formik.values.lastName} onChange={formik.handleChange} autoFocus className={classNames({ 'p-invalid': isFormFieldValid('lastName') })} />
                                    </span>
                                    {getFormErrorMessage('lastName')}
                                </div>
                            </div>
                            <div className="field mt-1">
                                <div>Email*</div>
                                <span className="p-float-label">
                                    <InputText id="email" name="email" placeholder='johnallen@youremail.com' value={formik.values.email} onChange={formik.handleChange} className={classNames({ 'p-invalid': isFormFieldValid('email') })} />
                                </span>
                                {getFormErrorMessage('email')}
                            </div>
                            <div className="field mt-1">
                                <div>Subject*</div>
                                <span className="p-float-label">
                                    <Dropdown id="subject" name="subject" placeholder='Choose a subject' value={formik.values.subject} onChange={formik.handleChange} options={subjectOptions} optionLabel="name" className={classNames({ 'p-invalid': isFormFieldValid('subject') })}/>
                                </span>
                                {getFormErrorMessage('subject')}
                            </div>
                            <div className="field mt-1">
                                <div>Messagge*</div>
                                <span className="p-float-label">
                                    <InputTextarea id="messagge" name="messagge" placeholder='Type your messagge here' rows={5} cols={30} value={formik.values.messagge} onChange={formik.handleChange} className={classNames({ 'p-invalid': isFormFieldValid('messagge') })} autoResize/>
                                </span>
                                {getFormErrorMessage('messagge')}
                            </div>
                            <div className='text-center'>
                                <Button type="submit" label="SEND MESSAGE" className="w-auto" />
                            </div>
                        </form>

                    </div>
                </div>
            </Col>
        </Row>
    );
};

export default ContactUs;