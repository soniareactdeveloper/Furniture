import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom'
import './App.css'
import HomePage from './Pages/HomePage'
import BuyPage from './Pages/BuyPage'
import Layoutt from './Layout/Layoutt'
import DetailsPage from './Pages/DetailsPage'

function App() {
 const route = createBrowserRouter (
  createRoutesFromElements(
    <Route>
      <Route path='/'         element={<Layoutt/>}>
        <Route index          element={<HomePage/>}/>
        <Route path='/buy'    element={<BuyPage/>}/>
        <Route path='/details' element={<DetailsPage/>}/>
      </Route>
    </Route>
  )
 )

  return (
   <>
     <RouterProvider router={route} />
   </>
  )
}

export default App
