import 'bootstrap/dist/css/bootstrap.css';
import React, { FC } from 'react';
import { Row, Carousel } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import doctor from '../../asset/search/profile/doctor.jpg';
import FastAndEasySearch from '../../asset/search/landing/fast-and-easy-search.jpg';
import WhoICanHire from '../../asset/search/landing/who-can-i-hire.jpg';
import HowToRefine from '../../asset/search/landing/how-to-refine-search-as-careseeker.jpg';
import FormMailing from '../form-mailing-list/form-mailing';
import './search-cg-landing.scss';

interface SearchCGLandingProps {}


const SearchCGLanding: FC<SearchCGLandingProps> = () => {

	let navigate = useNavigate(); 
  const routeChange = () =>{ 
    let path = `/search-cg`; 
    navigate(path);
  }
    return (
    <Row>
		<div id="container-fluid">

			<div className="hero find-cg top-state">
				<div className="content-container">
					<div className="hero-content">
						<h1>
							uCarenet's Home Care Booking Platform Makes Affordable Home Care Simple.
						</h1>

						<form className="hero-cta ng-pristine ng-valid">
							<input className="cta-search" type="text" name="searchCg" id="searchCg" placeholder="Search by city or postal code"/>
								<input className="cta-btn" type="submit" name="submitSearchCg" value="Search for caregivers"/>
						</form>
						<p>
							Enter your city or postal code above and click search for caregivers to find caregivers in your area.

						</p></div>
					<div className="hero-img">
						<img src="https://ucarenet-staging.azurewebsites.net/Content/images/static-images/find-cg-img-01.jpg"/>
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
					<a href="#">Toronto Caregivers</a>
				</li>
				<li>
					<a href="#">London Caregivers</a>
				</li>
				<li>
					<a href="#">Windsor Caregivers</a>
				</li>
				<li>
					<a href="#">Brampton Caregivers</a>
				</li>
				<li>
					<a href="#">Ottawa Caregivers</a>
				</li>
			</ul>

			</div>
			<div className="find-caregivers">
				<div className="container">
					<p className="highlight">Fast and Easy Search to find Caregivers</p>
					<div className="row">
						<div className="col-md-6">
							<div className="find-caregivers-fig">
								<img src={FastAndEasySearch} alt="FastAndEasySearch"></img>
							</div>
						</div>
						<div className="col-md-6">
							<div className="find-caregivers-info">
								<ol>
									<li><span>1</span>Create your profile</li>
									<li><span>2</span>Post your care needs</li>
									<li><span>3</span>Review a list of caregivers matching your criteria</li>
									<li><span>4</span>Hire your preferred caregiver</li>
								</ol>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="bookucare-wrap">
				<div className="container">
					<div className="bookucare-main">
						<div className="row">
							<div className="col-md-6">
								<div className="bookucare-left">
									<p className="highlight">How to refine your search</p>
									<h2>Through the booking platform you can search for and directly hire caregivers to deliver home care services.</h2>
									<img src={WhoICanHire} alt="WhoICanHire"></img>
								</div>
							</div>
							<div className="col-md-6">
								<div className="bookucare-right">
									<p>Our easy-to-use platform takes the guess work out of trying to find a qualified caregiver. We match your family member with the right caregiver based on location, language preference, interests & more. We ensure your family member finds a trusted companion and are dedicated to improving the well-being of the aging population by equipping you with the right tools and knowledge to manage your care plan. Whether you are looking for Senior care, nursing care, Alzheimer’s care, palliative care, a Personal Support Worker (PSW), or companionship to help reduce senior loneliness, you can find qualified caregivers on the uCarenet platform.
									</p>
									<p>With uCarenet you have the power of technology to personalize a care plan to your family’s needs and budget. You can search for and hire local caregivers from $17.00 per hour.</p>
									<p>By cutting out the middleman and hiring direct you can care more, save more, and get more hours of home care.</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="slider-container">
					<Carousel>
						<Carousel.Item>
							<div className="contain-slide">
								<div className="contain-text-slide">
									“Testimonial would go here, and could be varying in length so we’ll design for one thats a bit longer. Testimonial would go here, and could be varying in length so we’ll design for one thats a bit longer.”
								</div>
								<div className="subtext-slide">
									- Person who said the thing, a family member
								</div>
							</div>
						</Carousel.Item>
						<Carousel.Item>
							<div className="contain-slide">
								<div className="contain-text-slide">
									“Testimonial would go here, and could be varying in length so we’ll design for one thats a bit longer. Testimonial would go here, and could be varying in length so we’ll design for one thats a bit longer.”
								</div>
								<div className="subtext-slide">
									- Person who said the thing, a family member
								</div>
							</div>
						</Carousel.Item>
						<Carousel.Item>
							<div className="contain-slide">
								<div className="contain-text-slide">
									“Testimonial would go here, and could be varying in length so we’ll design for one thats a bit longer. Testimonial would go here, and could be varying in length so we’ll design for one thats a bit longer.”
								</div>
								<div className="subtext-slide">
									- Person who said the thing, a family member
								</div>
							</div>
						</Carousel.Item>
					</Carousel>
				</div>
			<div className="refine-search">
				<div className="container">
					<div className="refine-search-top">
						<div className="row">
							<div className="col-md-6">
								<p className="highlight">How to refine your search</p>
								<h2>To improve your results, the booking platform gives you the opportunity to use filters to refine your search.</h2>
							</div>
						</div>
					</div>
					<div className="refine-search-sec">
						<div className="row">
							<div className="col-md-6">
								<div className="refine-search-fig">
									<img src={HowToRefine} alt="HowToRefine"></img>
								</div>
							</div>
							<div className="col-md-6">
								<div className="refine-search-info">
									<h4 className='filter-title'><strong>You can filter by:</strong></h4>
									<h4>Best Match:</h4>
									<p>This option uses the information provided in your profile to match you to your
									most compatible caregiver. It considers everything from required skills,
									availability, interests and more.</p>
									<h4>Languages:</h4>
									<p>Here you can filter by the language(s) you’d like a caregiver to speak.</p>
									<h4>Credentials:</h4>
									<p>This gives you the opportunity to identify the type of skill set you are looking
									for. For example Personal Support Worker (PSW) Registered Nurse (RN) or
									Companion.</p>
									<h4>Type of care:</h4>
									<p>This options allows you to define the type of care you need. For example
									Alzheimer’s Care, Dementia Care, Cancer Care, Senior Care, Stroke Care, etc.</p>
									<h4>Tasks:</h4>
									<p>Use this filter to select the type of assistance you need. For example: Bathing
									and Toileting, Medication Reminders, Light Housekeeping, etc.</p>
									<h4>More filters:</h4>
									<p>Here you may select other filters such as availability for respite care, whether
									they’ve had a background check, whether they’re vaccinated, driving ability,
									and their interests.</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="car-request-wrap">
				<div className="container">
					<div className="car-request">
						<div className="row flex-row-reverse">
							<div className="col-md-6">
								<div className="car-request-img">
									<img src={doctor} alt="doctor"></img>
								</div>
							</div>
							<div className="col-md-6">
								<div className="car-request-info">
									<h2>Register to post care requests & message caregivers </h2>
									<p>More details about why its beneficial for the user to register for an account. Why should they care? What motivates them?</p>
									<Link className="btn btn-danger" to="#">register for free</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<FormMailing/>
		</div>
    </Row>
    );
};

export default SearchCGLanding;