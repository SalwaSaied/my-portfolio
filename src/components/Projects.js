import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";
import projImg5 from "../assets/img/project-img5.png";
import projImg6 from "../assets/img/project-img6.png";
import projImg7 from "../assets/img/project-img7.png";
import projImg8 from "../assets/img/project-img8.png";
import projImg9 from "../assets/img/project-img9.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "E-Commerce-App",
      imgUrl: projImg1,
      linkUrl:"https://salwasaied.github.io/E-Commerce-App/",
      
    },
    {
      title: "Drop Home",
      imgUrl: projImg2,
      linkUrl:"https://salwasaied.github.io/DropHome/"
    },
    {
      title: "Gift Shop",
      imgUrl: projImg3,
      linkUrl:"https://salwasaied.github.io/Giftos/"

    },
    {
      title: "Restoran-App",
      imgUrl: projImg4,
      linkUrl:"https://salwasaied.github.io/RestoranApp/"

    },
    {
      title: "ToDo-List",
      imgUrl: projImg5,
      linkUrl:"https://salwasaied.github.io/ToDo-List/"

    },
    {
      title: "LandingPage",
      imgUrl: projImg6,
      linkUrl:"https://salwasaied.github.io/LandingPage/"

    },
    {
      title: "furniture",
      imgUrl: projImg7,
      linkUrl:"https://github.com/SalwaSaied/furniture/"

    },
    {
      title: "Blog",
      imgUrl: projImg8,
      linkUrl:"https://github.com/SalwaSaied/Blog/"

    },
    {
      title: "gemini-app",
      imgUrl: projImg9,
      linkUrl:"https://salwasaied.github.io/gemini-application/"

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
                <p>I build dynamic applications that integrate intuitive front-end interfaces with powerful back-end systems.</p>
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
                          projects.slice(0, 3).map((project, index) => {
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
                          projects.slice(3, 6).map((project, index) => {
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
                          projects.slice(6, 9).map((project, index) => {
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
