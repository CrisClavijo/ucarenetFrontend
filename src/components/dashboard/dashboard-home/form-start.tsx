import './form-start.scss';
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import React ,{ useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { useFormik } from 'formik';
import { Row, Col, InputGroup, FormControl} from 'react-bootstrap';
import { Button } from 'primereact/button';
import { Dropdown } from 'primereact/dropdown';
import { InputText } from 'primereact/inputtext';
import { SelectButton } from 'primereact/selectbutton';
import { Row as PrimeRow } from 'primereact/row';
import { Checkbox } from 'primereact/checkbox';
import { InputTextarea } from 'primereact/inputtextarea';


const FormCheckStart = () =>{
    const countrys = [
        {name: 'Canadian', code: 'CA'},
        {name: 'USA', code: 'US'},
        {name: 'Mexico', code: 'MX'},
        {name: 'China', code: 'CH'},
        {name: 'Brazil', code: 'BR'}
    ];
    const incompleteInfoForm = useFormik({
        initialValues: {
            name: "Mason Henderson",
            dateBirthDay: "10/24/1980",
            gender: 'Male',
            email: 'masonhenderson@email.com',
            phone:'1+ (647) 802-9806',
            infoCorrect: false,
            creditNum: '',
            dateCredit: '',
            cvc: '',
            fullName: '',
            address1: '',
            address2: '',
            city: '',
            province: '',
            country: null,
            zip: '',
            legal: false,
            terms: false
        },
        validate: (data) => {
            var errors = {};

            return errors;
        },
        onSubmit: (data) => {
            // setFormDataFrequency(data);
            incompleteInfoForm.resetForm();
        }
    });
    return(
        <Row className='col-lg-8 col-12 mx-auto form-start'>
            <Col lg={12}>
                <div className='text-start'>
                    <span className='title-background-check'>Background check verification with</span>
                    <span><img src="/images/care_icons/Dashboard/certn.png" alt="certn" className='logo-certn'/></span>
                </div>
            </Col>
            <Col lg={12} className='content-info-check'>
                <div className='ctn-info-check col-12'>Personal Information</div>
                <div className='d-flex flex-wrap mb-2'>
                    <div className='col-lg-6 col-12'>
                        <div className='d-flex flex-wrap'>
                            <div className='property-name col-4'>Name:</div>
                            <div className='info-text-content col-7'>{incompleteInfoForm.values.name}</div>
                        </div>
                        <div className='d-flex flex-wrap'>
                            <div className='property-name col-4'>Date of Birth:</div>
                            <div className='info-text-content col-7'>{incompleteInfoForm.values.dateBirthDay}</div>
                        </div>
                        <div className='d-flex flex-wrap'>
                            <span className='property-name col-4'>Gender:</span>
                            <span className='info-text-content col-7'>{incompleteInfoForm.values.gender}</span>
                        </div>
                    </div>
                    <div className='col-lg-6 col-12'>
                        <div className='d-flex flex-wrap'>
                            <span className='property-name col-4'>Email Address:</span>
                            <span className='info-text-content col-7'>{incompleteInfoForm.values.email}</span>
                        </div>
                        <div className='d-flex flex-wrap'>
                            <span className='property-name col-4'>Phone Number:</span>
                            <span className='info-text-content col-7'>{incompleteInfoForm.values.phone}</span>
                        </div>
                    </div>
                </div>
            </Col>
            <Col lg={12}>
                <div className='text-edit-info'>
                    If you need to correct your personal information, please edit your profile.
                </div>
                <div className='d-flex flex-wrap'>
                    <Checkbox name='infoCorrect' checked={incompleteInfoForm.values.infoCorrect} onChange={incompleteInfoForm.handleChange}/>
                    <div className='info-true-text'>Yes, this information is still true.</div>
                </div>
                <div className='line-info-check'></div>
                <div className='complete-form'>
                    Please complete the form below to continue with your background check verifcation
                </div>
            </Col>
            <Col lg={12} className='d-flex flex-wrap mb-5'>
                <div className='title-form-complete col-12'>Billing</div>
                <div className="col-12 col-lg-6 mb-4">
                    <div className='title-input-form'>Credit Card Number</div>
                    <span className="d-flex flex-wrap col-lg-11 col-12">
                                <InputText id="creditNum" name="creditNum" placeholder="4520 **** **** ****" className='col-7' value={incompleteInfoForm.values.creditNum} onChange={incompleteInfoForm.handleChange}/>
                                <InputText id="dateCredit" name="dateCredit" placeholder="MM/YY" className='col-3' value={incompleteInfoForm.values.dateCredit} onChange={incompleteInfoForm.handleChange}/>
                                <InputText id="cvc" name="cvc" placeholder="CVC" className='col-2' value={incompleteInfoForm.values.cvc} onChange={incompleteInfoForm.handleChange}/>
                            </span>
                </div>
                <div className="p-fluid col-12 col-lg-6 mb-4">
                    <div className='title-input-form'>Full Name</div>
                    <div className='col-lg-11 col-12'>
                        <InputText id="fullName" name="fullName" placeholder="First Name Last Name"  value={incompleteInfoForm.values.fullName} onChange={incompleteInfoForm.handleChange}/>
                    </div>
                </div>
                <div className="p-fluid col-12 col-lg-6 mb-4">
                    <div className='title-input-form'>Address 1</div>
                    <div className='col-lg-11 col-12'>
                        <InputText id="address1" name="address1"  value={incompleteInfoForm.values.address1} onChange={incompleteInfoForm.handleChange}/>
                    </div>
                </div>
                <div className="p-fluid col-12 col-lg-6 mb-4">
                    <div className='title-input-form'>Address 2</div>
                    <div className='col-lg-11 col-12'>
                        <InputText id="address2" name="address2"  value={incompleteInfoForm.values.address2} onChange={incompleteInfoForm.handleChange}/>
                    </div>
                </div>
                <div className="p-fluid col-12 col-lg-6 mb-4">
                    <div className='title-input-form'>City</div>
                    <div className='col-lg-11 col-12'>
                        <InputText id="city" name="city"  value={incompleteInfoForm.values.city} onChange={incompleteInfoForm.handleChange}/>
                    </div>
                </div>
                <div className="p-fluid col-12 col-lg-6 mb-4">
                    <div className='title-input-form'>Province or State</div>
                    <div className='col-lg-11 col-12'>
                        <InputText id="province" name="province"  value={incompleteInfoForm.values.province} onChange={incompleteInfoForm.handleChange}/>
                    </div>
                </div>
                <div className="p-fluid col-12 col-lg-6 mb-4">
                    <div className='title-input-form'>Country</div>
                    <div className='col-lg-11 col-12'>
                        <Dropdown
                            id="country"
                            name="country"
                            options={countrys}
                            optionLabel='name'
                            dropdownIcon="pi pi-caret-down"
                            value={incompleteInfoForm.values.country}
                            onChange={incompleteInfoForm.handleChange}
                        />
                    </div>
                </div>
                <div className="p-fluid col-12 col-lg-6 mb-4">
                    <div className='title-input-form'>Postal Code or ZIP Code</div>
                    <div className='col-lg-11 col-12'>
                        <InputText id="zip" name="zip"  value={incompleteInfoForm.values.zip} onChange={incompleteInfoForm.handleChange}/>
                    </div>
                </div>
            </Col>
            <Col lg={12}>
                <div className='title-form-complete col-12'>Verifying your identity</div>
                <div className='title-instruction-incomplete col-12'>Please add a photo of your face to verify your identity.</div>
                <div className='content-task-incomplete'>
                    <div className='text-tag-incomplete col-lg-8 col-5 ms-3'>Photo of your face</div>
                    <div className='col-lg-3 col-6 text-end'>
                        <Button label="Upload Image" icon="pi pi-plus" iconPos="left" className="p-button-rounded p-button-outlined p-button-danger " />
                    </div>
                </div>
                <div className='title-instruction-incomplete col-12'>Please upload photos of the front and back of your driver’s license to verify your identity.</div>
                <div className='content-task-incomplete'>
                    <div className='text-tag-incomplete col-lg-8 col-5 ms-3'>Front of driver’s license</div>
                    <div className='col-lg-3 col-6 text-end'>
                        <Button label="Upload Image" icon="pi pi-plus" iconPos="left" className="p-button-rounded p-button-outlined p-button-danger " />
                    </div>
                </div>
                <div className='content-task-incomplete'>
                    <div className='text-tag-incomplete col-lg-8 col-5 ms-3'>Back of driver’s license</div>
                    <div className='col-lg-3 col-6 text-end'>
                        <Button label="Upload Image" icon="pi pi-plus" iconPos="left" className="p-button-rounded p-button-outlined p-button-danger " />
                    </div>
                </div>
            </Col>
            <Col lg={12} className='content-btn-terms'>
                <div className='d-flex flex-wrap mx-auto mb-3'>
                    <Checkbox name='legal' checked={incompleteInfoForm.values.legal} onChange={incompleteInfoForm.handleChange}/>
                    <div className='text-accept-check'>Legal thing here for sharing info with CERTN (assumed we need this?)</div>
                </div>
                <div className='d-flex flex-wrap mx-auto mb-4'>
                    <Checkbox name='terms' checked={incompleteInfoForm.values.terms} onChange={incompleteInfoForm.handleChange}/>
                    <div className='text-accept-check'>I agree to uCarenet’s Terms of Use and Privacy Policy.</div>
                </div>
            </Col>
            <Col lg={12}>
                <Button label='SUBMIT & CONTINUE ON THE CERTN WEBSITE' icon='pi pi-external-link' iconPos='right' className='btn-continue-web'/>
            </Col>

            <Col xl={6} lg={10} className='content-payment-unable col-12'>
                <div className='icon-header'>
                    <i className='pi pi-exclamation-circle' style={{'fontSize': '80px'}}/>
                </div>
                <div className='text-payment'>
                    Oh no! We were unable to
                    process your payment.
                </div>
                <div className='details-payment-unable'>
                    Please review your payment information and try again.
                </div>
                <div>
                    <Button label='TRY AGAIN' className='btn-try-again'/>
                </div>
            </Col>
            <Col xl={6} lg={10} className='content-payment-unable col-12'>
                <div className='icon-header-return'>
                    <i className='pi pi-exclamation-circle' style={{'fontSize': '80px'}}/>
                </div>
                <div className='text-payment'>
                    Looks like your payment
                    is still pending.
                </div>
                <div className='details-payment-unable'>
                    Keep an eye out for an email from us once your payment is processed.
                </div>
                <div>
                    <Button label='RETURN TO DASHBOARD' className='btn-return-dashboard'/>
                </div>
            </Col>
            <Col xl={6} lg={10} className='content-payment-unable col-12'>
                <div className='icon-header'>
                    <i className='pi pi-exclamation-circle' style={{'fontSize': '80px'}}/>
                </div>
                <div className='text-payment'>
                    Oh no! We were unable to
                    process your payment.
                </div>
                <div className='details-payment-unable'>
                    Please review your payment information and try again.
                </div>
                <div>
                    <Button label='EDIT INFORMATION' className='btn-try-again'/>
                </div>
            </Col>
            <Col xl={6} lg={10} className='content-payment-unable col-12'>
                <div className='icon-header-return'>
                    <i className='pi pi-exclamation-circle' style={{'fontSize': '80px'}}/>
                </div>
                <div className='text-payment'>
                    You are about to leave the page
                    without submitting your application.
                </div>
                <div className='details-payment-unable'>
                    There are unsaved changes                </div>
                <div>
                    <Button label='GO BACK & CONTINUE' className='btn-return-dashboard'/>
                    <Button label='DISCARD & EXIT' className='p-button-outlined btn-discard-payment'/>
                </div>
            </Col>

            <Col className='content-payment-unable col-12'>
                <div className='icon-header-still'>
                    <i className='pi pi-exclamation-circle' style={{'fontSize': '80px'}}/>
                </div>
                <div className='text-payment'>
                    Looks like your payment
                    is still pending.
                </div>
                <div className='details-payment-unable'>
                    Keep an eye out for an email from us once your payment is processed.
                </div>
                <div>
                    <Button label='RETURN TO DASHBOARD' className='btn-return-dashboard-blue'/>
                </div>
            </Col>
        </Row>
    )
}
export default FormCheckStart;