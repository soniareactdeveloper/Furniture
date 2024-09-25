import { Outlet } from "react-router-dom"
import Navbar from "../Components/Navbar/Navbar"


const Layoutt = () => {
  return (
    <div>
      <Navbar/>
      <Outlet/>
    </div>
  )
}

export default Layoutt