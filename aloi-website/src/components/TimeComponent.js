import React, { Component } from 'react';
import TextTransition, { presets } from "react-text-transition";

const questions=["Who Am I?", "What Am I Looking For?", "What's My Favorite Food?", "How Does One Contact Me?"];    



class TimeComponent extends Component {
    constructor(props){
        super(props);
        this.state = { textIdx: 0 };
    }

   
    componentDidMount() {
        this.timeout = setInterval(() => {
          let currentIdx = this.state.textIdx;
          this.setState({ textIdx: ((currentIdx === 3) ? 0 : currentIdx + 1) });
        }, 7000);
      }
    
    componentWillUnmount() {
        clearInterval(this.timeout);
    }

    render(){
        let currText = questions[this.state.textIdx % questions.length];

        return(
        <h1> { 
            
            <TextTransition
                text = {currText }
                springConfig = {presets.molasses}
            />
        
        } </h1>
        );
    }
}

export default TimeComponent;