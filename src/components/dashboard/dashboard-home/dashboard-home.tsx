import './dashboard-home.scss';
import "primereact/resources/themes/lara-light-indigo/theme.css";  
import "primereact/resources/primereact.min.css";                  
import "primeicons/primeicons.css";    
import 'bootstrap/dist/css/bootstrap.min.css';
import React ,{ useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { useFormik } from 'formik';
import { Row, Col, InputGroup, FormControl} from 'react-bootstrap';
import { Button } from 'primereact/button';
import { MultiSelect } from 'primereact/multiselect';
import { Dropdown } from 'primereact/dropdown';
import { ScrollPanel } from 'primereact/scrollpanel';
import { InputText } from 'primereact/inputtext';
import { SelectButton } from 'primereact/selectbutton';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { ColumnGroup } from 'primereact/columngroup';
import { Row as PrimeRow } from 'primereact/row';
import { Checkbox } from 'primereact/checkbox';
import { InputTextarea } from 'primereact/inputtextarea';
import { Calendar } from 'primereact/calendar';
import { addLocale } from 'primereact/api';
import { Dialog } from 'primereact/dialog';
import FormCheckStart from './form-start';



const DashBoardHome = () => {
    let navigate = useNavigate();
    const [isMobile, setIsMobile] = useState(false);
    const [messageContent, setMessageContent] = useState(true);
    useEffect(()=>{
        if (document.documentElement.clientWidth < 768) {
            setIsMobile(true);
        }
    });
    let today = new Date();
    let month = today.getMonth();
    let year = today.getFullYear();
    let prevMonth = (month === 0) ? 11 : month - 1;
    let prevYear = (prevMonth === 11) ? year - 1 : year;
    let nextMonth = (month === 11) ? 0 : month + 1;
    let nextYear = (nextMonth === 0) ? year + 1 : year;

    const dayNames= ['sunday', 'monday', 'thursday', 'wednesday', 'tuesday', 'friday', 'saturday'];
    const dayNamesShort= ['sun', 'mon', 'thu', 'wed', 'tue', 'fri', 'sat'];
    const dayNamesMin= ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
    const monthNames= ['January', 'February', 'March', 'April', 'May', 'Jun', 'July', 'Augost', 'September', 'Octuber', 'November', 'Dicember'];
    const monthNamesShort= ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'];
    
    

    addLocale('us', {
        firstDayOfWeek: 1,
        dayNames,
        dayNamesShort: dayNamesShort,
        dayNamesMin: dayNamesMin,
        monthNames: monthNames,
        monthNamesShort: monthNamesShort,
        today: 'Today',
        clear: 'Clean'
    });

     
    let userInformation = {
        name: 'Judy Henderson',
        age: 92,
        city: 'Toronto',
        postalCode: 'X1X 2Y2',
        date: new Date(),
        hours: 24,
        careRequired: {name: '10 hours/week', code: '10 hours/week'},
        lenguage:[{name: 'Spanish', code: 'SPN'},{name: 'English', code: 'ENG'}]
    };
    const [userInfo, setUserInfo] = useState(userInformation);
    const [userInfoCopy, setUserInfoCopy] = useState(userInformation);

    let userCareRequestsInfo = {
        name: 'Kate Miller',
        status: 'Registered Nurse',
        date: new Date(),
        hours: 24,
        experience: '8 Years Experience',
        lenguage:[{name: 'French', code: 'FRE'},{name: 'English', code: 'ENG'}]
    };
    const [userCareRequests, setUserCareRequests] = useState(userCareRequestsInfo);
    const [userCareRequestsCopy, setUserCareRequestsCopy] = useState(userCareRequestsInfo);

    let userTitleDescription = {
        title: 'Seeking care for 92-year-old',
        description: 'We are looking for care for My Mother. She likes Games, Arts and Crafts, Puzzles, Movies and Playing Cards and needs help with Dementia Care. We would like someone who specializes in Companionship, Bathing and Toileting, Dressing, Hygiene & Grooming and Light House Keeping. Anyone who can speak English, Arabic and French would be a great asset.'
    }
    const [userTitleDescrip, setUserTitleDescrip] = useState(userTitleDescription);
    const [userTitleDescripCopy, setUserTitleDescripCopy] = useState(userTitleDescription);
        
    let userSkill = {
        skill: 'Cancer, Dementia'
    }
    const [userSkillInput, setUserSkillInput] = useState(userSkill);
    const [userSkillInputCopy, setUserSkillInputCopy] = useState(userSkill);

    let userVaccinated = {
        status: 'Yes'
    }
    const [userVaccinatedInfo, setUserVaccinatedInfo] = useState(userVaccinated);
    const [userVaccinatedInfoCopy, setUserVaccinatedInfoCopy] = useState(userVaccinated);

    let userSupport = {
        support: 'Meal preparation, Grocery Shopping, Medication Reminders, Light housekeeping, Other: Rides to social events'
    }
    const [userSupportInput, setUserSupportInput] = useState(userSupport);
    const [userSupportInputCopy, setUserSupportInputCopy] = useState(userSupport);

    let mobilitySelected={
        
        name: 'Independent', 
        key: 'I', 
        image:'Independent.svg', 
        details:'Mobile: (placeholder copy)This care seeker is generally mobile and able to move about their home without aid. They are able to use stairs, slopes, etc.'   
    }
    let userBasicInformation = {
        name: 'Mason',
        lastName: 'Henderson',
        password: '123456',
        date: new Date(),
        gender: 'Male',
    };
    const [userBasicInfo, setUserBasicInfo] = useState(userBasicInformation);
    const [userBasicInfoCopy, setUserBasicInfoCopy] = useState(userBasicInformation);

    let userInformationContact = {
        email: 'masonhenderson@email.com',
        phone: '1+ (647) 802-9806'
    };
    const [userInfoContact, setUserInfoContact] = useState(userInformationContact);
    const [userInfoContactCopy, setUserInfoContactCopy] = useState(userInformationContact);

    let userInformationSubs = {
        subsBill: 'uCarenet+ Premium',
        creditCard: '4520 **** **** ****'
    };
    const [userInfoSub, setUserInfoSub] = useState(userInformationSubs);
    const [userInfoSubCopy, setUserInfoSubCopy] = useState(userInformationSubs);

    let userPreferContact = {
        contactTime: 'Between 9am-5pm EST',
        contactMethod: 'Email'
    };
    const [userContact, setContact] = useState(userPreferContact);
    const [userContactCopy, setContactCopy] = useState(userPreferContact);

    const onInputChange = (e, propertyName) => {
        const val = (e.target && e.target.value) || '';
        let _userInfo = {...userInfo};
        _userInfo[`${propertyName}`] = val;

        setUserInfo(_userInfo);
    }
    const onInputChangeSkill = (e, propertyName) => {
        const val = (e.target && e.target.value) || '';
        let _userSkillInput = {...userSkillInput}
        _userSkillInput[`${propertyName}`] = val;

        setUserSkillInput(_userSkillInput);
    }
    const onInputChangeVaccinated = (e, propertyName) => {
        const val = (e.target && e.target.value) || '';
        let _userVaccinated = {...userVaccinatedInfo}
        _userVaccinated[`${propertyName}`] = val;

        setUserVaccinatedInfo(_userVaccinated);
    }
    const onInputChangeSupport = (e, propertyName) => {
        const val = (e.target && e.target.value) || '';
        let _userSupportInput = {...userSupportInput}
        _userSupportInput[`${propertyName}`] = val;

        setUserSupportInput(_userSupportInput);
    }
    const onInputChangeDescription = (e, propertyName) => {
        const val = (e.target && e.target.value) || '';
        let _userInfo = {...userTitleDescrip};
        _userInfo[`${propertyName}`] = val;

        setUserTitleDescrip(_userInfo);
    }
    const onDropDownChange = (e, propertyName) => {
        const val = (e.value) || '';
        let _userInfo = {...userInfo};
        _userInfo[`${propertyName}`] = val;

        setUserInfo(_userInfo);
    }
    const onInputBasicInfoChange = (e, propertyName) => {
        const val = (e.target && e.target.value) || '';
        let _userInfo = {...userBasicInfo};
        _userInfo[`${propertyName}`] = val;

        setUserBasicInfo(_userInfo);
    }
    const onDropDownBasicInfoChange = (e, propertyName) => {
        const val = (e.value) || '';
        let _userInfo = {...userBasicInfo};
        _userInfo[`${propertyName}`] = val;

        setUserBasicInfo(_userInfo);
    }
    const onInputContactInfoChange = (e, propertyName) => {
        const val = (e.target && e.target.value) || '';
        let _userInfo = {...userInfoContact};
        _userInfo[`${propertyName}`] = val;

        setUserInfoContact(_userInfo);
    }
    const onInputSubInfoChange = (e, propertyName) => {
        const val = (e.target && e.target.value) || '';
        let _userInfo = {...userInfoSub};
        _userInfo[`${propertyName}`] = val;

        setUserInfoSub(_userInfo);
    }
    const onInputPreferChange = (e, propertyName) => {
        const val = (e.target && e.target.value) || '';
        let _userInfo = {...userContact};
        _userInfo[`${propertyName}`] = val;

        setContact(_userInfo);
    }

    const dateFormat = (value) =>{
        let today = new Date();
        let day = today.getDate();
        let month = today.getMonth();
        let year = today.getFullYear();

        return `${monthNames[month]} ${day}, ${year} `;
    }


    const caregiversInfo = [
        { name: 'Kate M.', key: '1', status: 'Registered Nurse', experience: '8 Years Experience', priceHour: '$35/hr', checked: false},
        { name: 'Kate M.', key: '2', status: 'Registered Nurse', experience: '8 Years Experience', priceHour: '$35/hr', checked: false},
        { name: 'Kate M.', key: '3', status: 'Registered Nurse', experience: '8 Years Experience', priceHour: '$35/hr', checked: false},
    ];
    const careRequestInfo = [
        { name: 'Molly R.', key: '1', status: 'Care for: Grandmother', frecuency: '10 hours/week', priceHour: '$25/hr', work: 'Seeking Meal Preparation Help', description: 'My grandma requieres help with dinner preparation...'},
        { name: 'Molly R.', key: '1', status: 'Care for: Grandmother', frecuency: '10 hours/week', priceHour: '$25/hr', work: 'Seeking Meal Preparation Help', description: 'My grandma requieres help with dinner preparation...'},
        { name: 'Molly R.', key: '1', status: 'Care for: Grandmother', frecuency: '10 hours/week', priceHour: '$25/hr', work: 'Seeking Meal Preparation Help', description: 'My grandma requieres help with dinner preparation...'},
    ];
    const articleDetails = [
        { title: 'Article title is here', key: '1', img: 'image', tagFirst: 'vision & hearing loss', tagSecond: 'Alzheimers & dementia'},
        { title: 'Article title is here', key: '2', img: 'image', tagFirst: 'vision & hearing loss', tagSecond: 'Alzheimers & dementia'},
        { title: 'Article title is here', key: '3', img: 'image', tagFirst: 'vision & hearing loss', tagSecond: 'Alzheimers & dementia'},
        { title: 'Article title is here', key: '4', img: 'image', tagFirst: 'vision & hearing loss', tagSecond: 'Alzheimers & dementia'},
    ];
    const listBenefits = [
        {benefits:'Public Court Record'},
        {benefits:'Criminal Record Search'},
        {benefits:'Fraud Watchlists'},
        {benefits:'Sex Offender Check'}
    ];
    const messagesReceived = [
        {photo:'', name:'Jane L.', date: '5 mins ago', message: 'Hi there! I understand you’d like some...', id: 1},
        {photo:'', name:'Kate M.', date: 'Yesterday', message: 'Hi there! I understand you’d like some...', id: 2},
        {photo:'', name:'Diana J.', date: '03/23/2022', message: 'Hi there! I understand you’d like some...', id: 3},
        {photo:'', name:'Kate M.', date: 'Yesterday', message: 'Hi there! I understand you’d like some...', id: 4},
        {photo:'', name:'Diana J.', date: '03/23/2022', message: 'Hi there! I understand you’d like some...', id: 5},
        {photo:'', name:'Jane L.', date: '5 mins ago', message: 'Hi there! I understand you’d like some...', id: 6},
        {photo:'', name:'Kate M.', date: 'Yesterday', message: 'Hi there! I understand you’d like some...', id: 7},
        {photo:'', name:'Diana J.', date: '03/23/2022', message: 'Hi there! I understand you’d like some...', id: 8},
        {photo:'', name:'Jane L.', date: '5 mins ago', message: 'Hi there! I understand you’d like some...', id: 9},
    ];
    const [selectedMesagge, setSelectedMesagge] = useState(messagesReceived.slice(0,0));
    const onMesaggeChange = (e) => {
        let _selectedMesagge = [...selectedMesagge];

        if(_selectedMesagge && _selectedMesagge.length){
            _selectedMesagge.splice(0, 1);
        }
        _selectedMesagge.push(e);

        setSelectedMesagge(_selectedMesagge);
        setMessageContent(false)
    }
    const receiveNotifications=[
        {option1:'Newsletters and Resources', option2:'Communcations Regarding Care', option3:'Product News & Updates'}
    ]
    
    const mobilities = [
        {name: 'Independent', key: 'I', image:'Independent.svg'}, 
        {name: 'Required a Cane', key: 'R', image:'Cane.svg'}, 
        {name: 'Required a Walker', key: 'W', image:'Walker.svg'}, 
        {name: 'Low Mobility', key: 'L', image:'LowMobility.svg'}, 
        {name: 'Wheelchair', key: 'C', image:'WheelChair.svg'}, 
        {name: 'Immobile', key: 'N', image:'Immobile.svg'}
    ];

    const languages = [
        { name: 'Spanish', code: 'SPN' },
        { name: 'English', code: 'ENG' },
        { name: 'Chenesse', code: 'CHN' },
        { name: 'Japanesse', code: 'JPN' },
        { name: 'French', code: 'FRE' }
    ];
    const frecuency = [
        { name: '1x/week', code: '1x/week' },
        { name: '2x/week', code: '2x/week' },
        { name: '3x/week', code: '3x/week' },
        { name: '4x/week', code: '4x/wee' }
    ]
    
    const tabMenu = [
        { name: 'Dashboard', code: 1, img:'mobile-dashboard-nav-Dashboard.svg'},
        { name: 'Messaging', code: 2, img:'mobile-dashboard-nav-Messaging.svg'},
        { name: 'Care Profile', code: 3, img:'mobile-dashboard-nav-Profile.svg'},
        { name: 'Account Settings', code: 4, img:'mobile-dashboard-nav-Account.svg'}
    ];

    const [selectedMobilities, setSelectedMobilities] = useState({name: 'Independent', key: 'I', image:'Independent.svg'});

    const [selectedSaveCaregivers, setSelectedSaveCaregivers] = useState(caregiversInfo.slice(0,0));
    const [saveResources, setSaveResources] = useState(articleDetails.slice(0,0));
    const [unselectedSaveCaregivers, setUnSelectedSaveCaregivers] = useState(caregiversInfo.slice(0,0));
    const [unsaveResources, setUnSaveResources] = useState(articleDetails.slice(0,0));

    const [typeUser, setTypeUser] = useState(false);

    const [toggleState, setToggleState] = useState(tabMenu[0].code);

    const [switchTabCaregivers, setSwitchTabCaregivers] = useState(false);
    const [switchTabResources, setSwitchTabResources] = useState(false);

    const [editInfoGeneral, setEditInfoGeneral] = useState(false);
    const [editTitleState, setEditTitleState] = useState(false);
    const [editMobility , setEditMobility] = useState(false);
    const [editBasicInfo , setEditBasicInfo] = useState(false);
    const [editSkillText, setEditSkillText] = useState(false);
    const [editSupportText, setEditSupportText] = useState(false);
    const [editContact, setEditContact] = useState(false);
    const [editPreferences, setEditPreferences] = useState(false);
    const [editSubscription, setEditSubcription] = useState(false);
    const [scheduleEdit,setScheduleEdit] = useState(false);
    const [interesEdit,setInterestEdit] = useState(false);
    const [editVaccinated,setVaccinatedEdit] = useState(false);
    
    const [stateConnec, setStateConnect] = useState('ACTIVE');
    const [checked, setChecked] = useState(false);
    const [checked2, setChecked2] = useState(false);
    const [checked3, setChecked3] = useState(false);
    const options = ['ACTIVE', 'DISABLED'];

    const [selectedMenu, setSelectedMenu] = useState({code: 1, img: "mobile-dashboard-nav-Dashboard.svg", name: "Dashboard"});
    const toggleTab = (index) => {
        setToggleState(index);
    };
    const tabRecomenCaregivers = (index) => {
        setSwitchTabCaregivers(index);
    };
    const tabRecomenResources = (index) => {
        setSwitchTabResources(index);
    };
    const editFirstInfo = (edit) =>{
        setEditInfoGeneral(edit);
        setUserInfoCopy(userInfo);
    }
    const discardChangesInfo = (edit) =>{
        setEditInfoGeneral(edit);
        setUserInfo(userInfoCopy);
    }
    const editVaccinatedInfo = (edit) =>{
        setVaccinatedEdit(edit);
        setUserVaccinatedInfoCopy(userVaccinatedInfo);
    }
    const discardChangesVaccinated = (edit) =>{
        setVaccinatedEdit(edit);
        setUserVaccinatedInfo(userVaccinatedInfoCopy);
    }
    const editTitleDescrip = (edit) =>{
        setEditTitleState(edit);
        setUserTitleDescripCopy(userTitleDescrip)
    }
    const discardChangesTitle = (edit) =>{
        setEditTitleState(edit);
        setUserTitleDescrip(userTitleDescripCopy);
    }
    const editMObilityTab = (edit) =>{
        setEditMobility(edit);
    }
    const editBasicInformation = (edit) => {
        setEditBasicInfo(edit);
        setUserBasicInfoCopy(userBasicInfo)
    }
    const discardBasicInformation = (edit) => {
        setEditBasicInfo(edit);
        setUserBasicInfo(userBasicInfoCopy)
    }
    
    const editSkill = (edit) => {
        setEditSkillText(edit);
        setUserSkillInputCopy(userSkillInput)
    }
    const discardChangesSkill = (edit) =>{
        setEditSkillText(edit);
        setUserSkillInput(userSkillInputCopy);
    }
    const editSupport = (edit) => {
        setEditSupportText(edit);
        setUserSupportInputCopy(userSupportInput)
    }
    const discardChangesSupport = (edit) =>{
        setEditSupportText(edit);
        setUserSupportInput(userSupportInputCopy);
    }

    const editContactInfo = (edit) => {
        setEditContact(edit);
        setUserInfoContactCopy(userInfoContact);
    }
    const discardContactInfo = (edit) => {
        setEditContact(edit);
        setUserInfoContact(userInfoContactCopy);
    }

    const editPreferencesNotifi = (edit) => {
        setEditPreferences(edit);
        setContactCopy(userContact);
    }
    const discardPreferencesNotifi = (edit) => {
        setEditPreferences(edit);
        setContact(userContactCopy);
    }

    const editSubsBilling = (edit) => {
        setEditSubcription(edit);
        setUserInfoSubCopy(userInfoSub);
    }
    const discardSubsBilling = (edit) => {
        setEditSubcription(edit);
        setUserInfoSub(userInfoSubCopy);
    }
    const editInterest = (edit) => {
        setInterestEdit(edit);
    }

    const editSchedule = (edit) =>{
        setScheduleEdit(edit);
        setUserScheduleSelecCopy(selectedHabilities);
    }
    const discardSchedule = (edit) =>{
        setScheduleEdit(edit);
        setSelectedHabilities(userScheduleSelecCopy);
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
    }
    const daysTemplate = (elements, a ) => {
        return (
            <React.Fragment>
                <div className="field-fill-circle">
                    
                    {a.field !== 'dayOfDay' && !scheduleEdit && selectedHabilities.some(item => item.toString() === (elements.key + '_' + a.field.toString()) ) &&(
                                <>
                                <span className='circle-filled'>
                                </span>
                                </>
                           
                        )
                    }

                    {a.field !== 'dayOfDay' && scheduleEdit && (
                        <>
                            <span>
                                <Checkbox 
                                inputId={elements.key + '_'+ a.field}
                                value={elements.key + '_'+ a.field}
                                name="availability" 
                                onChange={onAvailabilityChange}
                                checked={selectedHabilities.some(item => item.toString() === (elements.key + '_' + a.field.toString()) )}
                                />
                            </span>
                        </>
                           
                        )
                    }

                    {a.field === 'dayOfDay' && (
                           <span>
                           {elements.dayOfDay}
                           </span>
                        
                    )}
                </div>
            </React.Fragment>
        )
    }
    const onMobilityChange = (e) => {
        setSelectedMobilities(e);
    }
    const habilities = [
        {dayOfDay:'Morning', mon:true, tues:true, wed:false, thu:true, fri:false, sat:true, sun:false, key: 'A'},
        {dayOfDay:'Afternoon', mon:true, tues:true, wed:false, thu:true, fri:false, sat:true, sun:false, key: 'B'},
        {dayOfDay:'Evening', mon:true, tues:true, wed:false, thu:true, fri:false, sat:true, sun:false, key: 'C'},
        {dayOfDay:'OverNight',mon:true, tues:true, wed:false, thu:true, fri:false, sat:true, sun:false, key: 'D'}
    ];

    const [selectedHabilities, setSelectedHabilities] = useState(habilities.slice(0,0));
    const [userScheduleSelecCopy, setUserScheduleSelecCopy] = useState(selectedHabilities.slice(0,0));




    const onSaveChange = (e) => {
        let _selectedSave = [...selectedSaveCaregivers];

        const index = _selectedSave.findIndex(item => item.key === e.key);
        if(index>=0){
            _selectedSave.splice(index, 1);
        }else{
            _selectedSave.push(e);
        }
        setSelectedSaveCaregivers(_selectedSave);
    }
    const onSaveResourcesChange = (e) => {
        let _selectedSave = [...saveResources];

        const index = _selectedSave.findIndex(item => item.key === e.key);
        if(index>=0){
            _selectedSave.splice(index, 1);
        }else{
            _selectedSave.push(e);
        }
        setSaveResources(_selectedSave);
    }
    const onUnSaveChange = (e) => {
        let _unselectedSave = [...unselectedSaveCaregivers];

        const index = _unselectedSave.findIndex(item => item.key === e.key);
        if(index>=0){
            _unselectedSave.splice(index, 1);
        }else{
            _unselectedSave.push(e);
        }
        setUnSelectedSaveCaregivers(_unselectedSave);
    }
    const onUnSaveResourcesChange = (e) => {
        let _unselectedSave = [...unsaveResources];

        const index = _unselectedSave.findIndex(item => item.key === e.key);
        if(index>=0){
            _unselectedSave.splice(index, 1);
        }else{
            _unselectedSave.push(e);
        }
        setUnSaveResources(_unselectedSave);
    }
    let headerGroup =
        <ColumnGroup>
            <PrimeRow>
                <Column header="" className="day-title"/>
                <Column header="MON" className="day-title"/>
                <Column header="TUES" className="day-title"/>
                <Column header="WED" className="day-title"/>
                <Column header="THU" className="day-title"/>
                <Column header="FRI" className="day-title"/>
                <Column header="SAT" className="day-title"/>
                <Column header="SUN" className="day-title"/>
            </PrimeRow>
        </ColumnGroup>;
    const interest = [
        {name: 'Art & Crafts', key: 'AC', image:'ArtsandCrafts.svg'},
        {name: 'Books', key: 'BO', image:'Reading.svg'},
        {name: 'Card Games', key: 'CG', image:'PlayingCards.svg'},
        {name: 'Church Activities', key: 'CA', image:'ChurchActivities.svg'},
        {name: 'Computer', key: 'C', image:'ComputerTech.svg'},
        {name: 'Cooking', key: 'CK', image:'Cooking.svg'},
        {name: 'Games', key: 'GM', image:'Games.svg'},
        {name: 'Gardening', key: 'GA', image:'Gardening.svg'},
        {name: 'Knitting', key: 'KN', image:'Knitting.svg'},
        {name: 'Movies', key: 'MO', image:'Movies.svg'},
        {name: 'Pets', key: 'PT', image:'Pets.svg'},
        {name: 'Puzzles', key: 'PZ', image:'Puzzles.svg'},
        {name: 'Sewing', key: 'SW', image:'Sewing.svg'},
        {name: 'Shopping', key: 'SP', image:'Shopping.svg'},
        {name: 'Spirituality', key: 'SM', image:'Spiritualism.svg'},
        {name: 'Sports', key: 'ST', image:'Sports.svg'},
        {name: 'Television', key: 'TV', image:'Television.svg'},
        {name: 'Traveling', key: 'TR', image:'Traveling.svg'}
    ];
    const countrys = [
        {name: 'Canadian', code: 'CA'},
        {name: 'USA', code: 'US'},
        {name: 'Mexico', code: 'MX'},
        {name: 'China', code: 'CH'},
        {name: 'Brazil', code: 'BR'}
    ];
    const [selectedInterest, setSelectedInterest] = useState([{name: 'Sewing', key: 'SW', image:'Sewing.svg'}, {name: 'Sports', key: 'ST', image:'Sports.svg'},{name: 'Cooking', key: 'CK', image:'Cooking.svg'}, {name: 'Spirituality', key: 'SM', image:'Spiritualism.svg'}, {name: 'Traveling', key: 'TR', image:'Traveling.svg'}]);
    const onInterestChange = (e) => {
        let _selectedInterest = [...selectedInterest];

        const index = _selectedInterest.findIndex(item => item.key === e.key);
        if(index>=0){
            _selectedInterest.splice(index, 1);
        }else{
            _selectedInterest.push(e);
        }
        setSelectedInterest(_selectedInterest);
    }
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
    
    const onTabChange = (e) => {
        setToggleState(e.value.code);
        setSelectedMenu(e.value);
    }

    const tabOptionTemplate = (option) => {
        return (
            <div>
                <img alt={option.name} src={`/images/ui_functionalities/${option.img}`} height="22px" width="22px"/>
                <span className='ms-3'>{option.name}</span>
            </div>
        )
    }
    const selectedTabTemplate = (option, props) => {
        if (option) {
            return (
                <div>
                    <img alt={option.name} src={`/images/ui_functionalities/${option.img}`} className='mobile-dropdown'/>
                    <span className='my-auto ms-3'>{option.name}</span>
                </div>
            );
        }

        return (
            <span>
                {props.placeholder}
            </span>
        );
    }
    const onBackMessage = () =>{
        setMessageContent(true);
    }
    
    const [position, setPosition] = useState('center');

    const [displayBasic, setDisplayBasic] = useState(false);
    const dialogFuncMap = {
        'displayBasic': setDisplayBasic
    }

    const onClick = (name) => {
        dialogFuncMap[`${name}`](true);

        if (position) {
            setPosition(position);
        }
    }

    const onHide = (name) => {
        dialogFuncMap[`${name}`](false);
    }
    const renderFooter = (name) => {
        return (
            <div className='btn-modal-send'>
                <Button label="SEND REQUEST" icon="pi pi-send" iconPos='right' onClick={() => onHide(name)} />
            </div>
        );
    }

    return(
        <div className="dashboard-home-page mx-auto">
            <Row className='col-xl-10 col-lg-11 col-md-11 col-11 mx-auto'>
                <Col lg={4}>
                    <div className='wellcome-text'>
                        Good Afternoon, Mason
                    </div>
                    <div className='menu-dropdown'>
                        <Dropdown 
                            className='col-7'
                            value={selectedMenu} 
                            options={tabMenu} 
                            onChange={onTabChange} 
                            optionLabel="name" 
                            filterBy="name" 
                            placeholder={tabMenu[0].name} 
                            valueTemplate={selectedTabTemplate} 
                            itemTemplate={tabOptionTemplate} 
                        />
                        <div style={{'fontSize': '35px'}} className='btn-sign-out-responsive pi pi-sign-out col-1 my-auto me-3'/>
                    </div>
                    <div className='space-white'></div>
                    <div className='content-status-header col-xxl-12 col-lg-10 col-sm-9 col-8'>
                        <img className='tag-shield-status col-lg-2' src='/images/widget_icons/badge-icon-complete.svg' alt='complete'/>
                        <div className='ms-2'>
                            <div>
                                <span className='bckg-check-status'>
                                    Background Check Status: 
                                </span>
                                <span className='bckg-status-text'>Status: </span>
                                <span className='ms-2 status-bar-complete'>
                                    COMPLETE
                                </span>
                            </div>
                            <div className='status-expery-time'>
                                Expiry: in 9 months
                            </div>
                        </div>
                    </div>
                    <div className='content-status-header col-xxl-12 col-lg-10 col-sm-9 col-8'>
                        <img className='tag-shield-status col-lg-2' src='/images/widget_icons/badge-icon-partial.svg' alt='complete'/>

                        <div className='ms-2'>
                            <div>
                                <span className='bckg-check-status'>
                                    Background Check Status: 
                                </span>
                                <span className='bckg-status-text'>Status: </span>
                                <span className='ms-2 status-bar-pending'>
                                    Pending
                                </span>
                            </div>
                            <div className='status-expery-time'>
                                Expiry: in 9 months
                            </div>
                        </div>
                    </div>
                    <div className='content-status-header col-xxl-12 col-lg-10 col-sm-9 col-8'>
                        <img className='tag-shield-status col-lg-2' src='/images/widget_icons/badge-icon-partial.svg' alt='complete'/>
                        <div className='ms-2'>
                            <div>
                                <span className='bckg-check-status'>
                                    Background Check Status: 
                                </span>
                                <span className='bckg-status-text'>Status: </span>
                                <span className='ms-2 status-bar-partial'>
                                    partial
                                </span>
                            </div>
                            <div className='status-expery-time'>
                                Expiry: in 9 months
                            </div>
                        </div>
                    </div>
                    <div className='content-status-header col-xxl-12 col-lg-10 col-sm-9 col-8'>
                        <img className='tag-shield-status col-lg-2' src='/images/widget_icons/badge-icon-expired.svg' alt='complete'/>
                        <div className='ms-2'>
                            <div>
                                <span className='bckg-check-status'>
                                    Background Check Status: 
                                </span>
                                <span className='bckg-status-text'>Status: </span>
                                <span className='ms-2 status-bar-expired'>
                                    expired
                                </span>
                            </div>
                            <div className='status-expery-time'>
                                Expiry: in 0 days
                            </div>
                        </div>
                    </div>
                    <div className='content-status-header col-xxl-12 col-lg-10 col-sm-9 col-8'>
                        <img className='tag-shield-status col-lg-2' src='/images/widget_icons/badge-icon-NA.svg' alt='complete'/>
                        <div className='ms-2'>
                            <div>
                                <span className='bckg-check-status'>
                                    Background Check Status: 
                                </span>
                                <span className='bckg-status-text'>Status: </span>
                                <span className='ms-2 status-bar-na'>
                                    n/a
                                </span>
                            </div>
                            <div className='status-expery-time'>
                                Expiry: N/A
                            </div>
                        </div>
                    </div>
                </Col>
                <Col lg={4}></Col>
                <Col lg={4} className='container-btn-apps'>
                    <img className='logo-ucarenet' src='/images/logos_primary/uCarenet+_logo_primary.svg' alt='logo+'/>
                    <div className='text-enjoy-mind'>
                        Enjoy peace of mind with uCarenet+. Monitor care visits, wellness & more.
                    </div>
                    <div className='d-flex justify-content-evenly'>
                        <div className='btn-download-app'>
                            <img src='/images/care_icons/Dashboard/appstore.png' alt='appstore'/>
                        </div>
                        <div className='btn-download-app'>
                            <img src='/images/care_icons/Dashboard/playstore.png' alt='playstore'/>
                        </div>
                    </div>
                    <div className='text-learn-about'>
                        Learn more about uCarenet+ here {'>'}
                    </div>
                </Col>

                <FormCheckStart/>

                <Col lg={8}>
                    <div className="bloc-tabs">
                        <button
                            className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
                            onClick={() => toggleTab(1)}
                        >
                            <span className='tabview-text-btn'>
                                Dashboard
                            </span>

                        </button>
                        <button
                            className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
                            onClick={() => toggleTab(2)}
                        >
                            <span className='tabview-text-btn'>
                                Messaging
                            </span>

                        </button>
                        <button
                            className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
                            onClick={() => toggleTab(3)}
                        >
                            {!typeUser && (
                                <span className='tabview-text-btn'>
                                    Care Profiles
                                </span>
                            )}
                            {typeUser && (
                                <span className='tabview-text-btn'>
                                    Your Profile
                                </span>
                            )}
                            

                        </button>
                    </div>
                </Col>
                <Col lg={4} className='container-btn align-items-end my-auto'>
                    <button
                        className={toggleState === 4 ? "tabs active-tabs col-6 p-0" : "content-account-settings col-6 p-0"}
                        onClick={() => toggleTab(4)}
                    >
                            <span className='btn-account-settings'>
                                Account Settings
                            </span>

                    </button>
                    <Button label='Sign out' icon='pi pi-sign-out' iconPos='right' className='btn-sign-out col-4 p-0'/>
                </Col>
            </Row>
            {
                toggleState===1 && (
                    <div className='bckg-color-message'>
                        <Row className='col-lg-10 col-md-11 col-11 mx-auto d-flex flex-wrap '>
                            <div className='content-incomplete-profile'>
                                <Col lg={3} className='my-auto col-4 mx-auto'>
                                    <div className="circle-wrap col-4 mx-auto">
                                        <div className="circle">
                                            <div className="mask half">
                                                <div className="fill"></div>
                                            </div>

                                            <div className="mask full">
                                                <div className="fill"></div>
                                            </div>
                                            <div className="inside-circle">
                                                <div className='porcentage-knob mx-auto'>
                                                    70%
                                                </div> 
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                                
                                <Col lg={6}>
                                    <div className='title-incomplete col-11 mx-auto'>
                                        Your Profile is almost complete!
                                    </div>
                                    <div className='content-text-incomplete col-11 mx-auto'>
                                        Your care request is currently not visible on the marketplace. 
                                        Connect with caregivers once you complete a care profile.
                                    </div>
                                </Col>
                                
                                <Col lg={3} className='my-auto mx-auto col-6 btn-content-now'>
                                    <Button label='COMPLETE NOW' className='btn-complete-now'/>
                                </Col>
                            </div>
                        </Row>
                        <Row className='col-lg-10 col-md-11 col-11 mx-auto d-flex flex-wrap '>
                            <div className='content-incomplete-profile'>
                                <Col lg={3} className='my-auto col-4 mx-auto'>
                                    <div className='envelope-icon'>
                                        <i className="pi pi-envelope" style={{'fontSize': '100px'}}></i>
                                    </div>
                                </Col>
                                
                                <Col lg={6}>
                                    <div className='title-incomplete col-10 mx-auto'>
                                        Your email is not yet verified!
                                    </div>
                                    <div className='content-text-incomplete col-10 mx-auto'>
                                        Your profile is currently not visible on the marketplace. 
                                        Connect with care seekers once you verify your email.
                                    </div>
                                </Col>
                                
                                <Col lg={3}  className='my-auto mx-auto col-2 btn-content-now'>
                                    <Button label='CTA' className='btn-complete-now'/>
                                </Col>
                            </div>
                        </Row>
                        <Row className='col-lg-10 col-md-11 col-11 mx-auto'>
                            {!typeUser && (
                                <>
                                {!switchTabCaregivers && (
                                    <div className='title-recommen-content'>
                                        <Col lg={3}>
                                            <div className='title-recommen-caregivers' onClick={() => tabRecomenCaregivers(false)}>
                                                Recommended Caregivers
                                            </div>
                                        </Col>
                                        <Col lg={6}>
                                            <div className='title-save-caregivers' onClick={() => tabRecomenCaregivers(true)}>
                                                Saved Caregivers
                                            </div>
                                        </Col>
                                        <Col lg={12}>
                                            <div className='showing-text'>
                                                Showing your best match based on [care profile name]’s profile
                                            </div>
                                        </Col>
                                        <Col lg={12} className="d-flex align-items-center flex-wrap">
                                            {
                                                caregiversInfo.map((infoCaregiver, index)=>{
                                                    return(
                                                        <div key={index} className='container-profile col-lg-4 col-md-4 col-xs-12 mx-auto' >
                                                            <Row className='profile-info-content col-11 mx-auto'>
                                                                <Col lg={5} className='col-4'>
                                                                    <div className="profile-photo">

                                                                    </div>
                                                                    <div className='btn-profile-contact'>
                                                                        <Button label='VIEW PROFILE' className='btn-view-profile col-12'/>
                                                                        <Button label='CONTACT' className='btn-contact col-12'/>
                                                                    </div>
                                                                </Col>
                                                                <Col lg={7} className='info-caregiver col-8'>
                                                                    <div className='name-caregiver'>
                                                                        {infoCaregiver.name}
                                                                    </div>
                                                                    <div className='status-caregiver'>
                                                                        {infoCaregiver.status}
                                                                    </div>
                                                                    <div className='experience-caregiver'>
                                                                        {infoCaregiver.experience}
                                                                    </div>
                                                                    <div className='price-hour-caregiver'>
                                                                        {infoCaregiver.priceHour}
                                                                    </div>
                                                                    <div className='d-flex'>
                                                                        <div className='badge-container col-9'>
                                                                            <div className='badge-1'>
                                                                                <img src='/images/widget_icons/badge-icon-complete.svg' alt='complete'/>
                                                                            </div>
                                                                            <div className='badge-1'>
                                                                                <img src='/images/widget_icons/badge_certified.svg' alt='complete'/>
                                                                            </div>
                                                                        </div>
                                                                        <div className='bookmark-container col-3' onClick={()=>onSaveChange(infoCaregiver)}>
                                                                            <div style={{'fontSize': '2em'}} className={`save-icon  ${selectedSaveCaregivers.some((item) => item.key === infoCaregiver.key) ? ' pi pi-bookmark-fill' : 'pi pi-bookmark'}`}></div>
                                                                        </div>
                                                                    </div>

                                                                </Col>
                                                            </Row>
                                                        </div>

                                                    )
                                                })
                                            }
                                        </Col>
                                        <Col lg={3} className='mx-auto'>
                                            <Button label='SEARCH FOR CAREGIVERS' className='btn-search-caregivers' onClick={() => navigate('/search-cg')}/>
                                        </Col>
                                    </div>
                                )}
                                {switchTabCaregivers && (
                                    <div className='title-recommen-content'>
                                        <Col lg={3}>
                                            <div className='title-save-caregivers ' onClick={() => tabRecomenCaregivers(false)}>
                                                Recommended Caregivers
                                            </div>
                                        </Col>
                                        <Col lg={6}>
                                            <div className='title-recommen-caregivers' onClick={() => tabRecomenCaregivers(true)}>
                                                Saved Caregivers
                                            </div>
                                        </Col>
                                        <Col lg={6}>
                                            <div className='showing-text'>
                                                Showing your save match [care profile name]’s profile
                                            </div>
                                        </Col>
                                        <Col lg={12} className="d-flex align-items-center flex-wrap">
                                            {
                                                caregiversInfo.map((infoCaregiver, index)=>{
                                                    return(
                                                        <div key={index} className='container-profile col-lg-4 col-md-4 col-xs-12'>
                                                            <Row className='profile-info-content col-11 mx-auto'>
                                                                <Col lg={5} className='col-4'>
                                                                    <div className="profile-photo">

                                                                    </div>
                                                                    <div className='btn-profile-contact'>
                                                                        <Button label='VIEW PROFILE' className='btn-view-profile col-12'/>
                                                                        <Button label='CONTACT' className='btn-contact col-12'/>
                                                                    </div>
                                                                </Col>
                                                                <Col lg={7} className='info-caregiver col-8'>
                                                                    <div className='name-caregiver'>
                                                                        {infoCaregiver.name}
                                                                    </div>
                                                                    <div className='status-caregiver'>
                                                                        {infoCaregiver.status}
                                                                    </div>
                                                                    <div className='experience-caregiver'>
                                                                        {infoCaregiver.experience}
                                                                    </div>
                                                                    <div className='price-hour-caregiver'>
                                                                        {infoCaregiver.priceHour}
                                                                    </div>
                                                                    <div className='d-flex'>
                                                                        <div className='badge-container col-9'>
                                                                            <div className='badge-1'>
                                                                                <img src='/images/widget_icons/badge-icon-complete.svg' alt='complete'/>
                                                                            </div>
                                                                            <div className='badge-1'>
                                                                                <img src='/images/widget_icons/badge_certified.svg' alt='complete'/>
                                                                            </div>
                                                                        </div>
                                                                        <div className='bookmark-container col-3' onClick={()=>onUnSaveChange(infoCaregiver)}>
                                                                            <div style={{'fontSize': '2em'}} className={`save-icon  ${unselectedSaveCaregivers.some((item) => item.key === infoCaregiver.key) ? ' pi pi-bookmark' : 'pi pi-bookmark-fill'}`}></div>
                                                                        </div>
                                                                    </div>

                                                                </Col>
                                                            </Row>
                                                        </div>

                                                    )
                                                })
                                            }
                                        </Col>
                                        <Col lg={3} className='mx-auto'>
                                            <Button label='SEARCH FOR CAREGIVERS' className='btn-search-caregivers'/>
                                        </Col>
                                    </div>
                                )}
                                </>
                            )}
                            {typeUser && (
                                <>
                                {!switchTabCaregivers && (
                                    <div className='title-recommen-content'>
                                        <Col lg={3}>
                                            <div className='title-recommen-caregivers' onClick={() => tabRecomenCaregivers(false)}>
                                                Recommended Care Requests
                                            </div>
                                        </Col>
                                        <Col lg={6}>
                                            <div className='title-save-caregivers ms-3' onClick={() => tabRecomenCaregivers(true)}>
                                                Saved Care Requests
                                            </div>
                                        </Col>
                                        <Col lg={12}>
                                            <div className='showing-text'>
                                                Showing your best match based on [care profile name]’s profile
                                            </div>
                                        </Col>
                                        <Col lg={12} className="d-flex align-items-center flex-wrap">
                                            {
                                                careRequestInfo.map((infoCaregiver, index)=>{
                                                    return(
                                                        <div key={index} className='container-profile col-lg-4 col-md-4 col-xs-12 mx-auto'>
                                                            <Row className='profile-info-content col-11 mx-auto'>
                                                                <Col lg={5} className='col-4'>
                                                                    <div className="profile-photo"></div>
                                                                    <div className='btn-profile-contact'>
                                                                        <Button label='View Job' className='btn-view-profile col-12'/>
                                                                        <Button label='CONTACT' className='btn-contact col-12'/>
                                                                    </div>
                                                                </Col>
                                                                <Col lg={7} className='info-caregiver col-8'>
                                                                    <div className='name-caregiver'>
                                                                        {infoCaregiver.name}
                                                                    </div>
                                                                    <div className='status-caregiver'>
                                                                        {infoCaregiver.status}
                                                                    </div>
                                                                    <div className='experience-caregiver'>
                                                                        {infoCaregiver.frecuency}
                                                                    </div>
                                                                    <div className='price-hour-caregiver'>
                                                                        {infoCaregiver.priceHour}
                                                                    </div>
                                                                    <div className='text-work-care'>
                                                                        {infoCaregiver.work}
                                                                    </div>
                                                                    <div className='col-12 d-flex flex-wrap'>
                                                                        <span className='description-care-requests col-8'>
                                                                            {infoCaregiver.description}
                                                                        </span>
                                                                        <div className='bookmark-container col-3 my-auto' onClick={()=>onSaveChange(infoCaregiver)}>
                                                                            <div style={{'fontSize': '2em'}} className={`save-icon  ${selectedSaveCaregivers.some((item) => item.key === infoCaregiver.key) ? ' pi pi-bookmark-fill' : 'pi pi-bookmark'}`}></div>
                                                                        </div>
                                                                    </div>
                                                                </Col>
                                                            </Row>
                                                        </div>

                                                    )
                                                })
                                            }
                                        </Col>
                                        <Col lg={3} className='mx-auto'>
                                            <Button label='SEARCH FOR CARE REQUESTS' className='btn-search-caregivers p-button p-component p-button-outlined p-button-danger'/>
                                        </Col>
                                    </div>
                                )}
                                {switchTabCaregivers && (
                                    <div className='title-recommen-content'>
                                        <Col lg={3}>
                                            <div className='title-save-caregivers ' onClick={() => tabRecomenCaregivers(false)}>
                                                Recommended Care Requests
                                            </div>
                                        </Col>
                                        <Col lg={6}>
                                            <div className='title-recommen-caregivers ms-3' onClick={() => tabRecomenCaregivers(true)}>
                                                Saved Care Requests
                                            </div>
                                        </Col>
                                        <Col lg={12}>
                                            <div className='showing-text'>
                                                Showing your save match [care profile name]’s profile
                                            </div>
                                        </Col>
                                        <Col lg={12} className="d-flex align-items-center flex-wrap">
                                            {
                                                careRequestInfo.map((infoCaregiver, index)=>{
                                                    return(
                                                        <div key={index} className='container-profile col-lg-4 col-md-4 col-xs-12 mx-auto'>
                                                            <Row className='profile-info-content col-11 mx-auto'>
                                                                <Col lg={5} className='col-4'>
                                                                    <div className="profile-photo"></div>
                                                                    <div className='btn-profile-contact'>
                                                                        <Button label='View Job' className='btn-view-profile col-12'/>
                                                                        <Button label='CONTACT' className='btn-contact col-12'/>
                                                                    </div>
                                                                </Col>
                                                                <Col lg={7} className='info-caregiver col-8'>
                                                                    <div className='name-caregiver'>
                                                                        {infoCaregiver.name}
                                                                    </div>
                                                                    <div className='status-caregiver'>
                                                                        {infoCaregiver.status}
                                                                    </div>
                                                                    <div className='experience-caregiver'>
                                                                        {infoCaregiver.frecuency}
                                                                    </div>
                                                                    <div className='price-hour-caregiver'>
                                                                        {infoCaregiver.priceHour}
                                                                    </div>
                                                                    <div className='text-work-care'>
                                                                        {infoCaregiver.work}
                                                                    </div>
                                                                    <div className='col-12 d-flex flex-wrap'>
                                                                        <span className='description-care-requests col-8'>
                                                                            {infoCaregiver.description}
                                                                        </span>
                                                                        <div className='bookmark-container col-3 my-auto' onClick={()=>onUnSaveChange(infoCaregiver)}>
                                                                            <div style={{'fontSize': '2em'}} className={`save-icon  ${unselectedSaveCaregivers.some((item) => item.key === infoCaregiver.key) ? ' pi pi-bookmark' : 'pi pi-bookmark-fill'}`}></div>
                                                                        </div>
                                                                    </div>
                                                                </Col>
                                                            </Row>
                                                        </div>

                                                    )
                                                })
                                            }
                                        </Col>
                                        <Col lg={3} className='mx-auto'>
                                            <Button label='SEARCH FOR CARE REQUESTS' className='btn-search-caregivers p-button p-component p-button-outlined p-button-danger'/>
                                        </Col>
                                    </div>
                                )}
                                </>
                            )}
                        </Row>
                        <Row className='col-lg-10 col-md-11 col-11 mx-auto'>
                            {!switchTabResources && (
                                <div className='title-recommen-content'>
                                    <Col lg={3}>
                                        <div className='title-recommen-caregivers' onClick={() => tabRecomenResources(false)}>
                                            Recommended Resources
                                        </div>
                                    </Col>
                                    <Col lg={3}>
                                        <div className='title-save-caregivers' onClick={() => tabRecomenResources(true)}>
                                            Saved Resources
                                        </div>
                                    </Col>
                                    <Col lg={12} className='col-11'>
                                        <ScrollPanel>
                                            <Col lg={12} className="d-flex">
                                                {
                                                    articleDetails.map((infoArticle, index)=>{
                                                        return(
                                                            <div key={index} className='container-article col-lg-4 col-11'>
                                                                <Row className='container-article-info col-11'>
                                                                    <Col lg={12} className='container-img-article'>
                                                                        <div className='photo-article'>

                                                                        </div>
                                                                    </Col>
                                                                    <Col lg={12} className='container-tags-article'>
                                                                        <div className='resources-tags-article col-lg-4 col-5'>
                                                                            {infoArticle.tagFirst}
                                                                        </div>
                                                                        <div className='resources-tags-article ms-2 col-lg-4 col-5'>
                                                                            {infoArticle.tagSecond}
                                                                        </div>
                                                                        <div className='tags-bookmark-container col-lg-4 col-2' onClick={()=>onSaveResourcesChange(infoArticle)}>
                                                                            <div style={{'fontSize': '2em'}} className={`save-icon  ${saveResources.some((item) => item.key === infoArticle.key) ? ' pi pi-bookmark-fill' : 'pi pi-bookmark'}`}></div>
                                                                        </div>
                                                                    </Col>
                                                                    <Col lg={12} className='title-article'>
                                                                        <div>
                                                                            {infoArticle.title}
                                                                        </div>
                                                                    </Col>
                                                                </Row>
                                                            </div>
                                                        )
                                                    })
                                                }
                                            </Col>
                                        </ScrollPanel>
                                    </Col>
                                </div>
                            )}
                            {switchTabResources && (
                                <div className='title-recommen-content'>
                                    <Col lg={3}>
                                        <div className='title-save-caregivers' onClick={() => tabRecomenResources(false)}>
                                            Recommended Resources
                                        </div>
                                    </Col>
                                    <Col lg={3}>
                                        <div className='title-recommen-caregivers' onClick={() => tabRecomenResources(true)}>
                                            Saved Resources
                                        </div>
                                    </Col>
                                    <Col lg={12} className='col-11'>
                                        <ScrollPanel>
                                            <Col lg={12} className="d-flex">
                                                {
                                                    articleDetails.map((infoArticle, index)=>{
                                                        return(
                                                            <div key={index} className='container-article col-lg-4 col-11'>
                                                                <Row className='container-article-info col-11'>
                                                                    <Col lg={12} className='container-img-article'>
                                                                        <div className='photo-article'>

                                                                        </div>
                                                                    </Col>
                                                                    <Col lg={12} className='container-tags-article'>
                                                                        <div className='resources-tags-article col-lg-4 col-5'>
                                                                            {infoArticle.tagFirst}
                                                                        </div>
                                                                        <div className='resources-tags-article ms-2 col-lg-4 col-5'>
                                                                            {infoArticle.tagSecond}
                                                                        </div>
                                                                        <div className='tags-bookmark-container col-lg-4 col-2' onClick={()=>onUnSaveResourcesChange(infoArticle)}>
                                                                            <div style={{'fontSize': '2em'}} className={`save-icon  ${unsaveResources.some((item) => item.key === infoArticle.key) ? ' pi pi-bookmark' : 'pi pi-bookmark-fill'}`}></div>
                                                                        </div>
                                                                    </Col>
                                                                    <Col lg={12} className='title-article'>
                                                                        <div>
                                                                            {infoArticle.title}
                                                                        </div>
                                                                    </Col>
                                                                </Row>
                                                            </div>
                                                        )
                                                    })
                                                }
                                            </Col>
                                        </ScrollPanel>
                                    </Col>
                                </div>
                            )}
                        </Row>
                        {typeUser && (
                            <Row className='col-10 mx-auto'>
                                <Col className='container-care-profile'>
                                    <div className='container-meter-future'>
                                        Schedule & billing widgets in the future
                                    </div>
                                </Col>
                            </Row>
                        )}
                        <Row className='col-lg-10 col-md-11 col-11 mx-auto'>
                            <div className='title-recommen-content'>
                                <Col lg={7} className='d-flex flex-wrap'>
                                    
                                    <div className='d-flex flex-wrap'>
                                        <img className='badge-logo-responsive col-lg-2 col-2 my-auto' src='/images/widget_icons/badge-icon-complete.svg' alt='complete'/>

                                        <div className='bckg-check-text col-lg-12 col-10 ms-2'>
                                            Caregiver Background Check Reports with
                                            <span>
                                                <img src="/images/care_icons/Dashboard/certn.png" alt="certn" className='logo-certn'/>
                                            </span>
                                        </div>
                                    </div>
                                    <div className='d-flex flex-wrap'>
                                        {/* <div className='badge-logo col-lg-2 col-2'></div> */}
                                        <img className='badge-logo col-lg-2 col-2' src='/images/widget_icons/badge-icon-complete.svg' alt='complete'/>

                                        <div className='col-lg-10 col-12'>
                                            <div className='text-check-report col-9 ms-3'>
                                                Ask your caregiver to provide their Certn certified Background Check Report.
                                            </div>
                                            <div className='more-details-check col-10 ms-3'>
                                                More detailed info here. Placeholder ask your caregiver to provide their Certn certified Background Check Report.
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={3} className='col-6'>
                                    <div className='list-check'>
                                        {
                                            listBenefits.map((benefitsList, index)=>{
                                                return(
                                                    <div key={index} className='content-check col-lg-8 col-10'>
                                                        <i className='pi pi-check-circle icon-check'></i>
                                                        <span className='text-check-list'>
                                                            {benefitsList.benefits}
                                                        </span>
                                                    </div>

                                                )
                                            })
                                        }
                                        <div className='content-check-blur col-lg-8 col-10'>
                                            <i className='pi pi-check-circle icon-check'></i>
                                            <span className='text-check-list'>
                                    Public Court Record
                                </span>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={2} className='my-auto mx-auto'>
                                    <Button label='LEARN MORE' iconPos='right' icon='pi pi-external-link' className='btn-link-more'/>
                                </Col>
                            </div>
                        </Row>

                        <Row className='col-lg-10 col-md-11 col-11 mx-auto'>
                            <div className='title-recommen-content'>
                                <Col lg={12} className='d-flex flex-wrap col-11 mx-auto'>
                                    <div className='col-lg-8 col-7 d-flex flex-wrap'>
                                        <div className='bckg-check-text'>
                                            Your Background Check Report with
                                            <span>
                                                <img src="/images/care_icons/Dashboard/certn.png" alt="certn" className='logo-certn'/>
                                            </span>
                                        </div>
                                    </div>
                                    <div className='col-lg-4 col-5 learn-more-btn-certn'>
                                        Learn more
                                    </div>
                                </Col>
                                <Col lg={12} className='d-flex flex-wrap col-10 mx-auto'>
                                    <div className='col-lg-4 content-aplication-status'>
                                        {/* <div className='icon-indicator-report '></div> */}
                                        <img className='icon-indicator-report' src='/images/widget_icons/badge-icon-complete.svg' alt='complete'/>

                                        <div className=''>
                                            <span className='aplications-status-text'>Application Status: </span>
                                            <span className='status-bar-complete'>complete</span>
                                            <div className='aplications-status-text'>Expiry: in 9 months</div>
                                        </div>
                                    </div>
                                    <div className='col-lg-4 d-flex flex-wrap'>
                                        {/* <div className='icon-indicator-report'></div> */}
                                        <img className='icon-indicator-report' src='/images/widget_icons/report-icon-complete.svg' alt='complete'/>
                                        <div className=''>
                                            <span className='aplications-status-text'>Report: </span>
                                            <span className='status-report-clear'>clear</span>
                                            <div className='aplications-status-text'>Expiry: 07/27/21</div>
                                            <div className='btn-view-report'>View Report</div>
                                        </div>
                                    </div>
                                    <div className='col-lg-4'></div>
                                </Col>
                                <Col lg={12} className=''>
                                    <div className='text-content-down-report'>
                                        Your background check is cleared and up to date! 
                                        Thanks for doing your part in keeping care seekers & 
                                        their families safe.
                                    </div>
                                </Col>
                            </div>
                        </Row>
                        <Row className='col-lg-10 col-md-11 col-11 mx-auto'>
                            <div className='title-recommen-content'>
                                <Col lg={12} className='d-flex flex-wrap col-11 mx-auto'>
                                    <div className='col-lg-8 col-7 d-flex flex-wrap'>
                                        <div className='bckg-check-text'>
                                            Your Background Check Report with
                                            <span>
                                                <img src="/images/care_icons/Dashboard/certn.png" alt="certn" className='logo-certn'/>
                                            </span>
                                        </div>
                                    </div>
                                    <div className='col-lg-4 col-5 learn-more-btn-certn'>
                                        Learn more
                                    </div>
                                </Col>
                                <Col lg={12} className='d-flex flex-wrap col-10 mx-auto'>
                                    <div className='col-lg-4 content-aplication-status'>
                                        {/* <div className='icon-indicator-report '></div> */}
                                        <img className='icon-indicator-report' src='/images/widget_icons/badge-icon-partial.svg' alt='complete'/>

                                        <div className=''>
                                            <span className='aplications-status-text'>Application Status: </span>
                                            <span className='status-bar-pending'>pending</span>
                                            <div className='aplications-status-text'>Expiry: in 9 months</div>
                                        </div>
                                    </div>
                                    <div className='col-lg-4 d-flex flex-wrap'>
                                        {/* <div className='icon-indicator-report'></div> */}
                                        <img className='icon-indicator-report' src='/images/widget_icons/report-icon-complete.svg' alt='complete'/>
                                        <div className=''>
                                            <span className='aplications-status-text'>Report: </span>
                                            <span className='status-report-na'>N/A</span>
                                            <div className='aplications-status-text'>Expiry: 07/27/21</div>
                                            <div className='btn-view-report'>View Report</div>
                                        </div>
                                    </div>
                                    <div className='col-lg-4'></div>
                                </Col>
                                <Col lg={12} className=''>
                                    <div className='text-content-down-report'>
                                        Your background check will be expiring soon! 
                                        Please renew your background check to keep your clear status.
                                    </div>
                                </Col>
                            </div>
                        </Row>
                        <Row className='col-lg-10 col-md-11 col-11 mx-auto'>
                            <div className='title-recommen-content'>
                                <Col lg={12} className='d-flex flex-wrap col-11 mx-auto'>
                                    <div className='col-lg-8 col-7 d-flex flex-wrap'>
                                        <div className='bckg-check-text'>
                                            Your Background Check Report with
                                            <span>
                                                <img src="/images/care_icons/Dashboard/certn.png" alt="certn" className='logo-certn'/>
                                            </span>
                                        </div>
                                    </div>
                                    <div className='col-lg-4 col-5 learn-more-btn-certn'>
                                        Learn more
                                    </div>
                                </Col>
                                <Col lg={12} className='d-flex flex-wrap col-10 mx-auto'>
                                    <div className='col-lg-4 content-aplication-status'>
                                        {/* <div className='icon-indicator-report '></div> */}
                                        <img className='icon-indicator-report' src='/images/widget_icons/badge-icon-partial.svg' alt='partial'/>
                                        <div className=''>
                                            <span className='aplications-status-text'>Application Status: </span>
                                            <span className='status-bar-partial'>partial</span>
                                            <div className='aplications-status-text'>Expiry: in 9 months</div>
                                        </div>
                                    </div>
                                    <div className='col-lg-4 d-flex flex-wrap'>
                                        {/* <div className='icon-indicator-report'></div> */}
                                        <img className='icon-indicator-report' src='/images/widget_icons/report-icon-partial.svg' alt='partial'/>
                                        <div className=''>
                                            <span className='aplications-status-text'>Report: </span>
                                            <span className='status-report-na'>N/A</span>
                                            <div className='aplications-status-text'>Expiry: 07/27/21</div>
                                            <div className='btn-view-report'>View Report</div>
                                        </div>
                                    </div>
                                    <div className='col-lg-4'></div>
                                </Col>
                                <Col lg={12} className=''>
                                    <div className='text-content-down-report'>
                                        {'To learn more about your application status, refer to our '}
                                        <span className='btn-view-report'>FAQ page</span>
                                    </div>
                                </Col>
                            </div>
                        </Row>
                        <Row className='col-lg-10 col-md-11 col-11 mx-auto'>
                            <div className='content-error-report'>
                                <Col lg={12} className='d-flex flex-wrap col-11 mx-auto'>
                                    <div className='col-lg-8 col-7 d-flex flex-wrap'>
                                        <div className='bckg-check-text'>
                                            Your Background Check Report with
                                            <span>
                                                <img src="/images/care_icons/Dashboard/certn.png" alt="certn" className='logo-certn'/>
                                            </span>
                                        </div>
                                    </div>
                                    <div className='col-lg-4 col-5 learn-more-btn-certn'>
                                        Learn more
                                    </div>
                                </Col>
                                <Col lg={12} className='d-flex flex-wrap col-10 mx-auto'>
                                    <div className='col-lg-4 content-aplication-status'>
                                        {/* <div className='icon-indicator-report '></div> */}
                                        <img className='icon-indicator-report' src='/images/widget_icons/badge-icon-expired.svg' alt='expired'/>

                                        <div className=''>
                                            <span className='aplications-status-text'>Application Status: </span>
                                            <span className='status-bar-expired'>expired</span>
                                            <div className='aplications-status-text'>Expiry: in 0 days</div>
                                        </div>
                                    </div>
                                    <div className='col-lg-4 d-flex flex-wrap'>
                                        {/* <div className='icon-indicator-report'></div> */}
                                        <img className='icon-indicator-report' src='/images/widget_icons/report-icon-expired.svg' alt='expired'/>

                                        <div className=''>
                                            <span className='aplications-status-text'>Report: </span>
                                            <span className='status-report-clear'>clear</span>
                                            <div className='aplications-status-text'>Expiry: 07/27/21</div>
                                            <div className='btn-view-report'>View Report</div>
                                        </div>
                                    </div>
                                    <div className='col-lg-4 my-auto btn-link-responsive'>
                                        <Button label='RENEW BACKGROUND CHECK' iconPos='right' icon='pi pi-external-link' className='btn-link-more'/>
                                    </div>
                                </Col>
                                <Col lg={12} className=''>
                                    <div className='text-content-down-report'>
                                        Your background check is expired! It will not be 
                                        visible on your profile until it is renewed.
                                    </div>
                                </Col>
                                <Col lg={12} className='mx-auto'>
                                    <div className='col-lg-4 btn-link-responsive-view'>
                                        <Button label='RENEW BACKGROUND CHECK' iconPos='right' icon='pi pi-external-link' className='btn-link-more'/>
                                    </div>
                                </Col>
                            </div>
                        </Row>
                        <Row className='col-lg-10 col-md-11 col-11 mx-auto'>
                            <div className='title-recommen-content'>
                                <Col lg={12} className='d-flex flex-wrap col-11 mx-auto'>
                                    <div className='col-lg-8 col-7 d-flex flex-wrap'>
                                        <div className='bckg-check-text'>
                                            Your Background Check Report with
                                            <span>
                                                <img src="/images/care_icons/Dashboard/certn.png" alt="certn" className='logo-certn'/>
                                            </span>
                                        </div>
                                    </div>
                                    <div className='col-lg-4 col-5 learn-more-btn-certn'>
                                        Learn more
                                    </div>
                                </Col>
                                <Col lg={12} className='d-flex flex-wrap col-10 mx-auto'>
                                    <div className='col-lg-4 content-aplication-status'>
                                        {/* <div className='icon-indicator-report '></div> */}
                                        <img className='icon-indicator-report' src='/images/widget_icons/badge-icon-NA.svg' alt='na'/>

                                        <div className=''>
                                            <span className='aplications-status-text'>Application Status: </span>
                                            <span className='status-bar-na'>n/a</span>
                                            <div className='aplications-status-text'>Expiry: N/A</div>
                                        </div>
                                    </div>
                                    <div className='col-lg-4 d-flex flex-wrap'>
                                        {/* <div className='icon-indicator-report'></div> */}
                                        <img className='icon-indicator-report' src='/images/widget_icons/report-icon-NA.svg' alt='na'/>

                                        <div className=''>
                                            <span className='aplications-status-text'>Report: </span>
                                            <span className='status-report-na'>N/A</span>
                                            <div className='aplications-status-text'>Expiry: 07/27/21</div>
                                            <div className='btn-view-report'>View Report</div>
                                        </div>
                                    </div>
                                    <div className='col-lg-4 my-auto btn-link-responsive'>
                                        <Button label='START THE PROCESS' iconPos='right' icon='pi pi-external-link' className='btn-link-more'/>
                                    </div>
                                </Col>
                                <Col lg={12} className=''>
                                    <div className='text-content-down-report'>
                                        Complete a background check to show care seekers you can be trusted.
                                    </div>
                                    
                                </Col>
                                <Col lg={12} className='mx-auto'>
                                    <div className='col-lg-4 btn-link-responsive-view'>
                                        <Button label='START THE PROCESS' iconPos='right' icon='pi pi-external-link' className='btn-link-more'/>
                                    </div>
                                </Col>
                            </div>
                        </Row>
                    </div>
                )
            }
            {
                toggleState===2 && (
                    <Row className='col-lg-10 col-11 mx-auto bckg-color-message'>
                        <div className='col-12 container-messages d-flex flex-wrap'>
                            <Col className='col-12 header-messages'>
                                <div>
                                    Your Messagges
                                </div>
                            </Col>

                            {(isMobile && messageContent) || (!isMobile) ?(
                                <Col className='col-lg-4 col-12 p-fluid'>
                                    <div className='p-input-icon-right mb-4'>
                                        <InputText className='input-search-messages m-0' placeholder='Search' />
                                        <i className="pi pi-search" />
                                    </div>
                                    <ScrollPanel className='scroll-mesagges'>
                                        {
                                            messagesReceived.map((mesagges, index)=>{
                                                return(
                                                    <div key={index} onClick={()=>onMesaggeChange(mesagges)} className={`${selectedMesagge.some((item) => item.id === mesagges.id) ? ' content-messages-selected' : 'content-messages-read'}`}>
                                                        <div className='profile-photo-messages col-2'></div>
                                                        <div className='header-message col-9'>
                                                            <div className='d-flex justify-content-between col-12'>
                                                                <span className='account-name-message'>
                                                                    {mesagges.name}
                                                                </span>
                                                                <span className='time-received'>
                                                                    {mesagges.date}{'>'}
                                                                </span>
                                                            </div>
                                                            <div className='message-received col-12'>
                                                                {mesagges.message}
                                                            </div>
                                                        </div>
                                                    </div>
                                                )
                                            })
                                        }
                                    </ScrollPanel>
                                </Col>
                            ): <></>}

                            {(isMobile && (!messageContent)) || (!isMobile) ? (
                                <Col className='col-lg-8 col-12 content-messages-details'>
                                    <div className='header-message-chat col-11 mx-auto'>
                                        <i className='pi pi-angle-left btn-back-message' onClick={()=>onBackMessage()} style={{'fontSize': '2em'}}></i>
                                        <div className='profile-photo-chat-selected'>
                                        </div>
                                        <div className='name-chat-selected ms-2 my-auto'>
                                            Kate M.
                                        </div>
                                       
                                        {!typeUser && (
                                            <>
                                            <div className=' ms-auto'>
                                                <Button onClick={() => onClick('displayBasic')} label='HIRE' icon='pi pi-send' iconPos='right' className='btn-hire'/>
                                                <Dialog visible={displayBasic} className='modal-hire ' style={{ width: '440px' }} footer={renderFooter('displayBasic')} onHide={() => onHide('displayBasic')}>
                                                    
                                                    <div className='title-modal-hire'>
                                                        Looks like you've found a caregiver to hire!
                                                    </div>
                                                    <div className='content-modal-up'>
                                                        If you’d like to hire [caregiver name], simply click send request 
                                                        and we will send the message below.
                                                    </div>
                                                    <div className='line-modal'></div>
                                                    <div className='modal-text-message'>
                                                        “Mason would like to hire you to care for [Senior First Name]! View the details of their care here: 
                                                        [link to senior profile]
                                                        Use the buttons at the top of the chat to Accept or Decline the request.”
                                                    </div>
                                                </Dialog>
                                            </div>
                                            </>
                                        )}
                                    </div>
                                    <div className='line'></div>
                                    <ScrollPanel className='col-11 mx-auto p-0' style={{height: '620px'}}>
                                        <div className='date-history-message'>
                                            Tuesday, April 11th 2022
                                        </div>
                                        <div className='message-received-chat col-7 me-auto'>
                                            <span className='text-received'>
                                                Hi there ! I understand you’d like some help with your mother’s home care.
                                            </span>
                                        </div>
                                        <div className='info-time col-7'>5 mins ago</div>
                                        <div className='message-send-chat col-7 ms-auto'>
                                            <span className='text-send'>
                                                Yes please! Let’s chat to see if we’re a good fit. Are you free for a phone call at 3pm? My number is +1 (123) 456-7890.
                                            </span>
                                        </div>
                                        <div className='info-time col-7 ms-auto'>Just Now</div>

                                    </ScrollPanel>
                                    <div className='col-11 d-flex flex-wrap mx-auto mt-2 content-input-message'>
                                        <div className='icon-plus-circle'>
                                            <i className='pi pi-plus-circle ' style={{'fontSize': '2em'}}/>
                                        </div>
                                        <div className='col-lg-11 col-10'>
                                            <InputGroup>
                                                <FormControl
                                                    className='input-send-message'
                                                    placeholder='Type your message'
                                                />
                                                <Button className='btn-send-message'>
                                                    Send
                                                </Button>
                                            </InputGroup>
                                        </div>

                                    </div>
                                </Col>
                            ): <></>}
                        </div>
                    </Row>
                )
            }
            {
                toggleState=== 3 && (
                    <div className='bckg-color-message'>
                        {!typeUser && (
                            <Row className='col-lg-10 col-11 mx-auto'>
                                <div className='container-care-profile'>
                                    <Col lg={2} className='container-add-person'>
                                        <div className='profile-photo-add'></div>
                                        <div className='name-add-person col-lg-12 col-10 mx-auto'>
                                            Judy Henderson
                                        </div>
                                    </Col>
                                    <Col lg={2} className='container-add-person'>
                                        <div className='profile-photo-add'>

                                        </div>
                                        <div className='name-add-person col-lg-12 col-10 mx-auto'>
                                            Judy Henderson
                                        </div>
                                    </Col>
                                    <Col lg={2} className='container-add-person'>
                                        <div className='icon-add-person'>
                                            <i className="pi pi-plus-circle" style={{'fontSize': '43px'}}></i>
                                        </div>
                                        <div className='add-person-text col-lg-12 col-10 mx-auto'>
                                            add a person
                                        </div>
                                    </Col>
                                </div>
                            </Row>
                        )}
                        <Row className='col-lg-10 col-11 mx-auto'>
                            <div className='container-care-profile'>
                                <Col lg={11} className='d-flex flex-wrap details-connection-person col-11 mx-auto'>
                                    <div className='name-person-header'>
                                        Judy Henderson’s Care Request
                                    </div>
                                    <div className='icon-add-person my-auto ms-3'>
                                        <i className="pi pi-plus-circle" style={{'fontSize': '33px'}}></i>
                                    </div>
                                    <div className='col-12 date-connection-status-responsive'>
                                        Last Updated: 03/25/2022
                                    </div>
                                    <div className='col-lg-12 col-6 text-status-care'>
                                        Care Request Status
                                    </div>
                                    <div className='select-status-btn col-lg-2 col-6'>
                                        <SelectButton  value={stateConnec} options={options} onChange={(e) => setStateConnect(e.value)} />
                                    </div>
                                    {stateConnec === 'DISABLED' && (
                                        <span className='info-disabled col-lg-3 col-6'>
                                            Your profile is no longer visible to the public and will not appear in search results.
                                        </span>
                                    )}

                                    <div className='col-12 date-connection-status'>
                                        Last Updated: 03/25/2022
                                    </div>
                                </Col>
                                {!typeUser && (
                                    <>
                                        {!editInfoGeneral && (
                                            <Col lg={8} className='mx-auto col-10'>
                                                <div className='container-details-profile-photo'>
                                                    <div className='profile-photo-care-selected col-lg-2 col-4'>
                                                    </div>
                                                    <div  className='col-lg-8 col-8 profile-details'>
                                                        <span className='name-profile-selected'>
                                                            {userInfo.name} 
                                                        </span>
                                                        <span className='number'>
                                                            {userInfo.age}
                                                        </span>
                                                        <span>
                                                        <Button icon='pi pi-pencil' label='Edit' onClick={() => editFirstInfo(true)} className="p-button-outlined icon-edit-profile label-edit-btn" />
                                                        
                                                        </span>
                                                        <div className='address-profile '>
                                                            {userInfo.city}, {userInfo.postalCode}
                                                        </div>
                                                        <div className='content-details-care'>
                                                            <div className='d-flex flex-wrap col-6 mt-1'>
                                                                <div className='icon-list'></div>
                                                                <span className='text-details-profile'>{
                                                                dateFormat(userInfo.date)}</span>
                                                            </div>
                                                            <div className='d-flex flex-wrap col-6 mt-1'>
                                                                <div className='icon-list'></div>
                                                                <span className='text-details-profile'>{userInfo.lenguage.map(item=>item.name)?.join(", ")}</span>
                                                            </div>
                                                            <div className='d-flex flex-wrap col-6 mt-1'>
                                                                <div className='icon-list'></div>
                                                                <span className='text-details-profile'>{userInfo.careRequired.name}</span>
                                                            </div>
                                                            <div className='d-flex flex-wrap col-6 mt-1'>
                                                                <div className='icon-list'></div>
                                                                <span className='text-details-profile'>{userInfo.hours}/hour</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className='content-details-care-resp'>
                                                            <div className='d-flex flex-wrap col-6 mt-1'>
                                                                <div className='icon-list'></div>
                                                                <span className='text-details-profile'>{
                                                                dateFormat(userInfo.date)
                                                                
                                                                }</span>
                                                            </div>
                                                            <div className='d-flex flex-wrap col-6 mt-1'>
                                                                <div className='icon-list'></div>
                                                                <span className='text-details-profile'>{userInfo.lenguage.map(item=>item.name)?.join(", ")}</span>
                                                            </div>
                                                            <div className='d-flex flex-wrap col-6 mt-1'>
                                                                <div className='icon-list'></div>
                                                                <span className='text-details-profile'>{userInfo.careRequired.name}</span>
                                                            </div>
                                                            <div className='d-flex flex-wrap col-6 mt-1'>
                                                                <div className='icon-list'></div>
                                                                <span className='text-details-profile'>{userInfo.hours}/hour</span>
                                                            </div>
                                                    </div>
                                                </div>
                                            </Col>
                                        )}
                                        {editInfoGeneral && (
                                            <Col lg={8} className='mx-auto col-10'>
                                                <div className='container-details-profile-photo'>
                                                    <div className='profile-photo-care-selected col-2'>
                                                    </div>
                                                    <div  className='col-8 profile-details'>
                                                        <div className='d-flex flex-wrap'>
                                                            <span className='me-3'>
                                                                <div className='title-edit'>Name*</div>
                                                                <InputText
                                                                id="name" 
                                                                name="name" 
                                                                value={userInfo.name} 
                                                                onChange={(e) => onInputChange(e, 'name')} 
                                                                autoFocus
                                                                />
                                                            </span>
                                                            <span>
                                                                <div className='title-edit'>Age*</div>
                                                                <InputText
                                                                id="age" 
                                                                name="age" 
                                                                value={userInfo.age} 
                                                                onChange={(e) => onInputChange(e, 'age')} 
                                                                autoFocus
                                                                />
                                                            </span>
                                                        </div>
                                                        <div className='address-profile d-flex flex-wrap'>
                                                            <span className='me-3'>
                                                                <div className='title-edit'>City*</div>
                                                                <InputText
                                                                id="city" 
                                                                name="city" 
                                                                value={userInfo.city} 
                                                                onChange={(e) => onInputChange(e, 'city')} 
                                                                autoFocus
                                                                />
                                                            </span>
                                                            <span >
                                                                <div className='title-edit'>Postal Code*</div>
                                                                <InputText
                                                                id="postalCode" 
                                                                name="postalCode" 
                                                                value={userInfo.postalCode} 
                                                                onChange={(e) => onInputChange(e, 'postalCode')} 
                                                                autoFocus
                                                                />
                                                            </span>
                                                        </div>
                                                        <div className='content-details-care p-fluid'>
                                                            <div className='col-6 mt-1'>
                                                                <div>Date*</div>
                                                                <Calendar 
                                                                    className='col-11'
                                                                    name="date"
                                                                    id="date"  
                                                                    value={userInfo.date}
                                                                    onChange={(e) => onDropDownChange(e,'date')}
                                                                    dateFormat="MM d, yy" 
                                                                />
                                                            </div>
                                                            <div className='col-6 mt-1'>
                                                                <div>Languages*</div>
                                                                <MultiSelect 
                                                                    id="lenguage" 
                                                                    dropdownIcon="pi pi-caret-down" 
                                                                    name="lenguage" 
                                                                    className='col-11'
                                                                    value={userInfo.lenguage}
                                                                    onChange={(e) => onDropDownChange(e,"lenguage")}
                                                                    placeholder="Select a lenguage" 
                                                                    maxSelectedLabels={3}
                                                                    options={languages} 
                                                                    optionLabel="name" 
                                                                />
                                                            </div>
                                                            <div className='col-6 mt-1'>
                                                                <div>Regular Care*</div>
                                                                <Dropdown 
                                                                    id="regularCare" 
                                                                    dropdownIcon="pi pi-caret-down" 
                                                                    name="regularCare" 
                                                                    className='col-11'
                                                                    options={frecuency} 
                                                                    optionLabel="name" 
                                                                    value={userInfo.careRequired}
                                                                    onChange={ (e) => onDropDownChange(e,"careRequired")}
                                                                    placeholder="Select a regular care"
                                                                />
                                                            </div>
                                                            <div className='col-6 mt-1 my-auto'>
                                                                <div>Price Hour*</div>
                                                                <div className='d-flex flex-wrap '>
                                                                    <span className='text-details-profile col-1 my-auto'>$</span>
                                                                    <span className='col-5'>
                                                                    <InputText
                                                                    id="hours" 
                                                                    name="hours" 
                                                                    value={userInfo.hours} 
                                                                    onChange={(e) => onInputChange(e, 'hours')} 
                                                                    autoFocus
                                                                    />
                                                                    </span>
                                                                    <span className='text-details-profile my-auto col-5 ms-3'>/hour</span>
                                                                </div>
                                                            </div>
                                                            <div className='col-8 content-btn-changes'>
                                                                <span className='col-5 '>
                                                                    <Button label='SAVE CHANGES' onClick={() => editFirstInfo(false)} className='btn-save-changes'/>
                                                                </span>
                                                                <span className='col-1'></span>
                                                                <span className='col-6'>
                                                                    <Button label='DISCARD CHANGES' onClick={() => discardChangesInfo(false)} className='btn-discard-changes'/>
                                                                </span>
                                                            </div>
                                                            
                                                        </div>
                                                        
                                                    </div>
                                                    <div className='col-12 content-btn-changes-resp'>
                                                        <span className='col-5 '>
                                                            <Button label='SAVE CHANGES' onClick={() => editFirstInfo(false)} className='btn-save-changes'/>
                                                        </span>
                                                        <span className='col-1'></span>
                                                        <span className='col-6'>
                                                            <Button label='DISCARD CHANGES' onClick={() => discardChangesInfo(false)} className='btn-discard-changes'/>
                                                        </span>
                                                    </div>
                                                </div>
                                            </Col>
                                        )}
                                    </>
                                )}
                                {typeUser && (
                                    <>
                                        {!editInfoGeneral && (
                                            <Col lg={8} className='mx-auto col-10'>
                                                <div className='container-details-profile-photo'>
                                                    <div className='profile-photo-care-selected col-lg-2 col-4'>
                                                    </div>
                                                    <div  className='col-lg-8 col-8 profile-details'>

                                                        <span className='name-profile-selected'>
                                                            {userCareRequests.name} 
                                                        </span>

                                                        <Button icon='pi pi-pencil' label='Edit' onClick={() => editFirstInfo(true)} className="ms-3 p-button-outlined icon-edit-profile" />
                                                        
                                                        <div className='address-profile '>
                                                            {userCareRequests.status}
                                                        </div>

                                                        <div className='content-details-care'>
                                                            <div className='d-flex flex-wrap col-6 mt-1'>
                                                                <div className='icon-list'></div>
                                                                <span className='text-details-profile'>{
                                                                dateFormat(userCareRequests.date)
                                                                }
                                                                </span>
                                                            </div>
                                                            <div className='d-flex flex-wrap col-6 mt-1'>
                                                                <div className='icon-list'></div>
                                                                <span className='text-details-profile'>{userCareRequests.lenguage.map(item=>item.name)?.join(", ")}</span>
                                                            </div>
                                                            <div className='d-flex flex-wrap col-6 mt-1'>
                                                                <div className='icon-list'></div>
                                                                <span className='text-details-profile'>{userCareRequests.experience}</span>
                                                            </div>
                                                            <div className='d-flex flex-wrap col-6 mt-1'>
                                                                <div className='icon-list'></div>
                                                                <span className='text-details-profile'>{userCareRequests.hours}/hour</span>
                                                            </div>
                                                        </div>
                                                        <div className='care-bandge-contain'>
                                                            <div className='care-badge-earned'></div>
                                                            <div className='care-badge-earned'></div>
                                                            <i className="pi pi-plus-circle my-auto" style={{'fontSize': '2em'}}></i>
                                                        </div>     
                                                    </div>
                                                    <div className='content-details-care-resp'>
                                                        <div className='d-flex flex-wrap col-6 mt-1'>
                                                            <div className='icon-list'></div>
                                                            <span className='text-details-profile'>{
                                                            dateFormat(userInfo.date)
                                                            
                                                            }</span>
                                                        </div>
                                                        <div className='d-flex flex-wrap col-6 mt-1'>
                                                            <div className='icon-list'></div>
                                                            <span className='text-details-profile'>{userInfo.lenguage.map(item=>item.name)?.join(", ")}</span>
                                                        </div>
                                                        <div className='d-flex flex-wrap col-6 mt-1'>
                                                            <div className='icon-list'></div>
                                                            <span className='text-details-profile'>{userInfo.careRequired.name}</span>
                                                        </div>
                                                        <div className='d-flex flex-wrap col-6 mt-1'>
                                                            <div className='icon-list'></div>
                                                            <span className='text-details-profile'>{userInfo.hours}/hour</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Col>
                                        )}
                                        {editInfoGeneral && (
                                            <Col lg={8} className='mx-auto col-10'>
                                                <div className='container-details-profile-photo'>
                                                    <div className='profile-photo-care-selected col-2'>
                                                    </div>
                                                    <div  className='col-8 profile-details'>
                                                        <div className='d-flex flex-wrap'>
                                                            <span className='me-3'>
                                                                <div className='title-edit'>Name*</div>
                                                                <InputText
                                                                id="name" 
                                                                name="name" 
                                                                value={userCareRequests.name} 
                                                                onChange={(e) => onInputChange(e, 'name')} 
                                                                autoFocus
                                                                />
                                                            </span>
                                                            <span >
                                                                <div className='title-edit'>Status*</div>
                                                                <InputText
                                                                id="status" 
                                                                name="status" 
                                                                value={userCareRequests.status} 
                                                                onChange={(e) => onInputChange(e, 'status')} 
                                                                autoFocus
                                                                />
                                                            </span>
                                                        </div>
                                                        <div className='content-details-care-resp'>
                                                            <div className='col-lg-6 col-11 mt-1'>
                                                                <div>Date*</div>
                                                                <Calendar 
                                                                    className='col-11'
                                                                    name="date"
                                                                    id="date"  
                                                                    value={userCareRequests.date}
                                                                    onChange={(e) => onDropDownChange(e,'date')}
                                                                    dateFormat="MM d, yy" 
                                                                />
                                                            </div>
                                                            <div className='col-lg-6 col-11 mt-1'>
                                                                <div>Lenguage*</div>
                                                                <MultiSelect 
                                                                    id="lenguage" 
                                                                    dropdownIcon="pi pi-caret-down" 
                                                                    name="lenguage" 
                                                                    className='col-11'
                                                                    value={userCareRequests.lenguage}
                                                                    onChange={(e) => onDropDownChange(e,"lenguage")}
                                                                    placeholder="Select a lenguage" 
                                                                    maxSelectedLabels={3}
                                                                    options={languages} 
                                                                    optionLabel="name" 
                                                                />
                                                            </div>
                                                            <div className='col-lg-6 col-11 mt-1'>
                                                                <div>Experience*</div>
                                                                <Dropdown 
                                                                    id="regularCare" 
                                                                    dropdownIcon="pi pi-caret-down" 
                                                                    name="regularCare" 
                                                                    className='col-11'
                                                                    options={frecuency} 
                                                                    optionLabel="name" 
                                                                    value={userCareRequests.experience}
                                                                    onChange={ (e) => onDropDownChange(e,"careRequired")}
                                                                    placeholder="Select a regular care"
                                                                />
                                                            </div>
                                                            <div className='col-lg-6 col-11 mt-1 my-auto'>
                                                                <div>Price Hour*</div>
                                                                <div className='d-flex flex-wrap '>
                                                                    <span className='text-details-profile col-1 my-auto'>$</span>
                                                                    <span className='col-5'>
                                                                        <InputText
                                                                        className='col-12'
                                                                        id="hours" 
                                                                        name="hours" 
                                                                        value={userCareRequests.hours} 
                                                                        onChange={(e) => onInputChange(e, 'hours')} 
                                                                        autoFocus
                                                                        />
                                                                    </span>
                                                                    <span className='text-details-profile my-auto col-lg-5 col-2 ms-3'>/hour</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className='content-details-care p-fluid'>
                                                            <div className='col-6 mt-1'>
                                                                <div>Date*</div>
                                                                <Calendar 
                                                                    className='col-11'
                                                                    name="date"
                                                                    id="date"  
                                                                    value={userCareRequests.date}
                                                                    onChange={(e) => onDropDownChange(e,'date')}
                                                                    dateFormat="MM d, yy" 
                                                                />
                                                            </div>
                                                            <div className='col-6 mt-1'>
                                                                <div>Lenguage*</div>
                                                                <MultiSelect 
                                                                    id="lenguage" 
                                                                    dropdownIcon="pi pi-caret-down" 
                                                                    name="lenguage" 
                                                                    className='col-11'
                                                                    value={userCareRequests.lenguage}
                                                                    onChange={(e) => onDropDownChange(e,"lenguage")}
                                                                    placeholder="Select a lenguage" 
                                                                    maxSelectedLabels={3}
                                                                    options={languages} 
                                                                    optionLabel="name" 
                                                                />
                                                            </div>
                                                            <div className='col-6 mt-1'>
                                                                <div>Experience*</div>
                                                                <Dropdown 
                                                                    id="regularCare" 
                                                                    dropdownIcon="pi pi-caret-down" 
                                                                    name="regularCare" 
                                                                    className='col-11'
                                                                    options={frecuency} 
                                                                    optionLabel="name" 
                                                                    value={userCareRequests.experience}
                                                                    onChange={ (e) => onDropDownChange(e,"careRequired")}
                                                                    placeholder="Select a regular care"
                                                                />
                                                            </div>
                                                            <div className='col-6 mt-1 my-auto'>
                                                                <div>Price Hour*</div>
                                                                <div className='d-flex flex-wrap '>
                                                                    <span className='text-details-profile col-1 my-auto'>$</span>
                                                                    <span className='col-5'>
                                                                    <InputText
                                                                    id="hours" 
                                                                    name="hours" 
                                                                    value={userCareRequests.hours} 
                                                                    onChange={(e) => onInputChange(e, 'hours')} 
                                                                    autoFocus
                                                                    />
                                                                    </span>
                                                                    <span className='text-details-profile my-auto col-5 ms-3'>/hour</span>
                                                                </div>
                                                            </div>
                                                            <div className='col-8 content-btn-changes'>
                                                                <span className='col-5 '>
                                                                    <Button label='SAVE CHANGES' onClick={() => editFirstInfo(false)} className='btn-save-changes'/>
                                                                </span>
                                                                <span className='col-1'></span>
                                                                <span className='col-6'>
                                                                    <Button label='DISCARD CHANGES' onClick={() => discardChangesInfo(false)} className='btn-discard-changes'/>
                                                                </span>
                                                            </div>
                                                            
                                                        </div>
                                                    </div>
                                                    <div className='col-12 content-btn-changes-resp'>
                                                        <span className='col-5 '>
                                                            <Button label='SAVE CHANGES' onClick={() => editFirstInfo(false)} className='btn-save-changes'/>
                                                        </span>
                                                        <span className='col-1'></span>
                                                        <span className='col-6'>
                                                            <Button label='DISCARD CHANGES' onClick={() => discardChangesInfo(false)} className='btn-discard-changes'/>
                                                        </span>
                                                    </div>
                                                </div>
                                            </Col>
                                        )}
                                    </>
                                )}
                                <Col lg={8} className='mx-auto col-11'>
                                    <div className='line-details'></div>
                                </Col>
                                {!editTitleState && (
                                    <Col lg={8} className='mx-auto col-seeking-content col-11'>
                                        <div className='text-seeking-care'>
                                            {userTitleDescrip.title}
                                            <span className=' ms-3'>
                                            <Button icon='pi pi-pencil' label='Edit' onClick={() => editTitleDescrip(true)} className="p-button-outlined icon-edit-profile" />
                                            </span>
                                        </div>
                                        <div className='content-text-seeaking'>
                                            {userTitleDescrip.description}
                                        </div>
                                    </Col>
                                )}
                                {editTitleState && (
                                    <Col lg={8} className='mx-auto col-seeking-content p-fluid col-10'>
                                        <div>
                                            <div className='title-edit'>Title*</div>
                                            <InputText
                                                id="title" 
                                                name="title" 
                                                autoFocus
                                                value={userTitleDescrip.title} 
                                                onChange={(e) => onInputChangeDescription(e, 'title')} 
                                            />
                                        </div>
                                        <div>
                                            <div  className='title-edit'>Description*</div>
                                            <InputTextarea 
                                                autoFocus
                                                value={userTitleDescrip.description} 
                                                onChange={(e) => onInputChangeDescription(e, 'description')} 
                                                id="description" 
                                                name="description" 
                                                rows={5} 
                                                cols={30} 
                                                autoResize 
                                            />
                                        </div>
                                        <div className='col-5 content-btn-changes'>
                                            <span className='col-5 '>
                                                <Button label='SAVE CHANGES' onClick={() => editTitleDescrip(false)} className='btn-save-changes'/>
                                            </span>
                                            <span className='col-1'></span>
                                            <span className='col-6'>
                                                <Button label='DISCARD CHANGES' onClick={() => discardChangesTitle(false)} className='btn-discard-changes'/>
                                            </span>
                                        </div>
                                        <div className='col-12 content-btn-changes-resp'>
                                            <span className='col-5 '>
                                                <Button label='SAVE CHANGES' onClick={() => editTitleDescrip(false)} className='btn-save-changes'/>
                                            </span>
                                            <span className='col-1'></span>
                                            <span className='col-6'>
                                                <Button label='DISCARD CHANGES' onClick={() => discardChangesTitle(false)} className='btn-discard-changes'/>
                                            </span>
                                        </div>
                                    </Col>  
                                )}
                                {!editMobility && (
                                    <Col lg={8} className='mx-auto skill-requeriment-content col-11'>
                                        <div className='col-12 title-skill-requirement'>Skills & Requirements</div>
                                        {!editSkillText&& (
                                            <div className='col-lg-6 col-12'>
                                                <div className='subtitle-skill-requeriments'>
                                                    SKILL
                                                    <Button icon='pi pi-pencil' label='Edit' onClick={() => editSkill(true)} className="p-button-outlined icon-edit-profile ms-2" />
                                                </div>
                                                <div className='content-text-skill'>{userSkillInput.skill}</div>
                                            </div>
                                        )}
                                        {editSkillText && (
                                            <div className='col-lg-6 col-12 p-fluid'>
                                                <div className='subtitle-skill-requeriments'>
                                                    SKILL
                                                </div>
                                                <div className='col-11'>
                                                <InputText
                                                    id="skill" 
                                                    name="skill"
                                                    onChange={(e) => onInputChangeSkill(e, 'skill')} 
                                                    value={userSkillInput.skill}  
                                                    autoFocus/>
                                                </div>
                                                <div className='col-10 content-btn-changes'>
                                                    <span className='col-5 '>
                                                        <Button label='SAVE CHANGES' onClick={() => editSkill(false)} className='btn-save-changes'/>
                                                    </span>
                                                    <span className='col-1'></span>
                                                    <span className='col-6'>
                                                        <Button label='DISCARD CHANGES' onClick={() => discardChangesSkill(false)} className='btn-discard-changes'/>
                                                    </span>
                                                </div>
                                                <div className='col-12 content-btn-changes-resp'>
                                                    <span className='col-5 '>
                                                        <Button label='SAVE CHANGES' onClick={() => editSkill(false)} className='btn-save-changes'/>
                                                    </span>
                                                    <span className='col-1'></span>
                                                    <span className='col-6'>
                                                        <Button label='DISCARD CHANGES' onClick={() => discardChangesSkill(false)} className='btn-discard-changes'/>
                                                    </span>
                                                </div>
                                            </div>
                                        )}
                                        {!editSupportText && (
                                            <div className='col-lg-6 col-12'>
                                            <div className='subtitle-skill-requeriments'>
                                                SUPPORT
                                                <Button icon='pi pi-pencil' label='Edit' onClick={() => editSupport(true)} className="p-button-outlined icon-edit-profile ms-2" />

                                            </div>
                                            <div className='content-text-skill'>
                                                {userSupportInput.support}
                                            </div>
                                        </div>

                                        )}
                                        {editSupportText && (
                                            <div className='col-lg-6 col-12 p-fluid'>
                                                <div>
                                                    <div className='subtitle-skill-requeriments'>
                                                        SUPPORT
                                                    </div>
                                                    <div className='content-text-skill p-fluid col-11'>
                                                    <InputText
                                                    
                                                    id="support" 
                                                    name="support" 
                                                    value={userSupportInput.support} 
                                                    onChange={(e) => onInputChangeSupport(e, 'support')}      
                                                    autoFocus
                                                />
                                                    </div>
                                                </div>
                                                <div className='col-10 content-btn-changes'>
                                                    <span className='col-5 '>
                                                        <Button label='SAVE CHANGES' onClick={() => editSupport(false)} className='btn-save-changes'/>
                                                    </span>
                                                    <span className='col-1'></span>
                                                    <span className='col-6'>
                                                        <Button label='DISCARD CHANGES' onClick={() => discardChangesSupport(false)} className='btn-discard-changes'/>
                                                    </span>
                                                </div>
                                                <div className='col-12 content-btn-changes-resp'>
                                                    <span className='col-5 '>
                                                        <Button label='SAVE CHANGES' onClick={() => editSupport(false)} className='btn-save-changes'/>
                                                    </span>
                                                    <span className='col-1'></span>
                                                    <span className='col-6'>
                                                        <Button label='DISCARD CHANGES' onClick={() => discardChangesSupport(false)} className='btn-discard-changes'/>
                                                    </span>
                                                </div>
                                            </div>
                                        )}
                                        {!editVaccinated && typeUser && (
                                            <div className='col-lg-6 col-12'>
                                                <div className='subtitle-skill-requeriments'>
                                                    VACCINATED
                                                    <Button icon='pi pi-pencil' label='Edit' onClick={() => editVaccinatedInfo(true)} className="p-button-outlined icon-edit-profile ms-2" />
                                                </div>
                                                <div className='content-text-skill'>{userVaccinatedInfo.status}</div>
                                            </div>
                                        )}
                                        {editVaccinated && typeUser && (
                                            <div className='col-lg-6 col-12'>
                                                <div className='subtitle-skill-requeriments'>
                                                    VACCINATED
                                                </div>
                                                <div className='p-fluid col-11'>
                                                <InputText
                                                    id="skill" 
                                                    name="skill"
                                                    onChange={(e) => onInputChangeVaccinated(e, 'status')} 
                                                    value={userVaccinatedInfo.status}  
                                                    autoFocus/>
                                                </div>
                                                <div className='col-10 content-btn-changes'>
                                                    <span className='col-5 '>
                                                        <Button label='SAVE CHANGES' onClick={() => editVaccinatedInfo(false)} className='btn-save-changes'/>
                                                    </span>
                                                    <span className='col-1'></span>
                                                    <span className='col-6'>
                                                        <Button label='DISCARD CHANGES' onClick={() => discardChangesVaccinated(false)} className='btn-discard-changes'/>
                                                    </span>
                                                </div>
                                                <div className='col-12 content-btn-changes-resp p-fluid'>
                                                    <span className='col-5 '>
                                                        <Button label='SAVE CHANGES' onClick={() => editVaccinatedInfo(false)} className='btn-save-changes'/>
                                                    </span>
                                                    <span className='col-1'></span>
                                                    <span className='col-6'>
                                                        <Button label='DISCARD CHANGES' onClick={() => discardChangesVaccinated(false)} className='btn-discard-changes'/>
                                                    </span>
                                                </div>
                                            </div>
                                        )}
                                        {!typeUser && (
                                            <>
                                                <div className='col-12 '>
                                                    <div className='subtitle-skill-requeriments'>
                                                        mobility
                                                        <Button icon='pi pi-pencil' label='Edit' onClick={() => editMObilityTab(true)} className="p-button-outlined icon-edit-profile ms-2" />
                                                    </div>
                                                    <div key={mobilitySelected.key} className='mobility-content'>
                                                        <div className='mobility-select col-2'>
                                                            <img src={`/images/care_icons/Mobility/${selectedMobilities.image}`} alt="mobility" />
                                                            <div className='text-mobility-select'>{selectedMobilities.name}</div>
                                                        </div>
                                                        <div className='mobility-select-details col-9'>
                                                            {mobilitySelected.details}
                                                        </div>
                                                    </div>
                                                </div>
                                            </>
                                        )}
                                    </Col>
                                )}
                                {!typeUser && (
                                    <>
                                        {editMobility && (
                                            <Col lg={8} className='mx-auto skill-requeriment-content'>
                                                <div className='col-lg-12 col-11 mx-auto title-skill-requirement'>Skills & Requirements</div>
                                                
                                                <div className='col-lg-6 col-11 mx-auto mobility-list-edit'>
                                                    <div className='subtitle-skill-requeriments-edit col-10 mx-auto'>
                                                        mobility
                                                    </div>
                                                    <div className='indications-edit col-10 mx-auto'>
                                                        What is your/their level of mobility? Select one.
                                                    </div>
                                                    <div className='col-10 mx-auto d-flex flex-wrap justify-content-between'>
                                                    {
                                                        mobilities.map((mobilitySelect)=>{
                                                            return(
                                                                <Col lg={5} md={5} key={mobilitySelect.key} onClick={()=>onMobilityChange(mobilitySelect)} className={`mobility-select-edit`}>
                                                                    <div className={`mobility-item  ${selectedMobilities.key === mobilitySelect.key ? ' mobility-item-hover' : ''}`}>
                                                                        <img src={`/images/care_icons/Mobility/${mobilitySelect.image}`} alt="mobility"></img>
                                                                        <label className="text-mobility-select" htmlFor={mobilitySelect.key}>{mobilitySelect.name}</label>
                                                                    </div>
                                                                </Col>
                                                            )
                                                        })
                                                    }
                                                    </div>
                                                </div>
                                                <div className='col-11 mx-auto content-btn-changes-resp'>
                                                    <span className='col-5 '>
                                                        <Button label='SAVE CHANGES' onClick={() => editMObilityTab(false)} className='btn-save-changes'/>
                                                    </span>
                                                    <span className='col-1'></span>
                                                    <span className='col-6'>
                                                        <Button label='DISCARD CHANGES' onClick={() => editMObilityTab(false)} className='btn-discard-changes'/>
                                                    </span>
                                                </div>
                                                <div className='col-lg-6 col-10'>
                                                {!editSkillText && (
                                                    <div className='col-6 ms-3'>
                                                        <div className='subtitle-skill-requeriments'>
                                                            SKILL
                                                            <Button icon='pi pi-pencil' label='Edit' onClick={() => editSkill(true)} className="p-button-outlined icon-edit-profile ms-2" />
                                                        </div>
                                                        <div className='content-text-skill'>{userSkillInput.skill}</div>
                                                    </div>
                                                )}
                                                {editSkillText && (
                                                    <div className='col-lg-9 col-12 ms-3 p-fluid'>
                                                        <div className='subtitle-skill-requeriments'>
                                                            SKILL
                                                        </div>
                                                        <div>
                                                        <InputText
                                                            id="skill" 
                                                            name="skill" 
                                                            value={userSkillInput.skill} 
                                                            onChange={(e) => onInputChangeSkill(e, 'skill')} 
                                                            autoFocus/>
                                                        </div>
                                                        <div className='col-12 content-btn-changes'>
                                                            <span className='col-5 '>
                                                                <Button label='SAVE CHANGES' onClick={() => editSkill(false)} className='btn-save-changes'/>
                                                            </span>
                                                            <span className='col-1'></span>
                                                            <span className='col-6'>
                                                                <Button label='DISCARD CHANGES' onClick={() => discardChangesSkill(false)} className='btn-discard-changes'/>
                                                            </span>
                                                        </div>
                                                        <div className='col-12 content-btn-changes-resp'>
                                                            <span className='col-5 '>
                                                                <Button label='SAVE CHANGES' onClick={() => editSkill(false)} className='btn-save-changes'/>
                                                            </span>
                                                            <span className='col-1'></span>
                                                            <span className='col-6'>
                                                                <Button label='DISCARD CHANGES' onClick={() => discardChangesSkill(false)} className='btn-discard-changes'/>
                                                            </span>
                                                        </div>
                                                    </div>
                                                )}
                                                {!editSupportText && (
                                                    <div className='col-6 ms-3 '>
                                                        <div className=''>
                                                            <div className='subtitle-skill-requeriments'>
                                                                SUPPORT
                                                                <Button icon='pi pi-pencil' label='Edit' onClick={() => editSupport(true)} className="p-button-outlined icon-edit-profile ms-2" />

                                                            </div>
                                                            <div className='content-text-skill'>
                                                                {userSupportInput.support}
                                                            </div>
                                                        </div>
                                                    </div>
                                                )}
                                                {editSupportText && (
                                                    <div className='col-lg-9 col-12 ms-3 p-fluid'>
                                                        <div className=''>
                                                            <div className='subtitle-skill-requeriments'>
                                                                SUPPORT
                                                            </div>
                                                            <div className='content-text-skill'>
                                                            <InputText
                                                                id="support" 
                                                                name="support" 
                                                                value={userSupportInput.support} 
                                                                onChange={(e) => onInputChangeSupport(e, 'support')}      
                                                                autoFocus
                                                            />
                                                            </div>
                                                        </div>
                                                        <div className='col-12 content-btn-changes'>
                                                            <span className='col-5 '>
                                                                <Button label='SAVE CHANGES' onClick={() => editSupport(false)} className='btn-save-changes'/>
                                                            </span>
                                                            <span className='col-1'></span>
                                                            <span className='col-6'>
                                                                <Button label='DISCARD CHANGES' onClick={() => discardChangesSupport(false)} className='btn-discard-changes'/>
                                                            </span>
                                                        </div>
                                                        <div className='col-12 content-btn-changes-resp'>
                                                            <span className='col-5 '>
                                                                <Button label='SAVE CHANGES' onClick={() => editSupport(false)} className='btn-save-changes'/>
                                                            </span>
                                                            <span className='col-1'></span>
                                                            <span className='col-6'>
                                                                <Button label='DISCARD CHANGES' onClick={() => discardChangesSupport(false)} className='btn-discard-changes'/>
                                                            </span>
                                                        </div>
                                                    </div>
                                                )}
                                                </div>
                                                <div className='col-5 content-btn-changes'>
                                                    <span className='col-5 '>
                                                        <Button label='SAVE CHANGES' onClick={() => editMObilityTab(false)} className='btn-save-changes'/>
                                                    </span>
                                                    <span className='col-1'></span>
                                                    <span className='col-6'>
                                                        <Button label='DISCARD CHANGES' onClick={() => editMObilityTab(false)} className='btn-discard-changes'/>
                                                    </span>
                                                </div>
                                            </Col>
                                        )}
                                    </>
                                )}
                                <Col lg={8} className='mx-auto skill-requeriment-content col-11'>
                                    {!interesEdit && (
                                        <div className='col-12'>
                                            <div className='subtitle-skill-requeriments'>
                                                Interest (10)
                                                <Button icon='pi pi-pencil' label='Edit' onClick={() => editInterest(true)} className="p-button-outlined icon-edit-profile ms-2" />
                                            </div>
                                            <ScrollPanel className='scroll-skill-requeriments'>
                                                <div className='d-flex flex-nowrap'>
                                                    {
                                                        selectedInterest.map((interest)=>{
                                                            return(
                                                                <div key={interest.key} className='me-4'>
                                                                    <div className='mobility-select col-2'>
                                                                        <img src={`/images/care_icons/Interests/${interest.image}`} alt="interest" />
                                                                        <div className='text-mobility-select'>{interest.name}</div>
                                                                    </div>
                                                                </div>
                                                            )
                                                        })
                                                    }
                                                </div>
                                            </ScrollPanel>
                                        </div>
                                    )}
                                    {interesEdit && (
                                        <>
                                            <div className='col-12 mobility-list-edit'>
                                                <div className='col-11 mx-auto'>
                                                    <div className='subtitle-skill-requeriments col-12 mb-3'>
                                                        Interest 
                                                    </div>
                                                    <div className='indications-edit col-10 '>
                                                        What is yours interest? Select one or more.
                                                    </div>
                                                    <div className='d-flex flex-wrap'>
                                                        {
                                                            interest.map((interest)=>{
                                                                return(
                                                                    <Col lg={2} md={2} className={` mobility-select-edit  `}>
                                                                        <div key={interest.key} onClick={()=>onInterestChange(interest)} className={`mobility-item ${selectedInterest.some((item) => item.key === interest.key) ? 'mobility-item-hover' : ''}`}>
                                                                            <img src={`/images/care_icons/Interests/${interest.image}`} alt="interest"></img>
                                                                            <label className="text-content-options col-12" htmlFor={interest.key}>{interest.name}</label>
                                                                        </div>
                                                                    </Col>
                                                                )
                                                            })
                                                        }
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='col-5 content-btn-changes mb-3'>
                                                <span className='col-5 '>
                                                    <Button label='SAVE CHANGES' onClick={() => editInterest(false)} className='btn-save-changes'/>
                                                </span>
                                                <span className='col-1'></span>
                                                <span className='col-6'>
                                                    <Button label='DISCARD CHANGES' onClick={() => editInterest(false)} className='btn-discard-changes'/>
                                                </span>
                                            </div>
                                            <div className='col-12 content-btn-changes-resp mb-3'>
                                                <span className='col-5 '>
                                                    <Button label='SAVE CHANGES' onClick={() => editInterest(false)} className='btn-save-changes'/>
                                                </span>
                                                <span className='col-1'></span>
                                                <span className='col-6'>
                                                    <Button label='DISCARD CHANGES' onClick={() => editInterest(false)} className='btn-discard-changes'/>
                                                </span>
                                            </div>
                                        </>
                                    )}
                                    
                                    <div className='col-12 '>
                                        <div className='col-12 title-skill-requirement'>
                                            {!typeUser && (
                                               <span className='title-skill-requirement'>Schedule</span> 
                                            )}
                                            {typeUser && (
                                               <span className='title-skill-requirement'>Availability</span> 
                                            )}
                                            {!scheduleEdit && (
                                                <Button onClick={()=>editSchedule(true)} icon='pi pi-pencil' label='Edit' className="p-button-outlined icon-edit-profile ms-2" />
                                            )}
                                            {scheduleEdit && (
                                                <>
                                                    <div className='col-5 content-btn-changes'>
                                                        <span className='col-5 '>
                                                            <Button label='SAVE CHANGES' onClick={() => editSchedule(false)} className='btn-save-changes'/>
                                                        </span>
                                                        <span className='col-1'></span>
                                                        <span className='col-6'>
                                                            <Button label='DISCARD CHANGES' onClick={() => discardSchedule(false)} className='btn-discard-changes'/>
                                                        </span>
                                                    </div>
                                                    <div className='col-12 content-btn-changes-resp'>
                                                        <span className='col-5 '>
                                                            <Button label='SAVE CHANGES' onClick={() => editSchedule(false)} className='btn-save-changes'/>
                                                        </span>
                                                        <span className='col-1'></span>
                                                        <span className='col-6'>
                                                            <Button label='DISCARD CHANGES' onClick={() => discardSchedule(false)} className='btn-discard-changes'/>
                                                        </span>
                                                    </div>
                                                </>
                                            )}
                                        </div>
                                        <div className='schedule-content col-11 mx-auto'>
                                            <DataTable value={habilities} headerColumnGroup={headerGroup} responsiveLayout="scroll">
                                                <Column field="dayOfDay" body={daysTemplate}/>
                                                <Column field="mon" body={daysTemplate} />
                                                <Column field="tues" body={daysTemplate} />
                                                <Column field="wed" body={daysTemplate} />
                                                <Column field="thu" body={daysTemplate} />
                                                <Column field="fri" body={daysTemplate} />
                                                <Column field="sat" body={daysTemplate} />
                                                <Column field="sun" body={daysTemplate} />
                                            </DataTable>
                                        </div>
                                    </div>
                                </Col>
                            </div>
                        </Row>
                        <Row className='col-lg-10 col-11 mx-auto'>
                            <div className='container-care-profile'>
                                <div className='container-meter-future'>
                                    Wellness meter in the future
                                </div>
                            </div>
                        </Row>
                    </div>
                )
            }
            {
                toggleState=== 4 && (
                    <div className='bckg-color-message'>
                        <Row className='col-lg-10 col-11 mx-auto'>
                            <div className='container-care-profile'>
                                <Col lg={12}>
                                    <div className='name-account-settings'>Mason Henderson’s Account</div>
                                </Col>
                                {!editBasicInfo && (
                                    <Col  className='col-lg-8 col-10 mx-auto basic-info-content'>
                                        <div className='subtitle-content-settings col-12'>
                                            Basic Info
                                            <Button icon='pi pi-pencil' label='Edit' onClick={() => editBasicInformation(true)} className="p-button-outlined icon-edit-profile ms-3" />
                                        </div>
                                        <div className='col-lg-6 col-12'>
                                            <div className='title-type-setting'>First Name</div>
                                            <div className='content-change-setting'>{userBasicInfo.name}</div>
                                        </div>
                                        <div className='col-lg-6 col-12'>
                                            <div className='title-type-setting'>Last Name</div>
                                            <div className='content-change-setting'>{userBasicInfo.lastName}</div>
                                        </div>
                                        <div className='col-lg-6 col-12'>
                                            <div className='title-type-setting'>Date Of Birth</div>
                                            <div className='content-change-setting'>{dateFormat(userBasicInfo.date)}</div>
                                        </div>
                                        <div className='col-lg-6 col-12'>
                                            <div className='title-type-setting'>Gender</div>
                                            <div className='content-change-setting'>{userBasicInfo.gender}</div>
                                        </div>
                                        <div className='col-lg-6 col-12'>
                                            <div className='title-type-setting'>Password</div>
                                            <div className='content-change-setting'>{userBasicInfo.password}</div>
                                        </div>
                                        <div className='line-div-settings col-12'></div>
                                    </Col>
                                )}
                                { editBasicInfo && (
                                    <Col className='col-lg-8 col-10 mx-auto basic-info-content p-fluid'>
                                        <div className='subtitle-content-settings col-12 d-flex flex-wrap '>
                                            <div className='col-lg-2 col-3 my-auto'>
                                                Basic Info
                                            </div>
                                            <div className='col-lg-5 col-8 content-btn-changes mt-auto'>
                                                <span className='col-5 '>
                                                    <Button label='SAVE CHANGES' onClick={() => editBasicInformation(false)} className='btn-save-changes'/>
                                                </span>
                                                <span className='col-1'></span>
                                                <span className='col-6'>
                                                    <Button label='DISCARD CHANGES' onClick={() => discardBasicInformation(false)} className='btn-discard-changes'/>
                                                </span>
                                            </div>
                                        </div>
                                        <div className='col-lg-6 col-12'>
                                            <div className='title-type-setting'>First Name</div>
                                            <div className='content-change-setting col-11'>
                                                <InputText
                                                id="title" 
                                                name="title" 
                                                onChange={(e)=>onInputBasicInfoChange(e, 'name')}  
                                                value={userBasicInfo.name} 
                                                autoFocus/>
                                            </div>
                                        </div>
                                        <div className='col-lg-6 col-12'>
                                            <div className='title-type-setting'>Last Name</div>
                                            <div className='content-change-setting col-11'>
                                                <InputText
                                                id="title" 
                                                name="title" 
                                                onChange={(e)=>onInputBasicInfoChange(e, 'lastName')}  
                                                value={userBasicInfo.lastName}
                                                autoFocus/>
                                            </div>
                                        </div>
                                        <div className='col-lg-6 col-12'>
                                            <div className='title-type-setting'>Date Of Birth</div>
                                            <div className='content-change-setting col-11'>
                                                <Calendar 
                                                    name="date"
                                                    id="date"  
                                                    value={userCareRequests.date}
                                                    onChange={(e) => onDropDownBasicInfoChange(e,'date')}
                                                    dateFormat="MM d, yy" 
                                                />
                                            </div>
                                        </div>
                                        <div className='col-lg-6 col-12'>
                                            <div className='title-type-setting'>Gender</div>
                                            <div className='content-change-setting col-11'>
                                                <InputText
                                                id="title" 
                                                name="title" 
                                                onChange={(e)=>onInputBasicInfoChange(e, 'gender')}  
                                                value={userBasicInfo.gender}
                                                autoFocus/>
                                            </div>
                                        </div>
                                        <div className='col-lg-6 col-12'>
                                            <div className='title-type-setting'>Current Password</div>
                                            <div className='content-change-setting col-11'>
                                                <InputText
                                                id="title" 
                                                name="title" 
                                                value={userBasicInfo.password}
                                                autoFocus/>
                                            </div>
                                        </div>
                                        <div className='col-lg-6 col-12'>
                                            <div className='title-type-setting'>New Password</div>
                                            <div className='content-change-setting col-11'>
                                                <InputText
                                                id="title" 
                                                name="title" 
                                                onChange={(e)=>onInputBasicInfoChange(e, 'password')}  
                                                autoFocus/>
                                            </div>
                                            <div className='title-type-setting'>Confirm New Password</div>
                                            <div className='content-change-setting col-11'>
                                                <InputText
                                                id="title" 
                                                name="title" 
                                                onChange={(e)=>onInputBasicInfoChange(e, 'password')}  
                                                autoFocus/>
                                            </div>
                                        </div>
                                        <div className='col-12 content-btn-changes-resp mt-auto'>
                                                <span className='col-5 '>
                                                    <Button label='SAVE CHANGES' onClick={() => editBasicInformation(false)} className='btn-save-changes'/>
                                                </span>
                                                <span className='col-1'></span>
                                                <span className='col-6'>
                                                    <Button label='DISCARD CHANGES' onClick={() => discardBasicInformation(false)} className='btn-discard-changes'/>
                                                </span>
                                            </div>
                                        <div className='line-div-settings col-12'></div>
                                    </Col>
                                )}
                                {!editContact && (
                                    <Col className='col-lg-8 col-10 mx-auto basic-info-content'>
                                        <div className='subtitle-content-settings col-12'>
                                            Contact
                                            <Button icon='pi pi-pencil' label='Edit' onClick={() => editContactInfo(true)} className="p-button-outlined icon-edit-profile ms-3" />
                                        </div>
                                        
                                        <div className='col-lg-6 col-12'>
                                            <div className='title-type-setting'>Email Address</div>
                                            <div className='content-change-setting'>{userInfoContact.email}</div>
                                        </div>
                                        <div className='col-lg-6 col-12'>
                                            <div className='title-type-setting'>Phone Number</div>
                                            <div className='content-change-setting'>{userInfoContact.phone}</div>
                                        </div>
                                        <div className='line-div-settings col-12'></div>
                                    </Col>
                                )}
                                {editContact && (
                                    <Col className='col-lg-8 col-10 mx-auto basic-info-content p-fluid'>
                                        <div className='subtitle-content-settings col-12 d-flex flex-wrap '>
                                            <div className='col-lg-2 col-3 my-auto'>
                                            Contact
                                            </div>
                                            <div className='col-lg-5 col-8 content-btn-changes mt-auto'>
                                                <span className='col-5 '>
                                                    <Button label='SAVE CHANGES' onClick={() => editContactInfo(false)} className='btn-save-changes'/>
                                                </span>
                                                <span className='col-1'></span>
                                                <span className='col-6'>
                                                    <Button label='DISCARD CHANGES' onClick={() => discardContactInfo(false)} className='btn-discard-changes'/>
                                                </span>
                                            </div>
                                        </div>
                                        <div className='col-lg-6 col-12'>
                                            <div className='title-type-setting'>Email Address</div>
                                            <div className='content-change-setting col-11'>
                                                <InputText
                                                id="email" 
                                                name="email" 
                                                onChange={(e)=>onInputContactInfoChange(e, 'email')}  
                                                value={userInfoContact.email}
                                                autoFocus/>
                                            </div>
                                        </div>
                                        <div className='col-lg-6 col-12'>
                                            <div className='title-type-setting'>Phone Number</div>
                                            <div className='content-change-setting col-11'>
                                                <InputText
                                                id="phone" 
                                                name="phone" 
                                                onChange={(e)=>onInputContactInfoChange(e, 'phone')}  
                                                value={userInfoContact.phone}
                                                autoFocus/>
                                            </div>
                                        </div>
                                        <div className='col-12 content-btn-changes-resp mt-auto'>
                                            <span className='col-5 '>
                                                <Button label='SAVE CHANGES' onClick={() => editContactInfo(false)} className='btn-save-changes'/>
                                            </span>
                                            <span className='col-1'></span>
                                            <span className='col-6'>
                                                <Button label='DISCARD CHANGES' onClick={() => discardContactInfo(false)} className='btn-discard-changes'/>
                                            </span>
                                        </div>
                                        <div className='line-div-settings col-12'></div>
                                    </Col>
                                )}
                                {!editPreferences && (
                                    <Col className='col-lg-8 col-10 mx-auto basic-info-content'>
                                        <div className='subtitle-content-settings col-12'>
                                            Preferences & Notifications
                                            <Button icon='pi pi-pencil' label='Edit' onClick={() => editPreferencesNotifi(true)} className="p-button-outlined icon-edit-profile ms-3" />
                                        </div>
                                        <div className='col-lg-6 col-12'>
                                            <div className='title-type-setting'>Preferred Contact Time</div>
                                            <div className='content-change-setting'>{userContact.contactTime}</div>
                                        </div>
                                        <div className='col-lg-6 col-12'>
                                            <div className='title-type-setting'>Receive Notifications For</div>
                                            {
                                                receiveNotifications.map((receive)=>{
                                                    return(
                                                        <div>
                                                            <div className='content-change-setting'>
                                                                <Checkbox className='me-2' inputId="binary" checked={checked} onChange={e => setChecked(e.checked)} />
                                                                {receive.option1}
                                                            </div>
                                                            <div className='content-change-setting'>
                                                                <Checkbox className='me-2' inputId="binary" checked={checked2} onChange={e => setChecked2(e.checked)} />
                                                                {receive.option2}
                                                            </div>
                                                            <div className='content-change-setting'>
                                                                <Checkbox className='me-2' inputId="binary" checked={checked3} onChange={e => setChecked3(e.checked)} />
                                                                {receive.option3}
                                                            </div>
                                                        </div>

                                                        )
                                                })
                                            }

                                        </div>
                                        <div className='col-lg-6 col-12'>
                                            <div className='title-type-setting'>Preferred Contact Method</div>
                                            <div className='content-change-setting'>{userContact.contactMethod}</div>
                                        </div>
                                        <div className='line-div-settings col-12'></div>
                                    </Col>
                                )}
                                {editPreferences && (
                                    <Col className='col-lg-8 col-10 mx-auto basic-info-content'>
                                        <div className='subtitle-content-settings col-12 d-flex flex-wrap '>
                                            <div className='col-lg-4 col-12 my-auto'>
                                            Preferences & Notifications
                                            </div>
                                            <div className='col-5 content-btn-changes mt-auto'>
                                                <span className='col-5 '>
                                                    <Button label='SAVE CHANGES' onClick={() => editPreferencesNotifi(false)} className='btn-save-changes'/>
                                                </span>
                                                <span className='col-1'></span>
                                                <span className='col-6'>
                                                    <Button label='DISCARD CHANGES' onClick={() => discardPreferencesNotifi(false)} className='btn-discard-changes'/>
                                                </span>
                                            </div>
                                        </div>
                                        <div className='col-lg-6 col-12'>
                                            <div className='title-type-setting'>Preferred Contact Time</div>
                                            <div className='content-change-setting col-11 p-fluid'>
                                                <InputText
                                                id="prefer" 
                                                name="prefer" 
                                                onChange={(e) =>onInputPreferChange(e,'contactTime')}  
                                                value={userContact.contactTime}
                                                autoFocus/>
                                            </div>
                                        </div>
                                        <div className='col-lg-6 col-12'>
                                            <div className='title-type-setting'>Receive Notifications For</div>
                                            {
                                                receiveNotifications.map((receive)=>{
                                                    return(
                                                        <div>
                                                            <div className='content-change-setting'>
                                                                <Checkbox className='me-2' inputId="binary" checked={checked} onChange={e => setChecked(e.checked)} />
                                                                {receive.option1}
                                                            </div>
                                                            <div className='content-change-setting'>
                                                                <Checkbox className='me-2' inputId="binary" checked={checked2} onChange={e => setChecked2(e.checked)} />
                                                                {receive.option2}
                                                            </div>
                                                            <div className='content-change-setting'>
                                                                <Checkbox className='me-2' inputId="binary" checked={checked3} onChange={e => setChecked3(e.checked)} />
                                                                {receive.option3}
                                                            </div>
                                                        </div>
                                                        )
                                                })
                                            }
                                        </div>
                                        <div className='col-lg-6 col-12'>
                                            <div className='title-type-setting'>Preferred Contact Method</div>
                                            <div className='content-change-setting col-11 p-fluid'>
                                                <InputText
                                                id="contactMethod" 
                                                name="contactMethod" 
                                                onChange={(e) =>onInputPreferChange(e,'contactMethod')}  
                                                value={userContact.contactMethod}
                                                autoFocus/>
                                            </div>
                                        </div>
                                        <div className='col-12 content-btn-changes-resp mt-auto'>
                                            <span className='col-5 '>
                                                <Button label='SAVE CHANGES' onClick={() => editPreferencesNotifi(false)} className='btn-save-changes'/>
                                            </span>
                                            <span className='col-1'></span>
                                            <span className='col-6'>
                                                <Button label='DISCARD CHANGES' onClick={() => discardPreferencesNotifi(false)} className='btn-discard-changes'/>
                                            </span>
                                        </div>
                                        <div className='line-div-settings col-12'></div>
                                    </Col>
                                )}
                                { !editSubscription && (
                                    <Col className='col-lg-8 col-10 mx-auto basic-info-content'>
                                        <div className='subtitle-content-settings col-12'>
                                            Subscription & Billing
                                            <Button icon='pi pi-pencil' label='Edit' onClick={() => editSubsBilling(true)} className="p-button-outlined icon-edit-profile ms-3" />
                                        </div>
                                        <div className='col-lg-6 col-12'>
                                            <div className='title-type-setting'>Subscription & Billing</div>
                                            <div className='content-change-setting'>
                                                {userInfoSub.subsBill}
                                                <i className='pi pi-star-fill star-color ms-2'></i>
                                            </div>
                                        </div>
                                        <div className='col-lg-6 col-12'>
                                            <div className='title-type-setting'>Credit Card</div>
                                            <div className='content-change-setting'>{userInfoSub.creditCard}</div>
                                        </div>
                                    </Col>
                                )}
                                { editSubscription && (
                                    <Col className='col-lg-8 col-10 mx-auto basic-info-content'>
                                        <div className='subtitle-content-settings col-12 d-flex flex-wrap '>
                                            <div className='col-lg-3 col-12 my-auto'>
                                            Subscription & Billing
                                            </div>
                                            <div className='col-5 content-btn-changes mt-auto'>
                                                <span className='col-5 '>
                                                    <Button label='SAVE CHANGES' onClick={() => editSubsBilling(false)} className='btn-save-changes'/>
                                                </span>
                                                <span className='col-1'></span>
                                                <span className='col-6'>
                                                    <Button label='DISCARD CHANGES' onClick={() => discardSubsBilling(false)} className='btn-discard-changes'/>
                                                </span>
                                            </div>
                                        </div>
                                        
                                        <div className='col-lg-6 col-12'>
                                            <div className='title-type-setting'>Subscription & Billing</div>
                                            <div className='content-change-setting col-11 p-fluid'>
                                                <InputText
                                                id="contactMethod" 
                                                name="contactMethod" 
                                                onChange={(e) => onInputSubInfoChange(e, 'subsBill')}  
                                                value={userInfoSub.subsBill}
                                                autoFocus/>
                                            </div>
                                            
                                        </div>
                                        <div className='col-lg-6 col-12'>
                                            <div className='title-type-setting'>Credit Card</div>
                                            <div className='content-change-setting col-11 p-fluid'>
                                                <InputText
                                                id="contactMethod" 
                                                name="contactMethod" 
                                                onChange={(e) => onInputSubInfoChange(e, 'creditCard')}  
                                                value={userInfoSub.creditCard}
                                                autoFocus/>
                                            </div>
                                        </div>
                                        <div className='col-12 content-btn-changes-resp mt-auto'>
                                            <span className='col-5 '>
                                                <Button label='SAVE CHANGES' onClick={() => editSubsBilling(false)} className='btn-save-changes'/>
                                            </span>
                                            <span className='col-1'></span>
                                            <span className='col-6'>
                                                <Button label='DISCARD CHANGES' onClick={() => discardSubsBilling(false)} className='btn-discard-changes'/>
                                            </span>
                                        </div>
                                    </Col>
                                )}
                                <Col className='col-8 mx-auto subs-bill-content'></Col>
                            </div>
                        </Row>
                    </div>
                )
            }
        </div>
    )
}

export default DashBoardHome;