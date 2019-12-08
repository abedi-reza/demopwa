import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import { HashRouter } from 'react-router-dom'
import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBCard, MDBCardBody, MDBIcon } from 'mdbreact';
import axios from "axios";
import AddToHomescreen from 'react-add-to-homescreen';
 
class Home extends Component{

  state = {
    contacts: []
  };


  constructor(props) {
     super(props);
     this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount(){
   
    fetch('https://dev.bidopin.com/api/v1/app-info/customer')
    .then(res => res.json())
    .then((data) => {
      // this.setState({ contacts: data })
      console.log(data)
    })
    .catch(console.log)

    // fetch('http://jsonplaceholder.typicode.com/users')
    // .then(res => res.json())
    // .then((data) => {
    //   this.setState({ contacts: data })
    //   console.log(data)
    // })
    // .catch(console.log)
 
  }
 
  
  login() {

  // fetch('http://jsonplaceholder.typicode.com/users')
  //   .then(res => res.json())
  //   .then((data) => {
  //     this.setState({ contacts: data })
  //   })
  //   .catch(console.log)
  } 

 handleSubmit() { 
  this.login()
 }

 handleAddToHomescreenClick = () => {
  alert(`
    1. Open Share menu
    2. Tap on "Add to Home Screen" button`);
};

 render() {
   return (
    <div> 
    <MDBContainer>
    <MDBRow>
      <MDBCol md="6">
        <MDBCard>
          <MDBCardBody>
            <form>
              <p className="h4 text-center py-4">ورود</p>
              <label
                htmlFor="defaultFormCardNameEx"
                className="grey-text font-weight-light"
              >
                نام کاربری
              </label>
              <input
                type="text"
                id="defaultFormCardNameEx"
                className="form-control"
              />
              <br />
              <label
                htmlFor="defaultFormCardEmailEx"
                className="grey-text font-weight-light"
              >
                رمز عبور
              </label>
              <input
                type="password"
                id="defaultFormCardEmailEx"
                className="form-control"
              />
              <div className="text-center py-4 mt-3">
                <MDBBtn className="btn btn-outline-purple" type="submit" onClick={this.handleSubmit}>
                  ورود
                  <MDBIcon far icon="paper-plane" className="ml-2" />
                </MDBBtn>
              </div> 
            </form>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </MDBRow>
  </MDBContainer>
  <AddToHomescreen onAddToHomescreenClick={this.handleAddToHomescreenClick} />
  </div>
   );
 }
}
 

class App extends Component {
 
  render() {
    return (
      <BrowserRouter  basename="demopwa">
        <div>
          <Route exact path="/" component={Home}/> 
        </div>
      </BrowserRouter>
    );
  }
}

export default App;