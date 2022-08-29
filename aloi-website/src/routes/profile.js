import { Suspense } from 'react';
import '../resources/profile.css'
import profile_pic from '../images/pp.jpg'
import TimeComponent from '../components/TimeComponent'
import {faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import {faMailBulk, faFileDownload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { SpinnerDiamond} from 'spinners-react';
import SinglePagePDFViewer from '../components/pdf/single-page';
import resumePDF from '../resources/Resume.pdf';


const Profile = () => {
    

    return (
        <div class="profile-page">

            <div class="profile-body">
            
            <Suspense fallback={<div id='img-spinner'><SpinnerDiamond color='#000080' size={.015 * window.innerWidth}/></div>}>
                <TimeComponent />
            </Suspense>

                <div class="prof-banner"></div>

                <div class="prof-container">


                    <section class="prof-info">

                    <Suspense fallback={<div id='img-spinner'><SpinnerDiamond color='#000080' size={.015 * window.innerWidth}/></div>}>
                        <figure class="pp-holder">
                                <img src={profile_pic}></img>
                        </figure>
                    </Suspense>

                        
                        <section class="contact-info">
                            <ol>
                                <a href="mailto: gabe.n.aloi@gmail.com">
                                    <li><FontAwesomeIcon icon={faMailBulk}/>: gabe.n.aloi@gmail.com</li>
                                </a>
                                <a href="https://www.linkedin.com/in/gabriel-aloi-1a9550202/">
                                    <li><FontAwesomeIcon icon={faLinkedin}/>: Gabe&#39;s linkedin</li>
                                </a>
                                <a href="https://github.com/gabealoi?tab=repositories">
                                    <li><FontAwesomeIcon icon={faGithub}/>: Gabe&#39; Repositories</li>
                                </a>
                            </ol>
                        </section>

                    </section>

                    <article class="prof-bio">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim sed faucibus turpis in eu mi bibendum neque egestas. Phasellus faucibus scelerisque eleifend donec pretium. Integer quis auctor elit sed vulputate mi. Faucibus interdum posuere lorem ipsum dolor sit amet consectetur adipiscing. Metus dictum at tempor commodo. Ut lectus arcu bibendum at varius vel. Arcu odio ut sem nulla pharetra diam sit amet. Sed egestas egestas fringilla phasellus. Convallis posuere morbi leo urna molestie at elementum. A arcu cursus vitae congue mauris rhoncus aenean vel. Luctus venenatis lectus magna fringilla urna. Curabitur vitae nunc sed velit. Proin libero nunc consequat interdum varius sit. In fermentum posuere urna nec tincidunt praesent semper.
                    </article>

                </div>

                <div class="prof-banner"></div>


                <div class="pdf-container">
                    
                        
                        <section class="resume-header">
                            <h2 id='resume-header'>My Resume</h2>
                            
                            <a id="resume-download" href="/resume/Resume.pdf" download={"GabeAloi_Resume.pdf"}>
                                <FontAwesomeIcon icon={faFileDownload}/>
                            </a>
                        
                        </section>
                 
                    <div class="pdf-obj">
                        <Suspense fallback={<div id='img-spinner'><SpinnerDiamond color='#000080' size={.015 * window.innerWidth}/></div>}>
                            <SinglePagePDFViewer pdf={resumePDF} class="resume-pdf"></SinglePagePDFViewer>
                        </Suspense>
                    </div>
                </div>

            </div> {/* end body div */}

        </div>
    );
}

export default Profile;