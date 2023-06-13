
import './App.css';
import React, { useState } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';



export default function App() {
  const [progress, setprogress] = useState(0)
 
  const setProgress = (progress)=>{
setprogress(
  progress
)
  }
  //const api='300ea027c1034990a403fcb466b607a9';
   const api='cbda991ab4c5455b909e1cb546250d08';
   const pageSize=6;
  
    return (
      <React.Fragment>
        <BrowserRouter>
        <LoadingBar
        color='#f11946'
        progress={progress} />
        <Navbar/>
        <Routes>
         <Route exact path="/" element={<News setProgress={setProgress}key='general' pageSize={pageSize} api={api} country='us' category={'general'}/>} />
         <Route exact path="/business" element={<News setProgress={setProgress}pageSize={pageSize} api={api} key='business' country={'us'} category='business'/>} />
         <Route exact path="/entertainment" element={<News setProgress={setProgress}pageSize={pageSize} api={api} key='entertainment' country={'us'} category={'entertainment'}/>} />
         <Route exact path="/general" element={<News setProgress={setProgress}pageSize={pageSize} api={api} country={'us'} key='general' category={'general'}/>} />
         <Route exact path="/health" element={<News setProgress={setProgress}pageSize={pageSize} api={api} country={'us'} key='health' category={'health'}/>} />
         <Route exact path="/science"element={<News setProgress={setProgress}pageSize={pageSize} api={api} country={'us'} key='science' category={'science'}/>} />
         <Route exact path="/sports" element={<News setProgress={setProgress}pageSize={pageSize} api={api} country={'us'} key='sports' category={'sports'}/>} />
         <Route exact path="/technology" element={<News setProgress={setProgress}pageSize={pageSize} api={api} key='technology' country={'us'} category={'technology'}/>} />
        </Routes>
    
       </BrowserRouter>
      </React.Fragment>
      
    )

} 

