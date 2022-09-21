import 'bootstrap/dist/css/bootstrap.min.css';
import { useFormik } from 'formik';
import moment from "moment";
import { Button } from 'primereact/button';
import { Checkbox } from 'primereact/checkbox';
import { Column } from 'primereact/column';
import { ColumnGroup } from 'primereact/columngroup';
import { DataTable } from 'primereact/datatable';
import { Dialog } from 'primereact/dialog';
import { Divider } from 'primereact/divider';
import { Dropdown } from 'primereact/dropdown';
import { FileUpload } from 'primereact/fileupload';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import { MultiSelect } from 'primereact/multiselect';
import { Password } from 'primereact/password';
import { RadioButton } from 'primereact/radiobutton';
import { Row as PrimeRow } from 'primereact/row';
import { Toast } from 'primereact/toast';
import { classNames } from 'primereact/utils';
import React, { useEffect, useRef, useState } from "react";
import { Col, Row } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import AvailablityService from '../../services/availablityServices';
import CaregiverService from "../../services/caregiverServices";
import LanguageServices from "../../services/languageServices";
import SkillServices from "../../services/skillsServices";
import userCaregiverServices from "../../services/userCaregiverServices";
import { availabilityClass } from '../../types/class/availablity';
import { caregiverClass } from '../../types/class/caregiver';
import { userClass } from '../../types/class/user';
import { UserExtraFieldClass } from '../../types/class/userExtraFields';
import { ImageModelClass } from '../../types/class/userProfilePic';
import Stepper from '../misc/stepper/stepper';
import './sign-up-job.scss';




const SignUpJob = () => {

    let navigate = useNavigate();

    // const goToHome =()=>{

    //     navigate('/sign-up-job')
    // }
    const daysTemplate = (elements, a) => {

        return (

            <React.Fragment>

                <div className="field-checkbox">

                    {a.field !== 'descr' ? (

                        <span>

                            <Checkbox

                                inputId={elements.aa + '_' + a.field}

                                value={elements.aa + '_' + a.field}

                                name="availability"

                                onChange={onAvailabilityChange}

                                checked={selectedHabilities.some(item => item.toString() === (elements.aa + '_' + a.field.toString()))}

                            />

                        </span>

                    ) :

                        (

                            <span>

                                {elements.descr}

                            </span>

                        )}

                </div>

            </React.Fragment>

        )

    }
    const getlocal = (key: string) => {
        return JSON.parse(localStorage.getItem(key));
    }
    const setlocal = (key: string, value: any) => {
        localStorage.setItem(key, JSON.stringify(value));

        return getlocal(key) !== null ? 1 : 0;
    }


    const [activeIndex, setActiveIndex] = useState(1);
    const [lastIndex, setLastIndex] = useState(false);
    const toast = useRef(null);
    const items = [
        {
            label: 'ACCOUNT',
            command: (event) => {
            }
        },
        {
            label: 'ACCOUNT INFO',
            command: (event) => {
            }
        },
        {
            label: 'INTERESTS',
            command: (event) => {
            }
        },
        {
            label: 'AVAILABILITY',
            command: (event) => {
            }
        },
        {
            label: 'PROFILE',
            command: (event) => {
            }
        }
    ];

    const [formData, setFormData] = useState({});
    const [formDataStepInfo, setFormDataStepInfo] = useState({});
    const [formDataProfile, setFormDataProfile] = useState({});
    const [showMessage, setShowMessage] = useState(false);
    const [firstName, setFirstName] = useState('');
    const [emailusr, setemailUsr] = useState('');
    const dialogFooter = <div className="flex justify-content-center"><Button label="OK" className="p-button-text" autoFocus onClick={() => setShowMessage(false)} /></div>;

    // const categories = [{name: 'Bathing & Toileting', key: 'A'}, {name: 'Companionship', key: 'M'}, {name: 'Dressing', key: 'L'}, {name: 'Encouragement', key: 'R'}, {name: 'Exercise', key: 'X'}, {name: 'General Care', key: 'Z'}, {name: 'Hygiene & Grooming', key: 'D'}, {name: 'Light Housekeeping', key: 'F'}, {name: 'Meal Preparation', key: 'N'}, {name: 'Medication Reminders', key: 'Y'}, {name: 'Transportation', key: 'W'}, {name: 'Going for Walks', key: 'Q'}];

    // const habilities = [
    //     {all: false, dayOfDay:'Morning', mon:true, tues:true, wed:false, thu:true, fri:false, sat:true, sun:false, key: 'A'},
    //     {all: true, dayOfDay:'Afternoon', mon:true, tues:true, wed:false, thu:true, fri:false, sat:true, sun:false, key: 'B'},
    //     {all: true, dayOfDay:'Evening', mon:true, tues:true, wed:false, thu:true, fri:false, sat:true, sun:false, key: 'C'},
    //     {all: true, dayOfDay:'OverNight',mon:true, tues:true, wed:false, thu:true, fri:false, sat:true, sun:false, key: 'D'}
    // ];

    let habilities = [
        { aa: 1, descr: "Morning", weekdays: [{ aa: 1, descr: "Mon", check: false }, { aa: 2, descr: "Tue", check: false }, { aa: 3, descr: "Wed", check: false }, { aa: 4, descr: "Thu", check: false }, { aa: 5, descr: "Fri", check: false }, { aa: 6, descr: "Sat", check: false }, { aa: 7, descr: "Sun", check: false }] },
        { aa: 2, descr: "Afternoon", weekdays: [{ aa: 1, descr: "Mon", check: false }, { aa: 2, descr: "Tue", check: false }, { aa: 3, descr: "Wed", check: false }, { aa: 4, descr: "Thu", check: false }, { aa: 5, descr: "Fri", check: false }, { aa: 6, descr: "Sat", check: false }, { aa: 7, descr: "Sun", check: false }] },
        { aa: 3, descr: "Evening", weekdays: [{ aa: 1, descr: "Mon", check: false }, { aa: 2, descr: "Tue", check: false }, { aa: 3, descr: "Wed", check: false }, { aa: 4, descr: "Thu", check: false }, { aa: 5, descr: "Fri", check: false }, { aa: 6, descr: "Sat", check: false }, { aa: 7, descr: "Sun", check: false }] },
        { aa: 4, descr: "Overnight", weekdays: [{ aa: 1, descr: "Mon", check: false }, { aa: 2, descr: "Tue", check: false }, { aa: 3, descr: "Wed", check: false }, { aa: 4, descr: "Thu", check: false }, { aa: 5, descr: "Fri", check: false }, { aa: 6, descr: "Sat", check: false }, { aa: 7, descr: "Sun", check: false }] }
    ];


    const [selectedHabilities, setSelectedHabilities] = useState(habilities.slice(0, 0));
    const [interest, setinterest] = useState([{"name":"","id":""}]);

    const [selectedInterest, setSelectedInterest] = useState(interest.slice(0,0));
    const onInterestChange = (e) => {
        let _selectedInterest = [...selectedInterest];

        const index = _selectedInterest.findIndex(item => item.id === e.id);
        if(index>=0){
            _selectedInterest.splice(index, 1);
        }else{
            _selectedInterest.push(e);
        }
        setSelectedInterest(_selectedInterest);
    }



    const onAvailabilityChange = (e) => {
        let _selectedHabilities = [...selectedHabilities];

        if (e.checked) {
            _selectedHabilities.push(e.value);
        }
        else {
            for (let i = 0; i < _selectedHabilities.length; i++) {
                const selectedAvailability = _selectedHabilities[i];

                if (selectedAvailability === e.value) {
                    _selectedHabilities.splice(i, 1);
                    break;
                }
            }
        }
        setSelectedHabilities(_selectedHabilities);
        //  console.log(selectedHabilities);


    }

    const formikProfile = useFormik({
        initialValues: {
            header: '',
            byography: ''
        },
        validate: (data) => {
            var errors = {};
            if (data.header.length < 30) {
                errors['header'] = 'Title length must be greater than 30 characters';
            }
            if (!data.header) {
                errors['header'] = 'Title is required.';
            }
            if (data.byography.length < 20) {
                errors['byography'] = 'Description length must be greater than 20 characters';
            }
            if (!data.byography) {
                errors['byography'] = 'Description is required.';
            }

            return errors;
        },
        onSubmit: (data) => {
            setFormDataProfile(data);
            // setActiveIndex(activeIndex+1);
            //formik.resetForm();
            // setLastIndex(true);
            formDataProfileSet(data);
        }
    });
    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            city: '',
            postalCode: '',
            phoneNumber: '',
            password: '',
            confirmPassword: '',
            aboutCheck: null,
            receiveEmail: false,
            acceptTerms: false
        },

        validate: (data) => {
            var errors = {};
        
            if (!data.firstName) {
                errors['firstName'] = 'First Name is required.';
            }
            if (!data.lastName) {
                errors['lastName'] = 'Last Name is required.';
            }
            if (!data.city) {
                errors['city'] = 'City is required.';
            }
            if (!data.postalCode) {
                errors['postalCode'] = 'Postal code is required.';
            }

            if (!data.email) {
                errors['email'] = 'Email is required.';
            }
            else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(data.email)) {
                errors['email'] = 'Invalid email address. E.g. example@email.com';
            }

            if (!data.phoneNumber) {
                errors['phoneNumber'] = 'Phone number is required.';
            }
            else if (!/[0-9]/i.test(data.phoneNumber)) {
                errors['phoneNumber'] = 'Phone number is incorrect';
            }
            else if (data.phoneNumber.length < 10) {
                errors['phoneNumber'] = 'Phone number must have 10 digits';
            }

            if (!data.password) {
                errors['password'] = 'Password is required.';
            }
            if (!data.confirmPassword) {
                errors['confirmPassword'] = 'Confirm password is required.';
            }
            else if (data.password !== data.confirmPassword) {
                errors['confirmPassword'] = 'Passwords dont match.';
            }

            if (data.aboutCheck === null) {
                errors['aboutCheck'] = 'Select an option';
            }
            if(!data.receiveEmail){
                errors['receiveEmail'] = 'Accept to recive email notifications';
            }
            if(!data.acceptTerms){
                errors['acceptTerms'] = 'Accept the terms and conditions';
            }


            return errors;
        },
        onSubmit: (data) => {
             // console.log(data);
            // setActiveIndex(activeIndex+1);
            setFormData(data);

            registerUser(data);

        }
    });
    const formikStepInfo = useFormik({
        initialValues: {
            hourlyRate: '',
            yearsExp: '',
            distance: '',
            language: null,
            credentials: null,
            provide: null,
            optionYesNo: null,
            category: null,
            accept: true,
            acceptCovid: true,
            optionYesNoCovid: null
        },

        validate: (data) => {
            var errors = {};

            if (!data.hourlyRate) {
                errors['hourlyRate'] = 'Hourly rate is required.';
            }
            else if (!/[0-9]/i.test(data.hourlyRate)) {
                errors['hourlyRate'] = 'Hourly rate is incorrect';
            }

            if (!data.yearsExp) {
                errors['yearsExp'] = 'Years experience is required.';
            }
            else if (!/[0-9]/i.test(data.hourlyRate)) {
                errors['yearsExp'] = 'Years experience is incorrect';
            }

            if (!data.distance) {
                errors['distance'] = 'Distance is required.';
            }
            else if (!/[0-9]/i.test(data.hourlyRate)) {
                errors['distance'] = 'Distance is incorrect';
            }

            if (data.language === null) {
                errors['language'] = 'Select all that apply';
            }

            if (data.credentials === null) {
                errors['credentials'] = 'Select all that apply';
            }

            if (data.provide === null) {
                errors['provide'] = 'Select all that apply';
            }

            if (data.optionYesNo === null) {
                errors['optionYesNo'] = 'Select one option';
            }
            if (data.optionYesNoCovid === null) {
                errors['optionYesNoCovid'] = 'Select one option';
            }

            if (selectedCategories.length === 0) {
                errors['category'] = 'Select all that apply';
            }

            return errors;
        },
        onSubmit: (data) => {
            setFormDataStepInfo(data);
            // console.log(data)
            setCGData(data);

            //setActiveIndex(activeIndex+1);
            //formikStepInfo.resetForm();
        }
    });
    const formikTasks = useFormik({
        initialValues: {
            interests: {}
        },
        validate: (data) => {
            var errors = {};
            if (selectedInterest.length ===0) {
                errors['interests'] = 'Select an option';
            }
            return errors;
        },
        onSubmit: (data) => {
            setFormDataProfile(data);
            //setActiveIndex(activeIndex+1);
            // formikTasks.resetForm();
            //  console.log(selectedMobilities);
            //  console.log(selectedInterest);
            // UpdateSeniorProfile();
        }
    });
    const isFormFieldValidTasks = (name) => !!(formikTasks.touched[name] && formikTasks.errors[name]);
    const getFormErrorMessageTasks = (name) => {
        return isFormFieldValidTasks(name) && <small className="p-error">{formikTasks.errors[name]}</small>;
    };
    const formDataProfileSet = (data) => {

        let caregiverData = new caregiverClass();

        caregiverData = getlocal("regInfoCg");

        if (caregiverData !== null && caregiverData.user.hasPicture === 1) {
            caregiverData.profileTitle = data.header;
            caregiverData.description = data.byography;

            CaregiverService.updateCaregiver(caregiverData)
                .then(res => {
                    if (res.message !== "error" && res.message !== "inc pass") {
                        if (setlocal("regInfoCg", caregiverData) === 1) {
                            toast.current.show({ severity: 'success', summary: 'Profile updated successfully', detail: 'Profile title and description saved successfully.', life: 3000 });
                            localStorage.clear();    
                            setActiveIndex(activeIndex + 1);
                            setLastIndex(true);
                        }

                    }

                })
        } else {
            //    Picture Not uploaded
            toast.current.show({ severity: 'error', summary: 'Profile picture is missing ', detail: 'Profile picture is mendatory.', life: 3000 });

        }

    }
    let caregiverSet = new caregiverClass();
    const setCGData = (data) => {

        let cgLocal = getlocal("regInfo") || "";
        if (cgLocal) {
            const thisData = cgLocal;
            const cgRes =
            {

                "filterCaregiver":
                {
                    "Id": (thisData !== null ? thisData.UsrID : ""),
                    City: "/caregiver_userid/"
                },
                offset: 0,
                pagesize: 0
            }


            CaregiverService.getCaregiversByFilter(cgRes)
                .then(response => {

                    //console.log(response);
                    //console.log(data);
                    if (response.data.success === true && response.data.result.caregivers.length >0 ) {
                        caregiverSet = response.data.result.caregivers[0];
                        caregiverSet.desiredWage = data.hourlyRate;
                        caregiverSet.availabilityDistance = data.distance;
                        caregiverSet.yearsOfExperience = data.yearsExp;
                        setFirstName(caregiverSet.user.firstName);
                        setemailUsr(caregiverSet.user.email);
                        updateCgInfo(caregiverSet, data);


                    }
                    else{
                        localStorage.clear();
                        toast.current.show({ severity: 'error', summary: 'Profile Error', detail: 'Registration data was not found please start again', life: 6000 });
                        window.location.reload()


                    }

                })

                .catch(error => {

                    console.error('There was an error!', error);
                });

        }




    };

    const updateCgInfo = (caregiver, thisData) => {


        CaregiverService.updateCaregiver(caregiver)
            .then(res => {
                if (res.message !== "error" && res.message !== "inc pass") {
                    //console.log(res ) 
                    setlocal('regInfoCg', caregiver);
                    let countTotalSkills = 0, totalCount = 0;


                    totalCount = selectedCategories.length + thisData.credentials.length + thisData.provide.length + thisData.language.length;
                    if (thisData.language.length > 0) {
                        thisData.language.forEach(e => {
                            userCaregiverServices.insertUserLanguages({ userID: caregiver.user.id, languageID: e.id });
                            countTotalSkills++;
                        });
                    }
                    if (thisData.provide.length > 0) {
                        thisData.provide.forEach(e => {
                            CaregiverService.insertCaregiverSkills({ caregiverID: caregiver.id, skillID: e.id });
                            countTotalSkills++;
                        });

                    }
                    if (thisData.credentials.length > 0) {

                        thisData.credentials.forEach(e => {
                            CaregiverService.insertCaregiverSkills({ caregiverID: caregiver.id, skillID: e.id });
                            countTotalSkills++;
                        });
                    }
                    if (selectedCategories.length > 0) {
                        selectedCategories.forEach(e => {
                            CaregiverService.insertCaregiverSkills({ caregiverID: caregiver.id, skillID: e.id });
                            countTotalSkills++;
                        });
                    }


                    if (countTotalSkills === totalCount) {
                        setActiveIndex(activeIndex + 1);
                        //    console.log("True");    

                    }

                }

            })
            .catch(e => {
                console.error("Error Updating records", e)
            });
    }
    const isFormFieldValid = (name) => !!(formik.touched[name] && formik.errors[name]);
    const getFormErrorMessage = (name) => {
        return isFormFieldValid(name) && <small className="p-error">{formik.errors[name]}</small>;
    };

    const isFormFieldValidStepInfo = (name) => !!(formikStepInfo.touched[name] && formikStepInfo.errors[name]);
    const getFormErrorMessageStepInfo = (name) => {
        return isFormFieldValidStepInfo(name) && <small className="p-error">{formikStepInfo.errors[name]}</small>;
    };

    const isFormFieldValidProfile = (name) => !!(formikProfile.touched[name] && formikProfile.errors[name]);
    const getFormErrorMessageProfile = (name) => {
        return isFormFieldValidProfile(name) && <small className="p-error">{formikProfile.errors[name]}</small>;
    };

    const registerUser = (data) => {
        let usr = new userClass();
      
        usr.registrationDate = (moment(Date.now())).format('YYYY-MM-DD HH:mm:ss');
        usr.userRoleID = "75077B6A-5329-4277-BB85-02A8643B3989"
        usr.registerationChannel = "W"
        usr.phone = data.phoneNumber
        usr.firstName = data.firstName
        usr.lastName = data.lastName
        usr.password = data.confirmPassword
        usr.email = data.email
        
      

        const usrEx = new UserExtraFieldClass();
        userCaregiverServices.create({ User: usr })
            .then(response => {
                //console.log(response)

                if (response.data.success === true && response.data.result.message === "duplicate") { setShowMessage(true); }
                if (response.data.success === true && response.data.result.message !== "duplicate") {
                    let userJson = getlocal('regInfo');
                    if (userJson) {

                        let regData = userJson;
                        regData.UsrID = response.data.result.id2;
                        regData.TypeID = response.data.result.id;
                        regData.FirstName = usr.firstName;
                        regData.LastName = usr.lastName;
                        setlocal('regInfo', regData);
                        if (getlocal('regInfo')) {

                            userJson = getlocal('regInfo');
                            regData = userJson;
                            if (regData.UsrID.length > 0 && regData.TypeID.length > 0) {
                                usrEx.id = regData.UsrID;
                                usrEx.howYouHearedAboutUs = data.aboutCheck.name;
                                usrEx.userType = regData.Type === "CG" ? "caregiver" : "careseeker";
                                userCaregiverServices.insertExtraRecUser(usrEx)
                                    .then(result => {
                                        if (result.data.success && result.data.result.message === "" && result.data.result.id.length > 0) {
                                            setActiveIndex(activeIndex + 1);
                                            //formik.resetForm();
                                            callLanguageList();

                                        }



                                    })
                                    .catch(e => {

                                        // console.log(e);
                                    })
                            }
                        }
                    }


                }

            })
            .catch(error => {

                console.error('There was an error!', error);
            });






    };


    const passwordHeader = <h6>Pick a password</h6>;
    const passwordFooter = (
        <React.Fragment>
            <Divider />
            {/* <p className="mt-2">Suggestions</p>
            <ul className="pl-2 ml-2 mt-0" style={{ lineHeight: '1.5' }}>
                <li>At least one lowercase</li>
                <li>At least one uppercase</li>
                <li>At least one numeric</li>
                <li>Minimum 8 characters</li>
            </ul> */}
        </React.Fragment>
    );

    let headerGroup = <ColumnGroup>
        <PrimeRow>
            <Column header="" className="day-title" hidden />
            <Column header="" className="day-title" />
            <Column header="MON" className="day-title" />
            <Column header="TUES" className="day-title" />
            <Column header="WED" className="day-title" />
            <Column header="THU" className="day-title" />
            <Column header="FRI" className="day-title" />
            <Column header="SAT" className="day-title" />
            <Column header="SUN" className="day-title" />
        </PrimeRow>
    </ColumnGroup>;

    const customItemTemplate = (file, props) => {
        // file: Current file object.
        // options.onRemove: Event used to remove current file in the container.
        // options.previewElement: The default preview element in the container.
        // options.fileNameElement: The default fileName element in the container.
        // options.sizeElement: The default size element in the container.
        // options.removeElement: The default remove element in the container.
        // options.formatSize: The formated size of file.
        // options.files: Current files.
        // options.index: The index of file in current files list.
        // options.element: Default element created by the component.
        // options.props: component props.
        <div>
            hello
        </div>
    }
    const [image, setImage] = useState(String);

    const getBase64 = (file, cb) => {
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function () {
            cb(reader.result)
        };
        reader.onerror = function (error) {
            console.log('Error: ', error);
        };
    }
    const myUploader = (event) => {
        //event.files == files to upload
        setImage(event.files[0].objectURL);
        //convert to base 64
        const file = event.files[0];

        getBase64(file, (result) => {

            //console.log(blob);
            let a = new ImageModelClass();
            const ext = "png";
            const extBase64 = event.files[0].type.substring(event.files[0].type.indexOf('/') + 1);
            a.targetFilename = getlocal('regInfoCg') !== null ? getlocal('regInfoCg').user.id + '.' + ext : '';
            a.imageData = result.toString();
            a.imageData = a.imageData.replace(extBase64, "png");
            //console.log(a.imageData)

            userCaregiverServices.uploadImage(a)
                .then((res) => {
                    if (res.data.result === "File Saved" && res.data.success === true) {
                        var dataProfileTitleImage = getlocal("regInfoCg");
                        let dataCGReg = new caregiverClass();

                        dataCGReg = dataProfileTitleImage;
                        if (dataCGReg.id !== null && dataCGReg.user.id !== null) {
                            dataCGReg.user.hasPicture = 1;
                            setlocal("regInfoCg", dataCGReg);


                        }
                        else {

                            dataCGReg.user.hasPicture = 0;
                            setlocal("regInfoCg", dataCGReg);
                        }


                    }
                })
        });



    }

    const chooseObject = {
        className: "p-button-rounded p-button-outlined p-button-danger"
    }

    const aboutOptions = [
        { name: 'Ad', code: 'AD' },
        { name: 'Facebook', code: 'FACE' },
        { name: 'Instagram', code: 'INST' },
        { name: 'LinkedIn', code: 'LINK' },
        { name: 'Search Engine', code: 'SEARCH' },
        { name: 'Referral from a clinic', code: 'REFER' },
        { name: 'Other', code: 'OTHER' }
    ];
    // const provideOptions = [
    //     { name: 'Alzheimers Care', code: 'ALZ' },
    //     { name: 'Dementia Care', code: 'DEM' },
    //     { name: 'Diabetes Care', code: 'DIAB' },
    //     { name: 'Elder Care', code: 'ELDER' },
    //     { name: 'Cancer Care', code: 'CANC' },
    //     { name: 'Foster Independence', code: 'FOS' },
    //     { name: 'Loneliness', code: 'LON' },
    //     { name: 'Old Age', code: 'OLD' },
    //     { name: 'Palliative Care', code: 'PALLI' },
    //     { name: 'Parkinsons Care', code: 'PARK' },
    //     { name: 'Post-Surgical Care', code: 'POST' },
    //     { name: 'Stroke Care', code: 'STROKE' }
    // ];

    // const credentialsOptions = [
    //     { name: 'Companion Keeper', code: 'KEEP' },
    //     { name: 'Chiropractor', code: 'CHI' },
    //     { name: 'Personal Support Worker (PSW)', code: 'SUPPORT' },
    //     { name: 'Registered Nurse (RN)', code: 'NURSE' },
    //     { name: 'Registered Massage Therapist', code: 'THERA' },
    //     { name: 'Registered Nurse Practitioner (RNP)', code: 'NPRACT' },
    //     { name: 'Physiotherapist', code: 'PHY' }
    // ];

    const callLanguageList = () => {
        const LangInput = { "offset": 0, "pagesize": 0 };
        LanguageServices.getAll(LangInput)
            .then((res) => {
                if (res.data.result.languages.length > 0) {
                    Getlanguages(res.data.result.languages);

                }
            })

    };
    let skillsAll: { id: string, "name": string, "sortOrder": number, "category": number }[] = [];
    const callSkillsList = () => {
        const skillsInput = { "offset": 0, "pagesize": 0 };
        SkillServices.getAll(skillsInput)
            .then((res) => {
                if (res.data.result.skills.length > 0) {
                    skillsAll = res.data.result.skills;
                    //cat = 0
                    skillsAll.sort((a, b) => {


                        if (a.name > b.name) {
                            return 1;
                        }

                        if (a.name < b.name) {
                            return -1;
                        }

                        return 0;

                    })
                    GetSkillsCat0(skillsAll.filter(e => e.category === 0));
                    GetSkillsCat1(skillsAll.filter(e => e.category === 1));
                    GetSkillsCat2(skillsAll.filter(e => e.category === 2));

                    //cat=1




                }
            })

    };

    const [languages, Getlanguages] = useState([{ "id": "", "name": "" }]);
    const [credentialsOptions, GetSkillsCat0] = useState([{ "id": "", "name": "", "sortOrder": 0, "category": 0 }]);
    const [provideOptions, GetSkillsCat1] = useState([{ "id": "", "name": "", "sortOrder": 0, "category": 1 }]);
    const [categories, GetSkillsCat2] = useState([{ "id": "", "name": "", "sortOrder": 0, "category": 2 }]);
    const [selectedCategories, setSelectedCategories] = useState(categories.slice(0, 0));
    const onCategoryChange = (e) => {
        let _selectedCategories = [...selectedCategories];

        if (e.checked) {
            _selectedCategories.push(e.value);
        }
        else {
            for (let i = 0; i < _selectedCategories.length; i++) {
                const selectedCategory = _selectedCategories[i];

                if (selectedCategory.id === e.value.id) {
                    _selectedCategories.splice(i, 1);
                    break;
                }
            }
        }

        setSelectedCategories(_selectedCategories);
    }
    useEffect(() => {
        callLanguageList();
        callSkillsList();
    }, []);


    const handleClick = () => {

        //console.log(selectedHabilities);

        if (selectedHabilities.length > 0) {
            let dataAvailablityArray: any = selectedHabilities;
            dataAvailablityArray.forEach(element => {
                //  console.log(element);
                // console.log(element.substring(0,1));
                // console.log(element.substring(2,5));
                for (var i = 0; i <= habilities.length - 1; i++) {
                    for (var j = 0; j <= habilities[i].weekdays.length - 1; j++) {
                        if (habilities[i].aa.toString() === element.substring(0, 1) && habilities[i].weekdays[j].descr === element.substring(2, 5)) {
                            habilities[i].weekdays[j].check = true;

                        }

                    }
                }
            });
            // console.log(habilities);
        }

        let counterCheck = 0, counterChecktrue = 0, counterCheckFalse = 0;
        habilities.forEach(item => {
            let myObj = item.weekdays;
            myObj.forEach(subItem => {

                counterCheck++;
                if (subItem.check === true) {

                    // $scope.caregiver.user.availability.push({ userid: usid, fromhour: hour, tohour: hour, dayofweek: day });
                    const cg: caregiverClass = getlocal('regInfoCg');

                    if (cg.user.id !== null) {
                        let avail = new availabilityClass()
                        avail.id = cg.user.id;
                        avail.fromHour = item.aa.toString();
                        avail.toHour = item.aa.toString();
                        avail.dayOfWeek = subItem.aa;
                        AvailablityService.insertCaregiverAvailablity(avail)
                            .then(res => {
                                if (res.data.result.message === "") {
                                    counterChecktrue++;
                                    if (counterChecktrue === selectedHabilities.length) {
                                        setActiveIndex(activeIndex + 1)


                                    }
                                }

                            })
                    }
                }
                else {
                    counterCheckFalse++;

                }
            })
        });

        // console.log('totalCounter',counterCheck);
        // console.log('truecounter',counterChecktrue);
        // console.log('falseCounter',counterCheckFalse);
        //     // let valuesCopy: string[] =[];

        //     // selectedHabilities.forEach(element => {
        //     //     valuesCopy.push(element.toString());
        //     // });
        //     // //valuesCopy = selectedHabilities.toString();
        //     // console.log(valuesCopy);

        //      //setActiveIndex(activeIndex+1)
    }
    const backStepper = () => {
        setActiveIndex(activeIndex - 1)
    }

    return (
        <>
            <Toast ref={toast}></Toast>

            <Row className="col-lg-12 col-12 mx-auto">
                <Col lg={12} className="p-0 col-12">
                    <div className="container">
                        <Row>
                                <Col>
                                    <Stepper model={5} activeIndex={activeIndex} setActiveIndex={setActiveIndex} lastIndex={lastIndex} list={items} />
                                    <div className="container">
                                        {
                                            activeIndex === 1 && (
                                                <div className="sign-up-page ">
                                                    <Dialog visible={showMessage} onHide={() => setShowMessage(false)} position="top" footer={dialogFooter} showHeader={false} breakpoints={{ '960px': '80vw' }} style={{ width: '30vw' }}>
                                                        <div className="flex justify-content-center flex-column pt-6 px-3" style={{ textAlign: 'center', paddingTop: '45px' }}>
                                                            <i className="pi pi-times-circle" style={{ fontSize: '5rem', color: 'var(--red-500)' }}></i>
                                                            <h5 style={{ paddingTop: '10px' }}>Email Already Exists!</h5>
                                                            <p style={{ lineHeight: 1.5, textIndent: '1rem' }}>
                                                                {/* Your account is registered under name <b>{formData.email}</b> ; it'll be valid next 30 days without activation. Please check <b>{formData.email}</b> for activation instructions. */}
                                                            </p>
                                                        </div>
                                                    </Dialog>
                                                    <Row className="text-start justify-content-center col-lg-10 col-12 mx-auto" >
                                                        <div className="text-start create-account-cotainer p-0">
                                                            <div>
                                                                Create Your Account
                                                            </div>
                                                            <div className="subtitle-create-account">
                                                                Create a free account to get matched with and connect with careseekers.
                                                            </div>
                                                        </div>
                                                        <div className="title-basic-form p-0">
                                                            Personal Info
                                                        </div>
                                                        <form className="p-fluid header-title-input" onSubmit={formik.handleSubmit}>
                                                            <Row className="field name-container">
                                                                <Col lg={6} className="field col-12">
                                                                    <div>First Name*</div>
                                                                    <span className="p-float-label">
                                                                        <InputText id="firstName" name="firstName" placeholder="John" value={formik.values.firstName} onChange={formik.handleChange} autoFocus className={classNames({ 'p-invalid': isFormFieldValid('firstName') })} />
                                                                    </span>
                                                                    {getFormErrorMessage('firstName')}
                                                                </Col>
                                                                <Col lg={6} className="field col-12">
                                                                    <div>Last Name*</div>
                                                                    <span className="p-float-label">
                                                                        <InputText id="lastName" name="lastName" placeholder="Allen" value={formik.values.lastName} onChange={formik.handleChange} autoFocus className={classNames({ 'p-invalid': isFormFieldValid('lastName') })} />
                                                                        {getFormErrorMessage('lastName')}
                                                                    </span>
                                                                </Col>
                                                            </Row>
                                                            <Col className="field container-input">
                                                                <div>Email*</div>
                                                                <span className="p-float-label p-input-icon-right">
                                                                    <InputText id="email" name="email" placeholder="johnallen@youremail.com" value={formik.values.email} onChange={formik.handleChange} className={classNames({ 'p-invalid': isFormFieldValid('email') })} />
                                                                </span>
                                                                {getFormErrorMessage('email')}
                                                            </Col>
                                                            <Col className="field container-input">
                                                                <div>City*</div>
                                                                <span className="p-float-label p-input-icon-right">
                                                                    <InputText id="city" name="city" placeholder="E.g. Toronto" value={formik.values.city} onChange={formik.handleChange} className={classNames({ 'p-invalid': isFormFieldValid('city') })} />
                                                                </span>
                                                                {getFormErrorMessage('city')}
                                                            </Col>
                                                            <Col className="field container-input">
                                                                <div>Postal Code*</div>
                                                                <span className="p-float-label p-input-icon-right">
                                                                    <InputText id="postalCode" name="postalCode" placeholder="X1X 2Y2" value={formik.values.postalCode} onChange={formik.handleChange} className={classNames({ 'p-invalid': isFormFieldValid('postalCode') })} />
                                                                </span>
                                                                {getFormErrorMessage('postalCode')}
                                                            </Col>
                                                            <Col className="field container-input">
                                                                <div>Phone Number</div>
                                                                <span className="p-float-label">
                                                                    <InputText maxLength={10} id="phoneNumber" name="phoneNumber" placeholder="0000000000" value={formik.values.phoneNumber} onChange={formik.handleChange} autoFocus className={classNames({ 'p-invalid': isFormFieldValid('phoneNumber') })} />
                                                                </span>
                                                                {getFormErrorMessage('phoneNumber')}
                                                            </Col>
                                                            <Col className="field container-input">
                                                                <div>Create a Password*</div>
                                                                <span className="p-float-label">
                                                                    <Password id="password" name="password" value={formik.values.password} onChange={formik.handleChange} toggleMask
                                                                        className={classNames({ 'p-invalid': isFormFieldValid('password') })} header={passwordHeader} footer={passwordFooter} />
                                                                </span>
                                                                {getFormErrorMessage('password')}
                                                            </Col>
                                                            <Col className="field container-input">
                                                                <div>Confirm Password*</div>
                                                                <span className="p-float-label">
                                                                    <Password id="confirmPassword" name="confirmPassword" value={formik.values.confirmPassword} onChange={formik.handleChange} toggleMask
                                                                        className={classNames({ 'p-invalid': isFormFieldValid('confirmPassword') })} header={passwordHeader} footer={passwordFooter} />
                                                                </span>
                                                                {getFormErrorMessage('confirmPassword')}
                                                            </Col>
                                                            <Col className="field container-input">
                                                                <div>How did you hear about us?</div>
                                                                <span className="p-float-label">
                                                                    <Dropdown id="aboutCheck" name="aboutCheck" dropdownIcon="pi pi-caret-down" value={formik.values.aboutCheck} options={aboutOptions} onChange={formik.handleChange} optionLabel="name" placeholder="Select an option..." className={classNames({ 'p-invalid': isFormFieldValid('aboutCheck') })} />
                                                                </span>
                                                                {getFormErrorMessage('aboutCheck')}
                                                            </Col>
                                                            <Col>
                                                                <div className="therms-and-privacy flex-wrap d-flex mx-auto align-items-center col-lg-10">
                                                                    <Checkbox inputId="receiveEmail" name="receiveEmail" checked={formik.values.receiveEmail} onChange={formik.handleChange} className={classNames({ 'p-invalid': isFormFieldValid('receiveEmail') })} />
                                                                    <div className="text-start col-lg-11 space-checkbox">
                                                                        I agree to receive email notifications for newsletters, resources,
                                                                        product news, updates and other communications from uCarenet.</div>
                                                                    <div className="col-lg-12 text-start">{getFormErrorMessage('receiveEmail')}</div>
                                                                </div>
                                                            </Col>
                                                            <Col>
                                                                <div className="therms-and-privacy d-flex mx-auto col-lg-10 flex-wrap">
                                                                    <Checkbox inputId="acceptTerms" name="acceptTerms" checked={formik.values.acceptTerms} onChange={formik.handleChange} className={classNames({ 'p-invalid': isFormFieldValid('acceptTerms') })} />
                                                                    <div className="d-flex justify-content-center space-checkbox">
                                                                        <p>I agree to uCarenet's&nbsp; </p>
                                                                        <p className="line-down">Terms of Use </p>
                                                                        <p> &nbsp; and &nbsp;</p>
                                                                        <p className="line-down"> Privacy Policy</p>


                                                                    </div>
                                                                    <div className="col-lg-12 text-start">{getFormErrorMessage('acceptTerms')}</div>
                                                                </div>

                                                            </Col>

                                                            <Col>
                                                                <Button type="submit" label="CREATE ACCOUNT" className="button-save-continue" />
                                                            </Col>
                                                            <Col>
                                                                <div className="text-content-already d-flex justify-content-center">
                                                                    Already have an account?&nbsp;
                                                                    <p className="line-down">  Sign in.</p>
                                                                </div>
                                                            </Col>
                                                        </form>
                                                    </Row>
                                                </div>

                                            )}
                                        {
                                            activeIndex === 2 && (
                                                <div className="text-start justify-content-center col-lg-10 col-12 mx-auto sign-up-page">
                                                    <Row className="text-start create-account-cotainer">
                                                        <Col className="p-0">
                                                            <div>
                                                                Account Information
                                                            </div>
                                                            <div className="subtitle-create-account">
                                                                Let us know a little bit about youself to pair you with the right Careseeker.
                                                            </div>
                                                        </Col>
                                                    </Row>
                                                    <div className="title-basic-form col-lg-12"></div>
                                                    <form className="p-fluid header-title-box" onSubmit={formikStepInfo.handleSubmit}>
                                                        <Row>
                                                            <Col className="field container-input col-lg-7 col-12 p-0">
                                                                <div className="space-title">Hourly Rate</div>
                                                                <span className="p-float-label d-flex align-items-center col-lg-11">
                                                                    <InputText id="hourlyRate" name="hourlyRate" placeholder="Enter a numerical amount*" onChange={formikStepInfo.handleChange} autoFocus className={classNames({ 'p-invalid': isFormFieldValid('hourlyRate') })} />
                                                                    <div className="col-lg-1 ms-2">/hour</div>
                                                                </span>
                                                                {getFormErrorMessageStepInfo('hourlyRate')}
                                                            </Col>
                                                            <Col className="field container-input col-lg-7 col-12 p-0">
                                                                <div className="space-title">Years of Experience</div>
                                                                <span className="p-float-label col-lg-10">
                                                                    <InputText id="yearsExp" name="yearsExp" placeholder="Enter number of years*" onChange={formikStepInfo.handleChange} autoFocus className={classNames({ 'p-invalid': isFormFieldValid('yearsExp') })} />
                                                                </span>
                                                                {getFormErrorMessageStepInfo('yearsExp')}
                                                            </Col>
                                                            <Col className="field container-input col-lg-7 col-12 p-0">
                                                                <div className="space-title">Distance You Can Travel</div>
                                                                <span className="p-float-label d-flex align-items-center col-lg-11">
                                                                    <InputText id="distance" name="distance" placeholder="Enter a number*" onChange={formikStepInfo.handleChange} value={formikStepInfo.values.distance} autoFocus className={classNames({ 'p-invalid': isFormFieldValid('distance') })} />

                                                                    <div className="col-lg-1 ms-2">km</div>
                                                                </span>
                                                                {getFormErrorMessageStepInfo('distance')}
                                                            </Col>
                                                            <Col className="field container-input col-lg-12 p-0">
                                                                <div className="space-title">What language(s) do you speak?</div>
                                                                <span className="p-float-label">
                                                                    <MultiSelect id="language" dropdownIcon="pi pi-caret-down" name="language" value={formikStepInfo.values.language} options={languages} onChange={formikStepInfo.handleChange} optionLabel="name" placeholder="Select all that apply.*" maxSelectedLabels={3} className={classNames({ 'p-invalid': isFormFieldValid('language') })} />
                                                                </span>
                                                                {getFormErrorMessageStepInfo('language')}
                                                            </Col>
                                                            <Col className="field container-input col-lg-12 p-0">
                                                                <div className="space-title">What credentials do you have?</div>
                                                                <span className="p-float-label">
                                                                    <MultiSelect id="credentials" dropdownIcon="pi pi-caret-down" name="credentials" value={formikStepInfo.values.credentials} options={credentialsOptions} onChange={formikStepInfo.handleChange} optionLabel="name" placeholder="Select one or more.*" maxSelectedLabels={3} className={classNames({ 'p-invalid': isFormFieldValid('credentials') })} />
                                                                </span>
                                                                {getFormErrorMessageStepInfo('credentials')}
                                                            </Col>
                                                            <Col className="field container-input col-lg-12 col-12 p-0">
                                                                <div className="space-title">What care can you provide?</div>
                                                                <span className="p-float-label">
                                                                    <MultiSelect id="provide" dropdownIcon="pi pi-caret-down" name="provide" value={formikStepInfo.values.provide} options={provideOptions} onChange={formikStepInfo.handleChange} optionLabel="name" placeholder="Select all that apply.*" maxSelectedLabels={3} className={classNames({ 'p-invalid': isFormFieldValid('provide') })} />

                                                                </span>
                                                                {getFormErrorMessageStepInfo('provide')}
                                                            </Col>
                                                            <Col className="field container-input col-lg-12 col-12 p-0">
                                                                <div className="space-title">Available for respite care?</div>
                                                                <div className="field-checkbox d-flex align-items-center col-lg-4 col-12">
                                                                    <div className="col-lg-4 col-3">
                                                                        <label htmlFor="optionYesNo" typeof="radio" className={classNames({ 'p-error': isFormFieldValid('accept') })}>Yes &nbsp;</label>
                                                                        <RadioButton inputId="optionYesNo" name="optionYesNo" value="Yes" onChange={formikStepInfo.handleChange} checked={formikStepInfo.values.optionYesNo === 'Yes'} />
                                                                    </div>
                                                                    <div className="col-lg-4 col-3">
                                                                        <label htmlFor="optionYesNo" className={classNames({ 'p-error': isFormFieldValid('accept') })}>No &nbsp;</label>
                                                                        <RadioButton inputId="optionYesNo" name="optionYesNo" value="No" onChange={formikStepInfo.handleChange} checked={formikStepInfo.values.optionYesNo === 'No'} />
                                                                    </div>

                                                                </div>
                                                                {getFormErrorMessageStepInfo('optionYesNo')}
                                                            </Col>
                                                            <Col className="field container-input col-lg-12 col-12 p-0">
                                                                <div className="space-title">Are you vaccinated to Covid-19?</div>
                                                                <div className="field-checkbox d-flex align-items-center col-lg-4 col-12">
                                                                    <div className="col-lg-4 col-3">
                                                                        <label htmlFor="optionYesNoCovid" typeof="radio" className={classNames({ 'p-error': isFormFieldValid('acceptCovid') })}>Yes &nbsp;</label>
                                                                        <RadioButton inputId="optionYesNoCovid" name="optionYesNoCovid" value="Yes" onChange={formikStepInfo.handleChange} checked={formikStepInfo.values.optionYesNoCovid === 'Yes'} />
                                                                    </div>
                                                                    <div className="col-lg-4 col-3">
                                                                        <label htmlFor="optionYesNoCovid" className={classNames({ 'p-error': isFormFieldValid('acceptCovid') })}>No &nbsp;</label>
                                                                        <RadioButton inputId="optionYesNoCovid" name="optionYesNoCovid" value="No" onChange={formikStepInfo.handleChange} checked={formikStepInfo.values.optionYesNoCovid === 'No'} />
                                                                    </div>

                                                                </div>
                                                                {getFormErrorMessageStepInfo('optionYesNoCovid')}
                                                            </Col>
                                                            <Col lg={12} className="container-title-support p-0" >
                                                                Support You Offer
                                                            </Col>
                                                            <Col lg={12} className="apply-text-content p-0" >
                                                                Select all that apply.*
                                                            </Col>
                                                            <Col lg={12} className="d-flex align-items-center container-multiple-check flex-wrap p-0">
                                                                {
                                                                    categories.map((category) => {
                                                                        return (
                                                                            <div key={category.id} className={`field-checkbox col-lg-6 container-check d-flex align-items-center ${selectedCategories.some((item) => item.id === category.id) ? 'container-check-hover' : ''}`}>
                                                                                <Checkbox inputId={category.id} name="category" value={category} onChange={onCategoryChange} checked={selectedCategories.some((item) => item.id === category.id)} />
                                                                                <label className='col-11' htmlFor={category.id}>{category.name}</label>
                                                                            </div>
                                                                        )
                                                                    })
                                                                }
                                                                <div className='div-empty col-12'></div>
                                                                {getFormErrorMessageStepInfo('category')}
                                                            </Col>
                                                            <Col lg={12}>
                                                                <Button type="submit" label="SAVE AND CONTINUE >" className="button-save-continue m-0 mx-auto mb-5" />
                                                            </Col>
                                                        </Row>
                                                    </form>
                                                </div>
                                            )
                                        }
                                        {
                                            activeIndex === 3 && (
                                                <div className="sign-up-page ">
                                                    <Row className="text-start justify-content-center col-lg-10 col-12 mx-auto" >
                                                        <form className="p-fluid header-title-input" onSubmit={formikTasks.handleSubmit}>
                                                            <Row>
                                                                <div className="title-multi-use">
                                                                    Interest
                                                                </div>
                                                                <div className="subtitle-create-account p-0">
                                                                    What are some of your interests?
                                                                </div>
                                                                <div className="apply-text-content">Select one or more interests.*</div>
                                                                <Col lg={12} className="d-flex align-items-center container-multiple-check flex-wrap p-0">
                                                                    <Row>
                                                                        {
                                                                            interest.map((interest) => {
                                                                                return (
                                                                                    <Col lg={4} md={4} className={`mobility-item-container col-6`}>
                                                                                        <div key={interest.id} onClick={()=>onInterestChange(interest)} className={`field-checkbox mobility-item  ${selectedInterest.some((item) => item.id === interest.id) ? 'mobility-item-hover' : ''}`}>
                                                                                            <img src={`/images/care_icons/Interests/${interest.id}.svg`} alt="image"></img>
                                                                                            <label className="text-content-options" htmlFor={interest.id}>{interest.name}</label>
                                                                                        </div>
                                                                                    </Col>
                                                                                )
                                                                            })
                                                                        }
                                                                    </Row>
                                                                    {getFormErrorMessageTasks('interests')}
                                                                </Col>
                                                                <Col>
                                                                    <Button  type="submit" label="SAVE AND CONTINUE > " className="button-save-continue" />
                                                                </Col>
                                                            </Row>
                                                        </form>
                                                    </Row>
                                                </div>
                                            )
                                        }

                                        {activeIndex === 4 && (
                                            <div className="sign-up-page">
                                                <div className="col-lg-10 mx-auto">
                                                    <Row className="text-start create-account-cotainer col-lg-11 col-12 mx-auto">
                                                        <Col className="p-0">
                                                            <div>
                                                                Availability
                                                            </div>
                                                            <div className="subtitle-create-account">
                                                                Let careseekers know what times you are available.
                                                            </div>
                                                        </Col>
                                                    </Row>
                                                    <Row>
                                                        <Col className="mx-auto col-11">
                                                            <div className="title-step-avalibility text-start">
                                                                What times are you available? Check all that apply.*
                                                            </div>
                                                        </Col>
                                                        <Col xl={12} md={12} xs={12}>

                                                            <DataTable value={habilities} headerColumnGroup={headerGroup} responsiveLayout="scroll">

                                                                <Column field="all" body={daysTemplate} hidden />

                                                                <Column field="descr" body={daysTemplate} />

                                                                <Column field="Mon" body={daysTemplate} />

                                                                <Column field="Tue" body={daysTemplate} />

                                                                <Column field="Wed" body={daysTemplate} />

                                                                <Column field="Thu" body={daysTemplate} />

                                                                <Column field="Fri" body={daysTemplate} />

                                                                <Column field="Sat" body={daysTemplate} />

                                                                <Column field="Sun" body={daysTemplate} />

                                                            </DataTable>

                                                        </Col>
                                                    </Row>
                                                    <Row>
                                                        <Col xl={4} md={4} xs={4} className="btn-availabolity-submit mx-auto">
                                                            <Button label="SAVE AND CONTINUE" icon="pi pi-check" iconPos="right" className="p-button-danger" onClick={handleClick} />
                                                        </Col>
                                                    </Row>
                                                </div>
                                            </div>
                                        )
                                        }

                                        {
                                            activeIndex === 5 && (
                                                <div className="sign-up-page">
                                                    <div className="container col-10">
                                                        <Row className="text-start justify-content-left">
                                                            <Col xl={12} md={12} xs={12} className="title-availability">
                                                                Complete Your Profile
                                                            </Col>
                                                            <Col xl={12} md={12} xs={12} className="description-form-availability">
                                                                Let care seekers know more about you and what you offer
                                                            </Col>
                                                            <Col xl={12} md={12} xs={12}>
                                                                <div className="line-profile">

                                                                </div>
                                                            </Col>
                                                            <Col xl={12} md={12} xs={12}>
                                                                <div className="title-profile-photo">
                                                                    Add a Profile Photo
                                                                </div>
                                                            </Col>
                                                            <Col xl={12} md={12} xs={12}>
                                                                <div className="description-profile-photo">
                                                                    A photo helps build connections and trust with your clients before you meet.
                                                                </div>
                                                            </Col>

                                                        </Row>
                                                        <Row className="justify-content-md-center">
                                                            <Col xl={12} md={12} xs={12} className=''>
                                                                {/* <div className="profile-photo" style={{ backgroundImage: `url(`+{image}+`)` }} >
                                                                </div> */}

                                                                <img src={image} className='profile-photo'  alt="profilepic"></img>
                                                            </Col>
                                                            <Col xl={12} md={12} xs={12}>
                                                                <div className="btn-upload-image">

                                                                </div>
                                                            </Col>
                                                            <Col xl={12} md={12} xs={12} className="btn-availabolity-submit">
                                                                {/* <Button label="Upload Image" icon="pi pi-plus" iconPos="left" className="p-button-rounded p-button-outlined p-button-danger" /> */}
                                                                {/* 5MB */}
                                                                <FileUpload mode="basic" auto chooseLabel="Upload Image" chooseOptions={chooseObject} name="demo[]" itemTemplate={customItemTemplate} customUpload uploadHandler={myUploader} className="p-button-rounded p-button-outlined p-button-danger" accept="image/*" maxFileSize={5242880} />

                                                            </Col>
                                                        </Row>
                                                        <form className="text-start justify-content-left" onSubmit={formikProfile.handleSubmit}>

                                                            <Col xl={12} md={12} xs={12}>
                                                                <div className="edit-your-bio">
                                                                    Edit Your Bio
                                                                </div>
                                                            </Col>
                                                            <Col xl={12} md={12} xs={12}>
                                                                <div className="edit-your-bio-description">
                                                                    Help families get to know you at a glance. Why are you passionate about care and why should they
                                                                    select you? Add details that will help you be discovered through a keyword search.
                                                                </div>
                                                            </Col>
                                                            <Col className="header-title-profile">
                                                                <div>
                                                                    Title must be greater than 30 characters*
                                                                </div>
                                                            </Col>
                                                            <Col xl={12} md={12} xs={12} className="p-fluid">
                                                                <InputText placeholder='My name is XXX and I am XX years old, have XX years experience.'
                                                                           id="header" name="header"
                                                                           onChange={formikProfile.handleChange}
                                                                           value={formikProfile.values.header}
                                                                           autoFocus

                                                                           className={classNames({ 'p-invalid': isFormFieldValid('header') })} />
                                                                {getFormErrorMessageProfile('header')}
                                                            </Col>
                                                            <Col className="header-title-profile">
                                                                <div>
                                                                    Description*
                                                                </div>
                                                            </Col>
                                                            <Col xl={12} md={12} xs={12} className="p-fluid size-text-area">
                                                                <InputTextarea
                                                                    className="text-textArea-profile"
                                                                    autoResize
                                                                    onChange={formikProfile.handleChange}
                                                                    autoFocus
                                                                    value={formikProfile.values.byography}
                                                                    id="byography"
                                                                    name="byography"
                                                                    placeholder='I have experience in child care, senior care and also paliative care because in Ecuador I used to work for a public hospital. I know pharmacology as well as known diets for special illnesses; such as diabetes or end stage kidney disease.'

                                                                />
                                                                {getFormErrorMessageProfile('byography')}
                                                            </Col>
                                                            <Col>
                                                                <Button type="submit" label="COMPLETE SIGN UP" className="button-complete" />
                                                            </Col>
                                                        </form>
                                                    </div>
                                                </div>
                                            )
                                        }
                                        {
                                            activeIndex === 6 && (
                                                <Row className="col-lg-12 col-12 mx-auto">
                                                    <Col lg={12} className="p-0 col-12">
                                                        <div className="container sign-up final-message-container">
                                                            <Row>
                                                                <Col lg={12} md={12} className="align-content-center d-flex p-0">
                                                                    <div className="container">
                                                                        <Row>
                                                                            <Col>
                                                                                <div className="success-icon pi pi-check-circle" style={{'fontSize': '9em'}}>
                                                                                </div>
                                                                            </Col>
                                                                        </Row>
                                                                        <Row>
                                                                            <Col>
                                                                                <div className="success-message-check">
                                                                                    Thanks for joining uCarenet.
                                                                                </div>
                                                                            </Col>
                                                                        </Row>
                                                                        <Row>
                                                                            <Col>
                                                                                <div className="success-message">
                                                                                    We're excited to get you started!
                                                                                </div>
                                                                            </Col>
                                                                        </Row>
                                                                        <Row>
                                                                            <Col>
                                                                                <div className="verify-email">
                                                                                    But first, we need to verify your email address.
                                                                                </div>
                                                                            </Col>
                                                                        </Row>
                                                                        <Row>
                                                                            <Col className="description-registration">
                                                                                <div>
                                                                                    We have sent email to {emailusr}.
                                                                                </div>
                                                                                <div>
                                                                                    Click the link in the email to complete sign-up.
                                                                                </div>
                                                                            </Col>
                                                                        </Row>
                                                                        <Row>
                                                                            <Col>
                                                                                <div className="description-registration">
                                                                                    Don't see the email? Be sure to check your junk and/or spam folder!
                                                                                </div>
                                                                            </Col>
                                                                        </Row>
                                                                        <Row>
                                                                            <Col>
                                                                                <div className="btn-container-home">
                                                                                    <Button label="VISIT YOUR DASHBOARD" className="p-button-danger" onClick={() => navigate('/dashboard-home')} />
                                                                                </div>
                                                                            </Col>
                                                                        </Row>
                                                                    </div>
                                                                </Col>
                                                            </Row>
                                                        </div>
                                                    </Col>
                                                </Row>
                                            )
                                        }
                                    </div>
                                </Col>

                        </Row>
                    </div>
                </Col>
            </Row>
        </>
    );
}

export default SignUpJob;