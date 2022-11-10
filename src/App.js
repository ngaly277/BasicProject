
// TOURS PROJECT
// import React, { useState, useEffect } from "react";
// import Loading from "./Loading";
// import Tours from "./Tours";
// // ATTENTION!!!!!!!!!!
// // I SWITCHED TO PERMANENT DOMAIN
// const url = "https://course-api.com/react-tours-project";
// function App() {
//   const [loading, setLoading] = useState(true);
//   const [tours, setTours] = useState([]);

//   const removeTour = (id) => {
//     const newTour = tours.filter(tour => tour.id !== id);
//     setTours(newTour);
//   }

//   const fetchTours = async () => {
//     setLoading(true);

//     try {
//       const response = await fetch(url);
//       const tours = await response.json();
//       setLoading(false);
//       setTours(tours);
//     } catch (error) {
//       setLoading(false);
//       console.log(error);
//     }
//   }

//   useEffect(() => {
//     fetchTours();
//   }, [])

//   if (loading) {
//     return <main>
//       <Loading />
//     </main>
//   }

//   if (tours.length === 0) {
//     return <main>
//       <div className="title">
//         <h2>no tours left</h2>
//         <button className="btn" onClick={fetchTours}>refresh</button>
//       </div>
//     </main>
//   }
//   return <main>
//     <Tours tours={tours} removeTour={removeTour} />
//   </main>;
// }

// export default App;




// REVIEWS PROJECT
// import React from "react";
// import Review from "./Review";
// function App() {
//   return <main>
//     <div className="container">
//       <div className="title">
//         <h2>our reviews</h2>
//         <div className="underfine"></div>
//       </div>
//       <Review />
//     </div>
//   </main>;
// }

// export default App;



// Accordion Project
// import React, { useState } from "react";
// import data from "./dataAccordion";
// import SingleQuestion from "./Question";
// function App() {
//   const [questions, setQuestions] = useState(data);
//   return (
//     <main>
//       <div className="container">
//         <h3>questions and answers about login</h3>
//         <section className="info">
//           {questions.map((question) => {
//             return <SingleQuestion key={question.id} {...question} />;
//           })}
//         </section>
//       </div>
//     </main>
//   );
// }

// export default App;



// Menu Project
// import React, { useState } from "react";
// import Menu from "./Menu";
// import Categories from "./Categories";
// import items from "./dataMenu";

// const allCategories = ['all', ...new Set(items.map(item => item.category))];


// function App() {
//   const [menu, setMenu] = useState(items);
//   const [categories, setCategories] = useState(allCategories);

//   const filterItems = (category) => {
//     if (category === 'all') {
//       setMenu(items);
//       return;
//     }
//     const newItems = items.filter(item => item.category === category)
//     setMenu(newItems)
//   }

//   return <main>
//     <section className="menu section">
//       <div className="title">
//         <h2>our menu</h2>
//         <div className="underline"></div>
//       </div>
//       <Categories filterItems={filterItems} categories={categories} />
//       <Menu items={menu} />
//     </section>
//   </main>;
// }

// export default App;




// Tab Project
// import React, { useState, useEffect } from "react";
// import { FaAngleDoubleRight } from "react-icons/fa";

// const url = "https://course-api.com/react-tabs-project";
// function App() {
//   const [jobs, setJobs] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [value, setValue] = useState(0);

//   const fetchData = async () => {
//     const response = await fetch(url);
//     const data = await response.json();
//     setJobs(data);
//     setLoading(false);
//   }

//   useEffect(() => {
//     fetchData();
//   }, [])

//   if (loading) {
//     return <section className="section loading">
//       <h1>Loading...</h1>
//     </section>
//   }

//   const { company, dates, duties, title } = jobs[value];
//   return <section className="section">
//     <div className="title">
//       <h2>experience</h2>
//       <div className="underline"></div>
//     </div>
//     <div className="jobs-center">
//       <div className="btn-container">
//         {jobs.map((job, index) => {
//           return <button className={`job-btn ${index === value && 'active-btn'}`} key={job.id} onClick={() => setValue(index)} >
//             {job.company}
//           </button>
//         })}
//       </div>
//       <article className="job-info">
//         <h3>{title}</h3>
//         <h4>{company}</h4>
//         <p className="job-date">{dates}</p>
//         {duties.map((duty, index) => {
//           return <div className="job-desc" key={index}>
//             <FaAngleDoubleRight className="job-icon" />
//             <p>{duty}</p>
//           </div>
//         })}
//       </article>
//     </div>
//   </section>
// }

// export default App;




// Slider Project
// import React, { useState, useEffect } from "react";
// import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
// import { FaQuoteRight } from "react-icons/fa";
// import data from "./dataSlider";
// function App() {
//   const [people, setPeople] = useState(data);
//   const [index, setIndex] = useState(0);

//   useEffect(() => {
//     const lastIndex = people.length - 1;
//     if (index < 0) {
//       setIndex(lastIndex)
//     }
//     if (index > lastIndex) {
//       setIndex(0)
//     }
//   }, [index, people]);

//   useEffect(() => {
//     let slider = setInterval(() => {
//       setIndex(index + 1);
//     }, 3000)
//     return () => clearInterval(slider);
//   }, [index])

//   return <section className="section">
//     <div className="title">
//       <h2><span>/</span>reviews</h2>
//     </div>
//     <div className="section-center">
//       {people.map((person, personIndex) => {
//         const { id, image, name, title, quote } = person;
//         let position = "nextSlide";
//         if (personIndex === index) {
//           position = "activeSlide";
//         }
//         if (personIndex === index-1 || (index === 0 && personIndex === people.length - 1)) {
//           position = 'lastSlide';
//         }
//         return <article key={id} className={position}>
//           <img src={image} alt="" className="person-img" />
//           <h4>{name}</h4>
//           <p className="title">{title}</p>
//           <p className="text">{quote}</p>
//           <FaQuoteRight className="icon" />
//         </article>
//       })}

//       <button className="prev" onClick={() => setIndex(index-1)}>
//         <FiChevronLeft />
//       </button>
//       <button className="next" onClick={() => setIndex(index+1)}>
//         <FiChevronRight />
//       </button>

//     </div>
//   </section>;
// }

// export default App;





// Lorem Ipsum Project
// import React, { useState } from "react";
// import data from "./dataLorem";
// function App() {
//   const [count, setCount] = useState(0);
//   const [text, setText] = useState([]);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     let amount = parseInt(count);
//     if (count <= 0) {
//       amount = 1;
//     }
//     if (count > 8) {
//       amount = 8;
//     } 
//     console.log(amount);
//     setText(data.slice(0, amount));
//   };

//   return <section className="section-center">
//     <h3>tired of boring lorem ipsum?</h3>
//     <form className="lorem-form" onSubmit={handleSubmit}>
//       <label htmlFor="amount">paragraphs: </label>
//       <input type="number" name="amount" id="amount" value={count} onChange={(e) => setCount(e.target.value)} />
//       <button type="submit" className="btn" >generate</button>
//     </form>
//     <article className="lorem-text">
//       {text.map((item, index) => {
//         return <p key={index}>{item}</p>
//       })}
//     </article>
//   </section>;
// }

// export default App;





// Color Generator Project
// import React, { useState } from "react";
// import SingleColor from "./SingleColor";

// import Values from "values.js";

// function App() {
//   const [color, setColor] = useState("");
//   const [error, setError] = useState(false);
//   const [list, setList] = useState(new Values('#f15025').all(10));

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     try {
//       let colors = new Values(color).all(10);
//       setList(colors);
//       setError(false);
//     } catch (error) {
//       setError(true);
//     }
//   }

//   return (
//     <>
//       <section className="container">
//         <h3>color generator</h3>
//         <form onSubmit={handleSubmit} >
//           <input type="text" value={color} onChange={(e) => setColor(e.target.value)} placeholder="#f15025" className={`${error ? 'error' : null}`} />
//           <button className="btn" type="submit">submit</button>
//         </form>
//       </section>
//       <section className="colors">
//         {list.map((color, index) => {
//           return <SingleColor key={index} {...color} index={index} hexColor={color.hex} />
//         })}
//       </section>
//     </>
//   );
// }

// export default App;



// Grocery Bud Project
// import React, { useState, useEffect } from "react";
// import List from "./List";
// import Alert from "./Alert";


// const getLocalStorage = () => {
//   let list = localStorage.getItem('list');
//   if (list) {
//     return JSON.parse(localStorage.getItem('list'))
//   } else {
//     return []
//   }
// }

// function App() {
//   const [name, setName] = useState('');
//   const [list, setList] = useState(getLocalStorage());
//   const [isEditing, setIsEditing] = useState(false);
//   const [editID, setEditID] = useState(null);
//   const [alert, setAlert] = useState({show: false, msg: "", type: ''});

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!name) {
//       // display alert
//       showAlert(true, "Please enter value", 'danger');
//     }
//     else if (name && isEditing) {
//       // deal with edit
//       setList(list.map(item => {
//         if (item.id === editID) {
//           return { ...item, title: name}
//         }
//         return item
//       }))
//       setName('')
//       setIsEditing(false)
//       setEditID(null)
//       showAlert(true, 'value changed', 'success')
//     }
//     else {
//       // show alert
//       showAlert(true, 'item added to the list', 'success')
//       const newItem = { id: new Date().getTime().toString(), title: name }
//       setList([...list, newItem]);
//       setName('');
//     }
//   }

//   const showAlert = (show = false, msg = '', type = '') => {
//     setAlert({ show, msg, type });
//   }

//   const clearList = () => {
//     showAlert(true, 'empty list', 'danger');
//     setList([]);
//   }

//   const removeItem = (id) => {
//     showAlert(true, 'item removed', 'danger');
//     setList(list.filter(item => item.id !== id));
//   }

//   const editItem = (id) => {
//     const specificITem = list.find((item) => item.id === id)
//     setIsEditing(true);
//     setEditID(id);
//     setName(specificITem.title);
//   }

//   useEffect(() => {
//     localStorage.setItem('list', JSON.stringify(list))
//   }, [list])

//   return (
//     <section className="section-center">
//       <form onSubmit={handleSubmit} className="grocery-form">
//         {alert.show && <Alert {...alert} removeAlert={showAlert} list={list} />}
//         <h3>grocery bud</h3>
//         <div className="form-control">
//           <input
//             type="text"
//             className="grocery"
//             placeholder="e.g: eggs"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//           />
//           <button type="submit" className="submit-btn">
//             {isEditing ? "edit" : "submit"}
//           </button>
//         </div>
//       </form>
//       {list.length > 0 && (
//         <div className="grocery-center">
//           <List items={list} removeItem={removeItem} editItem={editItem} />
//           <button className="clear-btn" onClick={clearList}>clear items</button>
//         </div>
//       )}
//     </section>
//   );
// }

// export default App;





// Navbar Project
// import React from "react";
// import Navbar from "./Navbar";
// function App() {
//   return (
//     <>
//       <Navbar />
//     </>
//   );
// }

// export default App;




// Sidebar Project
// import React from "react";
// import Modal from "./Modal";
// import Sidebar from "./Sidebar";
// import Home from "./Home";
// function App() {
//   return (
//     <>
//       <Home />
//       <Modal />
//       <Sidebar />
//     </>
//   );
// }

// export default App;




// Stripe Project
// import React from "react";
// import NavbarStripe from "./NavbarStripe";
// import Hero from "./Hero";
// import SidebarStripe from "./SidebarStripe";
// import Submenu from "./Submenu";
// function App() {
//   return (
//     <>
//       <NavbarStripe />
//       <Hero />
//       <SidebarStripe />
//       <Submenu />
//     </>
//   );
// }

// export default App;




// Cart Project
import React from "react";
import { useGlobalContext } from "./context";

// components
import Navbar from "./NavbarCart";
import CartContainer from "./CartContainer";
// items

function App() {
  const { loading } = useGlobalContext();

  if (loading) {
    return (
      <div className='loading'>
        <h1>Loading...</h1>
      </div>
    )
  }
  
  return (
    <main>
      <Navbar />
      <CartContainer />
    </main>
  );
}

export default App;