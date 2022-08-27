import Panel from "../components/card";
import {faChevronDown} from '@fortawesome/free-solid-svg-icons';
import {faPython, faJava, faHtml5, faCss3, faReact, faAngular, faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Slider from '../components/slider';



const Home = () => {

    return (
        <div class="home-page">

            <div class="home-body">

                <h1 class="home-header">Welcome to Me!</h1>

                <div class="bio-slide-container">
                    <article class="short-bio" id="item1">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim sed faucibus turpis in eu mi bibendum neque egestas. Phasellus faucibus scelerisque eleifend donec pretium. Integer quis auctor elit sed vulputate mi. Faucibus interdum posuere lorem ipsum dolor sit amet consectetur adipiscing. Metus dictum at tempor commodo. Ut lectus arcu bibendum at varius vel. Arcu odio ut sem nulla pharetra diam sit amet. Sed egestas egestas fringilla phasellus. Convallis posuere morbi leo urna molestie at elementum. A arcu cursus vitae congue mauris rhoncus aenean vel. Luctus venenatis lectus magna fringilla urna. Curabitur vitae nunc sed velit. Proin libero nunc consequat interdum varius sit. In fermentum posuere urna nec tincidunt praesent semper.
                        Leo a diam sollicitudin tempor id. Dapibus ultrices in iaculis nunc sed augue. Dui nunc mattis enim ut. Lobortis feugiat vivamus at augue eget arcu dictum varius duis. Aliquam faucibus purus in massa tempor nec feugiat nisl. Nunc pulvinar sapien et ligula ullamcorper malesuada proin libero nunc. Purus in mollis nunc sed id semper risus. Placerat in egestas erat imperdiet sed euismod nisi porta lorem. Auctor augue mauris augue neque gravida in fermentum et sollicitudin. Enim nulla aliquet porttitor lacus luctus accumsan tortor.
                    </article>

                    <figure class="slide" id="item2">
                        <a href="./profile">
                            <Slider></Slider>
                        </a>
                        <figcaption>Take a look at some of my travel pictures</figcaption>
                    </figure>
                </div>

                <div class="banner">

                    <div class="arr-container">
                        <a href="#portfolio" class="down">
                            <i className="down-arrow">
                                <FontAwesomeIcon icon={faChevronDown} />
                            </i>
                        </a>
                    </div>

                </div>

                <div class="cards-body" id="portfolio">
                    <h2>Experience and Code</h2>
                    <small>This one is in the works still :)</small>

                    <section class="cards-container">
                        
                           
                                <div class="item1">
                                    <Panel 
                                        imgname="data:image/png;base64,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"
                                        title="Liberty Mutual Work Experience" 
                                        body = "I joined Liberty's Tech&#8211;Start Internship program the Summer of 2022 where I worked closely with Senior Software Engineers and Developers in maintaining, updating, and creating new systems to enhance their commercial insurance systems. I used Angular to update front&dash;end UIs and connected and tested API endpoints to ensure backend compatibility within legacy code."
                                        footer = "See the link below or click on the card to see more information about my internship program here." 
                                        btnLink = "https://jobs.libertymutualgroup.com/careers/undergraduate-internships/technology/">
                                    </Panel>
                                </div>
                                <div class="item2">
                                    <Panel
                                        imgname='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png'
                                        title="React OpenSource"
                                        body= "I started using React at Indiana University and caught on quick, and after some more practice and a few projects later&mdash;like the one you see now!&mdash;I fell in love with the framework. Additionally, I worked in Agile, full&#8211;stack development in the construction of a faux health insurance website at Indiana University."
                                        footer = "Clicking the card or link will bring you to the repo for the code of this website which contains more details about the packages used in the construction."
                                        btnLink= "https://github.com/gabealoi/Personal-Website"
                                    >

                                    </Panel>
                                </div>
                                <div class="item3">
                                    <Panel></Panel>
                                </div>
                            
                       
                                <div class="item4">
                                    <Panel></Panel>
                                </div>
                                <div class="item5">
                                    <Panel></Panel>
                                </div>
                                <div class="item6">
                                    <Panel></Panel>
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