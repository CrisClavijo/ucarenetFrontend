import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useLayoutEffect , useEffect} from 'react';
import { useLocation } from 'react-router';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.scss';
import About from './components/about/about';
import ContactUs from './components/contact-us/contact-us';
import DashBoard from './components/dashboard/dashboard';
import FamilyResourceArticles from './components/family-resource-articles/family-resource-articles';
import FamilyResource from './components/family-resource/family-resource';
import Footer from './components/footer/footer';
import Header from './components/header/header';
import Home from './components/home/home';
import Login from './components/Login/Login';
import SignUpCare from './components/sign-up-care/sign-up-care';
import SignUpJob from './components/sign-up-job/sign-up-job';
import DashBoardHome from './components/dashboard/dashboard-home/dashboard-home';
import PageNotFound from './components/pageNotFound/pagenotFound';
import RecoveryPassword from './components/recovery-password/recovery-password';
import SearchCG from './components/search-cg/search-cg';
import SearchCS from './components/search-cs/search-cs';
import SignUp from './components/sign-up/sign-up';
import SearchCSProfile from './components/search-cs-profile/search-cs-profile';
import SearchCGProfile from './components/search-cg-profile/search-cg-profile';
import SearchCGLanding from './components/search-cg-landing/search-cg-landing';
import SearchCSLanding from './components/search-cs-landing/search-cs-landing';
import Activation from './components/activation/activation';
import BackgroundCheck from './components/background-check-landing/background-check-landing';
import BackgroundChecksCS from './components/background-check/background-check';
import CgResourceCenter from './components/caregiver-resource-center/cg-resource-center';
import RemoteCare from './components/remote-care-monitoring/remote-care-monitoring';
import ArticleDetail from './components/family-resource/article-detail-family/article-detail';
import ArticleDetailCg from './components/caregiver-resource-center/article-resource-caregivers/article-detail-cg';

export interface IApplicationProps { }


const Application: React.FunctionComponent<IApplicationProps> = (props) => {


    const Wrapper = ({children}) => {
        const location = useLocation();
        useLayoutEffect(() => {
          document.documentElement.scrollTo(0, 0);
        }, [location.pathname]);
        return children
      } 
    return (
        <div className="App">
            <div className='app-container'>
                <BrowserRouter basename="/">
                    <section>
                    <Header />
                    <Wrapper>
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/login" element={<Login />} />
                            <Route path="/about" element={<About />} />
                            <Route path="/contact-us" element={<ContactUs />} />
                            <Route path="/familyresource" element={<FamilyResource />} />
                            <Route path="/familyresourcearticles" element={<FamilyResourceArticles />} />
                            <Route path="/sign-up"  element={<SignUp />} />
                            <Route path="/sign-up-care"  element={<SignUpCare />} />
                            <Route path="/sign-up-job"  element={<SignUpJob />} />
                            <Route path='/dashboard-home' element={<DashBoardHome/>}/>
                            <Route path="/recovey-password" element={<RecoveryPassword />} />
                            <Route path="/dashboard" element={<DashBoard />} />
                            <Route path="/search-cs" element={<SearchCS />} />
                            <Route path="/search-cg" element={<SearchCG />} />
                            <Route path="/search-csp" element={<SearchCSProfile />} />
                            <Route path="/search-cgp" element={<SearchCGProfile />} />
                            <Route path="/search-cgl" element={<SearchCGLanding />} />
                            <Route path="/search-csl" element={<SearchCSLanding />} />
                            <Route path="/activation" element={<Activation />} />
                            <Route path="/background-check-landing" element={<BackgroundCheck/>}/>
                            <Route path="/background-check" element={<BackgroundChecksCS/>}/>
                            <Route path="/cgr-center" element={<CgResourceCenter/>}/>
                            <Route path="/remote-care-monitoring" element={<RemoteCare/>}/>
                            <Route path="/article-family/:name/:key/:articleName" element={<ArticleDetail/>}/>
                            <Route path="/article-cg/:name/:key/:articleName" element={<ArticleDetailCg/>}/>
                            <Route path="*" element={<PageNotFound />} />
                        </Routes>
                    </Wrapper>
                    <Footer />
                    </section>
                </BrowserRouter>
            </div>
        </div>

    );
}

export default Application;