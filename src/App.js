import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Hocloding from "./Components/HocLoading/Hocloding";
import MovieApp from "./Components/MovieApp/MovieApp";


const Movieloading=Hocloding(MovieApp);
class App extends Component {
    state={
  loading:true
    }
    
  componentDidMount=()=>{
    setTimeout(()=>{
    this.setState({
      loading:!this.state.loading
    })
},10000);}

  render() {
    return (
      <div className="App">
  
    <Movieloading loading={this.state.loading} />
      </div>
    );
  }
}

export default App;
