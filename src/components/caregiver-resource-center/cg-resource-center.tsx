import 'bootstrap/dist/css/bootstrap.css';
import React, { useState } from 'react';
import './cg-resource-center.scss';
import FormMailing from '../form-mailing-list/form-mailing';
import { Link, useNavigate } from 'react-router-dom';
import { ScrollPanel } from 'primereact/scrollpanel';
import CSResourceHero from '../../asset/cgr-center-img/cs-resource-hero.jpg';
import Article01 from '../../asset/cgr-center-img/article-cs-01.jpg';
import Article02 from '../../asset/cgr-center-img/article-cs-02.jpg';
import Article03 from '../../asset/cgr-center-img/article-cs-03.jpg';
import DementianProgram from '../../asset/cgr-center-img/dementia-program-teaser.jpg';
import BCTeaser from '../../asset/cgr-center-img/bc-teaser.png';
import CGJob from '../../asset/cgr-center-img/cg-job-ad.jpg';
import ArticlesRecCG from './article-cg.json';


const CgResourceCenter = () => { 
    let popularTopics = [
        { id: 0 , name: 'all topics'},
        { id: 1 , name: 'client management'},
        { id: 2 , name: 'caregiver burnout'},
        { id: 3 , name: 'interviewing tips'},
        { id: 4 , name: 'invoices & taxes'},
        { id: 5 , name: 'alzheimers & dementia'},
    ]
    const [selectTopic, setSelectTopic] = useState({ id: 0 , name: 'all topics'})
    const [saveArticle, setSaveArticle] = useState(ArticlesRecCG.slice(0,0));

    const onTopicChange = (e) => {
        setSelectTopic(e);
    }
    const onSaveArticles = (e) => {
        let _selectedSave = [...saveArticle];
        const index = _selectedSave.findIndex(item => item.key === e.key);
        if(index>=0){
            _selectedSave.splice(index, 1);

        }else{
            _selectedSave.push(e);
        }
        setSaveArticle(_selectedSave);
    }

  return(
      <div className='cg-resource-center'>
          <div className="hero cg">
              <div className="content-container">
                  <div className="hero-content">
                      <p className="resources-intro-title">Welcome to our</p>
                      <h1>
                          Caregiver Resource Center
                      </h1>

                      <h2>
                          Caregiving is one thing, but being your own boss requires a whole other set of skills. We’ve compiled some of our best resources to help you make the most of your entrepreneurship so you can focus on providing the best care for your care clients.
                      </h2>
                  </div>
                  <div className="hero-img">
                      <img src={CSResourceHero}/>
                  </div>
              </div>
          </div>

          <div className="content-container topics cg cs">
              <h2 className="centre">Popular Topics</h2>
                  <div className="controller">
                      <ul>
                          {popularTopics.map((topics) => {
                              return(
                                  <li onClick={()=>onTopicChange(topics)} className={`topic-btn ${selectTopic.id === topics.id  ? 'selected' : ''}`}>{topics.name}</li>
                              )
                          })}
                      </ul>
                  </div>
          </div>

          <div className="content-container">
              <h2 className="centre">Recent Articles</h2>
              <div className="resources-articles cg">
                  {
                      ArticlesRecCG.map((articles) => {
                          return(
                              <div key={articles.key} className={`col-lg-4 col-12 ${(selectTopic.id === articles.id || selectTopic.id === 0)  ? '' : 'd-none'}`}>
                                  <article className='col-lg-11 col-12' >
                                      <img src={Article03}/>
                                      <div className={`article-topic col-11 ${selectTopic.id === articles.id  ? 'selected' : ''}`}>{articles.name}</div>
                                      <div className={`col-1 align-self-end bookmark-color  ${saveArticle.some((item) => item.key === articles.key) ? ' pi pi-bookmark-fill' : 'pi pi-bookmark'}`} style={{'fontSize': '25px'}}  onClick={()=>onSaveArticles(articles)}></div>
                                      <h3>
                                          <Link to={`/article-cg/${articles.name}/${articles.key}/${articles.title}`}>
                                              {articles.title}
                                          </Link>
                                      </h3>
                                  </article>
                              </div>
                          )
                      })
                  }
              </div>

          </div>

          <div className="light">
              <div className="content-container info-section">
                  <div className="">
                      <img src={DementianProgram}/>
                  </div>
                  <div>
                      <h2>uCarenet Partners with McMaster University to Empower Healthcare Worker Education</h2>
                      <p>uCarenet is committed to empowering education and helping home healthcare professionals to get the training they need to advance their knowledge and standout from the crowd. That’s why uCarenet has partnered with MacHealth.</p>
                      <p>The Dementia Foundation course from McMaster University is an online course open to anyone who enjoys working in the caring field. Upon successful completion of this online course, you will receive a certificate and you will be able to add it to your uCarenet profile, LinkedIn, and even on your resume. Don't miss this golden opportunity to learn new skills and stand out from the crowd!</p>
                      <div>
                          <button className="cta-btn">
                              <a href="#">Get Started online today</a>
                          </button>
                      </div>
                  </div>

              </div>
          </div>

          <div className="cg-bg light">
              <div className="content-container info-section">
                  <div>
                      <h2>Show care clients that you’re honest & trustworthy.</h2>
                      <p>Get a background check online, then display your trust badge in search results and on your profile to increase care requests.</p>
                      <div>
                          <button className="cta-btn">
                              <a href="#">Get Started online today</a>
                          </button>
                          <button className="cta-secondary-btn">
                              <a href="#">Learn More</a>
                          </button>
                      </div>
                  </div>
                  <div className="">
                      <img src={BCTeaser}/>
                  </div>
              </div>
          </div>

          <FormMailing/>

          <div className="bg-section">
              <div className="content-container info-section">
                  <div className="mobile-order-2">
                      <h2 className="cg-no-bg">
                          uCarenet's Home Care Booking Platform Makes Sourcing Home Care Jobs Simple.
                      </h2>
                      <p>Quickly find caregiving jobs in your area. Filter your search based on needs like time of day needed, skills required, length of shift & more!</p>
                      <button className="cta-btn">
                          <a href="#signup">Search for a job</a>
                      </button>
                  </div>
                  <div className="mobile-order-1">
                      <img src={CGJob}/>
                  </div>
              </div>

          </div>
      </div>
  )
}

export default CgResourceCenter;