// import React, { Component } from "react";
// import "./css/search.css";

// class SearchResult extends Component {
//   render() {
//     return (
//       <React.Fragment>
//         <section id="section-1">
//           <div className="container">
//             <div className="search-header">
//               <h2>Search Results</h2>
//               <div className="search-by">
//                 <div className="search-by-1">
//                   <select name="select">
//                     <option selected>Sort By</option>
//                   </select>
//                 </div>

//                 <div className="search-by-1">
//                   <select name="select">
//                     <option selected>Order By</option>
//                   </select>
//                 </div>

//                 <div className="search-by-1">
//                   <select name="select">
//                     <option selected>Show Post</option>
//                   </select>
//                 </div>
//               </div>
//             </div>

//             <div className="search-box">
//               <form>
//                 <input
//                   id="valueOne"
//                   placeholder="Local Dishes"
//                   type="text"
//                   name="event"
//                 />
//                 <input
//                   type="text"
//                   name="location"
//                   id="valueTwo"
//                   placeholder="Abuja"
//                 />
//                 <input
//                   type="text"
//                   name="date"
//                   id="valueThree"
//                   placeholder="Restaurant"
//                 />
//                 <button type="submit">
//                   <i className="fas fa-search"></i>
//                 </button>
//               </form>
//             </div>
//           </div>
//         </section>

//         <section id="section-2">
//           <div className="container">
//             <div className="yellow-grid">
//               <div className="yellow-result" id="yellowResult">
//                 <h3 id="recordFound"></h3>

//                 <div className="result-grid">
//                   <div className="result-img">
//                     <img
//                       src={process.env.PUBLIC_URL + "/images/food4.png"}
//                       alt="Search"
//                     />
//                   </div>
//                   <div className="result-desc">
//                     <div className="desc-inner">
//                       <div className="inner-1">
//                         <span>Restaurant</span>
//                         <span>
//                           <i className="fas fa-check"></i> verified
//                         </span>{" "}
//                         <br />
//                         <h3>Iya Basira</h3>
//                         <p>
//                           <i className="fas fa-phone"></i> 09032783652
//                         </p>
//                         <p>
//                           <i className="fas fa-envelope"></i>{" "}
//                           iyabasirabase@gmail.com
//                         </p>
//                       </div>
//                       <div className="inner-2">
//                         <img
//                           src={process.env.PUBLIC_URL + "/images/food1.png"}
//                           alt="Food"
//                         />
//                         <img
//                           src={process.env.PUBLIC_URL + "/images/food2.png"}
//                           alt="Food"
//                         />
//                         <img
//                           src={process.env.PUBLIC_URL + "/images/food3.png"}
//                           alt="Food"
//                         />
//                         <img
//                           src={process.env.PUBLIC_URL + "/images/food4.png"}
//                           alt="Food"
//                         />
//                       </div>
//                     </div>
//                     <div className="items">
//                       <span>Number of views: 23</span>
//                       <span>Member Since: April 2020</span>
//                       <span>
//                         <strong>Status:</strong> Busy
//                       </span>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>
//       </React.Fragment>
//     );
//   }
// }

// export default SearchResult;
