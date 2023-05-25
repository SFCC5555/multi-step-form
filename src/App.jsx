import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import './App.css'
import { Buttons } from './components/Buttons';
import { NavBarDesktop } from './components/NavBarDesktop';
import { NavBarMobile } from './components/NavBarMobile';
import { NavBar } from './components/NavBar';
import { YourInfo } from './components/Pages/YourInfo';
import { SelectPlan } from './components/Pages/SelectPlan';
import { AddOns } from './components/Pages/AddOns';
import { Summary } from './components/Pages/Summary';
import { NotFound } from './components/Pages/NotFound';
import { AppContextProvider } from './context/AppContext';


function App() {

  return (
    <BrowserRouter>
      <NavBarMobile />
      <div className='mainContainer bg-white px-5 py-8 sm:py-5 w-full mx-5 rounded-md  sm:h-5/6 sm:mx-20 sm:max-w-2xl gap-5 flex z-10 sm:relative'>
        <NavBarDesktop />
        <NavBar />
        <div className='flex flex-col items-center justify-between sm:py-5 sm:px-2 md:px-12 w-full' >
          <AppContextProvider>

            <Routes>
              <Route path='/' element={<Navigate to='/YOUR-INFO'/>} />
              <Route path='/YOUR-INFO' element={<YourInfo />}/>
              <Route path='/SELECT-PLAN' element={<SelectPlan />}/>
              <Route path='/ADD-ONS' element={<AddOns />}/>
              <Route path='/SUMMARY' element={<Summary />}/>
              <Route path='*' element={<NotFound />}/>
            </Routes>
            <Buttons />
          </AppContextProvider>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
