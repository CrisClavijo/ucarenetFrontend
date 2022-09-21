import 'bootstrap/dist/css/bootstrap.css';
import React, { useState } from 'react';
import { useFormik } from 'formik';
import { classNames } from 'primereact/utils';
import './form-mailing.scss';

const FormMailing = () => {

    const [formData, setFormData] = useState({});
    const formRecibeEmail = useFormik({
        initialValues: {
            email: '',
            accept: false,
        },
        validate: (data) => {
            var errors = {};

            if (!data.accept) {
                errors['accept'] = 'Accept terms and conditions.';
            }

            if (data.email.length === 0) {
                errors['email'] = 'Please provide a valid email address.';
            }

            return errors;
        },
        onSubmit: (data) => {
            setFormData(data);
        }
    })
    const isFormFieldValidRecibe = (name) => !!(formRecibeEmail.touched[name] && formRecibeEmail.errors[name]);
    const getFormErrorMessageRecibeEmail = (name) => {
        return isFormFieldValidRecibe(name) && <small className="validationMsg">{formRecibeEmail.errors[name]}</small>;
    };

    return(
        <div className='mailing-form'>
            <div className="mailinglist-ad bg-section">
                <div className="content-container">
                    <h2 className='text-center'>Join our mailing list to get resources and care opportunities delivered straight to your inbox.</h2>
                    <p  className='text-center'>Sign up for our email newsletter to receive tips to ease your life as a caregiver or a family member.</p>
                    <form onSubmit={formRecibeEmail.handleSubmit}>
                        <div>
                            <label htmlFor="email">Email Address</label>
                            <input type="email" id="email" name="email" placeholder='yourname@gmail.com' onChange={formRecibeEmail.handleChange} className={classNames({ '': isFormFieldValidRecibe('email') })}/>
                            <input type="submit" name="" value="Submit"/>
                            <div className='col-12'>{getFormErrorMessageRecibeEmail('email')}</div>
                        </div>

                        <input type="checkbox" id="accept" name="accept" checked={formRecibeEmail.values.accept} onChange={formRecibeEmail.handleChange}/>
                        <label className="tlc" htmlFor="tlc">Yes, I would like to receive uCarenet's communications. </label>
                        <div className='col-12'>{getFormErrorMessageRecibeEmail('accept')}</div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default FormMailing;