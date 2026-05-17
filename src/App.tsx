import { useState } from 'react'
import './App.css'
import './css/BackgroundVideo.css'
import { Providers } from './Providers/Providers'
import { LoadingScreen } from './Components/LoadingScreen'

function App() {
  const [loaded, setLoaded] = useState(false)

  return (
    <>
      {!loaded && <LoadingScreen onDone={() => setLoaded(true)} />}
      <Providers />
    </>
  )
}

export default App
