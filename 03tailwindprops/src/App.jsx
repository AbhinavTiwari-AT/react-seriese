import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Components/Card'

function App() {
  const [count, setCount] = useState(0)
  let myObj ={
    username: "abhinav",
    age: 22
  }
  return (
    <>
      <h1 className='bg-green-500 text-black p-4 rounded-md mb-4'>Tailwind test</h1>
      {/* <figure class="md:flebg-slate-100 rounded-xl p-8 dark:bg-slate-800">
  <img class="w-24 h-24 rounded-full mx-auto" src="https://images.pexels.com/photos/53977/eagle-owl-raptor-falconry-owl-53977.jpeg?cs=srgb&dl=pexels-pixabay-53977.jpg&fm=jpg" alt="" width="384" height="512"/>
  <div class="pt-6 text-center space-y-4">
    <blockquote>
      <p class="text-lg font-medium">
        “Tailwind CSS is the only framework that I've seen scale
        on large teams. It’s easy to customize, adapts to any design,
        and the build size is tiny.”
      </p>
    </blockquote>
    <figcaption class="font-medium">
      <div class="text-sky-500 dark:text-sky-400">
        Sarah Dayan
      </div>
      <div class="text-slate-700 dark:text-slate-500">
        Staff Engineer, Algolia
      </div>
    </figcaption>
  </div>
</figure> */}

<Card username ="chai Aur code" btnText="visitme"/>
<Card username="abhinav"/>
    </>
  )
}

export default App
