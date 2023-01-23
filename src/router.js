import React from 'react'
import {BrowserRouter , Routes ,Route} from 'react-router-dom'

import App from './App'
function Routers() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path='/' exact element={<App/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default Routers