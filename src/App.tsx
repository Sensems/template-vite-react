import { useState } from 'react'
import { Button } from 'antd'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="flex flex-col justify-center items-center h-screen">
        <div>
          <h1 className="text-3xl font-bold underline">Hello Vite, React and Tailwindcss!</h1>
        </div>
        <div className="card">
          <Button type="primary" onClick={() => setCount(count => count + 1)}>
            count is {count}
          </Button>
        </div>
      </div>
    </>
  )
}

export default App
