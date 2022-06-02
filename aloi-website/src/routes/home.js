import Panel from "../components/card";
import { Row } from "react-bootstrap";
import {faChevronDown} from '@fortawesome/free-solid-svg-icons';
import {faPython, faJava, faHtml5, faCss3, faReact, faAngular, faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Home = () => {

    return (
        <div class="home-page">

            <div class="home-body">
                <h1 class="home-header">Welcome to Me!</h1>

                <article class="short-bio">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim sed faucibus turpis in eu mi bibendum neque egestas. Phasellus faucibus scelerisque eleifend donec pretium. Integer quis auctor elit sed vulputate mi. Faucibus interdum posuere lorem ipsum dolor sit amet consectetur adipiscing. Metus dictum at tempor commodo. Ut lectus arcu bibendum at varius vel. Arcu odio ut sem nulla pharetra diam sit amet. Sed egestas egestas fringilla phasellus. Convallis posuere morbi leo urna molestie at elementum. A arcu cursus vitae congue mauris rhoncus aenean vel. Luctus venenatis lectus magna fringilla urna. Curabitur vitae nunc sed velit. Proin libero nunc consequat interdum varius sit. In fermentum posuere urna nec tincidunt praesent semper.

                    Leo a diam sollicitudin tempor id. Dapibus ultrices in iaculis nunc sed augue. Dui nunc mattis enim ut. Lobortis feugiat vivamus at augue eget arcu dictum varius duis. Aliquam faucibus purus in massa tempor nec feugiat nisl. Nunc pulvinar sapien et ligula ullamcorper malesuada proin libero nunc. Purus in mollis nunc sed id semper risus. Placerat in egestas erat imperdiet sed euismod nisi porta lorem. Auctor augue mauris augue neque gravida in fermentum et sollicitudin. Enim nulla aliquet porttitor lacus luctus accumsan tortor.
                </article>

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
                                    <Panel></Panel>
                                </div>
                                <div class="item2">
                                    <Panel></Panel>
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