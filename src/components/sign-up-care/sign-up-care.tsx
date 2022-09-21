import "primereact/resources/themes/lara-light-indigo/theme.css";  
import "primereact/resources/primereact.min.css";                  
import "primeicons/primeicons.css";    
import 'bootstrap/dist/css/bootstrap.min.css';
import React ,{ useEffect, useRef, useState } from "react";
import { useFormik } from 'formik';
import { Row,Col} from 'react-bootstrap';
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';
import { SelectButton } from 'primereact/selectbutton';
import { MultiSelect } from 'primereact/multiselect';
import Stepper from '../misc/stepper/stepper'
import { InputText } from 'primereact/inputtext';
import { Dropdown } from 'primereact/dropdown';
import { Calendar } from 'primereact/calendar';
import { Password } from 'primereact/password';
import { Checkbox } from 'primereact/checkbox';
import { Divider } from 'primereact/divider';
import { classNames } from 'primereact/utils';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { ColumnGroup } from 'primereact/columngroup';
import { Row as PrimeRow } from 'primereact/row';
import { FileUpload } from 'primereact/fileupload';
import { InputTextarea } from 'primereact/inputtextarea';

import './sign-up-care.scss';
import { userClass } from "../../types/class/user";
import moment, { weekdays } from "moment";
import { UserExtraFieldClass } from "../../types/class/userExtraFields";
import userCareseekerServices from "../../services/userCareseekerServices";
import { useNavigate } from "react-router";
import CareseekerService from "../../services/careseekerServices";
import { careseekerInputFilterClass } from "../../types/class/careseeker/csInputFilterClass";
import { CareseekerClass } from "../../types/class/careseeker/careseeker";
import { SeniorClass } from "../../types/class/senior/senior";
import LanguageServices from "../../services/languageServices";
import { SeniorLanguageClass } from "../../types/class/senior/seniorLanguages";
import SkillServices from "../../services/skillsServices";
import { SeniorSkillsClass } from "../../types/class/senior/seniorSkills";
import { SeniorInterestClass } from "../../types/class/senior/seniorInterest";
import { availabilityClass } from "../../types/class/availablity";
import AvailablityService from "../../services/availablityServices";
import { ImageModelClass } from "../../types/class/userProfilePic";
import userCaregiverServices from "../../services/userCaregiverServices";
import { Dialog } from "primereact/dialog";
import { type } from "os";
import { ElementFlags } from "typescript";



const SignUpCare = () => {
    let navigate = useNavigate();
    const [firstName, setFirstName] = useState('');
    const [emailusr, setemailUsr] = useState('');
    
    let habilities = [
        { aa: 1, descr: "Morning", weekdays: [{ aa: 1, descr: "Mon", check: false }, { aa: 2, descr: "Tue", check: false }, { aa: 3, descr: "Wed", check: false }, { aa: 4, descr: "Thu", check: false }, { aa: 5, descr: "Fri", check: false }, { aa: 6, descr: "Sat", check: false }, { aa: 7, descr: "Sun", check: false }] },
        { aa: 2, descr: "Afternoon", weekdays: [{ aa: 1, descr: "Mon", check: false }, { aa: 2, descr: "Tue", check: false }, { aa: 3, descr: "Wed", check: false }, { aa: 4, descr: "Thu", check: false }, { aa: 5, descr: "Fri", check: false }, { aa: 6, descr: "Sat", check: false }, { aa: 7, descr: "Sun", check: false }] },
        { aa: 3, descr: "Evening", weekdays: [{ aa: 1, descr: "Mon", check: false }, { aa: 2, descr: "Tue", check: false }, { aa: 3, descr: "Wed", check: false }, { aa: 4, descr: "Thu", check: false }, { aa: 5, descr: "Fri", check: false }, { aa: 6, descr: "Sat", check: false }, { aa: 7, descr: "Sun", check: false }] },
        { aa: 4, descr: "Overnight", weekdays: [{ aa: 1, descr: "Mon", check: false }, { aa: 2, descr: "Tue", check: false }, { aa: 3, descr: "Wed", check: false }, { aa: 4, descr: "Thu", check: false }, { aa: 5, descr: "Fri", check: false }, { aa: 6, descr: "Sat", check: false }, { aa: 7, descr: "Sun", check: false }] }
    ];
    const daysOfWeek = ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'];
    const [selectedHabilities, setSelectedHabilities] = useState([]);

    const getDays = (index) =>{
        const temp = daysOfWeek.map(item=>{

            return `${index}_${item}`;
        })
        return temp;
    }

    const uncheckAll = (index)=>{
        let _selectedHabilities = [...selectedHabilities];
        daysOfWeek.map(item => {

            const day= `${index}_${item}`;

            const indexDays = _selectedHabilities.findIndex(
                item => item === day
            );
            if(indexDays >= 0){
                _selectedHabilities.splice(indexDays, 1);
            }

        })

        const indexDays = _selectedHabilities.findIndex(
            item => item === `${index}_all`
        );
        if(indexDays >= 0){
            _selectedHabilities.splice(indexDays, 1);
        }

        // setSelectedHabilities(_selectedHabilities);
        return _selectedHabilities;
    }
    const getIndexDay = (value)=>{
        let _selectedHabilities = [...selectedHabilities];
        const indexDays = _selectedHabilities.findIndex(
            item => item === value
        );
        if(indexDays >= 0){
            _selectedHabilities.splice(indexDays, 1);
        }


        const indexParent = _selectedHabilities.findIndex(
            item => item === `${value.charAt(0)}_all`
        );
        if(indexParent >= 0){
            _selectedHabilities.splice(indexParent, 1);
        }
            
        return _selectedHabilities;
    }

    const validateAllDays = (index, array) =>{

        const days = array.filter(item => {
            if(item.startsWith(index)){
                return item;
            }
            
        });

        return days && days.length && days.length == daysOfWeek.length ? true : false;


    }
   

    const onAvailabilityChange = (e) => {
        let _selectedHabilities = [...selectedHabilities];

        if (e.checked) {
            if(e.value.endsWith("all") ){

                for(let i=1 ; i < 5 ; i++){
                    if (e.value === `${i}_all`){
                        _selectedHabilities = uncheckAll((i));
                        _selectedHabilities.push(e.value);
                        const temp =getDays(i);
                        _selectedHabilities=_selectedHabilities.concat(temp);
                    }
                }
            }else{
                _selectedHabilities.push(e.value);
                const myIndex = e.value.charAt(0);
                const valid = validateAllDays(myIndex, _selectedHabilities);
                if(valid){
                    _selectedHabilities.push(`${myIndex}_all`);
                }
            }
        }
        else {
            if(e.value.endsWith("all") ){
                 const index = e.value.charAt(0);
                 _selectedHabilities = uncheckAll(parseInt(index))
            }else{
                _selectedHabilities = getIndexDay(e.value);

            }
            
        }


        setSelectedHabilities(_selectedHabilities);
        //  console.log(selectedHabilities);


    }
    // const days = [
    //     {all:false, dayPart: 'Morning', mon: false, tues: false, wed: false, thu: false, fri: false, sat:false, sun:false},
    //     {all:false, dayPart: 'Afternoon', mon: false, tues: false, wed: false, thu: false, fri: false, sat:false, sun:false},
    //     {all:false, dayPart: 'Evening', mon: false, tues: false, wed: false, thu: false, fri: false, sat:false, sun:false},
    //     {all:false, dayPart: 'Overnight', mon: false, tues: false, wed: false, thu: false, fri: false, sat:false, sun:false}
    // ];
    const [value2, setValue2] = useState(null); 
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
            label: 'CARE PROFILE',
            command: (event) => {
            }
        },
        {
            label: 'MOBILITY &\nINTERESTS',
            command: (event) => {
            }
        },
        {
            label: 'SCHEDULE',
            command: (event) => {
            }
        },
        {
            label: 'CARE REQUEST',
            command: (event) => {
            }
        }
    ];

    const [formData, setFormData] = useState({});
    const [formDataStepInfo, setFormDataStepInfo] = useState({});
    const [formDataProfile, setFormDataProfile] = useState({});
    const [showMessage, setShowMessage] = useState(false);
    const dialogFooter = <div className="flex justify-content-center"><Button label="OK" className="p-button-text" autoFocus onClick={() => setShowMessage(false)} /></div>;

    const getlocal = (key: string) => {
        return JSON.parse(localStorage.getItem(key));
    }
    const setlocal = (key: string, value: any) => {
        localStorage.setItem(key, JSON.stringify(value));
   

        return getlocal(key) !== null ? 1 : 0;
    }
    const [formDataTask, setFormDataTask] = useState({});
    const [formDataFrequency, setFormDataFrequency] = useState({});

    const [credentialsOptions, GetSkillsCat0] = useState([{ "id": "", "name": "", "sortOrder": 0, "category": 0 }]);
    const [provideOptions, GetSkillsCat1] = useState([{ "id": "", "name": "", "sortOrder": 0, "category": 1 }]);
    const [categories, GetSkillsCat2] = useState([{ "id": "", "name": "", "sortOrder": 0, "category": 2 }]);
    // const categories = [{name: 'Bathing & Toileting', key: 'A'}, {name: 'Companionship', key: 'M'}, {name: 'Dressing', key: 'L'}, {name: 'Encouragement', key: 'R'}, {name: 'Exercise', key: 'X'}, {name: 'General Care', key: 'Z'}, {name: 'Hygiene & Grooming', key: 'D'}, {name: 'Light Housekeeping', key: 'F'}, {name: 'Meal Preparation', key: 'N'}, {name: 'Medication Reminders', key: 'Y'}, {name: 'Transportation', key: 'W'}, {name: 'Going for Walks', key: 'Q'}];
    const [selectedCategories, setSelectedCategories] = useState(categories.slice(0,0));

    // const mobilities = [{name: 'Independent', key: 'I'}, {name: 'Required a Cane', key: 'R'}, {name: 'Required a Walker', key: 'W'}, {name: 'Low Mobility', key: 'L'}, {name: 'Wheelchair', key: 'C'}, {name: 'Immobile', key: 'N'}];
    const mobilities = [
        {name: 'Independent', id: '5d1214c1-12ba-47e8-bb4f-a78494380c94'},
        {name: 'Mobile + Cane', id: 'cfe24824-4702-4487-99b6-254777bce18c'},
        {name: 'Mobile + Walker', id: '0f599db0-061f-450a-9329-cc8607c40bb1'},
        {name: 'Low Mobility', id: 'c566cd2c-51dc-443d-b354-0c5bfc7d7759'},
        {name: 'Wheelchair', id: '0a43a4d7-cbbc-47d8-9504-2d4e2734e973'},
        {name: 'Non Mobile', id: 'd4e904e1-89d1-4d87-835c-d9e4ef65e528'}

    ]
    
    const [selectedMobilities, setSelectedMobilities] = useState(mobilities.slice(0,0));
    // const [interest, setinterest] = useState([{'name':'','id':''}])
    // const interest = [{name: 'Art & Crafts', key: 'AC'}, {name: 'Books', key: 'BO'}, {name: 'Card Games', key: 'CG'}, {name: 'Church Activities', key: 'CA'}, {name: 'Computer', key: 'C'}, {name: 'Cooking', key: 'CK'}, {name: 'Games', key: 'GM'}, {name: 'Gardening', key: 'GA'}, {name: 'Knitting', key: 'KN'}, {name: 'Movies', key: 'MO'}, {name: 'Pets', key: 'PT'}, {name: 'Puzzles', key: 'PZ'}, {name: 'Sewing', key: 'SW'}, {name: 'Shopping', key: 'SH'}, {name: 'Spiritualism', key: 'SM'}, {name: 'Sports', key: 'SP'}, {name: 'Television', key: 'TV'}, {name: 'Traveling', key: 'TR'}];
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

    const onMobilityChange = (e) => {
        let _selectedMobilities = [...selectedMobilities];

        if(_selectedMobilities && _selectedMobilities.length){
            _selectedMobilities.splice(0, 1);
        }
        _selectedMobilities.push(e);

        setSelectedMobilities(_selectedMobilities);
    }

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
                errors['byography'] = 'Description length must be  greater than 20 characters';
            }
            if (!data.byography) {
                errors['byography'] = 'Description is required.';
            }

            return errors;
        },
        onSubmit: (data) => {
            setFormDataProfile(data);
            // setActiveIndex(activeIndex+1);
            // formikProfile.resetForm();
            // setLastIndex(true);
            formDataProfileSet(data);


        }
    });
    const formDataProfileSet = (data) => {

        let careseekerData = new CareseekerClass();

        careseekerData = getlocal("regInfoCs");

        if (careseekerData !== null && careseekerData.user.hasPicture === 1) {
            careseekerData.postingTitle = data.header;
            careseekerData.postingDescription = data.byography;

            CareseekerService.updateCareseeker(careseekerData)
                .then(res => {
                    if (res.message !== "error" && res.message !== "inc pass") {
                        if (setlocal("regInfoCs", careseekerData) === 1) {
                            toast.current.show({ severity: 'success', summary: 'Profile updated successfully', detail: 'Profile title and description saved successfully.', life: 3000 });
                            setFirstName(careseekerData.user.firstName);
                            setemailUsr(careseekerData.user.email);
                            
                            localStorage.clear();    
                            setActiveIndex(activeIndex + 1);
                            setLastIndex(true);
                        }

                    }

                })
        } else {
            //    Picture Not uploaded
            toast.current.show({ severity: 'error', summary: 'Profile picture is missing ', detail: 'Profile picture is mendatory.', life: 3000 });
            //setActiveIndex(activeIndex + 1);
        }

    }
    const formikTasks = useFormik({
        initialValues: {
            mobility: {},
            interests: {}
        },
        validate: (data) => {
            var errors = {};

            if (selectedMobilities.length===0) {
                errors['mobility'] = 'Select one option';
            }
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
           UpdateSeniorProfile();
        }
    });


    const UpdateSeniorProfile = () =>{
            if(selectedMobilities.length>0){

                let sn:SeniorClass = getlocal('regInfoSen');
                if(sn !== null){
                    sn.mobilityID = selectedMobilities[0].id;
                    CareseekerService.updateSenior(sn)
                    .then(e=>{ 
                        let counterInterest = 0;
                        if(e.data.success === true){
                            setlocal('regInfoSen',sn);
                            selectedInterest.forEach(e=>{
                                let snInterest = new SeniorInterestClass();
                                snInterest.seniorID = sn.id;
                                snInterest.interestID = e.id
                                CareseekerService.insertSeniorInterest(snInterest)
                                counterInterest++;

                            })
                            if(counterInterest ===  selectedInterest.length){
                            setActiveIndex(activeIndex+1);
                            toast.current.show({ severity: 'success', summary: 'Care Profile Update', detail: 'Care profile updated successfully.', life: 3000 });


                            }
                        }
                        else{

                            toast.current.show({ severity: 'error', summary: 'Care Profile Error', detail: 'Care profile was not updated. Please contact support and share the code: signupcsmobility_001 ', life: 6000 });

                        }
                    })
                }
            }


    }
    const formikCare = useFormik({
        initialValues: {
            firstName: '',
            lastName:'',
            email: '',
            phoneNumber:'',
            password: '',
            confirmPassword: '',
            city: '',
            postalCode:'',
            careOptions: '',
            aboutCheck: null,
            receiveEmail: false,
            acceptTerms: false
        },
        
        validate: (data) => {
            var errors = {};
           
            if (!data.firstName) {
                errors['firstName'] = 'Name is required.';
            }
            if (!data.lastName) {
                errors['lastName'] = 'Last Name is required.';
            }

            if (!data.email) {
                errors['email'] = 'Email is required.';
            }
            if (!data.city) {
                errors['city'] = 'City is required.';
            }
            if (!data.postalCode) {
                errors['postalCode'] = 'Postal Code is required.';
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
            else if(data.phoneNumber.length<10){
                errors['phoneNumber'] = 'Phone number is must have 10 digits';
            }

            if (!data.password) {
                errors['password'] = 'Password is required.';
            }
            if (!data.confirmPassword) {
                errors['confirmPassword'] = 'Confirm password is required.';
            }
            else if(data.password !== data.confirmPassword){
                errors['confirmPassword'] = 'Passwords dont match.';
            }
            if(data.careOptions===null){
                errors['careOptions'] = 'Select an option';
            }
            
            if(data.aboutCheck===null){
                errors['aboutCheck'] = 'Select an options';
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
            setFormData(data);
            //console.log(data);
            //setActiveIndex(activeIndex + 1);

            //formikCare.resetForm();
           registerUser(data);
        }
    });
    useEffect(() => {
        callLanguageList();
        callInterest();
        callSkillsList();
    }, []);
    const registerUser = (data) => {
        let usr = new userClass();
        
        usr.registrationDate = (moment(Date.now())).format('YYYY-MM-DD HH:mm:ss');
        usr.userRoleID = "1FFF5230-9752-4D5C-B7CD-44973348B643"
        usr.registerationChannel = "W"
        usr.phone = data.phoneNumber
        usr.firstName = data.firstName
        usr.lastName = data.lastName
        usr.password = data.confirmPassword
        usr.email = data.email
        usr.emailSubscription = data.receiveEmail 

        const usrEx = new UserExtraFieldClass();
        userCareseekerServices.create({ User: usr })
        .then(response => {

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
                            usrEx.who_Need_Care = data.careOptions.name;
                            usrEx.userType = regData.Type === "CG" ? "caregiver" : "careseeker";
                            userCareseekerServices.insertExtraRecUser(usrEx)
                                .then(result => {
                                    if (result.data.success && result.data.result.message === "" && result.data.result.id.length > 0) {
                                        
                                        
                                        let dataUsrreg =  getlocal('regInfo');
                                        const csRes =
                                        {
                            
                                            "filterCareseeker":
                                            {
                                                "Id": dataUsrreg.UsrID,
                                                "City": "/careseeker_userid/"
                                            },
                                            offset: 0,
                                            pagesize: 0
                                        }
                                                CareseekerService.getCareseekerByFilter(csRes)
                                                .then(res=>{

                                                    let csData =   res.data.result.careseekers[0];
                                                    if(csData !== null ){

                                                        setlocal('regInfoCs',csData);
                                                        setActiveIndex(activeIndex + 1);
                                                    
                                                        //callLanguageList();   
                                                       // callInterest();  
                                                    }

                                                })
                                        

                                        //formik.resetForm();
                                       // callLanguageList();

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

    }
    const callInterest = () =>{


    CareseekerService.getAllInterest({"offset":0,"pagesize":0})
    .then(e=>{
        if(e.data.result.interests.length>0 && e.data.success===true){

            setinterest(e.data.result.interests);
        }

      //  console.log(e);
    })


    }

    const [languages, Getlanguages] = useState([{ "id": "", "name": "" }]);

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
    const formikCareInfo = useFormik({
        initialValues: {
            firstName: '',
            lastName:'',
            city: '',
            postalCode: '',
            language: null,
            care: null,
            categoryTasks: {}
        },
        
        validate: (data) => {
            var errors = {};
           // setActiveIndex(activeIndex+1);
           // return;
            if (!data.firstName) {
                errors['firstName'] = 'Name is required.';
            }
            if (!data.lastName) {
                errors['lastName'] = 'Last name is required.';
            }
            if (!data.city) {
                errors['city'] = 'City is required.';
            }
            if (!data.postalCode) {
                errors['postalCode'] = 'Postal code is required.';
            }

            if(data.language===null){
                errors['language'] = 'Select all that apply';
            }

            if(data.care===null){
                errors['care'] = 'Select all that apply';
            }

            if(selectedCategories.length === 0){
                errors['categoryTasks'] = 'Select all that apply';
            }

            return errors;
        },
        onSubmit: (data) => {
            setFormDataStepInfo(data);
            //console.log(data);
          //  console.log(selectedCategories);
            //setActiveIndex(activeIndex+1);
            //formikCareInfo.resetForm();
             setSenior(data);
        }
    });


    const setSenior = (data)=>{
        let counterLanguages=0,counterCare=0, counterselectedCategories=0;
  
      let dataCs:CareseekerClass =  getlocal('regInfoCs');
      if(dataCs.user.id !== null && dataCs.id!== null){

      
        let senior:SeniorClass = new SeniorClass();
        senior.careSeekerID = dataCs.id;
        senior.name= data.firstName + data.lastName;
        senior.city = data.city;
        senior.postalCode = data.postalCode
        senior.countryID = 'e025cde0-d8fe-464e-87b6-c0b770c5e3c0';
        senior.mobilityID =''
         senior.colourScheme = 1
         senior.shareLocation = false
        CareseekerService.insertSenior(senior)
            .then(res=>{
                if(res.data.result.message === "" && res.data.success === true){
                    senior.id = res.data.result.id;
                    setlocal('regInfoSen', senior);
                    //lamguage
                    
                    if(data.language.length>0 ){
                    data.language.forEach(element => {
                        let langClass = new SeniorLanguageClass();
                        langClass.languageID = element.id;
                        langClass.seniorID = senior.id;
                        
                        CareseekerService.insertSeniorlang(langClass)
                        counterLanguages++
                    });
                }
                if(data.care.length>0 ){
                    data.care.forEach(element => {
                        let skillClass = new SeniorSkillsClass();
                        skillClass.seniorID = senior.id;
                        skillClass.skillID = element.id;
                        
                        CareseekerService.insertSeniorSkills(skillClass)
                        counterCare++
                    });
                }

                if(selectedCategories.length>0 ){
                    selectedCategories.forEach(element => {
                        let skillClass = new SeniorSkillsClass();
                        skillClass.seniorID = senior.id;
                        skillClass.skillID = element.id;
                        
                        CareseekerService.insertSeniorSkills(skillClass)
                        counterselectedCategories++ 
                       
                    });
                }

                    if((selectedCategories.length+data.care.length+data.language.length) === (counterLanguages+counterCare+counterselectedCategories))
                    {

                        setActiveIndex(activeIndex+1);

                    }
                }
                else{
              
                    if(getlocal('regInfoSen')){
                        

                        const intervalId =   setInterval(() => {
                            setActiveIndex(activeIndex+1);
                            clearInterval(intervalId);
                          }, 7000);
                    }
                    toast.current.show({ severity: 'warn', summary: 'Care Profile already present', detail: 'Care profile with name: '+senior.name+' already exist against your email: '+dataCs.user.email+' please contact support for further details.', life: 6000 });
                }
                
               
            })
      }


    }
    const formikSchedule = useFormik({
        initialValues: {
            option: "REGULARLY",
            date: null,
            careRequired: null,
            timeRequired:{},
            hoursRequired:'',
            daysRequired:''
        },
        validate: (data) => {
            var errors = {};
            // if(data.option==''){
            //     errors['option']= 'Select one option';
            // }
            data.timeRequired = selectedHabilities;
            if (data.date==null) {
                errors['date'] = 'Date is required.';
            }
            if(data.option==='REGULARLY'){
                if(data.careRequired===null){
                    errors['careRequired']='Select one';
                }
                if(selectedHabilities.length===0){
                    errors['timeRequired']='Choose the times you require care.';
                }
            }
            if(data.option==='ONCE'){
                if(!data.hoursRequired){
                    errors['hoursRequired']='Hours required.';
                }else if (!/[0-9]/i.test(data.hoursRequired)) {
                    errors['hoursRequired'] = 'Invalid hours.';
                }
                if(!data.daysRequired){
                    errors['daysRequired']='Days required';
                }else if (!/[0-9]/i.test(data.daysRequired)) {
                    errors['daysRequired'] = 'Invalid days.';
                }
            }

            return errors;
        },
        onSubmit: (data) => {
            setFormDataFrequency(data);
            setActiveIndex(activeIndex+1);
            formikSchedule.resetForm();
        }
    });

    const isFormFieldValidFrequency = (name) => !!(formikSchedule.touched[name] && formikSchedule.errors[name]);
    const getFormErrorMessageFrequency = (name) => {
        return isFormFieldValidFrequency(name) && <small className="p-error">{formikSchedule.errors[name]}</small>;
    };

    const isFormFieldValidTasks = (name) => !!(formikTasks.touched[name] && formikTasks.errors[name]);
    const getFormErrorMessageTasks = (name) => {
        return isFormFieldValidTasks(name) && <small className="p-error">{formikTasks.errors[name]}</small>;
    };

    const isFormFieldValid = (name) => !!(formikCare.touched[name] && formikCare.errors[name]);
    const getFormErrorMessage = (name) => {
        return isFormFieldValid(name) && <small className="p-error">{formikCare.errors[name]}</small>;
    };

    const isFormFieldValidCareInfo = (name) => !!(formikCareInfo.touched[name] && formikCareInfo.errors[name]);
    const getFormErrorMessageStepInfo = (name) => {
        return isFormFieldValidCareInfo(name) && <small className="p-error">{formikCareInfo.errors[name]}</small>;
    };

    const isFormFieldValidTask= (name) => !!(formikTasks.touched[name] && formikTasks.errors[name]);
    const getFormErrorMessageTask= (name) => {
        return isFormFieldValidTask(name) && <small className="p-error">{formikTasks.errors[name]}</small>;
    };
    const isFormFieldValidProfile = (name) => !!(formikProfile.touched[name] && formikProfile.errors[name]);
    const getFormErrorMessageProfile = (name) => {
        return isFormFieldValidProfile(name) && <small className="p-error">{formikProfile.errors[name]}</small>;
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
        <Column header="" className="day-title"  />
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

  
    const chooseObject={
        className:"p-button-rounded p-button-outlined p-button-danger"
    }
    const optionCare=[
        { name: 'Myself', code: 'MS' },
        { name: 'My Mother', code: 'MO' },
        { name: 'My Father', code: 'FA' },
        { name: 'My Uncle', code: 'UC' },
        { name: 'My Aunt', code: 'AU' },
        { name: 'My Grandmother', code: 'GM' },
        { name: 'My Grandfather', code: 'GF' }

    ];
    const frecuency = [
        { name: '1x/week', code: '1x/week' },
        { name: '2x/week', code: '2x/week' },
        { name: '3x/week', code: '3x/week' },
        { name: '4x/week', code: '4x/week' },
        { name: '5x/week', code: '5x/week' },
        { name: '6x/week', code: '6x/week' },
        { name: '7x/week', code: '7x/week' },
        { name: 'Other', code: 'Other' }
    ]
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

    // const languages = [
    //     { name: 'Spanish', code: 'SPN' },
    //     { name: 'English', code: 'ENG' },
    //     { name: 'Chenesse', code: 'CHN' },
    //     { name: 'Japanesse', code: 'JPN' },
    //     { name: 'French', code: 'FRE' }
    // ];
  
    const careRequired = [
           {name: '1x/week', code:'1w'},
           {name: '2x/week', code:'2w'},
           {name: '3x/week', code:'3w'},
           {name: '4x/week', code:'4w'},
    ];
    const options = ['REGULARLY', 'ONCE'];

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
                    const cs: CareseekerClass = getlocal('regInfoCs');

                    if (cs.user.id !== null) {
                        let avail = new availabilityClass()
                        avail.id = cs.user.id;
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
        setActiveIndex(activeIndex-1)
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
            a.targetFilename = getlocal('regInfoCs') !== null ? getlocal('regInfoCs').user.id + '.' + ext : '';
            a.imageData = result.toString();
            a.imageData = a.imageData.replace(extBase64, "png");
            //console.log(a.imageData)

            userCaregiverServices.uploadImage(a)
                .then((res) => {
                    if (res.data.result === "File Saved" && res.data.success === true) {
                        var dataProfileTitleImage = getlocal("regInfoCs");
                        let dataCSReg = new CareseekerClass();

                        dataCSReg = dataProfileTitleImage;
                        if (dataCSReg.id !== null && dataCSReg.user.id !== null) {
                            dataCSReg.user.hasPicture = 1;
                            setlocal("regInfoCs", dataCSReg);


                        }
                        else {

                            dataCSReg.user.hasPicture = 0;
                            setlocal("regInfoCs", dataCSReg);
                        }


                    }
                })
        });



    } 

    return(
        <>
            <Toast ref={toast}></Toast>
            <Row className="col-lg-10 col-12 mx-auto">
                <Col lg={12} className="p-0 col-12">
                    <div className="container">
                        <Row>
                            <Col>
                                <Stepper model={5} activeIndex={activeIndex} setActiveIndex={setActiveIndex} lastIndex={lastIndex} list={items}/>

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
                                                Create a free account to get matched with and connect with caregivers.
                                            </div>
                                        </div>
                                    <div className="title-basic-form p-0">
                                        Personal Info
                                    </div>
                                    <form className="p-fluid header-title-input" onSubmit={formikCare.handleSubmit}>
                                        <Row className="field name-container">
                                            <Col lg={6} className="field col-12">
                                                <div>First Name*</div>                                    
                                                <span className="p-float-label">
                                                    <InputText id="firstName" name="firstName" placeholder="John" value={formikCare.values.firstName} onChange={formikCare.handleChange} autoFocus className={classNames({ 'p-invalid': isFormFieldValid('firstName') })} />
                                                </span>
                                            {getFormErrorMessage('firstName')}
                                            </Col>
                                            <Col lg={6} className="field col-12">
                                                <div>Last Name*</div>
                                                <span className="p-float-label">
                                                    <InputText id="lastName" name="lastName" placeholder="Allen" value={formikCare.values.lastName} onChange={formikCare.handleChange} autoFocus className={classNames({ 'p-invalid': isFormFieldValid('lastName') })} />
                                                    {getFormErrorMessage('lastName')}
                                                </span>
                                            </Col>
                                        </Row>
                                            <Col className="field container-input">
                                                <div>Email Address*</div>
                                                <span className="p-float-label p-input-icon-right">
                                                    <InputText id="email" name="email" placeholder="johnallen@youremail.com" value={formikCare.values.email} onChange={formikCare.handleChange} className={classNames({ 'p-invalid': isFormFieldValid('email') })} />
                                                </span>
                                                {getFormErrorMessage('email')}
                                            </Col>
                                                <Col className="field container-input">
                                                    <div>City*</div>                                    
                                                    <span className="p-float-label">
                                                        <InputText id="city" name="city" placeholder="E.g. Toronto" value={formikCare.values.city} onChange={formikCare.handleChange} autoFocus className={classNames({ 'p-invalid': isFormFieldValid('city') })} />
                                                    </span>
                                                {getFormErrorMessage('city')}
                                                </Col>
                                                <Col className="field container-input">
                                                    <div>Postal Code*</div>
                                                    <span className="p-float-label">
                                                        <InputText id="postalCode" name="postalCode" placeholder="X1X 2Y2" value={formikCare.values.postalCode} onChange={formikCare.handleChange} autoFocus className={classNames({ 'p-invalid': isFormFieldValid('postalCode') })} />
                                                        {getFormErrorMessage('postalCode')}
                                                    </span>
                                                </Col>
                                            <Col className="field container-input">
                                                    <div>Phone Number</div>
                                                    <span className="p-float-label">
                                                        <InputText maxLength={10} id="phoneNumber" name="phoneNumber" placeholder="0000000000" value={formikCare.values.phoneNumber} onChange={formikCare.handleChange} autoFocus className={classNames({ 'p-invalid': isFormFieldValid('phoneNumber') })} />
                                                    </span>
                                                {getFormErrorMessage('phoneNumber')}
                                            </Col>
                                            <Col className="field container-input">
                                                <div>Create a Password*</div>
                                                <span className="p-float-label">
                                                    <Password id="password" name="password" value={formikCare.values.password} onChange={formikCare.handleChange} toggleMask
                                                        className={classNames({ 'p-invalid': isFormFieldValid('password') })} header={passwordHeader} footer={passwordFooter} />
                                                </span>
                                                {getFormErrorMessage('password')}
                                            </Col>
                                            <Col className="field container-input">
                                                <div>Confirm Password*</div>
                                                <span className="p-float-label">
                                                    <Password id="confirmPassword" name="confirmPassword" value={formikCare.values.confirmPassword} onChange={formikCare.handleChange} toggleMask
                                                        className={classNames({ 'p-invalid': isFormFieldValid('confirmPassword') })} header={passwordHeader} footer={passwordFooter} />
                                                </span>
                                                {getFormErrorMessage('confirmPassword')}
                                            </Col>
                                            <Col className="field container-input">
                                                <div>Who is the care for?*</div>
                                                <span className="p-float-label">                                    
                                                    {/* <MultiSelect id="careOptions" name="careOptions" dropdownIcon="pi pi-caret-down" value={formikCare.values.careOptions} options={optionCare} onChange={formikCare.handleChange} optionLabel="name" placeholder="Select an option..." maxSelectedLabels={3} className={classNames({ 'p-invalid': isFormFieldValid('careOptions') })}/> */}
                                                    <Dropdown id="careOptions" name="careOptions" dropdownIcon="pi pi-caret-down" value={formikCare.values.careOptions} options={optionCare} onChange={formikCare.handleChange} optionLabel="name" placeholder="Select an option..." className={classNames({ 'p-invalid': isFormFieldValid('aboutCheck') })} />

                                                </span>
                                                {getFormErrorMessage('careOptions')}
                                            </Col>

                                            {/* {formikCare.values.careOptions.length  && formikCare.values.careOptions[0]['name'] === 'Myself' && (
                                                
                                            )} */}


                                            <Col className="field container-input">
                                                <div>How did you hear about us?</div>
                                                <span className="p-float-label">                                    
                                                    <Dropdown id="aboutCheck" name="aboutCheck" dropdownIcon="pi pi-caret-down" value={formikCare.values.aboutCheck} options={aboutOptions} onChange={formikCare.handleChange} optionLabel="name" placeholder="Select an option..."  className={classNames({ 'p-invalid': isFormFieldValid('aboutCheck') })}/>
                                                </span>
                                                {getFormErrorMessage('aboutCheck')}
                                            </Col>
                                            <Col>
                                                <div className="therms-and-privacy flex-wrap d-flex mx-auto align-items-center col-lg-10">
                                                    <Checkbox inputId="receiveEmail" name="receiveEmail" checked={formikCare.values.receiveEmail} onChange={formikCare.handleChange} className={classNames({ 'p-invalid': isFormFieldValid('receiveEmail') })} />
                                                    <div className="text-start col-lg-11 space-checkbox">
                                                        I agree to receive email notifications for newsletters, resources,
                                                    product news, updates and other communications from uCarenet.</div>
                                                    <div className="col-lg-12 text-start">{getFormErrorMessage('receiveEmail')}</div>
                                                </div>
                                            </Col>
                                            <Col>
                                                <div className="therms-and-privacy d-flex mx-auto col-lg-10 flex-wrap">
                                                    <Checkbox inputId="acceptTerms" name="acceptTerms" checked={formikCare.values.acceptTerms} onChange={formikCare.handleChange} className={classNames({ 'p-invalid': isFormFieldValid('acceptTerms') })} />
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
                                                <Button type="submit" label="CREATE ACCOUNT" icon="pi pi-check" iconPos="right" className="button-save-continue" />
                                            </Col>
                                            <Col>
                                                <div className="text-content-already d-flex justify-content-center">
                                                    Already have an account?&nbsp;
                                                    <p className="line-down" onClick={() => navigate('/login')}>  Sign in.</p>
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
                                        Care Profile
                                    </div>
                                    <div className="subtitle-create-account">
                                        Complete all the sections below to help us find you the Caregiver that is right for you.
                                    </div>
                                </Col>
                            </Row>
                            <div className="title-basic-form col-lg-12"></div>
                            <form className="p-fluid header-title-box" onSubmit={formikCareInfo.handleSubmit}>
                            <div className="title-multi-use">Basic Info</div>
                            <Row className="field name-container">
                                <Col lg={6} className="field header-title-input col-12">
                                    <div>First Name*</div>                                    
                                        <span className="p-float-label">
                                            <InputText id="firstName" name="firstName" placeholder="John" value={formikCareInfo.values.firstName} onChange={formikCareInfo.handleChange} autoFocus className={classNames({ 'p-invalid': isFormFieldValidCareInfo('firstName') })} />
                                        </span>
                                    {getFormErrorMessageStepInfo('firstName')}
                                </Col>
                                <Col lg={6} className="field header-title-input col-12">
                                    <div>Last Name*</div>
                                    <span className="p-float-label">
                                        <InputText id="lastName" name="lastName" placeholder="Allen" value={formikCareInfo.values.lastName} onChange={formikCareInfo.handleChange} autoFocus className={classNames({ 'p-invalid': isFormFieldValidCareInfo('lastName') })} />
                                        {getFormErrorMessageStepInfo('lastName')}
                                    </span>
                                </Col>
                            </Row>
                            <Row className="field name-container">
                                <Col lg={6} className="field header-title-input col-12">
                                    <div>City*</div>                                    
                                        <span className="p-float-label">
                                            <InputText id="city" name="city" placeholder="E.g. Toronto" value={formikCareInfo.values.city} onChange={formikCareInfo.handleChange} autoFocus className={classNames({ 'p-invalid': isFormFieldValidCareInfo('city') })} />
                                        </span>
                                    {getFormErrorMessageStepInfo('city')}
                                </Col>
                                <Col lg={6} className="field header-title-input col-12">
                                    <div>Postal Code*</div>
                                    <span className="p-float-label">
                                        <InputText id="postalCode" name="postalCode" placeholder="X1X 2Y2" value={formikCareInfo.values.postalCode} onChange={formikCareInfo.handleChange} autoFocus className={classNames({ 'p-invalid': isFormFieldValidCareInfo('postalCode') })} />
                                        {getFormErrorMessageStepInfo('postalCode')}
                                    </span>
                                </Col>
                            </Row>
                            
                            <div className="title-multi-use">Required Language(s)</div>
                            <Col className="field container-input col-lg-12 p-0 header-title-input">
                                    <div className="space-title">What language(s) are required to provide care?</div>
                                    <span className="p-float-label">
                                        <MultiSelect id="language" dropdownIcon="pi pi-caret-down" name="language" value={formikCareInfo.values.language} options={languages} onChange={formikCareInfo.handleChange} optionLabel="name" placeholder="Select all that apply.*" className={classNames({ 'p-invalid': isFormFieldValidCareInfo('language') })}/>
                                    </span>
                                {getFormErrorMessageStepInfo('language')}
                            </Col>
                            <div className="title-multi-use">Required Care</div>
                            <Col className="field container-input col-lg-12 p-0 header-title-input">
                                <div className="space-title">What care will the caregiver need to provide?</div>
                                <span className="p-float-label">
                                    <MultiSelect id="care" dropdownIcon="pi pi-caret-down" name="care" value={formikCareInfo.values.care} options={provideOptions} onChange={formikCareInfo.handleChange} optionLabel="name" placeholder="Select all that apply.*" maxSelectedLabels={3} className={classNames({ 'p-invalid': isFormFieldValidCareInfo('care') })}/>
                                </span>
                                {getFormErrorMessageStepInfo('care')}
                            </Col>
                            <div className="title-multi-use">Required Tasks</div>
                            <div className="container-input  header-title-input">What do you need help with?</div>
                            <div className="apply-text-content">Select one or more.*</div>
                            <Col lg={12} className="d-flex align-items-center container-multiple-check flex-wrap p-0">
                                {
                                    categories.map((category) => {
                                    return (
                                        <div key={category.id} className={`field-checkbox col-lg-6 container-check d-flex align-items-center ${selectedCategories.some((item) => item.id === category.id) ? 'container-check-hover' : ''}`}>
                                            <Checkbox inputId={category.id} name="categoryTasks"  value={category} onChange={onCategoryChange} checked={selectedCategories.some((item) => item.id === category.id)} />
                                            <label className='col-11' htmlFor={category.id}>{category.name}</label>
                                        </div>
                                    )
                                    })
                                }
                                <div className='div-empty col-12'></div>
                                {getFormErrorMessageStepInfo('categoryTasks')}
                            </Col>
                            <Col lg={12}>
                                <Button type="submit" label="SAVE AND CONTINUE >" className="button-save-continue m-0 mx-auto mb-5" />
                            </Col>
                            </form>
                            </div>
                            )
                        }
                        {
                            activeIndex === 3 && (
                            <div className="sign-up-page ">
                                <Row className="text-start justify-content-center col-lg-10 col-12 mx-auto" >
                                    <div className="text-start create-account-cotainer p-0">
                                        <div>
                                            Mobility & Interests
                                        </div>
                                        <div className="subtitle-create-account">
                                            Complete all the sections below to help us find you the Caregiver that is right for you.
                                        </div>
                                    </div>
                                    <div className="title-multi-use">
                                        Mobility
                                    </div>
                                    <div className="subtitle-create-account p-0">
                                    What is the level of mobility?                                    
                                    </div>
                                    <div className="apply-text-content">Select one*</div>
                                    <form className="p-fluid header-title-input" onSubmit={formikTasks.handleSubmit}>
                                        <Row>
                                            <Col lg={12} className="d-flex align-items-center container-multiple-check flex-wrap p-0">
                                                <Row>
                                                {
                                                    mobilities.map((mobility) => {
                                                    return (
                                                        <Col lg={4} md={4} key={mobility.id} onClick={()=>onMobilityChange(mobility)} className={`mobility-item-container col-6`}>
                                                            <div className={`mobility-item ${selectedMobilities.some((item) => item.id === mobility.id) ? ' mobility-item-hover' : ''}`}>
                                                                <img src={`/images/care_icons/Mobility/${mobility.id}.svg`} alt="image"></img>
                                                                <label className="text-content-options" htmlFor={mobility.id}>{mobility.name}</label>
                                                            </div>
                                                        </Col>
                                                    )
                                                    })
                                                }
                                                </Row>
                                                {getFormErrorMessageTasks('mobility')}
                                            </Col>
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

                        )}

                        {activeIndex === 4 && (
                            <div className="sign-up-page">
                                <div className="col-lg-10 mx-auto">
                                <Row className="text-start create-account-cotainer col-lg-10 col-12 mx-auto">
                                    <Col className="p-0">
                                        <div>
                                        Schedule
                                        </div>
                                        <div className="subtitle-create-account">
                                        Let us know when and how often you require care.
                                        </div>
                                    </Col>
                                    
                                </Row>
                                <form onSubmit={formikSchedule.handleSubmit}>
                                <Row  className="col-11 mx-auto text-start">
                                    <Col lg={12} className=" p-0">
                                        <div className="title-multi-use">
                                            Frequency 
                                        </div>
                                        <div className="subtitle-create-account">
                                            How often will you require care?                                    
                                        </div>
                                    </Col>
                                    <Col lg={12} className="p-0" >
                                        <div className="title-step-avalibility">
                                            Select an option.*                                        
                                        </div>
                                        <SelectButton name="option" className="selectbutton-background"  options={options} value={formikSchedule.values.option} onChange={formikSchedule.handleChange} />
                                        {getFormErrorMessageFrequency('option')}
                                    </Col>
                                    <Col lg={12} className="p-0" >
                                        <div className="title-step-avalibility">
                                        Select a start date.*                                        
                                        </div>
                                        <Calendar id="date" name="date" placeholder="DD/MM/YYYY" className="calendar-design" icon="pi pi-caret-down" onChange={formikSchedule.handleChange} dateFormat="dd/mm/yy" mask="99/99/9999"  showIcon/>
                                        {getFormErrorMessageFrequency('date')}
                                    </Col> 
                                </Row>
                                    { formikSchedule.values.option === 'REGULARLY' && (
                                        <div>
                                        <Row className="col-11 mx-auto text-start">
                                            <Col lg={6} className="p-fluid p-0" >
                                                <div className="title-step-avalibility">
                                                How often is care required?*                                        
                                                </div>
                                                <div className="field">
                                                    <Dropdown id="careRequired" dropdownIcon="pi pi-caret-down" name="careRequired" value={formikSchedule.values.careRequired} options={frecuency} onChange={formikSchedule.handleChange} optionLabel="name" placeholder="Select all that apply.*" className={classNames({ 'p-invalid': isFormFieldValidCareInfo('care') })}/>
                                                    {getFormErrorMessageFrequency('careRequired')}
                                                    {/* <MultiSelect id="careRequired" dropdownIcon="pi pi-caret-down" name="careRequired" value={formikSchedule.values.careRequired} options={provideOptions} onChange={formikSchedule.handleChange} optionLabel="name" placeholder="Select all that apply.*" maxSelectedLabels={3} className={classNames({ 'p-invalid': isFormFieldValidCareInfo('care') })}/>*/}
                                                </div>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col className="mx-auto col-11">
                                                <div className="title-step-avalibility text-start">
                                                    What times do you require care? Check all that apply.*                                            
                                                </div>
                                            </Col>
                                            <Col xl={12} md={12} xs={12}>
                                                <DataTable value={habilities} headerColumnGroup={headerGroup} responsiveLayout="scroll">
                                                <Column field="all" body={daysTemplate}  />

                                                <Column field="descr" body={daysTemplate} />

                                                <Column field="Mon" body={daysTemplate} />

                                                <Column field="Tue" body={daysTemplate} />

                                                <Column field="Wed" body={daysTemplate} />

                                                <Column field="Thu" body={daysTemplate} />

                                                <Column field="Fri" body={daysTemplate} />

                                                <Column field="Sat" body={daysTemplate} />

                                                <Column field="Sun" body={daysTemplate} />

                                                </DataTable>
                                                {getFormErrorMessageFrequency('timeRequired')}
                                            </Col>
                                        </Row>
                                        </div>
                                    )}
                                    { formikSchedule.values.option === 'ONCE' && (
                                        <div>
                                            <Row className="col-11 mx-auto text-start">
                                                <Col className="p-fluid p-0 col-12 d-flex flex-wrap">
                                                    <div className="title-step-avalibility col-12">
                                                    How many hours are required?*                                        
                                                    </div>
                                                    <div className="field col-6 ">
                                                        <InputText id="hoursRequired" name="hoursRequired" placeholder="E.g. 2" value={formikSchedule.values.hoursRequired} onChange={formikSchedule.handleChange} autoFocus className={classNames({ 'p-invalid': isFormFieldValid('phoneNumber') })} />
                                                        {getFormErrorMessageFrequency('hoursRequired')}
                                                    </div>
                                                    <div className="align-self-center p-2">
                                                        Hours
                                                    </div>
                                                </Col>
                                                
                                                <Col className="p-fluid p-0 col-12 d-flex flex-wrap" >
                                                    <div className="title-step-avalibility col-12">
                                                        How many days are required?*                                            
                                                    </div>
                                                    <div className="field col-6 ">
                                                        <InputText id="daysRequired" name="daysRequired" placeholder="E.g. 3" value={formikSchedule.values.daysRequired} onChange={formikSchedule.handleChange} autoFocus className={classNames({ 'p-invalid': isFormFieldValid('phoneNumber') })} />
                                                        {getFormErrorMessageFrequency('daysRequired')}
                                                    </div>
                                                    <div className="align-self-center p-2">
                                                        Days
                                                    </div>
                                                </Col>
                                            </Row>
                                        </div>
                                    )}
                                <Row>
                                    <Col>
                                        <Button type="submit" label="SAVE AND CONTINUE > " className="button-save-continue" />
                                    </Col>
                                </Row>
                                </form>
                                </div>
                            </div>
                        )}

                        {
                            activeIndex === 5 && (
                            <div className="sign-up-page">
                                    <div className="container col-lg-10 col-12 p-0 mx-auto">
                                        <Row className="text-start justify-content-left">
                                            <Col  xl={12} md={12} xs={12} className="title-availability">
                                                Create Your Care Request
                                            </Col>
                                            <Col xl={12} md={12} xs={12} className="description-form-availability"> 
                                                Let caregivers know more about your need.
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
                                                    A profile photo helps build connections and trust before you meet.
                                                </div>
                                            </Col>
                                        
                                        </Row>
                                        <Row className="justify-content-md-center">
                                            <Col xl={12} md={12} xs={12} >
                                                {/* <div className="profile-photo">

                                                </div> */}
                                                <img src={image} className="profile-photo" alt="profilepic"></img>

                                            </Col>
                                            <Col xl={12} md={12} xs={12}>
                                                <div className="btn-upload-image">

                                                </div>
                                            </Col>
                                            <Col xl={12} md={12} xs={12} className="btn-availabolity-submit">
                                                {/* <Button label="Upload Image" icon="pi pi-plus" iconPos="left" className="p-button-rounded p-button-outlined p-button-danger" /> */}
                                                <FileUpload mode="basic" auto chooseLabel="Upload Image" chooseOptions={chooseObject} name="demo[]" itemTemplate={customItemTemplate} customUpload uploadHandler={myUploader} className="p-button-rounded p-button-outlined p-button-danger" accept="image/*" maxFileSize={5242880} />

                                            </Col>
                                        </Row>
                                        <form className="text-start justify-content-left" onSubmit={formikProfile.handleSubmit}>

                                            <Col xl={12} md={12} xs={12}>
                                                <div className="edit-your-bio">
                                                Edit Your Care Request
                                                </div>
                                            </Col>
                                            <Col xl={12} md={12} xs={12}>
                                                <div className="edit-your-bio-description">
                                                We have summarised your job posting, but feel free to personalize it further.
                                                </div>
                                            </Col>
                                            <Col className="header-title-profile">
                                                <div>
                                                    Title must be greater than 30 characters*
                                                </div>
                                            </Col>
                                            <Col xl={12} md={12} xs={12} className="p-fluid">
                                                
                                                <InputText
                                                    placeholder="Caregiver required in London, Ontario"
                                                    id="header"
                                                    name="header"
                                                    onChange={formikProfile.handleChange}
                                                    value={formikProfile.values.header}
                                                    autoFocus
                                                    className={classNames({ 'p-invalid': isFormFieldValid('header') })}/>

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
                                                placeholder="Looking for kitchen help in London for my 70-year-old mother. She likes Arts and Crafts and Cooking and needs help with Alzheimer’s Care and Cancer Care. We would like someone who specializes in Bathing and Toileting. Anyone who can speak English, French and Urdu would be a great asset."
                                                autoResize
                                                onChange={formikProfile.handleChange} 
                                                autoFocus
                                                value={formikProfile.values.byography}
                                                id="byography" 
                                                name="byography" 
                                                />
                                                {getFormErrorMessageProfile('byography')}
                                            </Col>
                                            
                                            <Col>
                                                <Button  type="submit" label="COMPLETE REGISTRATION" className="button-save-continue" />
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

export default SignUpCare;