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
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Alumni Digital Card App",
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
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
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
                    <Tab.Pane eventKey="section">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
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
