import { Route, Routes } from 'react-router'
import './App.css'
import PageNotFound from './components/PageNotFound/PageNotFound'
import Header from './components/Header/Header'
import 'bootstrap/dist/css/bootstrap.min.css'
import ProductDashboard from './components/ProductDashboard/ProductDashboard'
import ProductEdit from './components/ProductEdit/ProductEdit'
import ProductAdd from './components/ProductAdd/ProductAdd'

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<ProductDashboard />}></Route>
        <Route path='/add' element={<ProductAdd />}></Route>
        <Route path='/edit/:id' element={<ProductEdit />}></Route>
        <Route path='*' element={<PageNotFound />}></Route>
      </Routes>
    </>
  )
}

export default App