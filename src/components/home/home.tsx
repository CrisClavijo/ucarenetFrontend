import React,{useState} from 'react';
import CaregiverService  from "../../services/caregiverServices";
import { Button,Row,Col,InputGroup, FormControl, Carousel, Container } from 'react-bootstrap';
import {useNavigate} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import caregiverResultsList from '../../types/response/caregiver/caregiverResultsList';
import {fake} from './../../constants/AppConfig';
import RectangleImgIcon from '../../asset/rectangles/RectangleImgIcon.svg';
import RectangleImgIntroduce from '../../asset/rectangles/Rectangle504.svg';
import RectangleImgIntroduceRight from '../../asset/rectangles/Rectangle393.svg';
import RectangleResource from '../../asset/rectangles/RectangleResource.svg';
import RectangleAbout from '../../asset/rectangles/RectangleAbout.svg';
import dementia from '../../asset/home-img/care_icon_Dementia.svg';
import bath from '../../asset/home-img/care_icon_Bath.svg';
import surgical from '../../asset/home-img/care_icon_Post-surgical.svg';
import cancer from '../../asset/home-img/care_icon_Cancer.svg';
import dressing from '../../asset/home-img/care_icon_Dressing.svg';
import walking from '../../asset/home-img/care_icon_Walking.svg';
import mealPrep from '../../asset/home-img/care_icon_Meal-Prep.svg';
import icon01 from '../../asset/home-img/home_vp_icons_01.svg';
import icon02 from '../../asset/home-img/home_vp_icons_02.svg';
import icon03 from '../../asset/home-img/home_vp_icons_03.svg';
import icon04 from '../../asset/home-img/home_vp_icons_04.svg';

import ImgHero from '../../asset/home-img/home_hero_img.jpg';
import HomeVpImg01 from '../../asset/home-img/home_vp_img_01.jpg';
import HomeVpImg02 from '../../asset/home-img/home_vp_img_02.jpg';
import HomeVpImg03 from '../../asset/home-img/home_vp_img_03.jpg';
import HomeVpImg04 from '../../asset/home-img/home_vp_img_04.jpg';
import AppStore from '../../asset/home-img/app-store.jpg';
import PlayStore from '../../asset/home-img/play-store.jpg';
import HomeAppUcarenet from '../../asset/home-img/home_app_ucarenet+.png';
import HomeCGImg from '../../asset/home-img/home_cg_img.jpg';
import ArticleImg01 from '../../asset/home-img/home_articles_img_01.jpg';
import ArticleImg02 from '../../asset/home-img/home_articles_img_02.jpg';
import ArticleImg03 from '../../asset/home-img/home_articles_img_03.jpg';

import { ScrollPanel } from 'primereact/scrollpanel';
import { classNames } from 'primereact/utils';
import { useFormik } from 'formik';
import './home.scss';
import FormMailing from '../form-mailing-list/form-mailing';

const Home = () => {
  const [datamain, setData] = useState();
    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
  let navigate = useNavigate(); 
  const routeChange = () =>{ 
    let path = `/about-us`; 
    navigate(path);
  }
  const routeChange2 = () =>{ 
      let path = `/contact-us`; 
      navigate(path);
    }

    const routeChangeSearchCG = () =>{ 
        let path = `/search-cg`; 
        navigate(path);
      }

  const callCaregivers = () => {
    var data =    {
        "filterCaregiver": {
            "City": "", 
            "skills": [],
            "languages": [],
            "interests": [],
            "sortBy": "N"
        },
        "offset": 1,
        "pagesize": 1000000
    }        ;
    CaregiverService.create(data)
      .then((response: any) => {
        
      console.log( response.data.result)
      setData(response.data.result.slice(0,20));

      })
      .catch((e: Error) => {
        console.log(e);
      });
  };
  React.useEffect(() => {
        // callCaregivers();
  }, []);

  const url:string = "https://ucarenet-staging.azurewebsites.net/App/Main/images/users/";
  const profileUrl:string = "https://ucarenet-staging.azurewebsites.net/caregiver-profile?cid=4aebfec7-51f0-49c6-927b-a6cd76ae7c7f";


  const displayData = () => {
    return datamain ? (
      (datamain as caregiverResultsList[]).map((data) => {
          return (

            <Row>
                <Col xs={{ span: 1 }} sm={{ span: 1 }} md={{ span: 1 }}
                    lg={{ span: 1 }} xl={{ span: 1 }}>
                </Col>
                <Col xs={{ span: 10 }} sm={{ span:10 }} md={{ span: 10 }}
                    lg={{ span: 10 }} xl={{ span: 10 }}>
                  <div className="card" >
                    <img className="card-img-top" src={url+data.id+'.png'} alt={'user_img_'+data.id}  />
                    <div className="card-body">
                      <h5 className="card-title">{data.firstName} {data.lastName}</h5>
                      <p className="card-text">{data.description}</p>
                      <a href={profileUrl+data.cgId+"&uid="+data.id} className="btn btn-primary">Profile</a>
                    </div>
                  </div>
                </Col>
                <Col xs={{ span: 1 }} sm={{ span: 1 }} md={{ span: 1 }}
                    lg={{ span: 1 }} xl={{ span: 1 }}>
                </Col>
            </Row>
        );
      })
    ) : (
      <h3>No data yet</h3>
    );
  }


  return (
      <div className='home-page'>
          <div className="hero">
              <div className="content-container">
                  <div className="hero-content">
                      <h1>
                          uCarenet enables seniors to age in the comfort of their home
                      </h1>
                      <h2>
                          An online marketplace connecting families with local, trusted caregivers based on their specific needs.
                      </h2>
                      <form className="hero-cta">
                          <input className="cta-search" type="text" name="searchCg" id="searchCg" placeholder="Search by city or postal code"/>
                              <input className="cta-btn" type="submit" name="submitSearchCg" value="Search for caregivers"/>
                      </form>
                      <p>
                          Want to find out how to make the best out of your search? <a className="contextual-cta" href="">Learn more</a>.
                      </p>
                  </div>
                  <div className="hero-img">
                      <img src='https://ucarenet.blob.core.windows.net/ucarenet/UcarenetBlobs/react-website/Images/ImagesHome/home_hero_img.jpg'/>
                  </div>
              </div>
          </div>

          <div className="content-container removed-padding">
              <p>
                  Are you a caregiver looking for a job? <a className="contextual-cta" href="">Search here</a>.
              </p>
          </div>

          <div className="content-container">
              <h1>Qualified caregivers ready to assist</h1>
              <ScrollPanel className='size-scroll'>
                <ul className="tasks-visual-list">
                  <div>
                      <li>
                          <img src='https://ucarenet.blob.core.windows.net/ucarenet/UcarenetBlobs/react-website/Images/ImagesHome/care_icon_Dementia.svg'/>
                              <p className='text-center-alg'>Alzheimer & Dementia Care</p>
                      </li>
                      <li>
                          <img src='https://ucarenet.blob.core.windows.net/ucarenet/UcarenetBlobs/react-website/Images/ImagesHome/care_icon_Bath.svg'/>
                              <p className='text-center-alg'>Bathing & Toileting</p>
                      </li>
                      <li>
                          <img src="https://ucarenet.blob.core.windows.net/ucarenet/UcarenetBlobs/react-website/Images/ImagesHome/care_icon_Post-surgical.svg"/>
                              <p className='text-center-alg'>Post-surgical Care</p>
                      </li>
                      <li>
                          <img src='https://ucarenet.blob.core.windows.net/ucarenet/UcarenetBlobs/react-website/Images/ImagesHome/care_icon_Cancer.svg'/>
                              <p className='text-center-alg'>Cancer Care</p>
                      </li>
                      <li>
                          <img src="https://ucarenet.blob.core.windows.net/ucarenet/UcarenetBlobs/react-website/Images/ImagesHome/care_icon_Dressing.svg"/>
                              <p className='text-center-alg'>Dressing
                              </p>
                      </li>
                      <li>
                          <img src='https://ucarenet.blob.core.windows.net/ucarenet/UcarenetBlobs/react-website/Images/ImagesHome/care_icon_Walking.svg'/>
                              <p className='text-center-alg'>Walking</p>
                      </li>
                      <li>
                          <img src='https://ucarenet.blob.core.windows.net/ucarenet/UcarenetBlobs/react-website/Images/ImagesHome/care_icon_Meal-Prep.svg'/>
                              <p className='text-center-alg'>Meal Prep</p>
                      </li>
                  </div>
              </ul>
              </ScrollPanel>
          </div>

          <div className="vp-section bg-section">
              <div className="content-container">
                  <h2>Why Choose uCarenet?</h2>
                  <div className="vp-set">
                      <div className="vp-content">
                          <img src='https://ucarenet.blob.core.windows.net/ucarenet/UcarenetBlobs/react-website/Images/ImagesHome/home_vp_icons_01.svg'/>
                              <h3 >Affordable Home Care For Seniors.</h3>
                              <p>At uCarenet our mission is to make home care affordable and accessible for all. We help families find reliable caregivers they love, and to receive consistent quality of care. </p>
                      </div>
                      <div className="vp-img">
                          <img src='https://ucarenet.blob.core.windows.net/ucarenet/UcarenetBlobs/react-website/Images/ImagesHome/home_vp_img_01.jpg'/>
                      </div>
                  </div>
                  <div className="vp-set">
                      <div className="vp-content">
                          <img src='https://ucarenet.blob.core.windows.net/ucarenet/UcarenetBlobs/react-website/Images/ImagesHome/home_vp_icons_02.svg'/>
                              <h3>uCarenet offers more control, flexibility & increased personalization.</h3>
                              <p>uCarenet matches you with caregivers based on location, skills, language, and interests. This enables you to personalize a homecare plan that meets your family's needs, budget and lifestyle—making finding caregivers for the elderly easier.</p>
                      </div>
                      <div className="vp-img">
                          <img src='https://ucarenet.blob.core.windows.net/ucarenet/UcarenetBlobs/react-website/Images/ImagesHome/home_vp_img_02.jpg'/>
                      </div>
                  </div>
                  <div className="vp-set">
                      <div className="vp-content">
                          <img src='https://ucarenet.blob.core.windows.net/ucarenet/UcarenetBlobs/react-website/Images/ImagesHome/home_vp_icons_03.svg'/>
                              <h3>No fees, no markups. Hire your caregivers directly & save.</h3>
                              <p>uCarenet provides you the tools to hire caregivers and remotely manage a care plan. This way, our seniors receive the care they need to age in place. By cutting out the middleman and hiring direct families can afford more hours of care, or save thousands each year. </p>
                      </div>
                      <div className="vp-img">
                          <img src='https://ucarenet.blob.core.windows.net/ucarenet/UcarenetBlobs/react-website/Images/ImagesHome/home_vp_img_03.jpg'/>
                      </div>
                  </div>
                  <div className="vp-set">
                      <div className="vp-content">
                          <img src='https://ucarenet.blob.core.windows.net/ucarenet/UcarenetBlobs/react-website/Images/ImagesHome/home_vp_icons_04.svg'/>
                              <h3>Offering safety and peace of mind.</h3>
                              <p>uCarenet matches you with trusted, qualified, insured caregivers with optional <a className="contextual-cta" href="backgroundcheck-cs.html">background checks.</a> Ask your caregiver to provide end of shift summaries and wellness reports on the physical and emotional well-being of your family members so you stay informed.</p>
                      </div>
                      <div className="vp-img">
                          <img src='https://ucarenet.blob.core.windows.net/ucarenet/UcarenetBlobs/react-website/Images/ImagesHome/home_vp_img_04.jpg'/>
                      </div>
                  </div>

              </div>
          </div>

          <div className="content-container testimonial">
              <div className="testimonials-cotainer">
                  <Carousel activeIndex={index} onSelect={handleSelect} interval={null}>
                      <Carousel.Item>
                          <div className="testimonial-content">
                              <img className='img-carousel'/>
                              <p className="testimonial-body text-center-alg">
                              “My client is bed ridden, famous and very vulnerable. I found UCARENET. It came highly recommended by 2 PSW's. We filled out a profile and within a few days, we were able to hire 2 PSW's, both continue to work the needed shifts and care has been excellent.”
                              </p>
                              <p className="testimonail-name text-center-alg">- Sharon F., Toronto ON</p>
                          </div>
                      </Carousel.Item>
                      <Carousel.Item>
                          <div className="testimonial-content">
                              <img className='img-carousel'/>
                              <p className="testimonial-body text-center-alg">
                                  "A second testimonial if we get one that says something about someone."
                              </p>
                              <p className="testimonail-name text-center-alg">- Nice person., Hamilton ON</p>
                          </div>
                      </Carousel.Item>
                      <Carousel.Item>
                          <div className="testimonial-content">
                              <img className='img-carousel'/>
                              <p className="testimonial-body text-center-alg">
                                  "We can add as many testimonials as we wish the pagination will populate automatically. This will be the third one."
                              </p>
                              <p className="testimonail-name text-center-alg">- Someone F., Ottawa ON</p>
                          </div>
                      </Carousel.Item>
                  </Carousel>
              </div>
          </div>

          <div className="home-product-section">
              <div className="content-container">
                  <div className="product-content d-flex flex-wrap ">
                      <h2>Always Connected. Always Informed</h2>
                      <p>The free uCarenet app offers high visibility into your family's home care. With real-time care management software, you will be able to understand the quality of care your family is receiving and won't have to struggle with managing caregiver schedules or payment methods.</p>
                      <p>uCarenet+ provides improved collaboration, insights, and health and wellness data with insured caregivers. With it’s shift summaries and wellness reports you can remotely monitor and manage your parent's home care plan, right from your phone, no matter where you are. Download the app today!</p>
                      <div className="product-downloads">
                          <a href="https://apps.apple.com/ca/app/ucaremap/id1208362294?platform=iphone">
                              <img src='https://ucarenet.blob.core.windows.net/ucarenet/UcarenetBlobs/react-website/Images/ImagesHome/app-store.jpg'/>
                          </a>
                          <a href="https://play.google.com/store/apps/details?id=com.ucarenet.caremap">
                              <img src='https://ucarenet.blob.core.windows.net/ucarenet/UcarenetBlobs/react-website/Images/ImagesHome/play-store.jpg'/>
                          </a>
                      </div>
                  </div>
                  <div className="product-feature-img">
                      <div className="product-background"></div>
                      <img src='https://ucarenet.blob.core.windows.net/ucarenet/UcarenetBlobs/react-website/Images/ImagesHome/home_app_ucarenet+.png' className='in-view'/>
                  </div>
              </div>
          </div>

          <div className="full-size-image-section">
              <img src='https://ucarenet.blob.core.windows.net/ucarenet/UcarenetBlobs/react-website/Images/ImagesHome/home_cg_img.jpg'/>
              <div className="content-container">
                  <h2>Are you caregiver looking for new opportunities?</h2>
                  <div className="cta-info-box">
                      <p>Create an account to be notified of new care requests in your area. Post your searchable profile, display availability, and service offerings. Families are looking for people just like you. </p>
                      <button className="cta-btn">
                          <a href="#signup">Register now</a>
                      </button>
                  </div>
              </div>
          </div>

          <div className="content-container">
              <h2>Resources for your homecare journey</h2>
              <div className="home-resources">
                  <div className="cs-resources">
                      <div className="reources-title">
                         <p>For Families</p>
                         <a className="contextual-cta" href="familyresource">See all</a>

                      </div>
                      <div className="articles">
                          <div className="single-article">
                              <img src='https://ucarenet.blob.core.windows.net/ucarenet/UcarenetBlobs/react-website/Images/ImagesHome/home_articles_img_01.jpg'/>
                                  <div className="article-tags">
                                      <span>Vision & Hearing Loss</span>
                                  </div>
                                  <h3>
                                      <a href="">9 steps guide to hire a caregiver for your senior parents</a>
                                  </h3>
                                  <p>Struggling to find the right caregiver for your loved one? This 9-step guide simplifies the process of finding a good fit for you and your family.</p>
                          </div>
                          <div className="single-article">
                              <img src='https://ucarenet.blob.core.windows.net/ucarenet/UcarenetBlobs/react-website/Images/ImagesHome/home_articles_img_02.jpg'/>
                                  <div className="article-tags">
                                      <span>Vision & Hearing Loss</span>
                                  </div>
                                  <h3>
                                      <a href="">10 tips on communicating with a dementia patient</a>
                                  </h3>
                                  <p>Learn more about the 10 effective dementia communication techniques to help you better communicate with someone living with Dementia.</p>
                          </div>
                      </div>
                  </div>
                  <div className="cg-resources">
                      <div className="reources-title">
                          <p>For Caregivers</p>
                          <a className="contextual-cta" href="cgr-center">See all</a>
                      </div>
                      <div className="single-article">
                          <img src='https://ucarenet.blob.core.windows.net/ucarenet/UcarenetBlobs/react-website/Images/ImagesHome/home_articles_img_03.jpg'/>
                              <div className="article-tags">
                                  <span>Vision & Hearing Loss</span>
                              </div>
                              <h3>
                                  <a href="">How can you be an effective Caregiver?</a>
                              </h3>
                              <p>Being an effective caregiver requires providing care and compassion to seniors. Here are tips on how you can provide effective care as a paid caregiver.</p>
                      </div>
                  </div>
              </div>
          </div>

          <div className="content-container story-section">
              <div className="featured-image">
                  <img src="https://ucarenet.blob.core.windows.net/ucarenet/UcarenetBlobs/react-website/Images/ImagesHome/home_about.jpg"/>
              </div>
              <div>
                  <h2>While looking after my aging mother, I realized how helpless families can feel.</h2>
                  <p>I then decided to equip families with modern technology to make aging more comfortable. Our easy-to-use platforms simplify the burdensome tasks associated with coordinating the care needs for family member, from the sourcing, booking and scheduling of home visits to managing communications with caregivers and staying informed on the care recipient’s current health and wellness. </p>
                  <p>
                      <a className="contextual-cta" href="#">Read more about our story</a>
                  </p>
              </div>
          </div>

          <div className="content-container story-section">
              <div className="featured-image">
                  <img src="https://ucarenet.blob.core.windows.net/ucarenet/UcarenetBlobs/react-website/Images/ImagesHome/ucareRELIEF_remotecaremonitoring.jpg"/>
              </div>
              <div>
                  <h2>Equal Access to all.</h2>
                  <p>UCarenet is committed to improving the delivery of care and to providing equal access to all. We have partnered with Dr. Martin Chasen of William Osler Health System to develop ReLIEF, a virtual palliative care app that focuses on helping palliative patients at home.</p>
                  <p>
                      <a className="contextual-cta" href="#">Read more about uCareRELIEF</a>
                  </p>
              </div>
          </div>

          <FormMailing/>
      </div>
  );
};
export default Home;