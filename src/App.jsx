import Sidebar from "./assets/components/shared/Sidebar"
import Header from "./assets/components/shared/Header"
import Footer from "./assets/components/shared/Footer"
import { RiLineChartLine,RiHashtag } from "react-icons/ri"

function App() {

  return (
    <>
      <div className='grid lg:grid-cols-4 xl:grid-cols-6 min-h-screen'>
        <Sidebar/>
        <main className="bg-gray-100 lg:col-span-3 xl:col-span-5 p-8 overflow-y-scroll h-[100vh]">
          <Header/>
          <section className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-8 lg:grid-cols-2 xl:grid-cols-4 mt-10">
            {/* Card 1 */}
            <div className="bg-primary-100 rounded-xl p-8 text-gray-300 flex flex-col gap-6">
              <RiLineChartLine className="text-5xl "/>
              <h4 className="text-3xl">Earnings</h4>
              <div className="flex">
                <span className="text-5xl text-white">&euro; 8.350</span>
              </div>
              <span className="rounded-full bg-primary-300/80 w-auto p-2 text-center">+10% since last month</span>
            </div>
            
            {/* Card 2 */}
          <div className="p-4 drop-shadow-md bg-white rounded-xl flex flex-col gap-8 justify-between">
            
            <div className="flex gap-6 bg-primary-100/10 rounded-xl p-4">
              <span className="bg-primary-100 text-2xl text-gray-300 font-bold rounded-xl p-4">98</span>
              <div className="flex justify-center flex-col">
                <h3 className="font-bold ">Rank</h3>
                <p className="text-gray-500">In top 30%</p>
              </div>
            </div>

            <div className="flex flex-col gap-6 bg-primary-100/10 rounded-xl p-4">
              <div className="flex gap-6">
                <span className="bg-primary-100 text-2xl text-gray-300 font-bold rounded-xl p-4">32</span>
                <div className="flex justify-center flex-col">
                  <h3 className="font-bold">Projects</h3>
                  <p className="text-gray-500">8 this month</p>
                </div>
              </div>
              <div className="items gap-2 flex flex-wrap">
                <span className="text-gray-600 bg-primary-100/20 rounded-full py-1 px-4 text-[14px]">Mobile app</span>
                <span className="text-gray-600 bg-primary-100/20 rounded-full py-1 px-4 text-[14px]">Branding</span>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col justify-between md:col-span-2 lg:col-span-2 gap-4">
            <h2 className="text-2xl font-bold">Your projects</h2>
            {/* Card 3 */}
            <div className="drop-shadow-md bg-white flex flex-col p-8 rounded-xl gap-3">
              <div className="flex flex-row gap-4 mb-6">
                <img className="rounded-full object-cover w-[55px] h-[55px]" src="https://img.freepik.com/vector-gratis/plantilla-logotipo-granja_23-2149447092.jpg" alt="" />
                <div className="flex justify-center flex-col">
                  <h3 className="font-bold">Logo design for Beey</h3>
                  <p className="text-gray-500">1 day remaining</p>
                </div>
              </div>
              <div className="flex flex-row gap-4">
                <img className="rounded-full object-cover w-[55px] h-[55px]" src="https://img.freepik.com/vector-gratis/plantilla-logotipo-barbacoa-degradado_52683-66663.jpg" alt="" />
                <div className="flex justify-center flex-col">
                  <h3 className="font-bold">Logo rebranding SteakGrill Restaurant</h3>
                  <p className="text-gray-500">18 day remaining</p>
                </div>
              </div>
              <div className="text-right">
                <span className="hover:underline hover:text-primary-300]"><a href="#">See all projects</a></span>
              </div>
            </div>
          </div>
          </section>
          {/* Section 2  */}
          <section className="lg:grid grid-cols-2 gap-8 mt-10">
              <div className="grid-cols-1 grid gap-8 ">
                <h2 className="text-2xl font-bold">Recent invoices</h2>
                <div className="bg-white p-8 rounded-xl shadow-2xl mb-8 flex flex-col gap-8">
              {/* Card 1 */}
              <div className="grid grid-cols-1 xl:grid-cols-4 items-center gap-4 mb-4">
                <div className="col-span-2 flex items-center gap-4">
                  <img
                    src="https://img.freepik.com/foto-gratis/hombre-joven-hermoso-contento-camiseta-azul-que-senala-lado_1262-17845.jpg"
                    className="w-14 h-14 object-cover rounded-xl"
                  />
                  <div>
                    <h3 className="font-bold">Alexander Williams</h3>
                    <p className="text-gray-500">JQ Holdings</p>
                  </div>
                </div>
                <div>
                  <span className="bg-green-100 text-green-800 py-1 px-3 rounded-full font-medium">
                    Paid
                  </span>
                </div>
                <div>
                  <span className="font-bold">&euro; 1,200.87</span>
                </div>
              </div>
              {/* Card 2 */}
              <div className="grid grid-cols-1 xl:grid-cols-4 items-center gap-4 mb-4">
                <div className="col-span-2 flex items-center gap-4">
                  <img
                    src="https://img.freepik.com/foto-gratis/alegre-joven-deportista-posando-mostrando-pulgares-arriba-gesto_171337-8194.jpg"
                    className="w-14 h-14 object-cover rounded-xl"
                  />
                  <div>
                    <h3 className="font-bold">Jhon Philips</h3>
                    <p className="text-gray-500">Inchor Techs</p>
                  </div>
                </div>
                <div>
                  <span className="bg-red-100 text-red-800 py-1 px-3 rounded-full font-medium">
                    Late
                  </span>
                </div>
                <div>
                  <span className="font-bold">&euro; 12,998.88</span>
                </div>
              </div>
            </div>


              {/* Card  5*/}
              <div className="flex flex-col md:flex-row md:justify-between lg:flex-row lg:justify-between p-8 bg-primary-900 rounded-xl mb-8">
                <div className="flex items-center justify-between lg:w-[50%] md:w-[50%]">
                  <span><RiHashtag className="text-white text-4xl" /></span>
                  <div className="flex flex-col ml-4"> {/* Envoltura para icono y contenido */}
                    <h3 className="font-bold text-white">Engage with clients</h3>
                    <p className="text-white">Join slack channel</p>
                  </div>
                </div>
                <button className=" bg-primary-100 mt-8 text-white py-2 px-4 rounded-xl md:mt-0 lg:mt-0">
                  Join now
                </button>
              </div>


            </div>
            
            <div className="flex flex-col gap-8">
              <h2 className="text-2xl font-bold">Recommended projects</h2>
              {/* Card 6 */}
              <div className="drop-shadow-md p-8 bg-white rounded-xl flex flex-col gap-8">
                <div className="flex flex-col lg:flex-row xl:flex-row lg:justify-between lg:items-center">
                  <div className="flex flex-row flex-row-2 gap-4 ">
                    <img className="rounded-full object-cover w-[55px] h-[55px]" src="https://img.freepik.com/vector-premium/diseno-logotipo-concepto-creativo-dream-architecture_375539-16.jpg" alt="" />
                    <div className="flex justify-center flex-col">
                      <h3 className="font-bold">Dream Arquitechture</h3>
                      <p className="text-gray-500">Updated 10m ago</p>
                    </div>
                  </div>
                  <div>
                    <button className="w-auto justify-end lg:mt-0 mt-8 bg-primary-100 text-white py-2 px-4 rounded-full hover:bg-primary-300">Design</button>
                  </div> 
                </div>
                
                <div>
                  <h3 className="font-bold text-lg">Need a designer to form branding essentials for my business.</h3>
                  <p>Looking for a talented brand designer to create all the branding materials my new startup.</p>
                </div>

                <div className="flex justify-between flex-wrap gap-4 bg-primary-100/10 py-8 px-4 rounded-xl">
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl font-bold">8,700&euro;</span><span className="text-gray-500">/month</span>
                  </div>
                  <button className="rounded-full border-primary-100 border text-primary-100 px-4 py-2 hover:bg-primary-100 hover:text-white">Full time</button>
                </div>
              </div>
            </div>
            
          
          
          </section>

          </main>
        
      </div>
    </>
  )
}

export default App
