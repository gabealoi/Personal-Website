import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';
import arms_wide from '../images/arms_wide.jpg';
import climbing from '../images/climbing.JPG';
import umbrella from '../images/umbrellas.jpg';
import mountains from '../images/moutains.jpg';

const AutoplaySlider = withAutoplay(AwesomeSlider);

const Slider = () => {
  
  return (
    <AutoplaySlider
      play={true}
      cancelOnInteraction={false} // should stop playing on user interaction
      interval={8000}
      bullets={false}
      organicArrows={false}
      className={"slideshow"}
    >
      

      <div data-src={arms_wide}/>
      <div data-src={climbing} />
      <div data-src={umbrella} />
      <div data-src={mountains} />
    </AutoplaySlider>
  )
}

export default Slider;