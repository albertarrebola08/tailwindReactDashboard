import Sidebar from "./assets/components/shared/Sidebar"

function App() {

  return (
    <>
      <div className='grid lg:grid-cols-4 xl:grid-cols-6 min-h-screen overflow-y-scroll'>
        <Sidebar/>
        <main className="lg:col-span-3 xl:col-span-5"></main>
      </div>
    </>
  )
}

export default App
