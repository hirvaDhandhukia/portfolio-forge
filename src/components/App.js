import React, {Component} from 'react';
import Header from "./Bootstrap/Header";
import Form from './Form';
import Code from './Code';


class App extends Component {
  state = {
    Dark: true,
    FormData: {
      FirstName : "VALUE OF FirstName",
      LastName: "VALUE OF LastName",
      // FullName : "VALUE OF FullName",
      Description : "VALUE OF Description",
      KeyWords : "VALUE OF KeyWords",
      Thumbnail : "VALUE OF Thumbnail",
      URL : "VALUE OF URL",
      Address : "VALUE OF Address",
      Occupation : "VALUE OF Occupation",
      Email : "VALUE OF Email",
      Github : "VALUE OF Github",
      LinkedIn : "VALUE OF LinkedIn"
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
