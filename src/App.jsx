
import { Suspense } from 'react'
import './App.css'
import Bottols from './Components/Bottles'
import Bottles from './Components/Bottles'

const bottlesPromise = fetch('./bottle.json').then(res => res.json())


function App() {

  return (
    <>
      <h1>Buy Awesome Water Bottle </h1>

      <Suspense fallback={<h2>Bottles are loading......</h2>}>
        <Bottles bottlesPromise={bottlesPromise}></Bottles>
      </Suspense>
    </>
  )
}

export default App
