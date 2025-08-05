import './Windowtwo.css';

const Windowother = ({ title, description, skillTitle, skills, caption }) => {
  return (
    <section className="section1">
      <div className="cursor-light"></div>
      <h2 className="heading1">{title}</h2>
      <p className="description1">{description}</p>
      <div className="card-container1">
        <div className="grid-background1" />
        <div className="glow1"></div>
        <div className="command-box1">
          <div className="command-title1">{skillTitle}</div>
          {skills.map((skill, index) => (
            <div className="command-item1" key={index}>
              <span>{skill}</span>
              <span className="shortcut1">Expert</span>
            </div>
          ))}
        </div>
        <div className="card-caption1">
          <strong>{caption.highlight}</strong> {caption.text}
        </div>
      </div>
    </section>
  );
};

export default Windowother;
