import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My <span></span>
          <br /> Internship
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Java Intern</h4>
                <h5>CCTC Bhubaneswar</h5>
              </div>
              <h3>2023</h3>
            </div>
            <p>
              Completed an intensive internship focusing on Java development. Worked on core Java concepts, object-oriented programming, and real-world application building.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Deep Learning & Cryptography Intern</h4>
                <h5>NIT Rourkela</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Engaged in a specialized internship applying deep learning methodologies for healthcare solutions and integrating cryptographic security measures for sensitive data.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
