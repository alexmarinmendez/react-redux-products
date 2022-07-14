import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Favourites from './components/Favourites/Favourites'
import SearchForm from './components/SearchForm/SearchForm'
import Product from './components/Product/Product';
import store from './redux/store'

const App = () => {
  console.log('store', store.productsLoaded);
  return (
    <Provider store={store}>
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<SearchForm />} />
        <Route path='/fav' element={<Favourites />} />
        <Route path='/detail/:productId' element={<Product />} />
      </Routes>
      </BrowserRouter>
    </Provider>
  )
}

export default App