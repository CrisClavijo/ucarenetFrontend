import React, { FC } from 'react';
import { Row, Container} from 'react-bootstrap';
import { useNavigate, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import '../family-resource/family-resource.scss';
import ArrowLeft from '../../asset/arrow-left.svg';
interface FamilyResourceArticlesProps {}

const FamilyResourceArticles: FC<FamilyResourceArticlesProps> = () => {

    let navigate = useNavigate(); 
    const routeChange = () =>{ 
        let path = `/familyresource`; 
        navigate(path);
      }
    return (
    <Container fluid>
        <Row>
            <div className="main-wrap">
                <div className="container">
                <div className="back-btn">
                <Link to='/familyresource'><img src={ArrowLeft} alt="<"></img><span>Return to resources home</span></Link>
                </div>
                <div className="heading-sec">
                    <h1>Article Title</h1>
                    <p>Lorem ipsum <br />dolor <br />sit amet <br />consectetur adipisicing</p>
                </div>

                <div className="single-article">
                    <div className="row justify-content-center">
                    <div className="col-xl-9">
                        <div className="single-article-inner border-bottom">
                            <div className="single-article-fig">
                            <img src="https://via.placeholder.com/966x350" alt="PIC"></img>
                            </div>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt molestias pariatur voluptas est? Laboriosam accusamus voluptates, tenetur eveniet quia. Molestiae dolore consequatur, ipsum, laborum amet quisquam. Eum sint quia consequatur.</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing, elit. Expedita dolorum nemo odio vel assumenda natus libero eum dignissimos tempore aliquam sunt veniam harum rerum, neque corrupti fuga. Ut, magnam dignissimos. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem fugiat officiis nisi eveniet suscipit molestias praesentium dolor id! Sed vitae illum quod quibusdam voluptatibus! Ut beatae iure culpa temporibus delectus.</p>
                            <h4><blockquote>
                            <q>Lorem, ipsum dolor sit amet consectetur adipisicing, elit. Culpa aut ex possimus distinctio hic, magni dolorem excepturi fuga magnam quod ipsam ea nam dolore, quam sed deserunt odit maxime aperiam.</q>
                            </blockquote></h4>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt molestias pariatur voluptas est? Laboriosam accusamus voluptates, tenetur eveniet quia. Molestiae dolore consequatur, ipsum, laborum amet quisquam. Eum sint quia consequatur.</p>
                            <div className="content-video">
                            <div className="row justify-content-center">
                                <div className="col-xl-5 col-lg-7">
                                <iframe width="389" height="220px" src="https://www.youtube.com/embed/K4TOrB7at0Y" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
                                </div>
                            </div>
                            </div>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt molestias pariatur voluptas est? Laboriosam accusamus voluptates, tenetur eveniet quia. Molestiae dolore consequatur, ipsum, laborum amet quisquam. Eum sint quia consequatur.</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing, elit. Expedita dolorum nemo odio vel assumenda natus libero eum dignissimos tempore aliquam sunt veniam harum rerum, neque corrupti fuga. Ut, magnam dignissimos. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem fugiat officiis nisi eveniet suscipit molestias praesentium dolor id! Sed vitae illum quod quibusdam voluptatibus! Ut beatae iure culpa temporibus delectus.</p>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="tools-outer">
                    <div className="row justify-content-center">
                        <div className="col-xl-8 col-lg-10">
                        <h2>Helpful Tools</h2>
                        <div className="row">
                            <div className="col-md-6">
                            <div className="tools-fig"><img src="https://via.placeholder.com/416x250" alt="PIC"></img></div>
                            </div>
                            <div className="col-md-6">
                            <div className="tools-fig"><img src="https://via.placeholder.com/416x250" alt="PIC"></img></div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="image-with-text-outer">
                    <div className="row">
                        <div className="col-md-6">
                        <div className="image-with-text">
                            <h3>Lorem, ipsum dolor sit amet, consectetur, ipsum dolor sit amet,</h3>
                            <p>Lorem ipsum dolor, sit amet, consectetur adipisicing elit. Delectus suscipit molestias nisi placeat quibusdam totam cumque dolorum distinctio veritatis? Autem aliquam doloribus id nam magnam, aut non beatae ab commodi.</p>
                            <a href="#" className="btn btn-danger">Register Cta</a>
                        </div>
                        </div>
                        <div className="col-md-6">
                        <div className="image-with-fig">
                            <img src="https://via.placeholder.com/546x266" alt="PIC"></img>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="newsletter-outer">
                    <div className="row justify-content-center">
                        <div className="col-lg-7">
                        <div className="newsletter-inner">
                            <h4>Sign up for our newsletter title</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci quis deleniti, sit nihil. Quae incidunt suscipit, aspernatur. Deserunt, eum sunt consequatur doloremque, doloribus, sit non quos vero laborum odio a?</p>
                            <div className="row justify-content-center">
                            <div className="col-md-10 col-xl-9 col-lg-10">
                                <form action="">
                                <div className="input-group input-group-lg">
                                    <input type="email" className="form-control" placeholder="Email"></input>
                                    <button className="btn btn-danger" type="submit" id="button-addon2">Submit</button>
                                </div>
                                </form>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </Row>
    </Container>
    );
};

export default FamilyResourceArticles;