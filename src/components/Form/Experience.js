const Experience = ({ Experiences }) => {
    return (
      <div className="Experience">
        {Experiences.map((exp, key) => (
          <div className="alert alert-info" key={key}>

            <h4>{exp.Role} at {exp.Company} </h4>
            <small> {exp.Start}-{exp.End}</small>
            <br />
            {exp.Description}
            
          </div>
        ))}
      </div>
    );
  };
  
  export default Experience;