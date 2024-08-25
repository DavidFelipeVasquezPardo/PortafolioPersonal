import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { Header } from './Components/Header.jsx';
import { Footer } from './Components/Footer.jsx';

import { AboutMe } from './Pages/AboutMe.jsx';

export function Router(){  

    return(

        
    <div className='flex flex-col justify-between w-full h-auto bg-gradient-to-t from-violet-950 via-blue-950 to-violet-950'>

        {/* //---------------------------------------HeaderPage----------------------------------// */}

        <div className='w-full h-auto'>

            <Header/>

        </div>

        {/* //---------------------------------------RouterPages---------------------------------// */}

        <div className='w-full h-auto'>

        <Routes>
            <Route path='/' element={<AboutMe/>}> </Route>
        </Routes>

        </div>

        {/* //---------------------------------------FooterPage----------------------------------// */}

        <div className='w-full h-auto'>

            <Footer></Footer>

        </div>

        {/* //----------------------------------------------------------------------------------// */}

    </div>

    )

}