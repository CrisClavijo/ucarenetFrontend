import 'bootstrap/dist/css/bootstrap.css';
import "primereact/resources/primereact.min.css";
import './remote-care-monitoring.scss';
import  Feature from '../../asset/remote-care-monitoring/feature-icon-placeholder.png';
import  heroImage from '../../asset/remote-care-monitoring/hero-image-placeholder.png';
import sectionImage from '../../asset/remote-care-monitoring/section-image-placeholder.png';
import appStore from '../../asset/remote-care-monitoring/app-store.jpg';
import playStore from '../../asset/remote-care-monitoring/play-store.jpg';
import adImage from '../../asset/remote-care-monitoring/ad-image-placeholder.png';

const RemoteCare = () => {





return(
    
                <section className="ng-scope">

                    <h1>
                        uCarenet+ remote care monitoring
                    </h1>
                    <section className="features-section">
                        <div className="content-container">
                            <div>
                                <img src={heroImage}/>
                            </div>
                            <div>
                                <h3>
                                    Features and benefits
                                </h3>
                                <p>
                                    Intro text Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                                </p>
                                <ul>
                                    <li>
                                        <img src={Feature}/>
                                        <p>
                                            Feature #1 and benefits
                                        </p>
                                    </li>
                                    <li>
                                        <img src={Feature}/>
                                        <p>
                                            Feature #2 and benefits
                                        </p>
                                    </li>
                                    <li>
                                        <img src={Feature}/>
                                        <p>
                                            Feature #3 and benefits
                                        </p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    <section className="how-to-section content-container">
                        <h2>How-to title</h2>
                        <div className="how-to-steps-container">
                            <div className="how-to-step">
                                <img src={sectionImage}/>
                                <h3 className=''>
                                    Step 1
                                </h3>
                                <p>
                                    Explaination of the steps goes here and isn’t too long, we dont want to loose attention.
                                </p>
                            </div>
                            <div className="how-to-step">
                                <img src={sectionImage}/>
                                <h3>
                                    Step 2
                                </h3>
                                <p>
                                    Explaination of the steps goes here and isn’t too long, we dont want to loose attention.
                                </p>
                            </div>
                            <div className="how-to-step">
                                <img src={sectionImage}/>
                                <h3>
                                    Step 3
                                </h3>
                                <p>
                                    Explaination of the steps goes here and isn’t too long, we dont want to loose attention.
                                </p>
                            </div>
                        </div>
                    </section>

                    <section className="app-cta-section">
                        <h2 >
                            Headline copy here to introduce the CTA for the app
                        </h2>
                        <p>
                            One sentence about why they should care about downloading the app.
                        </p>
                        <div className="ctas">
                            <div>
                                <img src={appStore}/>
                                <button className="cta-btn">
                                    App Store CTA
                                </button>
                            </div>
                            <div>
                                <img src={playStore}/>
                                <button className="cta-btn">
                                    Play Store CTA
                                </button>
                            </div>
                        </div>
                    </section>

                    <section className="premium-ad">
                        <div className="content-container">
                            <div>
                                <h2>
                                    Headline copy on why you should register to go here.
                                </h2>
                                <p>
                                    More details about why its beneficial for the user to register for an account. Why should
                                </p>
                                <button className="cta-btn">
                                    Register CTA
                                </button>
                            </div>
                           <div className='motives-red'> they care? What motivates them?</div>
                            <div>
                                <img src={adImage}/>
                            </div>

                        </div>
                    </section>

                    <section className="newsletter-section content-container">
                        <h2>
                            Sign up for our newsletter title
                        </h2>
                        <p>
                            Copy to promise it won’t be too often and bothersome. opt out any time, etc. Normal jargin here.
                        </p>
                        <form className="newsletter-form ng-pristine ng-valid">
                            <label className="newsletter-signup">Email address</label>
                                {/* <span>Email address</span> */}
                                <input type="email" name="newsletter-signup" id="newsletter-signup" placeholder="youremail@gmail.com"/>
                                <input type="submit" name="newsletter-submit" value="Submit"/>
                            

                        </form>
                        
                        
                    </section>

                </section>

    );
};
export default RemoteCare;