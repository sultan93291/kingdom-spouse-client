import { Outlet } from 'react-router-dom'
import Navbar from '../shared/Navbar'
import Footer from '../shared/Footer'

export default function HomeLayout() {
  return (
    <>
        <div>
            <Navbar/>
                <Outlet/>
            <Footer/>    
        </div>
    
    </>
  )
}
