import {Suspense, lazy} from 'react';
import {faPython, faJava, faHtml5, faCss3, faReact, faAngular, faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { SpinnerDiamond} from 'spinners-react';
import py from '../images/pylogo.png'
import tba from '../images/tba.png'
import rIcon from '../images/react_icon.png'
import libIcon from '../images/liberty_thumbnail.png'


// lazy imports
const Slider = lazy(() => import('../components/slider'));
const Panel = lazy(() => import('../components/card'));

const Home = () => {
    return (
        <div class="home-page">

            <div class="home-body">

                <h1 class="home-header">Welcome to Me!</h1>

                <div class="bio-slide-container">
                    <div class="welcome-container">
                        <article class="short-bio">
                            <p>
                                Hello all, my name is Gabe Aloi!
                                I am a <span class="emphasis">Computer Science</span> undergrad from Indiana University
                                in Bloomington who is interested in <span class="emphasis">Full-Stack</span> and <span class="emphasis">Front-end</span> development
                            </p>
                        </article>
                    </div>

                    <div class="slide-container">
                        <figure class="slide">
                            <a href="./profile">
                                <Suspense fallback={<div id='img-spinner'><SpinnerDiamond color='#000080' size={.015 * window.innerWidth}/></div>}>
                                    <Slider></Slider>
                                </Suspense>
                            </a>
                            <figcaption>Take a look at some of my travel pictures</figcaption>
                        </figure>
                    </div>

                </div>

                <section class="bio-footer">
                    If you want to learn more about me, check out the <a href="/profile">About</a> page. Interested in my coding experience and portfolio? <a href="#spacer">Scroll down</a>!
                </section>

                <div class="banner">

                    <div class="arr-container">
                        <a href="#spacer" class="down">
                        </a>
                    </div>

                </div>

                <div id="spacer"></div>

                <div class="cards-body" id="portfolio">
                    <h2>Experience and Code</h2>
                    <small>This one is in the works still :)</small>

                    <section class="cards-container">
                        
                           
                                <div class="item1">
                                    <Suspense fallback={<div id='img-spinner'><SpinnerDiamond color='#000080' size={.015 * window.innerWidth}/></div>}>
                                        <Panel
                                            imgname={libIcon}
                                            title="Liberty Mutual Work Experience"
                                            body = "I joined Liberty's Tech&#8211;Start Internship program the Summer of 2022 where I worked closely with Senior Software Engineers and Developers in maintaining, updating, and creating new systems to enhance their commercial insurance systems. I used Angular to update front-end UIs and connected and tested API endpoints to ensure backend compatibility within legacy code."
                                            footer = "See the link below or click on the card to see more information about my internship program here."
                                            btnLink = "https://jobs.libertymutualgroup.com/careers/undergraduate-internships/technology/">
                                        </Panel>
                                    </Suspense>
                                </div>
                                <div class="item2">
                                    <Suspense fallback={<div id='img-spinner'><SpinnerDiamond color='#000080' size={.015 * window.innerWidth}/></div>}>
                                        <Panel
                                            imgname={rIcon}
                                            title="React OpenSource"
                                            body= "I started using React at Indiana University and caught on quick, and after some more practice and a few projects later&mdash;like the one you see now!&mdash;I fell in love with the framework. Additionally, I worked in Agile, full&#8211;stack development in the construction of a faux health insurance website at Indiana University."
                                            footer = "Clicking the card or link will bring you to the repo for the code of this website which contains more details about the packages used in the construction."
                                            btnLink= "https://github.com/gabealoi/Personal-Website"
                                        >
                                        </Panel>
                                    </Suspense>
                                </div>
                                <div class="item3">
                                <Suspense fallback={<div id='img-spinner'><SpinnerDiamond color='#000080' size={.015 * window.innerWidth}/></div>}>
                                        <Panel
                                            imgname={py}
                                            title="Python Excel Scripting"
                                            body="This repo is young with an interest in manipulating Excel sheets and workbooks with Python scripts. Practice doing excel operations, modifying cells, and flipping spreadsheets is available here. Also, this interest arose when helping my father to automate doing 'V&#8211;Lookups' and some of the other finances that are managed within his company."
                                            footer="Looking at the references here will bring you to a small repo with some Python&dash;Excel practice and implementation"
                                            btnLink="https://github.com/gabealoi/Python-Scripting"
                                        >
                                        </Panel>
                                    </Suspense>
                                </div>
                            
                       
                                <div class="item4">
                                <Suspense fallback={<div id='img-spinner'><SpinnerDiamond color='#000080' size={.015 * window.innerWidth}/></div>}>

                                        <Panel
                                            imgname={tba}
                                        >
                                        </Panel>
                                    </Suspense>
                                </div>
                                <div class="item5">
                                    <Suspense>
                                        <Panel
                                            imgname={tba}
                                        >
                                        </Panel>
                                    </Suspense>
                                </div>
                                <div class="item6">
                                    <Suspense>
                                        <Panel
                                            imgname={tba}
                                        >
                                        </Panel>
                                    </Suspense>
                                </div>
                        
                        
                    </section>

                    <section class="langs">
                        
                            <FontAwesomeIcon icon={faPython} />
                            <FontAwesomeIcon icon={faJava} />
                            <FontAwesomeIcon icon={faHtml5} />
                            <FontAwesomeIcon icon={faCss3} />
                            <FontAwesomeIcon icon={faReact} />
                            <FontAwesomeIcon icon={faAngular} />
                            <FontAwesomeIcon icon={faGithub} />
                        
                    </section>
                </div>

            </div>

            

        </div>
    )
}


export default Home;