import "react-multi-carousel/lib/styles.css";
import javaScriptImg from "../assets/img/JavaScript.png";
import javaImg from "../assets/img/Java.png";
import reactImg from "../assets/img/React.png";
import nodeImg from "../assets/img/Node.png";
import mySqlImg from "../assets/img/MySql.png";
import apiImg from "../assets/img/API.png";
import pythonImg from "../assets/img/Python.png";
import cImag from "../assets/img/C.png";
import Carousel from "react-multi-carousel";
import colorSharp from "../assets/img/color-sharp.png";
import nextJsImg from "../assets/img/nextJs.jpg";
import typeScriptImg from "../assets/img/typescriptIcon.png";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const skills = [
    {
      name: "React JS",
      image: reactImg,
      alt: "React JS",
    },
    {
      name: "Next.js",
      image: nextJsImg,
      alt: "Next.js",
    },
    {
      name: "TypeScript",
      image: typeScriptImg,
      alt: "TypeScript",
    },
    {
      name: "JavaScript",
      image: javaScriptImg,
      alt: "JavaScript",
    },
    {
      name: "Node JS",
      image: nodeImg,
      alt: "Node JS",
    },
    {
      name: "Java",
      image: javaImg,
      alt: "Java",
    },
    {
      name: "RESTful API",
      image: apiImg,
      alt: "RESTful API",
    },
    {
      name: "MySQL",
      image: mySqlImg,
      alt: "MySQL",
    },
    {
      name: "Python",
      image: pythonImg,
      alt: "Python",
    },
    {
      name: "C# .NET",
      image: cImag,
      alt: "C# .NET",
    },
  ];

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p>
                Here are some of the programming languages I've worked with that
                <br />
                have helped me complete tasks at work and build personal
                <br />
                projects as a web and software developer
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider"
              >
                {skills.map((skill) => (
                  <div className="item">
                    <img src={skill.image} alt={skill.name} />
                    <h5>{skill.name}</h5>
                  </div>
                ))}
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  );
};
