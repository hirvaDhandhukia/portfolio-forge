import React, {Component} from 'react';
import Header from "./Bootstrap/Header";


class App extends Component {
  state = {
    Dark: true
  };

  // toggle to dark & light modes
  toggleHeader = () => {
    this.setState({
      Dark: !this.state.Dark
    });
  };

  render() {
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
              Form
            </div>
            <div className="col-12 col-sm-6">
              {/* calling the code component */}
              Code
            </div>
          </div>
        </div>
      </div>
    );
  }
  
}

export default App;
