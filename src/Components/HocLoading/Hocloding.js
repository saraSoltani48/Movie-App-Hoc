
import React from 'react';
import "./style.css";
import {Spinner} from "reactstrap";

  const Hocloding = MovieApp=> {
  return function LoadingComponent({ loading }) {

   return  !loading?<MovieApp />:
          <div className='spinner'>
    
          <>
      <Spinner animation="border" variant="success" size="sm" />
      <Spinner animation="border" />
      <Spinner animation="grow" size="sm" />
      <Spinner animation="grow" />
      <p > loading...</p>
    </>
         
    </div>
//     if (!loading) return (<MovieApp />);


//     return (
     
    
//       <div className='spinner'>

//       <>
//   <Spinner animation="border" variant="success" size="sm" />
//    <Spinner animation="border" />
//   <Spinner animation="grow" size="sm" />
//   <Spinner animation="grow" />
//      <p class> loading...</p>
//  </>
     
// </div>
    

  }
  }
export default Hocloding;



