import 'bootstrap/dist/css/bootstrap.css';
import React, { FC , useState } from 'react';
import { Row, Carousel } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import doctor from '../../asset/search/profile/doctor.jpg';
import LingoForCaregivrs from '../../asset/search/landing/lingo-for-caregivers.png';
import AppStore from '../../asset/search/landing/app-storesa.png';
import PlayStore from '../../asset/search/landing/google-store_1png_10.png';
import CheckProfileBadge from '../../asset/search/landing/check-profile-badge.png';
import HowToRefileCareSeeker from '../../asset/search/landing/how-to-refine-search-as-careseeker.jpg';
import ResourceSectionIcon from '../../asset/search/landing/resources-section-icon.svg';
import './search-cs-landing.scss';
import FormMailing from '../form-mailing-list/form-mailing';

import FindJob01 from '../../asset/find-job-img/find-job-img-01.jpg';
import FindJob02 from '../../asset/find-job-img/find-job-img-02.jpg';
import FindJob03 from '../../asset/find-job-img/find-job-img-03.png';
import FindJob04 from '../../asset/find-job-img/find-job-img-04.png';
import FindJob05 from '../../asset/find-job-img/find-job-img-05.jpg';
import FindJob06 from '../../asset/find-job-img/find-job-img-06.jpg';
import FindJob07 from '../../asset/find-job-img/find-job-img-07.jpg';

interface SearchCSLandingProps {}


const SearchCSLanding: FC<SearchCSLandingProps> = () => {

	let navigate = useNavigate(); 
	const routeChange = () =>{ 
	  let path = `/search-cs`; 
	  navigate(path);
	}
	const [index, setIndex] = useState(0);
	const handleSelect = (selectedIndex, e) => {
		setIndex(selectedIndex);
	};
    return (
		<Row>
			<div className='search-cls-content'>
				<div className="hero find-job">
					<div className="content-container">
						<div className="hero-content">
							<h1>
								uCarenet's Home Care Booking Platform helps you find senior in-home care jobs.
							</h1>

							<form className="hero-cta ng-pristine ng-valid">
								<input className="cta-search ng-pristine ng-untouched ng-valid ng-isolate-scope pac-target-input" type="text" name="searchCg" id="searchCg" placeholder="Search by city or postal code" ng-model="careCity" ng-keyup="$event.keyCode == 13 &amp;&amp; initService();" ng-autocomplete="" /*options="request2" autocomplete="off"*//>
								<input className="cta-btn" type="submit" name="submitSearchCg" value="Search for jobs" onClick={routeChange}/>
							</form>
							<p>
								Want to get hired quickly? Create your account on uCarenet and receive a list of care seekers that match your skills.

							</p></div>
						<div className="hero-img">
							<img src={FindJob01}/>
						</div>
					</div>
				</div>

				<div className="content-container removed-padding city-search-list">
					<p>
					</p><ul>
				<span>
					Featured Cities:
				</span>
					<li>
						<a href="#">Toronto Care Jobs</a>
					</li>
					<li>
						<a href="#">London Care Jobs</a>
					</li>
					<li>
						<a href="#">Windsor Care Jobs</a>
					</li>
					<li>
						<a href="#">Brampton Care Jobs</a>
					</li>
					<li>
						<a href="#">Ottawa Care Jobs</a>
					</li>
				</ul>

				</div>

				<div className="content-container info-section">
					<h3>What kind of jobs are careseekers looking to hire on uCarenet?</h3>
					<div>
						<ul className="keywords-list">
							<li>Registered Nurses</li>
							<li>Dementia Care</li>
							<li>Companions</li>
							<li>PSWs</li>
							<li>Palliative Care</li>
							<li>Light Housework &amp; More!</li>
						</ul>
					</div>
				</div>

				<div className="bg-section cg-info-box">
					<div className="content-container">
						<div>
							<img src={FindJob02}/>
						</div>
						<div>
							<h2>We are committed to elevating the quality of life of not just for seniors, but also for caregivers.</h2>
							<p className='text-start'>Our booking platform allows you to set your own rates and schedule and connects you—at no cost—to dozens of potential clients who are ready to hire caregivers.</p>
						</div>
					</div>
				</div>

				<div className="content-container testimonial ">
					<div className="testimonials-cotainer">
						<Carousel activeIndex={index} onSelect={handleSelect} interval={null}>
							<Carousel.Item>
								<div className="testimonial-content">
									<p className=" testimonial-body text-center-alg">
										"Given that most agencies do not guarantee the same PSW every day and the complex need of the person in my care, it became clear I needed to help finding a private PSW. Several attempts were made to use KIJI and such but nothing worked out. I turned to twitter, asking other PSW advocates for resources and that were I found uCarenet. It came highly recommended by 2 PSW's I follow and seemed to fit our needs. Within a few days, we were able to hire 2 PSW's, both continue to work the needed shifts and care has been excellent. I cannot express how much stress and worry about hiring people was gone once we connected with uCarenet."
									</p>
									<p className="testimonail-name text-center-alg ">- Sharon F., Toronto ON</p>
								</div>
							</Carousel.Item>
							<Carousel.Item>
								<div className="testimonial-content">
									<p className="testimonial-body text-center-alg ">
										"A second testimonial if we get one that says something about someone."
									</p>
									<p className="testimonail-name text-center-alg ">- Nice person., Hamilton ON</p>
								</div>
							</Carousel.Item>
							<Carousel.Item>
								<div className="testimonial-content">
									<p className=" testimonial-body text-center-alg">
										"We can add as many testimonials as we wish the pagination will populate automatically. This will be the third one."
									</p>
									<p className="testimonail-name text-center-alg ">- Someone F., Ottawa ON</p>
								</div>
							</Carousel.Item>
						</Carousel>
					</div>
				</div>

				<div className="cg-bg dark">
					<div className="content-container info-section">
						<div className="mobile-order-2">
							<h3>How Can I increase Care requests?</h3>
							<h2>Get a background check to be able to display your trust badge &amp; increase care requests.</h2>
							<div className='text-start'>
								<button className="cta-btn">
									<a href="#">Get your background check</a>
								</button>
								<button className="cta-secondary-btn">
									<a href="#">Learn More</a>
								</button>
							</div>
						</div>
						<div className="mobile-order-1">
							<img src={FindJob03}/>
						</div>
					</div>
				</div>

				<div className="content-container info-section">
					<h3>How to refine your search</h3>
					<div>
						<h2>To improve your results, the booking platform gives you the opportunity to use filters to refine your search.</h2>
						<img src={FindJob04}/>
					</div>
					<div>
						<h4>You can filter by:</h4>
						<ul className="info-list">
							<li>
								<p className="sub-title">Best Match:</p>
								<p>This option uses the information provided in your profile to match you to your most compatible careseeker. It considers everything from required skills, availability, interests and more.</p>
							</li>
							<li>
								<p className="sub-title">Skills:</p>
								<p>This gives you the opportunity to identify the type of skill set you have. For example Personal Support Worker (PSW) Registered Nurse (RN) or Chiropractor.</p>
							</li>
							<li>
								<p className="sub-title">Required Hours:</p>
								<p>Filters results based on the number of hours you’d prefer to work</p>
							</li>
							<li>
								<p className="sub-title">Type of care:</p>
								<p>Use this filter to select the type of assistance you’d like to offer. For example: Bathing and Toileting, Medication Reminders, Light Housekeeping, etc.</p>
							</li>
							<li>
								<p className="sub-title">Tasks:</p>
								<p>Filter results by the tasks you’re able to do.</p>
							</li>
						</ul>

					</div>
				</div>

				<div className="content-container info-section">
					<div>
						<img src={FindJob05}/>
					</div>

					<div>
						<h2 className="cg-no-bg">uCarenet+ leverages modern technology to improve the quality of in-home care by:</h2>
						<ul className="steps cg">
							<li>
								<span>1</span>
								<h2>Real-time communication</h2>
							</li>
							<li>
								<span>2</span>
								<h2>Automated reminders </h2>
							</li>
							<li>
								<span>3</span>
								<h2>Manage billing and payments  </h2>
							</li>
						</ul>

						<div className="product-downloads">
							<a href="https://apps.apple.com/ca/app/ucaremap/id1208362294?platform=iphone">
								<img src={AppStore}/>
							</a>
							<a href="https://play.google.com/store/apps/details?id=com.ucarenet.caremap">
								<img src={PlayStore}/>
							</a>
						</div>
					</div>
				</div>

				<div className="content-container info-section">
					<div className="mobile-order-2">
						<h2>To improve your results, the booking platform gives you the opportunity to use filters to refine your search.</h2>

						<p className="sub-title">VOICE-TO-VOICE TRANSLATION - INSTANT. FREE-FLOWING CONVERSATION.</p>

						<p>Once you’ve selected the desired language (French, Mandarin, Urdu, Spanish, etc), simply tap the appropriate microphone icon (for caregiver or senior) and start speaking. Active, live voice-to-voice translation technology makes communication easy. No typing necessary. Simply speak into your phone and the app will instantly translate, and speak, that sentence.</p>

						<p className="sub-title">ACTIVE DAILY LIVING - POINT, TAP, COMMUNICATE.</p>
						<p>uCareLINGO translates 35 of the most common used words/phrases associated with personal wellbeing and activities of daily living into 17 foreign languages. Simply tap each icon to activate audio translation and communication between caregivers and patients becomes effortless.</p>

						<a className="contextual-cta" href="#">Learn more about uCareLINGO</a>
						<div className="product-downloads">
							<a href="https://apps.apple.com/ca/app/ucaremap/id1208362294?platform=iphone">
								<img src={AppStore}/>
							</a>
							<a href="https://play.google.com/store/apps/details?id=com.ucarenet.caremap">
								<img src={PlayStore}/>
							</a>
						</div>
					</div>
					<div className="mobile-order-1">
						<img src={FindJob06}/>
					</div>
				</div>

				<div className="cg-bg light resource-teaser">
					<div className="content-container">
						<h2>Learn New Skills by Visiting our Caregiver Resources Center</h2>
						<p>Articles | Tutorials | Client Management Tools | Learning Resources &amp; more</p>
						<button className="cta-btn">
							<a href="#">Check it out</a>
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
							<img src={FindJob07}/>
						</div>
					</div>

				</div>

				<FormMailing/>
			</div>
		</Row>
    );
};

export default SearchCSLanding;