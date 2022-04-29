import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <button type="button" onClick={() => setCount((count) => count + 1)}>
        Count: {count}
      </button>
    </>
  )
}

export default App
