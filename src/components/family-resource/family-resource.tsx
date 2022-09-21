import 'bootstrap/dist/css/bootstrap.css';
import React, { FC , useState , useEffect} from 'react';
import { Container, Row } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import './family-resource.scss';
import FormMailing from '../form-mailing-list/form-mailing';
import ArticlesRec from './articles.json';

import HeroResourceFamily from '../../asset/family-resource-img/cs-resource-hero.jpg';
import Article01 from '../../asset/family-resource-img/article-cs-01.jpg';
import Article02 from '../../asset/family-resource-img/article-cs-02.jpg';
import Article03 from '../../asset/family-resource-img/article-cs-03.jpg';
import Article04 from '../../asset/family-resource-img/article-cs-04.jpg';
import Article05 from '../../asset/family-resource-img/article-cs-05.jpg';
import Article06 from '../../asset/family-resource-img/article-cs-06.jpg';
import Article07 from '../../asset/family-resource-img/article-cs-07.jpg';
import Article08 from '../../asset/family-resource-img/article-cs-08.jpg';
import Article09 from '../../asset/family-resource-img/article-cs-09.jpg';
import ImgCS from '../../asset/family-resource-img/ad-image-cs.jpg';

interface FamilyResourceProps {}


const FamilyResource: FC<FamilyResourceProps> = () => {

    let navigate = useNavigate(); 
    const routeChange = () =>{ 
        let path = `/familyresourcearticles`; 
        navigate(path);
      }
    const [articleRecent, setArticle] = useState([]);
    useEffect(() => {
        getArticles();
    }, [])

    const getArticles = async () => {
        const res= ArticlesRec;
        setArticle(res);
    }

    let articles = [
        { id: 1, key: 1, img: 'article-cs-01.jpg', name: 'Hiring Tips', title: '9 steps guide to hire a caregiver for your senior parents', x: 'NICK', date: 'JULY 30, 2020', save: false, firstInfo : 'While welcoming the recent announcement of a commission into long-term care, the Alzheimer Society of Ontario is urging swift progress on concerns long highlighted by residents, staff, care partners, and families. “We don’t need to wait for another report to start providing better care to long-term care residents”, says Cathy Barrick, CEO of the Alzheimer Society of Ontario.  “COVID-19 did not create the problems we’re seeing now; it just drew attention to what has long been an overstretched system.”', opinion: 'Barrick noted that nearly 90% of long-term care residents have some form of cognitive impairment, including over two-thirds who live with dementia. These residents have unique care needs—needs which are not being met in far too many homes.', lastInfo: 'Instead, under-resourced homes have resorted to the dehumanising use of restraints and potentially inappropriate use of medication: residents living with dementia are three times as likely to be subjected to the daily use of physical restraints, and twice as likely to be prescribed antipsychotics without a diagnosis of psychosis.  These issues long predate the current pandemic. “Dementia and long-term care are inseparable”, says Barrick.  “The voices of residents, care partners, and families impacted by dementia must be given a prominent voice by the commission.” SOURCE', source: 'Alzheimer Society of Ontario'},
        { id: 2, key: 2, img: 'article-cs-02.jpg', name: 'Alzheimers & Dementia', title: '10 tips on communicating with a dementia patient'},
        { id: 3, key: 3, img: 'article-cs-03.jpg', name: 'Long-Term Care', title: 'How to deal with a parent who repeatedly says ‘I want to go home!\''},
        { id: 3, key: 4, img: 'article-cs-04.jpg', name: 'Long-Term Care', title: 'Residents, care partners, families rightly expect action on long-term care'},
        { id: 4, key: 5, img: 'article-cs-05.jpg', name: 'Family Caregiver Benefits', title: 'Canadian Family Caregiver Benefits for Elderly Loved Ones'},
        { id: 3, key: 6, img: 'article-cs-06.jpg', name: 'Long-Term Care', title: 'The Brampton region is home to a fast-growing number of clinical trials and tests, centred on...'},
        { id: 5, key: 7, img: 'article-cs-07.jpg', name: 'In-Home Senior Care', title: '6 Tips for talking to your parents about getting them help as they age'},
        { id: 5, key: 8, img: 'article-cs-08.jpg', name: 'In-Home Senior Care', title: '10 Early Warning Signs Your Parents May Need Home Care'},
        { id: 6, key: 9, img: 'article-cs-09.jpg', name: 'Healthy Aging', title: '10 Early Warning Signs Your Parents May Need Home Care'},
    ]
    let popularTopics = [
        { id: 0 , name: 'all topics'},
        { id: 1 , name: 'Hiring tips'},
        { id: 2 , name: 'Alzheimers & dementia'},
        { id: 3 , name: 'Long-term care'},
        { id: 4 , name: 'Family caregiver benefits'},
        { id: 5 , name: 'In-home senior care'},
        { id: 6 , name: 'Healthy aging'},
    ]
    const [selectArticle, setSelectArticle] = useState({ id: 0 , name: 'all topics'})
    const [saveArticle, setSaveArticle] = useState(articleRecent.slice(0,0));

    const onArticleChange = (e) => {
        setSelectArticle(e);
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

    return (
        <div className='family-resource'>
            <div className="hero find-cg">
                <div className="content-container">
                    <div className="hero-content">
                        <p className="resources-intro-title">Welcome to our</p>
                        <h1>
                            Family Resource Center
                        </h1>

                        <h2>
                            Getting help for you and your family members can be overwhelming. To help get you started, we’ve compiled some of our best articles on many popular topics to help you navigate your circumstances, whatever they may be.
                        </h2>
                    </div>
                    <div className="hero-img">
                        <img src={HeroResourceFamily}/>
                    </div>
                </div>
            </div>

            <div className="content-container topics cs">
                <h2 className="centre">Popular Topics</h2>
                <div className="controller">
                    <ul>
                        {
                            popularTopics.map((topic) => {
                                return(
                                    <li onClick={()=>onArticleChange(topic)} className={`topic-btn ${selectArticle.id === topic.id  ? 'selected' : ''}`}>{topic.name}</li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>

            <div className="content-container">
                <h2 className="centre">Recent Articles</h2>
                <div className="resources-articles cs col-12">
                    {
                        articleRecent.map((articles) => {
                            return(
                                <div key={articles.key} className={`col-lg-4 col-12 ${(selectArticle.id === articles.id || selectArticle.id === 0)  ? '' : 'd-none'}`}>
                                    <div className='col-lg-11 col-12' >
                                        <img src={Article01}/>
                                        <div className={`article-topic col-11 ${selectArticle.id === articles.id  ? 'selected' : ''}`}>{articles.name}</div>
                                        <div className={`col-1 align-self-end bookmark-color  ${saveArticle.some((item) => item.key === articles.key) ? ' pi pi-bookmark-fill' : 'pi pi-bookmark'}`} style={{'fontSize': '25px'}}  onClick={()=>onSaveArticles(articles)}></div>
                                        <h3>
                                            <Link to={`/article-family/${articles.name}/${articles.key}/${articles.title}`}>
                                                {articles.title}
                                            </Link>
                                        </h3>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                {articleRecent.length > 9 && (
                    <div className='resources-articles'>
                        <button className="cta-btn">More Articles</button>
                    </div>
                )}
            </div>

            <div className="bg-section">
                <div className="content-container info-section">
                    <div className="mobile-order-2">
                        <h2>
                            uCarenet's Home Care Booking Platform Makes Affordable Home Care Simple.
                        </h2>
                        <p>Quickly find available caregivers in your area. Filter your search based on needs like time of day needed, skills required, length of shift & more!</p>
                        <button className="cta-btn">
                            <a href="#signup">Search for a caregiver</a>
                        </button>
                    </div>
                    <div className="mobile-order-1">
                        <img src={ImgCS}/>
                    </div>
                </div>

            </div>

            <FormMailing/>
        </div>
    );
};

export default FamilyResource;