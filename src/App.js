import React from 'react'
 import { Routes, Route } from 'react-router-dom'
// import Home from './components/Home'
// import Header from './components/Header'
// import Launch from './components/Launch'
// import LaunchIndex from './components/LaunchIndex'
// import LaunchShoe from './components/LaunchShoe'
import { Grid } from '@material-ui/core'
import Navbar from './Navbar'
import Home from './Home'
import Contact from './Contact'
import About from './About'


function App() {

  return (
    
    <Grid container direction="column">
      <Grid item><Navbar /></Grid>
      <Routes>

        <Route path="/" element={<Home />} /> 
        <Route path="contact" element={<Contact />} />
        <Route path="about" element={<About />} />     


      </Routes>
    </Grid>
    // <Routes>
    //   <Header />
    //   <Route path="/" element={<Home />}></Route>
    //   <Route path="launch" element={<Launch />}>
    //     <Route path="/" element={<LaunchIndex />}></Route>
    //     <Route path=":slug" element={<LaunchShoe />}></Route>
    //   </Route>
    // </Routes>
  )
}
export const NikeShoes ={
  "nike-shoe-pink": {
    name: 'Nike Air Max 270',
    img: "http://nike-png-host.surge.sh/nike-shoe-png-nike-running-shoes-png-image-1276.png",
    price: '$114'
  },
  "nike-shoe-blue": {
    name: 'Nike Tanjun',
    img: "http://nike-png-host.surge.sh/nike-shoe-png-nike-running-shoes-png-image-1277.png",
    price: '$220'
  },
  "nike-shoe-green": {
    name: 'Nike Air Force',
    img: "http://nike-png-host.surge.sh/nike-shoe-png-nike-shoes-png-transparent-image-512.png",
    price: '$340'
  },
  "nike-head-green": {
    name: 'Nike O2 pro',
    img: "https://png.pngitem.com/pimgs/s/555-5550642_nike-shoe-png-transparent-png.png",
    price: '$280'
  }
}

export default App
