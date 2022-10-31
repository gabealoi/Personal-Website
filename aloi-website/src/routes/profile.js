import { Suspense, lazy} from 'react';
import '../resources/profile.css'
import profile_pic from '../images/pp.jpg'
import TimeComponent from '../components/TimeComponent'
import {faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import {faMailBulk, faFileDownload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { SpinnerDiamond} from 'spinners-react';
import SinglePagePDFViewer from '../components/pdf/single-page';
import resumePDF from '../resources/Resume.pdf';

// firebase imports
import { storage } from '../lib/init-firebase';
import { ref, getDownloadURL } from 'firebase/storage'; 

const Profile = () => {

    // var profile_resources = ['pp.jpg','aloi_Resume.pdf'];
    var profile_resources = ['pp.jpg'];


    for (let i=0;i<profile_resources.length;i++) {
        getDownloadURL(ref(storage, profile_resources[i])).then((url) => { 
            if (i===0) {
                // insert into an <img> element
                const img = document.getElementById('profile-img');
                img.setAttribute('src', url);
            } else {
                // insert into <pdf> element
                const pdf = document.getElementById('my-resume');
                console.log(pdf);
                pdf.setAttribute('pdf', url);
            }
        })
        .catch((error) => {
            // Handle any errors
            console.log('ERROR READING IMAGES\n' + error);
        });
    }
 
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
                                <img src='' id='profile-img'></img>
                                {/* <img src={profile_pic} id='myimg'></img> */}
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
                                    <li><FontAwesomeIcon icon={faGithub}/>: Gabe&#39;s Repositories</li>
                                </a>
                            </ol>
                        </section>

                    </section>

                    <article class="prof-bio">
                        I started this page out to create some portfolio work for myself. As a <span class="emphasis">prospective Software Engineer</span>, I want to exemplify some of my skills through a few projects
                        that I can open source. Of course, there is always more to do and more to add and I thoroughly <span class="emphasis">enjoy learning the nuances of new stacks</span> along the way. More specifically, 
                        I have loved working and learning within the <span class="emphasis">front-end</span> of this app's development. Also, I do like working within the back&#8211;end and doing my part in things like keeping APIs up&#8211;to&#8211;date and functional,
                        reworking Java models within a Maven project, but this project was a testemant to my front&#8211;end skills. 
                        In the context of a company, I am looking for a good company culture that can <span class="emphasis">cultivate my growth&#8211;mindset</span> and propel me further into my interests and bring about new ones while challenging me as an engineer.
                        If you scroll down you can see an inset PDF of my Resume below in addition to a download option for closer inspection. All of the ways to contact me are listed next to my profile image. 
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
                            <SinglePagePDFViewer pdf={resumePDF} class="resume-pdf" id='my-resume'></SinglePagePDFViewer>
                            {/* <SinglePagePDFViewer ref={node => componentRef.current = node} pdf='' class="resume-pdf" id='my-resume'></SinglePagePDFViewer> */}
                        </Suspense>
                    </div>
                </div>

            </div> {/* end body div */}

        </div>
    );
}

export default Profile;