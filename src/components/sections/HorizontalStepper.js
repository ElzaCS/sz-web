import React, { useState } from 'react';
import "./HorizontalStepper.css";
import Image from '../elements/Image';
import Logo from '../layout/partials/Logo';

const img1 = "https://images.unsplash.com/photo-1631270315847-f418bde47ca6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGdvb2dsZSUyMGFkc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60";
const img2 = "https://media.istockphoto.com/photos/digital-marketing-concept-online-advertisement-picture-id1284549946?b=1&k=20&m=1284549946&s=170667a&w=0&h=DaMSS8u0nwYARehKE5DoEdjTPy96UQJ_B3LMRWnhBUY=";
const img3 = "https://images.unsplash.com/photo-1553835973-dec43bfddbeb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGJyYW5kfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60";

function sideScroll(element,direction,speed,distance,step) {
    let scrollAmount = 0;
    let prevScroll;
    console.log("element:"+ element)
    var slideTimer = setInterval(() => {
        prevScroll = element.scrollLeft
        if(direction == 'left'){
            element.scrollLeft -= step;
        } else {
            element.scrollLeft += step;
        }
        if (prevScroll == element.scrollLeft)
          element.scrollLeft = 0
        scrollAmount += step;
        console.log("scrollLeft:"+element.scrollLeft+", scrollAmount:"+scrollAmount+", dist:"+distance)
        if(scrollAmount >= distance){
            window.clearInterval(slideTimer);
        }
    }, speed);
  } 


class Card extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return(
    <div className={"card " + this.props.classes}>
         <div className="card-img-container">
           <span className="card-img-text">
             <Image src={this.props.img} />
         </span> 
         </div>
  </div>
    )
  }
}




class CardContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      disableScroll: false,
      scrollWidth: 0,
      scrollPos: 1,
    //   clonesWidth: 0,
    }
    this.scrollContainerRef = React.createRef();
    this.handleScroll = this.handleScroll.bind(this);
    this.scrollNext = this.scrollNext.bind(this);
    this.scrollPrev = this.scrollPrev.bind(this);
    this.setScroll = this.setScroll.bind(this);
    // this.getClonesWidth = this.getClonesWidth.bind(this);
    this.reCalc = this.reCalc.bind(this);
    //!! add here -------------------------------------------
    // var btn = document.getElementById("card-container").querySelectorAll(".scroll-next");
    // setInterval(function(){
    //   console.log("btn:"+btn)
    //   // btn.click();
    //   },1000);

    }
  
  reCalc() {
    let scrollPos = this.state.scrollPos;
    let scrollWidth = this.scrollContainerRef.current.clientWidth;
    // let clonesWidth = this.getClonesWidth();

    if (scrollPos <= 0) {
      scrollPos = 1;
    }
    this.setState({
      scrollPos: scrollPos,
      scrollWidth: scrollWidth,
    //   clonesWidth: clonesWidth,
    });
  }
  
  handleScroll(e) {
    const container = e.currentTarget;
    console.log("container:"+container)
    const scrollWidth = container.scrollWidth;
    // const clonesWidth = this.getClonesWidth();
    let scrollPos = container.scrollLeft;
    let scrollPosAdd;
    // container.clientWidth > clonesWidth ? scrollPosAdd = container.clientWidth : scrollPosAdd = clonesWidth;
    
    if (!this.state.disableScroll) {
      if (scrollPos + scrollPosAdd >= scrollWidth) {
        this.setScroll(
          // The math floor value helps smooth out the scroll jump, Idk why. Same goes for the other setScroll call below
          container, 1 + Math.floor(scrollPosAdd/12.09)
        );
        this.setState({
          disableScroll: true,
        });
      } else if (scrollPos <= 0) {
        this.setScroll(
          container //, scrollWidth - clonesWidth - Math.floor(scrollPosAdd/12.09)
        );
        this.setState({
          disableScroll: true,
        });
      }
    } 
    
    this.setState({
      scrollWidth: container.scrollWidth,
      scrollPos: container.scrollLeft,
    });
  } 
  
//   getClonesWidth() {
//     const clones = document.getElementsByClassName('is-clone');
//     let clonesWidth = 0;
//     for (let i = 0; i < clones.length; i++) {
//       clonesWidth = clonesWidth + clones[i].clientWidth;
//     }
//     return clonesWidth;
//   }
 
  setScroll(element, pos) {
    element.scrollLeft = pos;
    this.setState({
      scrollPos: element.scrollLeft,
    });
  }
  scrollNext(e) {
    const container = e.currentTarget.previousSibling;
    sideScroll(container,'right', 50, 372, 50); //element,direction,speed,distance,step
  }
  scrollPrev(e) {
    const container = e.currentTarget.nextSibling;
    sideScroll(container, 'left', 50, 372, 50);
  }
  
  
  
//   componentDidUpdate(prevProps, prevState) {
//       if (this.state.disableScroll) {
//         window.setTimeout(function() {
//           this.setState({
//             disableScroll: false,
//           });
//         }.bind(this), 40)
//       }
//   }
  
//   componentDidMount() {
//     window.addEventListener('resize', this.reCalc);
//   }
//   componentWillUnmount() {
//     window.removeEventListener('resize', this.reCalc);
//   }
  
  render() {
    return(
        // <section      {...props}      className={outerClasses}    >
        <div className="card-container" id="card-container">
            {/* Left Arrow */}
            <div className="scroll scroll-prev" onClick={this.scrollPrev}> <i className="fa fa-chevron-left"></i> </div>

            <div ref={this.scrollContainerRef} className="scrolling-wrapper" onScroll={this.handleScroll}>
            <Card title={'Card Number 1'} classes={""} img={img1}/>
            <Card title={'Card Number 2'} img={img2}/>
            <Card title={'Card Number 3'} img={img3}/>
            <Card title={'Card Number 4'} img={img1}/>
            <Card title={'Card Number 5'} img={img2}/>
            <Card title={'Card Number 6'} img={img3}/>
            <Card title={'Card Number 1'} img={img1}/>
            <Card title={'Card Number 2'} img={img2}/>
            <Card title={'Card Number 3'} img={img3}/>
            <Card title={'Card Number 4'} img={img1}/>
            <Card title={'Card Number 5'} img={img2}/>
            <Card title={'Card Number 6'} img={img3}/>
            </div>

            {/* Right arrow */}
            <div name="btnNext" id="btnNext" className="scroll scroll-next" onClick={this.scrollNext}> 
            <i class="fa fa-chevron-right"></i>
            </div>

            {/*<div>  debugging values
            <div>ScrollPos:&nbsp;{this.state.scrollPos}</div>
            <div>ClonesWidth:&nbsp;{this.getClonesWidth()}</div>
            <div>ScrollWidth:&nbsp;{this.state.scrollWidth}</div>
            </div>*/}
        </div>
        // </section>
    )
  }
}

export default CardContainer;