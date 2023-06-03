import Alert from './components/Alert'
import Header from './components/Header'
import Section from './components/section'
import Footer from './components/Footer'
import './index.css'

function App() {

  return (
    <div className='h-screen flex flex-col gap-5'>
      <Header />
      <Section />
      <Footer />
    </div>
  )
}

export default App
