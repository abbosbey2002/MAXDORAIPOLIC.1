
import { NavLink } from 'react-router-dom';
import Navbar from './component/Navbar';

import Service from './component/Service';
import Footer from './component/Footer';
import { useState } from 'react';
import Osago from './page/osago/GetInsurence';
import GetAccidentInsur from './page/accident/GetAccidentInsur';
import "../public/styles/general.scss"
import Loading from './component/loading/loading';


function App() {

  const [service, setService] = useState('osago');


  return (
    <div className='bg-[#058668] m' style={{minHeight: '100vh'}}>
    <Navbar />
    {service === "osago" && <Osago />}
    {service === "accident" && <GetAccidentInsur />}
    
    <Service />
    <Loading />
    <Footer />
    </div>
  )
}

export default App
