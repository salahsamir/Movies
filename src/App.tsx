import { RouterProvider } from "react-router-dom"
import { routes } from "./Utilis/Routes"

interface IProps{

}
const App=({}:IProps)=> {
  return (
     <>
     <RouterProvider router={routes} />
     </>
  )
}

export default App