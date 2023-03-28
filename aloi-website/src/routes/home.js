import { Suspense, lazy, createElement } from 'react';
import { Link } from 'react-router-dom';
import { faPython, faJava, faHtml5, faCss3, faReact, faAngular, faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { SpinnerDiamond } from 'spinners-react';
import py from '../images/pylogo.png'
import tba from '../images/tba.png'
import rIcon from '../images/react_icon.png'
import libIcon from '../images/liberty_thumbnail.png'

// import of custom hook for firestore data
import useFirestoreCollection from '../hooks/useFirestoreCollection';
// 

// lazy imports
const Slider = lazy(() => import('../components/slider'));
const Panel = lazy(() => import('../components/card'));


const Home = () => {
    const {loading, data} = useFirestoreCollection('cards');

    // loading state checked for card data grab
    if (loading) {
        return <div><p>Loading Card...</p></div>
    }

    let cardData = [];
    data.map((doc) => {
        cardData.push(doc);
        // console.log(doc);
    });
    // sort by obj key
    cardData.sort((a, b) => a.key - b.key);


    const cardImgs = [libIcon, rIcon, py];
    let allCards = [];


    // cardObj
    function Card(imgname, title, body, footer, btnLink, id) {
        this.imgname = imgname || tba;
        this.title = title || 'New Stuff Coming Soon!';
        this.body = body || 'I am always trying to learn and practice new things that would be posted here';
        this.footer = footer;
        this.btnLink = btnLink;
        this.width = window.innerWidth > '2000px' && window.innerWidth < '3000px' ? '22rem' : '300px';
        this.id = 'top-link';
    }
    // 

    function populateCardInfo() {  
        for (let i=0;i<cardData.length;i++) {
            const newCardInfo = new Card(
                cardImgs[i],
                cardData[i].title,
                cardData[i].body,
                cardData[i].footer,
                cardData[i].btnLink
            );
            allCards.push(newCardInfo);
        }
    }

    populateCardInfo();



    let allCardElems = [];
    function generateCards() {
        // generate each card elem inside its own div
        for (let i=0;i<allCards.length;i++) {
            const cardElem = createElement(
                Panel,
                allCards[i]
            );
            allCardElems.push(
            <div key={`${i+1}`} class={`item${i+1}`}>
                <Suspense fallback={<div id='img-spinner'><SpinnerDiamond color='#000080' size={.015 * window.innerWidth} /></div>}>
                    {cardElem}
                </Suspense>
            </div>);
        }
    }

    generateCards();


    // JSX
    return (
        <div class="home-page">

            <div class="home-body">
                <section class="top-section">

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
                                <Link to='/profile'>
                                    <Suspense fallback={<div id='img-spinner'><SpinnerDiamond color='#000080' size={.015 * window.innerWidth} /></div>}>
                                        <Slider></Slider>
                                    </Suspense>
                                </Link>
                                <figcaption>Take a look at some of my travel pictures</figcaption>
                            </figure>
                        </div>

                    </div>

                    <section class="bio-footer">
                        <p>If you want to learn more about me, check out the <a href="/profile">About</a> page. Interested in my coding experience and portfolio? <a href="#spacer">Scroll down</a>!</p>
                    </section>

                    <div class="banner">

                        <div class="arr-container">
                            <a href="#spacer" class="down">
                            </a>
                        </div>

                    </div>
                </section>

                <div id="spacer"></div>

                <div class="cards-body" id="portfolio">
                    <h2>Experience and Code</h2>
                    <small>This one is in the works still :)</small>

                    <section class="cards-container">
                        {allCardElems}
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