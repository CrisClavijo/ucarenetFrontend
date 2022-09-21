import 'bootstrap/dist/css/bootstrap.css';
import React, { FC } from 'react';
import { Row } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import Sewing from '../../asset/search/profile/Sewing.svg';
import Sports from '../../asset/search/profile/Sports.svg';
import Cooking from '../../asset/search/profile/Cooking.svg';
import Spiritualism from '../../asset/search/profile/Spiritualism.svg';
import Traveling from '../../asset/search/profile/Traveling.svg';
import ArtsandCrafts from '../../asset/search/profile/ArtsandCrafts.svg';
import ChurchActivities from '../../asset/search/profile/ChurchActivities.svg';
import ComputerTech from '../../asset/search/profile/ComputerTech.svg';
import Games from '../../asset/search/profile/Games.svg';
import Gardening from '../../asset/search/profile/Gardening.svg';
import Knitting from '../../asset/search/profile/Knitting.svg';
import Movies from '../../asset/search/profile/Movies.svg';
import Pets from '../../asset/search/profile/Pets.svg';
import PlayingCards from '../../asset/search/profile/PlayingCards.svg';
import Puzzles from '../../asset/search/profile/Puzzles.svg';
import Reading from '../../asset/search/profile/Reading.svg';
import Television from '../../asset/search/profile/Television.svg';
import Shopping from '../../asset/search/profile/Shopping.svg';
import Independent from '../../asset/search/profile/Independent.svg';
import ArrowLeft from '../../asset/arrow-left.svg';

interface SearchCGProfileProps {}


const SearchCGProfile: FC<SearchCGProfileProps> = () => {

    return (
    <Row>
       <div className="search-main-wrap">
			<div className="container">
				<div className="back-btn">
                <Link to='/search-cg'><img src={ArrowLeft} alt="<"></img><span>Return to Search Result</span></Link>
                </div>
				<div className="user-info-main">
					<div className="user-innr-info">
						<div className="row">
							<div className="col-md-3">
								<div className="user-info-img">
									<img src={require("../../asset/search/profile/gracel.png")} alt="gracel"></img>
									<Link className="btn btn-danger" to="#">CONTACT</Link>
								</div>
							</div>
							<div className="col-md-9">
								<div className="user-info">
									<h2>Grace is looking for care for her mother, Judy L. <span>92</span></h2>
									<p className="lead-txt">Toronto, X1X 2Y2</p>
									<div className="user-detail">
										<div className="row">
											<div className="col-sm-6">
												<ul className="user-detail-list">
													<li>February 17, 2022</li>
													<li>Regular care, 10 hours/weed</li>
												</ul>
											</div>
											<div className="col-sm-6">
												<ul className="user-detail-list">
													<li>English French</li>
													<li>$24/hour</li>
												</ul>
											</div>
										</div>	
									</div>
								</div>
							</div>
						</div>	
					</div>
					<div className="caring-nurse">
						<h2>Seeking car for 92-year-old</h2>
						<p>We are looking for care for My Mother, She likes Games, Arts and Crafts, Puzzles, Movies and Playing Cards and needs help with Dementia Care. We would like someone who specializes in Companionship, Bathing and Toileting, Dressing, Hyglene & Grooming and Light HOuse Keeping. Anyone who can speak English, Arabic and French would be a great asset. </p>
					</div>
					<div className="skill-requirement">
						<h2>Skills & Requirements</h2>
						<div className="row">
							<div className="col-sm-6">
								<p className="dark-txt">SKILLS</p>
								<p>Cancer, Dementia</p>
							</div>
							<div className="col-sm-6">
								<p className="dark-txt">SUPPORT OFFERING</p>
								<p>Meal preparation, Grocery Shopping Medication Reminders, Light housekeeping Other: Rides to social events</p> 
							</div>
						</div>
					</div>
					<div className="mobility-sec">
						<p>MOBILITY</p>
						<div className="mobility-flex">
							<div className="mobility-card">
								<img src={Independent} alt="Independent"></img>
								<span>Mobile</span>
							</div>
							<div className="mobility-info">
								<p>Mobile: (placeholder copy)This care seeker is generally moblie and able to move about their home without aid . They are able to use stairs, slopes.etc.</p>
							</div>
						</div>
					</div>
					<div className="interests-sec">
						<p>INTERESTS</p>
						<div className="interest-flex">
							<div className="interest-box">
								<img src={Sewing} alt="Sewing"></img>	
								<span>Interest 1</span>
							</div>
							<div className="interest-box">
								<img src={Sports} alt="Sports"></img>		
								<span>Interest 2</span>
							</div>
							<div className="interest-box">
								<img src={Cooking} alt="Cooking"></img>		
								<span>Interest 3</span>
							</div>
							<div className="interest-box">
								<img src={Spiritualism} alt="Spiritualism"></img>		
								<span>Interest 4</span>
							</div>
							<div className="interest-box">
								<img src={Traveling} alt="Traveling"></img>		
								<span>Interest 5</span>
							</div>
							<div className="interest-box">
								<img src={ArtsandCrafts} alt="ArtsandCrafts"></img>		
								<span>Interest 6</span>
							</div>
							<div className="interest-box">
								<img src={ChurchActivities} alt="ChurchActivities"></img>		
								<span>Interest 7</span>
							</div>
							<div className="interest-box">
								<img src={ComputerTech} alt="ComputerTech"></img>		
								<span>Interest 8</span>
							</div>
							<div className="interest-box">
								<img src={Games} alt="Games"></img>		
								<span>Interest 9</span>
							</div>
							<div className="interest-box">
								<img src={Gardening} alt="Gardening"></img>		
								<span>Interest 10</span>
							</div>
							<div className="interest-box">
								<img src={Knitting} alt="Knitting"></img>		
								<span>Interest 11</span>
							</div>
							<div className="interest-box">
								<img src={Movies} alt="Movies"></img>		
								<span>Interest 12</span>
							</div>
							<div className="interest-box">
								<img src={Pets} alt="Pets"></img>	
								<span>Interest 13</span>
							</div>
							<div className="interest-box">
								<img src={PlayingCards} alt="PlayingCards"></img>	
								<span>Interest 14</span>
							</div>
							<div className="interest-box">
								<img src={Puzzles} alt="Puzzles"></img>		
								<span>Interest 15</span>
							</div>
							<div className="interest-box">
								<img src={Reading} alt="Reading"></img>		
								<span>Interest 16</span>
							</div>
							<div className="interest-box">
								<img src={Television} alt="Television"></img>		
								<span>Interest 17</span>
							</div>
							<div className="interest-box">
								<img src={Shopping} alt="Shopping"></img>	
								<span>Interest 18</span>
							</div>
						</div>
					</div>
					<div className="availability-sec">
						<h2>Availability</h2>
						<div className="availability-box-main">
							<div className="availability-shedule-box">
								<div className="d-flex">
									<div className="availability-time"></div>
									<div className="availability-day">MON</div>
									<div className="availability-day">TUES</div>
									<div className="availability-day">WED</div>
									<div className="availability-day">THU</div>
									<div className="availability-day">FRI</div>
									<div className="availability-day">SAT</div>
									<div className="availability-day">SUN</div>
								</div>
								<div className="d-flex">
									<div className="availability-time">Morning</div>
									<div className="availability-day">
										<div className="check-box">
											<input type="checkbox" id="monday-morning"></input><label  htmlFor="monday-morning"></label>
										</div>
									</div>
									<div className="availability-day">
										<div className="check-box">
											<input type="checkbox" id="tues-morning"></input><label  htmlFor="tues-morning"></label>
										</div>
									</div>
									<div className="availability-day">
										<div className="check-box">
											<input type="checkbox" id="wed-morning"></input><label  htmlFor="wed-morning"></label>
										</div>
									</div>
									<div className="availability-day">
										<div className="check-box">
											<input type="checkbox" id="thu-morning"></input><label  htmlFor="thu-morning"></label>
										</div>
									</div>
									<div className="availability-day">
										<div className="check-box">
											<input type="checkbox" id="fri-morning"></input><label  htmlFor="fri-morning"></label>
										</div>
									</div>
									<div className="availability-day">
										<div className="check-box">
											<input type="checkbox" id="sat-morning"></input><label  htmlFor="sat-morning"></label>
										</div>
									</div>
									<div className="availability-day">
										<div className="check-box">
											<input type="checkbox" id="sun-morning"></input><label  htmlFor="sun-morning"></label>
										</div>
									</div>
								</div>
								<div className="d-flex">
									<div className="availability-time">Afternoon</div>
									<div className="availability-day">
										<div className="check-box">
											<input type="checkbox" id="monday-afternon"></input><label  htmlFor="monday-afternon"></label>
										</div>
									</div>
									<div className="availability-day">
										<div className="check-box">
											<input type="checkbox" id="tues-afternon"></input><label  htmlFor="tues-afternon"></label>
										</div>
									</div>
									<div className="availability-day">
										<div className="check-box">
											<input type="checkbox" id="wed-afternon"></input><label  htmlFor="wed-afternon"></label>
										</div>
									</div>
									<div className="availability-day">
										<div className="check-box">
											<input type="checkbox" id="thu-afternon"></input><label  htmlFor="thu-afternon"></label>
										</div>
									</div>
									<div className="availability-day">
										<div className="check-box">
											<input type="checkbox" id="fri-afternon"></input><label  htmlFor="fri-afternon"></label>
										</div>
									</div>
									<div className="availability-day">
										<div className="check-box">
											<input type="checkbox" id="sat-afternon"></input><label  htmlFor="sat-afternon"></label>
										</div>
									</div>
									<div className="availability-day">
										<div className="check-box">
											<input type="checkbox" id="sun-afternon"></input><label  htmlFor="sun-afternon"></label>
										</div>
									</div>
								</div>
								<div className="d-flex">
									<div className="availability-time">Evening</div>
									<div className="availability-day">
										<div className="check-box">
											<input type="checkbox" id="monday-evening"></input><label  htmlFor="monday-evening"></label>
										</div>
									</div>
									<div className="availability-day">
										<div className="check-box">
											<input type="checkbox" id="tues-evening"></input><label  htmlFor="tues-evening"></label>
										</div>
									</div>
									<div className="availability-day">
										<div className="check-box">
											<input type="checkbox" id="wed-evening"></input><label  htmlFor="wed-evening"></label>
										</div>
									</div>
									<div className="availability-day">
										<div className="check-box">
											<input type="checkbox" id="thu-evening"></input><label  htmlFor="thu-evening"></label>
										</div>
									</div>
									<div className="availability-day">
										<div className="check-box">
											<input type="checkbox" id="fri-evening"></input><label  htmlFor="fri-evening"></label>
										</div>
									</div>
									<div className="availability-day">
										<div className="check-box">
											<input type="checkbox" id="sat-evening"></input><label  htmlFor="sat-evening"></label>
										</div>
									</div>
									<div className="availability-day">
										<div className="check-box">
											<input type="checkbox" id="sun-evening"></input><label  htmlFor="sun-evening"></label>
										</div>
									</div>
								</div>
								<div className="d-flex">
									<div className="availability-time overneight">Overnight</div>
									<div className="availability-day overneight">
										<div className="check-box">
											<input type="checkbox" id="monday-overnight"></input><label  htmlFor="monday-overnight"></label>
										</div>
									</div>
									<div className="availability-day overneight">
										<div className="check-box">
											<input type="checkbox" id="tues-overnight"></input><label  htmlFor="tues-overnight"></label>
										</div>
									</div>
									<div className="availability-day overneight">
										<div className="check-box">
											<input type="checkbox" id="wed-overnight"></input><label  htmlFor="wed-overnight"></label>
										</div>
									</div>
									<div className="availability-day overneight">
										<div className="check-box">
											<input type="checkbox" id="thu-overnight"></input><label  htmlFor="thu-overnight"></label>
										</div>
									</div>
									<div className="availability-day overneight">
										<div className="check-box">
											<input type="checkbox" id="fri-overnight"></input><label  htmlFor="fri-overnight"></label>
										</div>
									</div>
									<div className="availability-day overneight">
										<div className="check-box">
											<input type="checkbox" id="sat-overnight"></input><label  htmlFor="sat-overnight"></label>
										</div>
									</div>
									<div className="availability-day overneight">
										<div className="check-box">
											<input type="checkbox" id="sun-overnight"></input><label  htmlFor="sun-overnight"></label>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="availability-btn">
							<Link className="btn btn-danger" to="#">Contact This Caregiver</Link>
						</div>
					</div>
				</div>
				<div className="car-request">
					<div className="row flex-row-reverse">
						<div className="col-md-6">
							<div className="car-request-img">
								<img src={require("../../asset/search/profile/doctor.jpg")} alt="doctor"></img>
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
    </Row>
    );
};

export default SearchCGProfile;