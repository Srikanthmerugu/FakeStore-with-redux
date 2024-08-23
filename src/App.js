import React from 'react'
import './App.css'
import { RouterProvider,createBrowserRouter } from 'react-router-dom'
import Products from './pages/Products'
import ProductDetails from './pages/ProductDetails'
import ProductItem from './componets/ProductItem'
import 'bootstrap/dist/css/bootstrap.min.css';
import RootLayout from './pages/Root'



const router=createBrowserRouter([
{path:'/',
  element:<RootLayout />,
  children:[
    {index:true,element:<ProductItem />,
      loader:async()=>{
        const res=await fetch('https://fakestoreapi.com/products')
        const data=await res.json()
        console.log(data)
        return data
      }},
  
    {path:'/products/:id' , element:<ProductDetails />,
      loader:async({params})=>{
        const res=await fetch(`https://fakestoreapi.com/products/${params.id}`)
        const data=await res.json()
        console.log(data)
        return data
      }
    }
  ]
}


])

const App = () => {
  return (
    <>
    <RouterProvider router={router} />

    </>
  )
}

export default App



// import React from 'react'
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import Products from './pages/Products';
// import ProductDetails from './pages/ProductDetails';
// const App = () => {
//   return (
//     <div> 
//       <BrowserRouter>
//       <Routes>
//         <Route path='/' element={<Products />}></Route>
//         <Route path='/' element={<ProductDetails />}></Route>
//       </Routes>
//       </BrowserRouter>
//     </div>
//   )
// }
// export default App;