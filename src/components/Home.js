import React, { useState, useEffect, useLayoutEffect} from 'react';
import { Link } from "react-router-dom";
import Pokeball from "../pokeball.png";
import { connect } from "react-redux";
import MyLink from "./Link";

const Home = ({ posts }) => {

  // useEffect(() => {
  //    
  //   console.log("This is a main statement in UseEffect ---> Home.js Component")    
  //   return () => {
  //    
  //     console.log("This is a return statement in UseEffect ---> Home.js Component")  
  //   };
  // }, []);
  
  
  // useEffect(() => {
  //    
  //   console.log("This is a  2 main statement in UseEffect ---> Home.js Component")    
  //   return () => {
  //    
  //     console.log("This is a 2 return statement in UseEffect ---> Home.js Component")  
  //   };
  // },[]);


  useEffect(() => {
    console.log("USE EFFECT FUNCTION TRIGGERED");
    
    setTimeout(() => {
       console.log("SET TIME OUT CALLED AFTER 3 SECONDS");
    }, 1000)
});
useLayoutEffect(() => {
    console.log("USE LAYOUT EFFECT FUNCTION TRIGGERED");
});

   
const cities = ["Kampala", "Nairobi", "Lagos"];
   console.log(...cities);
   console.log(cities);
  
// function someFn() {   
//   if (true) {
//         //defined locally
//     //Its scope ends where curly braces ends 
//     var localVar = 1000;
//     console.log(localVar)      //ok
//   } 
//   console.log(localVar)      //ok
//    function nested() {         
//     console.log(localVar)      //ok
//   } 
// } 
// //console.log(localVar) //Error
  
  
  const postList = posts.length ? (
    posts.map((post) => {
      return (
        <div className="post card" key={post.id}>
       <img src={Pokeball} alt="No Image Found" />
       <div className="card-content">
         <Link to={"/" + post.id}>
           <span className="card-title red-text">{post.title}</span>
         </Link>
         <p>{post.body}</p>
       </div>
     </div>
   );
 })
  ) : (
    <div className="center">No Posts to Display</div>
  );

  return (
    <div>
      <div className="container home">
        <h4 className="center">Prakhar Agarwal </h4>
        {postList}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    posts: state.posts,
  };
};

export default connect(mapStateToProps)(Home);
