import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/Alumni.png";
import projImg2 from "../assets/img/BattleShip.png";
import projImg3 from "../assets/img/Job-Search.jpg";
import projImg4 from "../assets/img/BYU-Job.png";
import projImg5 from "../assets/img/Holokai.png";
import projImg6 from "../assets/img/Blog.png";
import projImg7 from "../assets/img/Flower-Power.png";
import projImg8 from "../assets/img/Todo-List.jpg";
import projImg9 from "../assets/img/Filter-Image.png";
import projImg10 from "../assets/img/Arm.png";
import projImg0 from "../assets/img/FamilySearch.png";
import mendixCertificate from "../assets/img/Certificates/Mendix.png";
import upcCertificate from "../assets/img/Certificates/Upc.png";
import deanCertificate from "../assets/img/Certificates/Dean.png";
import leadershipCertificate from "../assets/img/Certificates/Leadership.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Family Search Project (Intern Project)",
      description: "The mission of FamilySearch is to connect people with their ancestors and future generations by preserving family history records. Most of the websites are written by React.JS",
      imgUrl: projImg0,
      projectUrl:'https://www.youtube.com/watch?v=EmobwEF5yiE&list=PLCOHvB5d5Xvlil1X_I6uIdyS7A-E10kG7&index=1'
    },
    {
      title: "Alumni Digital Card App (Intern Project)",
      description: "The Alumni Digital Card App, built with React-Native, allows BYUH Alumni to access their Digital ID Card upon login",
      imgUrl: projImg1,
      projectUrl: 'https://www.youtube.com/watch?v=Mlhad3SIhEo'
    },
    {
      title: "The Battleship Game",
      description: "The battleship game is a mobile game designed using Android Studio and Java. The battleship will fire bullets when you touch the upper screen and drop depth charges when touching the bottom screen. ",
      imgUrl: projImg2,
      projectUrl: 'https://www.youtube.com/watch?v=aZX75QPAfIU'
    },
    {
      title: "Job-Seeker App",
      description: "Job-Seeker App is made by React Native. It shows the popular jobs and the nearby jobs from the home page.",
      imgUrl: projImg3,
      projectUrl: 'https://www.youtube.com/watch?v=euxbqVX9Hao'
    },
    {
      title: "BYU Job Seeker",
      description: "BYU Job Seeker is a Node.js project that allows the students at BYU to find their desired on-campus jobs by selecting the departments and job categories.",
      imgUrl: projImg4,
      projectUrl:'https://github.com/itai1998/Job-Seeker'
      
    },
    {
      title: "BYUH Holokai",
      description: "Holokai is a Mendix project for BYU Hawaii. Holokai Program is BYU-Hawaii's academic program. It allows the students to choose one major and two minors/certificates from three different categories",
      imgUrl: projImg5,
      projectUrl:'https://holokai.m.byuh.edu/'
    },
    {
      title: "Personal Blog",
      description: "This project is created by React JS. The users can click the blog on the home page to view the blog detail. They can also create a new blog and delete the existing blogs if they wish.",
      imgUrl: projImg6,
      projectUrl:'https://www.youtube.com/watch?v=j6YG5DRcVts'
    },
    {
      title: "Flower Power",
      description: "Flower Power is a Java project. The Program will ask the players random math questions. If the players answer correctly, a flower will appear in the garden.",
      imgUrl: projImg7,
      projectUrl:'https://www.youtube.com/watch?v=VYfkhqv2NdY'
    },
    {
      title: "To-DO List",
      description: "Todo-List Project is a simple web project created by JavaScript, HTML, and CSS. The user can create a new task, delete the tasks, and filter the completed tasks.",
      imgUrl: projImg8,
      projectUrl: 'https://github.com/itai1998/Todo_List_Project'
    },
    {
      title: "Filter Image",
      description: "Filter-Image Project is an HTML, CSS, and JavaScript project that allows users to filter images from three categories: phones, clothes, and shoes, using the filter button or search bar. When you click the image, the detailed information will appear in a pop-up window.",
      imgUrl: projImg9,
      projectUrl:'https://www.youtube.com/watch?v=BvUgD58tQSs'
    },
    {
      title: "Mechanical arm",
      description: "This project is written by PLC Programming Language. The arm will grab the materials from one side and place them on the other side. The arm will perform different actions based on different materials (plastics or glasses).",
      imgUrl: projImg10,
      projectUrl:'https://www.youtube.com/watch?v=Yvqk7JQWyKQ'
    },
  ];

  const certificates = [
    {
      title: "Mendix Rapid Developer",
      description: "",
      imgUrl: mendixCertificate,
      projectUrl:'https://drive.google.com/file/d/1dW5e7oeatRleIKhbdHPWYFwbH_OvkePB/view'
    },
    {
      title: "Upsilon Pi Epsilon",
      description: "",
      imgUrl: upcCertificate,
      projectUrl:'https://drive.google.com/file/d/1yEjTMrXJOujhGClmgspN1_v5lwwbgqG1/view'
    },
    {
      title: "Dean Qualification",
      description: "",
      imgUrl: deanCertificate,
      projectUrl:'https://drive.google.com/file/d/1Ga8beIZ1_4dtcsrkT4RcWewzrA85qgPW/view'
    },
    {
      title: "Leadership Service Certificate",
      description: "",
      imgUrl: leadershipCertificate,
      projectUrl:'https://drive.google.com/file/d/1wi16vgt0uf49EfqMaR_dSKa8YTwNSdKf/view'
    },
  ]

  const projectsPage1 = projects.slice(0, 6); // Projects for the first page (1-6)
  const projectsPage2 = projects.slice(6, 11); // Projects for the second page (7-9)

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>I am also passionate about exploring new technologies in my free time, having worked on various exciting projects using programming languages and frameworks such as React.js, Node.js, Python, MySQL, and REST API. </p>
                <p>Below are some projects I develop in my free time </p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Project Page 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Project Page 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Certificate</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projectsPage1.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                    <Row>
                        {
                          projectsPage2.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                    <Row>
                        {
                          certificates.map((certificate, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...certificate}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
