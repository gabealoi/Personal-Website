import { Suspense, lazy} from 'react';
import '../resources/profile.css'
import profile_pic from '../images/pp.jpg'
import {faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import {faMailBulk, faFileDownload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { SpinnerDiamond} from 'spinners-react';
import resumePDF from '../resources/Resume.pdf';


// lazy loads
const TimeComponent = lazy(() => import('../components/TimeComponent'));
const SinglePagePDFViewer = lazy(() => import('../components/pdf/single-page'));

const Profile = () => {
 
    return (
        <div class="profile-page">

            <div class="profile-body">
            
            <div class="prof-header">
                <Suspense fallback={<div id='img-spinner'><SpinnerDiamond color='#000080' size={.015 * window.innerWidth}/></div>}>
                    <TimeComponent />
                </Suspense>
            </div>

                <div class="prof-banner"></div>

                <div class="prof-container">


                    <section class="prof-info">

                        <Suspense fallback={<div id='img-spinner'><SpinnerDiamond color='#000080' size={.015 * window.innerWidth}/></div>}>
                            <div class="profile-pic">
                                <figure class="pp-holder">
                                        <img src={profile_pic} id='myimg' alt='profile'></img>
                                </figure>
                            </div>
                        </Suspense>

                        
                        <div class="right-contact">
                            <section class="contact-info">
                                <ol>
                                    <a href="mailto: gabe.n.aloi@gmail.com">
                                        <li><FontAwesomeIcon icon={faMailBulk}/><span class="short-contact">: gabe.n.aloi@gmail.com</span></li>
                                    </a>
                                    <a href="https://www.linkedin.com/in/gabriel-aloi-1a9550202/">
                                        <li><FontAwesomeIcon icon={faLinkedin}/><span class="short-contact">: Gabe&#39;s linkedin</span></li>
                                    </a>
                                    <a href="https://github.com/gabealoi?tab=repositories">
                                        <li><FontAwesomeIcon icon={faGithub}/><span class="short-contact">: Gabe&#39;s Repositories</span></li>
                                    </a>
                                </ol>
                            </section>
                        </div>

                    </section>

                    <div class="prof-bio-infos">
                        <article class="prof-bio">
                            I started this page out to create some portfolio work for myself. As a <span class="emphasis">prospective Software Engineer</span>, I want to exemplify some of my skills through a few projects
                            that I can open source. Of course, there is always more to do and more to add and I thoroughly <span class="emphasis">enjoy learning the nuances of new stacks</span> along the way. More specifically,
                            I have loved working and learning within the <span class="emphasis">front-end</span> of this app's development.
                        </article>
                        <article class="prof-bio">
                            Additionally, I do like working within the back&#8211;end and doing my part in things like keeping APIs up&#8211;to&#8211;date and functional,
                            reworking Java models within a Maven project, but this project was a testemant to my front&#8211;end skills.
                            In the context of a company, I am looking for a good company culture that can <span class="emphasis">cultivate my growth&#8211;mindset</span> and propel me further into my interests and bring about new ones while challenging me as an engineer.
                            If you scroll down you can see an inset PDF of my Resume below in addition to a download option for closer inspection. All of the ways to contact me are listed next to my profile image.
                        </article>
                    </div>

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
                            <SinglePagePDFViewer pdf={resumePDF} class="resume-pdf" id='my-resume'></SinglePagePDFViewer>
                        </Suspense>
                    </div>
                </div>

            </div> {/* end body div */}

        </div>
    );
}

export default Profile;