import './background-check.scss';
import iconReport from '../../asset/background-check-landing-img/bc-report-icon-noBG.svg';
import iconCertn from '../../asset/background-check-landing-img/certn-logo.svg';
import RecordCheck from '../../asset/background-check-landing-img/recordCheck.png';
import CertificateCheck from '../../asset/background-check-landing-img/Rectangule454.png';
import cerntRaiting from '../../asset/background-check-landing-img/cerntRaiting.png';
import findcg from '../../asset/background-check-landing-img/find-cg-img-05.jpg';
import FormMailing from '../form-mailing-list/form-mailing';

const BackgroundChecksCS = () =>{


    return(
       <>
                <div className="top-banner sticky">
                  <img src="https://designclinic.ca/clients/ucarenet/images/bc-teaser-cs.jpg" alt='imagen'/>
                </div>
        
                <div className="landing-hero dark cs">			
                    <h1>
                        Caregivers families can trust
                    </h1>
                    <p>
                        Every family deserves to know that their caregiver is qualified, safe and reliable. Search for caregivers and look for the trust badge indicating cargivers have obtained a valid background check. 
                    </p>			
                    <div className="hero-icon"></div>
                </div>

                <div className="bg-section white">
                    <div className="content-container info-section">
                        <h3 className="">Looking to hire an in-home caregiver?</h3>
                        <div className="mobile-order-2">
                            <h2>
                                Inviting a new caregiver into your family member's home is not an easy decision.
                            </h2>
                            <p>
                                Asking for the background check of a potential caregiver can help you keep your home and your family members safe. You can search for caregivers with valid background checks on our platform, ask caregivers to share their background check report, and request that a caregiver to obtain a background check. 
                            </p>
                            <p>
                                To help you have peace of mind, our background checks are done in partnership with Certn and they include; Criminal record checks, Employment history and education erifications, and driving records. 
                            </p>
                            
                        </div>
                        <div className="mobile-order-1">
                            <div className="info-box cs">
                                <img src={iconReport}  alt='imagen'/>
                                <div>
                                    <p>Criminal record check</p>
                                    <p>+</p>	
                                    <p>Employment history and education verifications</p>
                                    <p>+</p>
                                    <p>Driving records</p>	
                                </div>
                                
                            </div>	
                        </div>
                        
                    </div>
                </div> 

                <div className="cg-bg light">
                    <div className="content-container info-section">
                        <div>
                            <h2>Caregivers’ background checks with Certn cover the following:</h2>
                        </div>
                        <div className="certn-logo mobile-order-1">
                            <img src={iconCertn}  alt='imagen'/>
                        </div>
                    </div>
                </div>

                <div className="bg-section white">
                    <div className="content-container info-section">	
                        <div className="vp-support mobile-order-2">
                            <img src={RecordCheck}  alt='imagen'/>
                        </div>	
                        <div>
                            <h3>Criminal record check</h3>
                            <h2>Make an informed decision about who you bring into your home.</h2>
                            <p>This section of the background check will disclose any registered federal, provincial/state, and/or local felony and misdemeanor convictions.</p>
                        </div>
                    </div>
                    <div className="content-container info-section">
                        <div>
                            <h3>Employment history and education verifications</h3>
                            <h2>Confirming the caregiver is truthful.</h2>
                            <p>This section of the background check verifies that the caregiver has the necessary experience, education, and qualifications for the job and they were self reported correctly.</p>
                        </div>	
                        <div className="vp-support">
                            <img src={CertificateCheck}  alt='imagen'/>
                        </div>
                    </div>
                    <div className="content-container info-section">	
                        <div className="vp-support mobile-order-2">
                            <img src={cerntRaiting} alt='imagen'/>
                        </div>	
                        <div>
                            <h3>Driving records</h3>
                            <h2>Verifying the caregiver has a good driving record.</h2>
                            <p>From time to time caregivers are being asked to transport seniors in their care or run errands for them. This driving record verification includes check of state/provincial motor vehicle record (MVRs), driving license validity, discloses any registered DUIs, moving violations, license suspensions, and other recorded risky driving behaviour.</p>
                        </div>
                    </div>
                </div>


                <div className="bg-section white">
                    <div className="content-container info-section inner-FAQ">
                        <h2>Background Check FAQ</h2>
                        <h3>Q: How can i hire a caregiver with a valid background check?</h3>
                        <p><a className="contextual-cta" href="#">Log in to your account</a> and contact prospective caregivers using the messaging on the platform. Message caregivers directly and ask them to share their background check status and report. Caregivers with a valid background check can instantly share access to their report with you in a message. If a caregiver doesn't have a valid report you may ask them to obtain one.</p>
                        <h3>Q: Can I learn more about Certn?</h3>
                        <p>Certn is one of Canada’s fastest-growing tech company. Every day, over 100 Certonians help companies of all sizes build trust in people. They combine empathy with their proprietary technology to deliver fast, friendly, and comprehensive background screening solutions. To know more visit www.certn.ca</p>
                        <button className="cta-btn">
                            <a href=" ">Find trusted Caregivers</a>
                        </button>
                    </div>
                </div>

                <div className="bg-section">
                    <div className="content-container info-section">
                        <div className="mobile-order-2">
                            <h2>
                                Register to post care needs & message caregivers
                            </h2>
                            <p>Post your care request and have qualified local caregivers contact you.</p>
                            <button className="cta-btn d-flex">
                                <a href="#signup">Register for free</a>
                            </button>
                        </div>
                        <div className="mobile-order-1">
                            <img src={findcg} alt='imagen'/>
                        </div>
                    </div>
                    
                </div>

                <FormMailing/>
       </>
    );


};
export default BackgroundChecksCS;