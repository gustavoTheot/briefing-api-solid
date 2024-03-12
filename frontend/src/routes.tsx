import {Route, Routes} from 'react-router-dom'
import { Register } from "./pages/Register"
import { View } from './pages/View'

export function Router(){
    return(
       <Routes>
            <Route path='/' element={<Register />}/>
            <Route path='/view' element={<View />}/>
       </Routes>
    )
}