import Sidebar from "./assets/components/shared/Sidebar"

function App() {

  return (
    <>
      <div className='grid grid-cols-6 min-h-screen overflow-y-scroll'>
        <Sidebar/>
        <main>Content</main>
      </div>
    </>
  )
}

export default App
