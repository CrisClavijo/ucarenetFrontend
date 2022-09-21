
import 'bootstrap/dist/css/bootstrap.css';
import "primereact/resources/primereact.min.css";
import bcHero from '../../asset/background-check-landing-img/bc-hero.jpg';
import Rentagule641 from '../../asset/background-check-landing-img/Rentagule641.png';
import RecordCheck from '../../asset/background-check-landing-img/recordCheck.png';
import CertificateCheck from '../../asset/background-check-landing-img/Rectangule454.png';
import cerntRaiting from '../../asset/background-check-landing-img/cerntRaiting.png';
import ProfileCards from '../../asset/background-check-landing-img/ProfileCards.png';
import iconReport from '../../asset/background-check-landing-img/bc-report-icon-noBG.svg';
import iconCertn from '../../asset/background-check-landing-img/certn-logo.svg';
import RegisterCTA from '../../asset/search/landing/Register-cta.jpg';
import './background-check-landing.scss'
import { useFormik } from 'formik';
import React, { useState } from "react";
import { classNames } from 'primereact/utils';
import FormMailing from '../form-mailing-list/form-mailing';



const BackgroundCheck = () => {

    return(
        <>
        <div className="top-banner sticky">
			<img src={bcHero} alt="img"/>
		</div>
		
		<div className="landing-hero dark">
			<div className="hero-icon"></div>
			<h1>
				Show families you’re honest and reliable
			</h1>
			<p>
				Instill a sense of trust for the family looking to hire you by obtaining a background 
                check verification. Show them that you are trustworthy, qualified, safe & reliable.
			</p>
			<button className="cta-btn">
				<a href="">Get your background Check</a>
			</button>
		</div>

		<div className="bg-section white">
			<div className="content-container info-section">
				<h3 className=''>Why get a background check?</h3>
                <div className='col-12 d-flex flex-wrap'>
                    <div className="mobile-order-1 col-6">
                        <h2>
                            For your future care clients, inviting you into their family's home is a big decision.
                        </h2>
                        <div className='desktop-display'>
                            <p>
                                Obtaining a background check can help your future care clients trust that you’ll keep 
                                their home and their elderly family members safe. Care seekers are able to filter their search results for those who have a verified background check, helping you stand out in the crowd.
                            </p>
                            <p>
                                To ensure everyone’s peace of mind, our background checks are done in partnership 
                                with <a className="contextual-cta" href="">Certn</a> and they include; Criminal record checks, Employment history and education verifications, and driving records.
                            </p>
                            <p>
                                uCarenet has made it easy and inexpensive for you to get your background check. You can do this online from 
                                the comfort of your home for as low as $XX. uCarenet is committed to support caregivers with their important work and allow you to download your background check and use it off platform, if needed. 
                            </p>
                        </div>
                    </div>
                    <div className="mobile-order-2 col-6">
                        <div className="info-box d-flex flex-wrap">
                            <img src={iconReport} alt='img' className='mx-auto'/>
                            <div>
                                <p>Criminal record check</p>
                                <p>+</p>	
                                <p>Employment history and education verifications</p>
                                <p>+</p>
                                <p>Driving records</p>	
                            </div>
                            
                        </div>	
                    </div>
                    <div className='mobile-display mobile-order-3'>
                            <p>
                                Obtaining a background check can help your future care clients trust that you’ll keep 
                                their home and their elderly family members safe. Care seekers are able to filter their search results for those who have a verified background check, helping you stand out in the crowd.
                            </p>
                            <p>
                                To ensure everyone’s peace of mind, our background checks are done in partnership 
                                with <a className="contextual-cta" href="">Certn</a> and they include; Criminal record checks, Employment history and education verifications, and driving records.
                            </p>
                            <p>
                                uCarenet has made it easy and inexpensive for you to get your background check. You can do this online from 
                                the comfort of your home for as low as $XX. uCarenet is committed to support caregivers with their important work and allow you to download your background check and use it off platform, if needed. 
                            </p>
                    </div>
				</div>
			</div>
		</div>

		<div className="cg-bg light">
			<div className="content-container info-section">
				<div className='mobile-order-2'>
					<h2>Your background check with Certn will cover the following:</h2>
				</div>
				<div className="certn-logo mobile-order-1">
					<img src={iconCertn} alt=''/>
				</div>
			</div>
		</div>

		<div className="bg-section white">
			<div className="content-container info-section">	
				<div className="vp-support mobile-order-2">
					<img src={RecordCheck} alt="img"/>
				</div>	
                <h3 className='header-title-mobile'>Criminal record check</h3>

                <div className='mobile-view mobile-order-3'>
					<h3>Criminal record check</h3>
					<h2>Help your care clients make an informed decision.</h2>
					<p>This section of the background check will discolse any registered federal, provincial/state, and/or local felony and misdemeanor convictions.</p>
				</div>
			</div>
			<div className="content-container info-section">
                    <h3 className='header-title-mobile'>Employment history and education verifications</h3>
				<div className='mobile-view mobile-order-3'>
					<h3>Employment history and education verifications</h3>
					<h2>Proudly show proof of your education and your prior employment.</h2>
					<p>This section of the background check verifies your past employment experience, education, and qualifications for the job as you’ve reported them.</p>
				</div>	
				<div className="vp-support">
					<img src={CertificateCheck} alt="img"/>
				</div>
			</div>
			<div className="content-container info-section">	
				<div className="vp-support mobile-order-2">
					<img src={cerntRaiting} alt="img"/>
				</div>	
                    <h3 className='header-title-mobile'>Driving records</h3>
				<div className='mobile-view mobile-order-3'>
					<h3 >Driving records</h3>
					<h2>Now’s the time to flaunt your good driving record.</h2>
					<p>From time to time you might be asked to transport care clients or run errands for them. This driving record verification includes check of state/provincial motor vehicle record (MVRs), driving license validity, discloses any registered DUIs, moving violations, license suspensions, and other recorded risky driving behaviour.</p>
				</div>
			</div>
		</div>

		<div className="cg-bg light">
			<div className="content-container info-section">
				<div className='mobile-order-2'>
					<h2>Earn & display your trust badge to increase care requests.</h2>
					<p>A valid background check will help you EARN your trust badge so you can display it on your profile. Show care clients that you’re honest and trustworthy.</p>
				</div>
				<div className=" mobile-order-1">
					<img src={ProfileCards} alt='img'/>
				</div>
			</div>
		</div>

		<div className="bg-section white">
			<div className="content-container info-section inner-FAQ">
				<h2>Background Check FAQ</h2>
				<h3>Q: What will happen if I do have a record?</h3>
				<p>We understand that not everyone has a perfect record and that does not mean you’re unfit to care for others. If your record indicates minor offences, misdemeanors, or other non-violent crimes, you background check status will simply indicate a review status, encouraging an honest conversation with your care seekers where you can choose to share more about your history. It’s always best to be honest.</p>
				<h3>Q: Can I learn more about Certn?</h3>
				<p>Certn is one of Canada’s fastest-growing tech companies. Every day, over 100 Certonians help companies of all sizes build trust in people. They combine empathy with their proprietary technology to deliver fast, friendly, and comprehensive background screening solutions. To know more visit www.certn.ca </p>
				<button className="cta-btn">
					<a href="" >Get started on your background check verification</a>
				</button>
			</div>
		</div>

		<div className="bg-section">
			<div className="content-container info-section">
				<div className="mobile-order-2">
					<h2>
						Increase your chance of getting hired quickly!
					</h2>
					<p>100% of your hourly rate will be yours! uCarenet matches you with the right care seekers based on your skills. Register now to get the most  of your time and effort.</p>
					<button className="cta-btn">
						<a href="#signup">Register for free</a>
					</button>
				</div>
				<div className="mobile-order-1">
					<img src={RegisterCTA} alt='img'/>
				</div>
			</div>
			
		</div>

		<FormMailing/>
        
        </>    
    );
};
export default BackgroundCheck;