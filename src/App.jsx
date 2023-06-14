// import React from 'react'
// import Homecrud from './Components/Homecrud'
// import Createuser from './Components/Createuser'
// import Users from './Components/Users'
// import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import Edituser from './Components/Edituser'

// const App = () => {
//   return (
//     <BrowserRouter>
//       <Homecrud/>
//       <Routes>
//         <Route path='/createuser' element={<Createuser/>}></Route>
//         <Route path='/users' element={<Users/>}></Route>
//         <Route path='/edit/:index' element={<Edituser/>}></Route>
//       </Routes>
//     </BrowserRouter>
//   )
// }

// export default App

import React from 'react';
import './index.css';
import Sidebar from './Components/Sidebar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Salad from './Components/Salad';
import Pizza from './Components/Pizza';
import Dessert from './Components/Dessert';

function App() {
  return (
    <div className="App" id="outer-container">
      <BrowserRouter>
        <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
        <div id="page-wrap">
          <h1 id='Title'>BHIVE Restaurant</h1>
        <Routes>
          <Route path='/salad' element={<Salad/>}></Route>
          <Route path='/pizza' element={<Pizza/>}></Route>
          <Route path='/dessert' element={<Dessert/>}></Route>
        </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;



