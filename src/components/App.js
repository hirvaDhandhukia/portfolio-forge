import React, {Component} from 'react';
import Header from "./Bootstrap/Header";
import Form from './Form';
import Code from './Code';


class App extends Component {
  state = {
    Dark: true,
    FormData: {
      FirstName : "",
      LastName: "",
      // FullName : "",
      Description : "",
      KeyWords : "",
      Thumbnail : "",
      URL : "",
      Address : "",
      Occupation : "",
      Email : "",
      Github : "",
      LinkedIn : "",
      Skills: {
        Intro: "",
        Tools: ["Photoshop", "jQuery", "HTML5", "CSS3", "WordPress", "SEO"],
        Progress: ["75", "60", "85", "90", "70", "80"]
      },
      Experience: [{
        Role: "CEO",
        Company: "Pipernet",
        Description: "Working as a CEO of Pipernet, the new internet.",
        Start: "2017",
        End: "Present"
      }, {
        Role: "Full Stack Developer",
        Company: "Pied Piper",
        Description: "Developed the core data compressing algorithm as well as managed the main data-pipelines running in the application.",
        Start: "2017",
        End: "2018"
      }, {
        Role: "Developer",
        Company: "Hooli",
        Description: "Project Manager and Senior developer on various Hooli projects.",
        Start: "2017",
        End: "2018"
      }],
      Projects: [{
        Name: "Project 01",
        Keyword: "Java",
        Github: "github link"
      }, {
        Name: "Project 02",
        Keyword: "Python",
        Github: "github link"
      }],
      Education: [{
        Degree: "Bachelor of Engineering",
        Description: "A 4-year Engineering degree in Information Technology."
      }]
    }
  };

  // toggle to dark & light modes
  toggleHeader = () => {
    this.setState({
      Dark: !this.state.Dark
    });
  };

  // onchange input handler
  handleChange = e => {
    this.setState({
      FormData: {
        ...this.state.FormData,
        [e.target.name]: e.target.value
      }
    });
  };

  render() {
    // const Data = {
    //   FirstName : "VALUE OF FirstName",
    //   Description : "VALUE OF Description",
    //   KeyWords : "VALUE OF KeyWords",
    //   FullName : "VALUE OF FullName",
    //   Thumbnail : "VALUE OF Thumbnail",
    //   URL : "VALUE OF URL",
    //   Occupation : "VALUE OF Occupation",
    //   Address : "VALUE OF Address",
    //   Github : "VALUE OF Github",
    //   Email : "VALUE OF Email",
    //   LinkedIn : "VALUE OF LinkedIn"
    // }

    return (
      <div className="App">
        <Header dark={this.state.Dark} className="Header">
          <span>Portfolio Website Generator</span>

          {/* <button 
                className={`btn btn${
                  this.state.Dark ? "-outline" : ""
                }-primary`}
                onClick={this.toggleHeader}
                >
                  Toggle Dark Mode
              </button> */}
          <button
                className="btn btn-sm btn-outline-primary rounded-circle"
                onClick={this.toggleHeader}
              >
              <i
                className={"fa fa-" + (this.state.Dark ? "sun" : "moon") + "-o"}
              ></i>
          </button>
        </Header>


        {/* .container-fluid>.row>.col-12.col-sm-6 */}
        <div className="container-fluid">
          <div className="row">
            <div className='col-12 col-sm-6'>
              {/* calling the form component */}
              <Form
                FormData={{FullName: `${this.state.FormData.FirstName } ${this.state.FormData.LastName}`,
                ...this.state.FormData}}
                onChange={this.handleChange}
              />
            </div>
            <div className="col-12 col-sm-6">
              {/* calling the code component */}
              <Code 
                // {...Data}
                {...this.state.FormData} 
                FullName={
                  this.state.FormData.FirstName + " " + this.state.FormData.LastName
                }
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
  
}

export default App;
//  {...Data} :- here ... is called the spread operator
