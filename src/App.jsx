import Header from './components/Header'
import Footer from './components/Footer'
import Hero  from './components/Hero'
import Processpayments  from './components/Processpayments'
import ViewPayments  from './components/ViewPayments'
import Boost  from './components/Boost'
import UrlResult  from './components/UrlResult'
import Statistics  from './components/Statistics'
import {useState} from 'react'

import './App.css'

function App() {
const [Added, setAdded] = useState(false)

  return (
    <div className="App">
      <Header />
      <Hero />
      <Statistics />
      <Processpayments/>
      <ViewPayments/>
      <Boost />
      <Footer />
    </div>
  )
}

export default App
