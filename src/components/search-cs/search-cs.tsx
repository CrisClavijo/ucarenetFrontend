import 'bootstrap/dist/css/bootstrap.css';
import React, { FC, useState } from 'react';
import { Row } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { MultiSelect } from 'primereact/multiselect';
import { Dropdown  } from 'primereact/dropdown';

interface SearchCSProps {}


const SearchCS: FC<SearchCSProps> = () => {

const [selectedCities1, setSelectedCities1] = useState(null);
  const cities = [
    { name: '5km', code: '5' },
    { name: '10km', code: '10' },
    { name: '20km', code: '20' },
    { name: '50km', code: '50' },
    { name: '100km', code: '10' }
];


const [requiredHours1, setRequiredHours1] = useState(null);
const requiredHours = [
  { name: '< 4 hours', code: '4' },
  { name: '4-10 hours', code: '410' },
  { name: '11-15 hours', code: '1115' },
  { name: '15-20 hours', code: '1520' },
  { name: '> 20 hours ', code: '20' }
];

const [typeOfCare1, setTypeOfCare1] = useState(null);
const typeOfCares = [
  { name: 'Cancer Care', code: 'cc' },
  { name: 'Elder Care', code: 'ec' },
  { name: 'Dementia Care', code: 'dc' },
  { name: 'Foster Independence', code: 'fi' }
];


const [tasks1, setTasks1] = useState(null);
const tasks = [
  { name: 'Excersize', code: 'ee' },
  { name: 'Encouragement', code: 'ec' },
  { name: 'Dressing', code: 'dc' },
  { name: 'Hygine and Grooming', code: 'gh' }
];

const [sortBy1, setSortBy1] = useState(null);
const sortBy = [
  { name: 'Date Posted', code: 'dp' },
  { name: 'Hours Required', code: 'hr' },
  { name: 'Closest Job', code: 'cj' },
  { name: 'Recently Active', code: 'ra' }
];
  let navigate = useNavigate(); 
    const routeChange = () =>{ 
        let path = `/search-cs`; 
        navigate(path);
      }

    return (
    <Row>
        <div className="main-wrap">
        <div className="container">
        <div className="search-result">
        <div className="search-form">
            <label>Find a job</label>
            <div className="search-field">
              <input type="text" placeholder="Location"></input>
              <input type="submit" value="submit"></input>
            </div>
          </div>
          <div className="search-filter-outer">
            <div className="search-filter">
              <Link to="#">Best Match</Link>
              <form action="">
                <div className="filter-dropdown">            
                   <MultiSelect className="filter-drop" value={selectedCities1} options={cities} onChange={(e) => setSelectedCities1(e.value)} optionLabel="name" placeholder="Distance" maxSelectedLabels={1} />                 
                </div>
                <div className="filter-dropdown">
                  <MultiSelect className="filter-drop" value={requiredHours1} options={requiredHours} onChange={(e) => setRequiredHours1(e.value)} optionLabel="name" placeholder="Required Hours" maxSelectedLabels={1} />
                </div>
                <div className="filter-dropdown">
                <MultiSelect className="filter-drop" value={typeOfCare1} options={typeOfCares} onChange={(e) => setTypeOfCare1(e.value)} optionLabel="name" placeholder="Type of Care" maxSelectedLabels={1} />                 
                </div>
                <div className="filter-dropdown">
                <MultiSelect className="filter-drop" value={tasks1} options={tasks} onChange={(e) => setTasks1(e.value)} optionLabel="name" placeholder="Tasks" maxSelectedLabels={1} />               
                </div>
                <button type="submit">Apply Filters</button>
              </form>
            </div>
            <p>Showing results based on your <strong>selected filters</strong><button>Clear all</button></p>
          </div>
          <div className="search-sort">
            <p>100+ jobs in Toronto</p>
            <div className="btn-group">
              
              <Dropdown className="filter-drop" value={sortBy1} options={sortBy} onChange={(e) => setSortBy1(e.value)} optionLabel="name" placeholder="Sort By" />                         
            </div>

          </div>
          <div className="search-result-sec">
            <div className="search-result-card">
              <div className="row">
                <div className="col-md-3">
                  <div className="search-result-fig">
                    <div className="result-fig"><img width="200" src={require("../../asset/search/gracel.png")} alt="PIC"></img></div>
                    <div className="d-none d-md-block">
                    <Link to="/search-csp" className="d-inline-flex text-danger" >View Job</Link><br></br>
                      <Link to="#" className="btn btn-danger" >CONTACT</Link>
                    </div>
                  </div>
                </div>
                <div className="col-md-9">
                  <div className="search-result-content">
                    <div className="search-result-info">
                      <div className="row">
                        <div className="col-md-6">
                          <h2>Grace L. <span>Toronto M9W</span></h2>
                          <p>Care for: My Mom <br></br><em>3 hours</em></p>
                        </div>
                        <div className="col-md-6">
                          <div className="result-rate">Pay Rate Unavailable</div>
                        </div>
                      </div>
                    </div>
                    <div className="search-result-desc">
                      <h4>Help with mom's post-surgery</h4>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing, elit. Dicta quam corrupti natus, error odit nulla vero voluptas atque sequi ex mollitia blanditiis reiciendis laboriosam placeat nam rerum laborum velit quibusdam!</p>
                    </div>
                    <div className="d-block d-md-none">
                    <Link to="/search-csp" className="d-inline-flex text-danger" >View Job</Link><br></br>
                      <Link to="#" className="btn btn-danger" >CONTACT</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="search-result-card">
              <div className="row">
                <div className="col-md-3">
                  <div className="search-result-fig">
                    <div className="result-fig"><img width="200" src={require("../../asset/search/gracel.png")} alt="PIC"></img></div>
                    <div className="d-none d-md-block">
                      <Link to="/search-csp" className="d-inline-flex text-danger" >View Job</Link><br></br>
                      <Link to="#" className="btn btn-danger" >CONTACT</Link>
                    </div>
                  </div>
                </div>
                <div className="col-md-9">
                  <div className="search-result-content">
                    <div className="search-result-info">
                      <div className="row">
                        <div className="col-md-6">
                          <h2>Grace L. <span>Toronto M9W</span></h2>
                          <p>Care for: My Mom <br></br><em>3 hours</em></p>
                        </div>
                        <div className="col-md-6">
                          <div className="result-rate">$25/hr</div>
                        </div>
                      </div>
                    </div>
                    <div className="search-result-desc">
                      <h4>Help with mom's post-surgery</h4>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing, elit. Dicta quam corrupti natus, error odit nulla vero voluptas atque sequi ex mollitia blanditiis reiciendis laboriosam placeat nam rerum laborum velit quibusdam!</p>
                    </div>
                    <div className="d-block d-md-none">
                      <Link to="/search-csp" className="d-inline-flex text-danger" >View Job</Link><br></br>
                      <Link to="#" className="btn btn-danger" >CONTACT</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="search-result-card">
              <div className="row">
                <div className="col-md-3">
                  <div className="search-result-fig">
                    <div className="result-fig"><img width="200" src={require("../../asset/search/gracel.png")} alt="PIC"></img></div>
                    <div className="d-none d-md-block">
                      <Link to="/search-csp" className="d-inline-flex text-danger" >View Job</Link><br></br>
                      <Link to="#" className="btn btn-danger" >CONTACT</Link>
                    </div>
                  </div>
                </div>
                <div className="col-md-9">
                  <div className="search-result-content">
                    <div className="search-result-info">
                      <div className="row">
                        <div className="col-md-6">
                          <h2>Grace L. <span>Toronto M9W</span></h2>
                          <p>Care for: My Mom <br></br><em>3 hours</em></p>
                        </div>
                        <div className="col-md-6">
                          <div className="result-rate">$25/hr</div>
                        </div>
                      </div>
                    </div>
                    <div className="search-result-desc">
                      <h4>Help with mom's post-surgery</h4>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing, elit. Dicta quam corrupti natus, error odit nulla vero voluptas atque sequi ex mollitia blanditiis reiciendis laboriosam placeat nam rerum laborum velit quibusdam!</p>
                    </div>
                    <div className="d-block d-md-none">
                      <Link to="/search-csp" className="d-inline-flex text-danger">View Job</Link><br></br>
                      <Link to="#" className="btn btn-danger">CONTACT</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <ul className="search-result-pagination">
              <li className="active"><Link to="#">1</Link></li>
              <li><Link to="#">2</Link></li>
              <li><Link to="#">3</Link></li>
              <li><Link to="#">4</Link></li>
              <li><span>...</span></li>
              <li><Link to="#">Next page</Link></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="image-with-text-wrap">
        <div className="container">
          <div className="image-with-text-outer">
            <div className="row">
              <div className="col-md-6">
                <div className="image-with-text">
                  <h3>Lorem, ipsum dolor sit amet, consectetur, ipsum dolor sit amet,</h3>
                  <p>Lorem ipsum dolor, sit amet, consectetur adipisicing elit. Delectus suscipit molestias nisi placeat quibusdam totam cumque dolorum distinctio veritatis? Autem aliquam doloribus id nam magnam, aut non beatae ab commodi.</p>
                  <Link to="#" className="btn btn-danger">Register Cta</Link>
                </div>
              </div>
              <div className="col-md-6">
                <div className="image-with-fig">
                  <img src="https://via.placeholder.com/546x266" alt="PIC"></img>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
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
    );
};

export default SearchCS;