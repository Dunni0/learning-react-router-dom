import {  Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";

import Home from "./componets/Home";
import About from "./componets/About";
import Header from "./layouts/HeaderLayhout";
import HelpLayout from "./layouts/HelpLayout";
import Faq from "./componets/Faq";
import Contact from "./componets/Contacts";
import NotFound from "./componets/NotFound";
import CareersLayout from "./layouts/CareersLayout"
import Careers, { careersLoader } from "./componets/careers/Careers";
import CareerDeets, { CareerDeetsLoader } from "./componets/careers/CareerDeets";
import CareerError from "./componets/careers/CareerError";

// the layouts serves as a parent router

const router = createBrowserRouter(
  createRoutesFromElements(
         <Route path="/" element ={<Header />}> 

            <Route index element={<Home /> }/>
            <Route path="about" element={<About /> }/>

          <Route path="help" element = {<HelpLayout />}>
            <Route  path="faq" element = {<Faq />} />
            <Route  path="contact" element ={<Contact />}/>
          </Route>

          <Route path="careers" element={<CareersLayout />}  errorElement={<CareerError />}> 
            <Route index element={<Careers />} loader={careersLoader}/>
            <Route path=":id" element={<CareerDeets />} loader={CareerDeetsLoader}/> 
          </Route>

          <Route path="*" element={<NotFound />}/>
          
          </Route>
  )
)

function App() {
  return (
       <RouterProvider router={router} />
  );
}

export default App;
