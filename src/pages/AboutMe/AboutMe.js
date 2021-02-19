import React, { Component } from 'react';
import Projects from "../Projects/Projects";
import Display from "../Display/Display";
import profPic from "../../assets/github-profile-pic.png";
import resumeLink from "../../assets/TannerCookResume.pdf";
import githubPic from "../../assets/github.png";
import githubPicWhite from "../../assets/github-white.png";
import linkedInPic from "../../assets/linkedin.png";
import linkedInPicWhite from "../../assets/linkedin-white.png";
import gmailPic from "../../assets/gmail.png";
import gmailPicWhite from "../../assets/gmail-white.png";
import codingPic from "../../assets/coding-pic.png";
import DnDpic from "../../assets/DnD-pic.png";
import gamingPic from "../../assets/gaming-pic.png";
import readingPic from "../../assets/reading-pic.png";
import sportsPic from "../../assets/sports-pic.png";
import professionalCodePic from "../../assets/professionalcode-pic.png";
import { SettingOutlined } from "@ant-design/icons";
import { CopyOutlined } from "@ant-design/icons";
import { HomeOutlined } from "@ant-design/icons";
import "./AboutMe.css"
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import Icon from 'react-fa';


class AboutMe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gohome: false,
      viewProjects: false,
      slides: [
        {
          hobby: "Professional Skills",
          description: "Professional skills include, React.js, JavaScript, CSS, jQuery, Bootstrap, Node.js, and HTML. Junior Front End Developer aiming to build applications that can benefit people, make processes easier, use innovative technologies, and just make amazing implements on the web. I am a recent graduate of the University of Chapel Hill Full-Stack Web Development Coding Bootcamp, specializing in JavaScript, CSS, and React.js. My roles as both a leader and a team player make me an excellent addition to any professional group, as I am able to work reliably as a team player and tenaciously on my own. I have spent the better part of a year trying to master programming and I still have a lot to learn, but my dedication to my craft, as well as my determination to excel in my career make me a hard-working, and invaluable employee.",
          picture: professionalCodePic
        },
        {
          hobby: "Coding",
          description: "I took the UNC Coding Bootcamp last year in 2020 and found a passion for programming. If the course taught me anything it is that I have so much mroe to learn, and that has sparked a passion to learn and discover all there is to know. I have a long way to go before I am considered an expert by any means, but I am trying to at least get past a novice. Professional skills include, React.js, JavaScript, CSS, jQuery, Bootstrap, Node.js, and HTML",
          quote: '"I am not a great programmer; I am just a good programmer with great habits." - Kent Beck',
          picture: codingPic
        },
        {
          hobby: "Reading",
          description: "Reading was a recently discovered passion for me. I used to only read in school and only when it was assigned to me. It wasn't until College and after that I found books can be entertaining and amazing. I mainly focus on Fantasy, fiction, and the occasional mystery.",
          quote: '"Reading makes immigrants of us all. It takes us away from home, but more important, it finds homes for us everywhere." - Jean Rhys',
          picture: readingPic,
        },
        {
          hobby: "Video Games",
          description: "A dream of mine has always been to work with video games in some aspect, either professionally or as a hobby. The endless hours of entertainment they have given me throughout my life drives me to want to instil that same joy I felt as a kid, and admittedly still feel now sometimes, in others.",
          quote: '"I burned through all my extra lives in a matter of minutes, and my two least-favorite words appeared on the screen: GAME OVER." - Ernest Cline',
          picture: gamingPic,
        },
        {
          hobby: "Sports",
          description: "Sports has been a part of my life since I was a child, and was further nurtured when I went to UNC-Chapel Hill for undergrad. There is something beautiful about stepping into the arena, hearing the crowd roar, and cheering for your team (Tarheels all day). Tennis has been my sport of choice for as long as I can remember, but the best sport to watch in my opinion is basketball.",
          quote: '"I have failed over and over again in my life. And that is why I succeed." - Michael Jordan',
          picture: sportsPic,
        },
        {
          hobby: "Dungeons and Dragons",
          description: "I didn't discover this hobby until after college, but since I sunk my teeth into it I have been hooked. It is a great team-building experience that promotes creative thinking and problem solving. It's also insanely fun!",
          quote: '"Basically, we told a fantasy epic, akin to Lord of the Rings, that is entirely our own and exists only in our minds...It was a very very important story that was told only for the 6 people that were in our group." - Thomas Middleditch',
          picture: DnDpic,
        },

      ]

    }

    this.handleHomeButton = this.handleHomeButton.bind(this);
    this.handleProjectsChange = this.handleProjectsChange.bind(this);
    this.resumeButton = this.resumeButton.bind(this);
    // this.displayText = this.displayText.bind(this);
    // this.renderSlides = this.renderSlides.bind(this);


  }

  handleHomeButton() {
    this.setState({ gohome: true })
  }

  handleProjectsChange(props) {
    this.setState({ viewProjects: true })
  }

  resumeButton() {
    const url = resumeLink
    window.open(url, '_blank')
  }

  // displayText() {
  //   this.setState({ description: quote })
  // }


  // renderSlides() {
  //   const hobbySlides = this.state.slides.map((slides, index) => {
  //     return <MyCarousel slides={slides} key={index} />
  //   })
  //   return hobbySlides;
  // }


  render() {
    console.log(this.state.slides)
    const aboutMeValue = this.state.gohome === false & this.state.viewProjects === false ?
      <div>
        <div className="aboutMeBox">
          <div className="picContainerAboutMe">
            <div>
              <img src={profPic} alt="Profile Pic" className="profPic"></img>
            </div>
            <div className="display-text">
              <p>
                This section is meant to display some of my hobbies, interests, and passions. Be sure to hover over the bottom of the pictures for some of my favorite quotes!
              </p>
            </div>
            <button className="homeButtonAbout" onClick={this.handleHomeButton}>
              <HomeOutlined />
              <p>Home</p>
            </button>
            <button className="projectsButton" onClick={this.handleProjectsChange}>
              <SettingOutlined className="projectsImage" />
              <p>Projects</p>
            </button>
            <button className="resumepic" onClick={this.resumeButton}>
              <CopyOutlined />
              <p>Resume</p>
            </button>
            <div>
              <a href="https://github.com/Tanner336">
                <img className="githubpic" src={githubPic} alt="github-logo" onMouseOver={e => e.currentTarget.src = githubPicWhite} onMouseOut={e => e.currentTarget.src = githubPic}></img>
              </a>
              <a href="https://www.linkedin.com/in/tanner-cook-3b78421ab/">
                <img className="linkedinpic" src={linkedInPic} alt="linkedIn-logo" onMouseOver={e => e.currentTarget.src = linkedInPicWhite} onMouseOut={e => e.currentTarget.src = linkedInPic}></img>
              </a>
              <a href="mailto:tannercook336@gmailcom" target="html link">
                <img className="gmailpic" src={gmailPic} alt="Gmail-logo" onMouseOver={e => e.currentTarget.src = gmailPicWhite} onMouseOut={e => e.currentTarget.src = gmailPic}></img>
              </a>
            </div>
          </div>
          <Carousel
            arrows
            slidesPerPage={1}
            slidesPerScroll={1}
            animationSpeed={1500}
            stopAutoPlayOnHover
            itemWidth={750}
            clickToChange
            breakpoints={{
              1000: { // these props will be applied when screen width is less than 1000px
                slidesPerPage: 2,
                clickToChange: false,
                centered: false,
                arrows: true,
                infinite: false,
              },
              500: {
                slidesPerPage: 1,
                slidesPerScroll: 1,
                clickToChange: false,
                centered: false,
                arrowLeft: (<Icon className="icon-example" name="arrow-left" />),
                arrowRight: (<Icon className="icon-example" name="arrow-right" />),
                animationSpeed: 2000,
                infinite: false,
              },
            }}
          >
            {this.state.slides.map((slide, index) => {
              return (
                <div className="backgroundAboutMe">
                  <h1 className="slideTitle">{slide.hobby}</h1>
                  <img className="slidePicture" alt="hobbypicPlaceholder" src={slide.picture} />
                  <p className="slideDescription">{slide.description}</p>
                  <p className="slideQuote">{slide.quote}</p>
                </div>);
            })}


            {/* <div className="backgroundAboutMe">
              <h1 className="slideTitle">{this.state.slides[1].hobby}</h1>
              <img className="slidePicture" alt="hobbypicPlaceholder" src={this.state.slides[1].picture} />
              <p className="slideDescription">{this.state.slides[1].description}</p>
              <p className="slideQuote">{this.state.slides[1].quote}</p>
            </div>
            <div className="backgroundAboutMe">
              <h1 className="slideTitle">{this.state.slides[2].hobby}</h1>
              <img className="slidePicture" alt="hobbypicPlaceholder" src={this.state.slides[2].picture} />
              <p className="slideDescription">{this.state.slides[2].description}</p>
              <p className="slideQuote">{this.state.slides[2].quote}</p>
            </div>
            <div className="backgroundAboutMe">
              <h1 className="slideTitle">{this.state.slides[3].hobby}</h1>
              <img className="slidePicture" alt="hobbypicPlaceholder" src={this.state.slides[3].picture} />
              <p className="slideDescription">{this.state.slides[3].description}</p>
              <p className="slideQuote">{this.state.slides[3].quote}</p>
            </div>
            <div className="backgroundAboutMe">
              <h1 className="slideTitle">{this.state.slides[4].hobby}</h1>
              <img className="slidePicture" alt="hobbypicPlaceholder" src={this.state.slides[4].picture} />
              <p className="slideDescription">{this.state.slides[4].description}</p>
              <p className="slideQuote">{this.state.slides[4].quote}</p>
            </div> */}

          </Carousel>

        </div>
      </div >
      : this.state.viewProjects === true ?
        <Projects />
        :
        <Display />

    return (aboutMeValue)

  }
};

export default AboutMe;