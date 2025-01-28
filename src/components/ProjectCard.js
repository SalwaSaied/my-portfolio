import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, imgUrl, linkUrl }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <a href={linkUrl} target="_blank" rel="noopener noreferrer">Visit Now</a> 
          

        </div>
      </div>
    </Col>
  )
}
