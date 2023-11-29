const Project = ({ Projects }) => {
    return (
      <div className="Project">
        {Projects.map((proj, key) => (
          <div className="alert alert-info" key={key}>

            Name: {proj.Name} built with {proj.Keyword} tech.
            <br />
            GitHub: {proj.Github}

          </div>
        ))}
      </div>
    );
  };
  
  export default Project;