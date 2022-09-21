import './article-detail-cg.scss';
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import React ,{ useState, useEffect } from "react";
import { Row, Col, InputGroup, FormControl} from 'react-bootstrap';
import FormMailing from '../../form-mailing-list/form-mailing';
import {useParams, Link} from 'react-router-dom';
import HeroResourceFamily from '../../../asset/family-resource-img/cs-resource-hero.jpg';
import ArticlesRec from '../article-cg.json';
import ImgCS from '../../../asset/family-resource-img/ad-image-cs.jpg';
import CGJob from '../../../asset/cgr-center-img/cg-job-ad.jpg';


const ArticleDetailCg = (props) => {
  props = useParams();
  const [article, setArticle] = useState(ArticlesRec[props.key]);

  const [saveArticle, setSaveArticle] = useState(ArticlesRec.slice(0,0));

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
      <Row className='article-detail-cg'>
        <Col className='header-article col-12'>
          <div className='path-detail content-articles'>
            <Link to='/cgr-center' className='link-family-back'>Caregiver Resources </Link> {'>'} {article.name}
          </div>
        </Col>
        <Col className='col-12'>
          <div className='content-articles'>
            <h2>{article.title}</h2>
          </div>
        </Col>
        <Col className='col-12'>
          <div className='date-article'>
            <p>{article.nickName}</p>
            <p>{article.date}</p>
          </div>
        </Col>
        <Col className='col-12'>
          <div className=''>
            <img src={HeroResourceFamily} className='img-article'/>
          </div>
          <div className='content-topic-bookmark'>
            <div className='article-topic'>{article.name}</div>
            <div className={`bookmark-color  ${saveArticle.some((item) => item.key === article.key) ? ' pi pi-bookmark-fill' : 'pi pi-bookmark'}`} onClick={()=>onSaveArticles(article)} style={{'fontSize': '25px'}}/>
          </div>
        </Col>
        <Col className='col-12'>
          <div className='content-details-first'>
            <div className='first-details'>
              {article.firstInfo}
            </div>
          </div>
        </Col>
        <Col className='col-12'>
          <div className='opinion-content'>
            <div className='opinion-text'>
              {article.opinion}
            </div>
          </div>
        </Col>
        <Col className='col-12'>
          <div className='content-details-last'>
            <div className='text-details-last'>
              {article.lastInfo}
                {/* class for link styly className='source-link'*/}
               {/*<Link to='/familyresource' className='source-link'></Link>*/}
            </div>
          </div>
        </Col>
        <Col className='col-12'>
          <div className='line-space'>

          </div>
        </Col>
        <Col className='col-12'>
          <div className="content-container">
            <h2 className="centre">Recent Articles</h2>
            <div className="resources-articles cs col-12">
              {
                ArticlesRec.map((articles) => {
                  if(articles.name === props.name && articles.key != props.key){
                    return(
                        <div className={`col-lg-4 col-12`}>
                          <div className='col-lg-11 col-12' >
                            <img src={ImgCS}/>
                            <div className='content-topic-bookmark'>
                              <div className='article-topic'>{article.name}</div>
                              <div className={`bookmark-color  ${saveArticle.some((item) => item.key === articles.key) ? ' pi pi-bookmark-fill' : 'pi pi-bookmark'}`} onClick={()=>onSaveArticles(articles)} style={{'fontSize': '25px'}}/>
                            </div>
                            <h3>
                              <Link to={`/article/${articles.name}/${articles.key}/${articles.title}`}>
                                {articles.title}
                              </Link>
                            </h3>
                          </div>
                        </div>
                    )
                  }
                })
              }
            </div>
          </div>
        </Col>
          <Col className='col-12'>
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
          </Col>
        <FormMailing/>
      </Row>
  )
}

export default ArticleDetailCg;
