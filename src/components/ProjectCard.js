import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, siteUrl, codeUrl }) => {
  return (
    <Col size={12} sm={6} md={4} lg={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt="" />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <div className='proj-button-row'>
            {title !== "Mini-Chatbot" && (
              <a href={siteUrl} target="_blank" rel="noreferrer">
                <button className='proj-button-item'>
                    Demo
                </button>
            </a>
            )}
            <a href={codeUrl} target="_blank" rel="noreferrer">
                <button className='proj-button-item'>
                    Code
                </button>
            </a>
          </div>
        </div>
      </div>
    </Col>
  )
}