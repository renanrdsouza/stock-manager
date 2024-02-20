import { RouterProvider } from 'react-router-dom'
import { router } from "./router"
import './App.css'

function App() {

  return (
    <div className="my-3 mx-7">
      <RouterProvider router={router}/>
    </div>
  )
}

export default App
