# React + Tailwind (Vite)

This is an example dashboard in order to improve my skills and knowledge of React and Tailwind using the environment "Vite".

## Technologies

### React
I have used React mainly because of its ease of component layout.

#### States
Only used react states for a small functionality in the Sidebar (to change de visibility in responsive).

    /*variable and setter, declaring initial state*/ 
    const Sidebar = () => {
        const [showMenu,setShowMenu] = useState(false);
    
    /*into the div classname*/ 
    ${showMenu ? 'left-0' : '-left-full'}

    /*and then in the mobile button*/
    <button onClick={() =>setShowMenu(!showMenu)} className='z-50 lg:hidden fixed right-4 bottom-4 text-2xl text-white        bg-primary-900 p-3 rounded-full'>
        {showMenu ? <RiCloseFill/> : <RiMore2Fill/>}
    </button>

#### React icons
The library I have used for this dashboard is React Icons (specifically Remix Icons) <br>
https://react-icons.github.io/react-icons/icons?name=ri  <br>
<img src="https://res.cloudinary.com/practicaldev/image/fetch/s--rveCztiT--/c_imagga_scale,f_auto,fl_progressive,h_500,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/i/ke6hqywlnr8b3r896hii.png" width="170px"> 


In code:

    import { RiHome3Line,RiFileCopyLine, RiWalletLine, RiBarChartLine, RiMore2Fill,RiCloseFill } from "react-  icons/ri";

### Tailwind CSS
<img  width="170px" src="https://miro.medium.com/v2/resize:fit:1400/1*oPL8C-i04sqAUoOS_da9aA.jpeg" width="170px">
For the dashboard styles I have used Tailwind. One of the most famous CSS frameworks.

It has allowed me to create all my custom components and control the responsive behavior in a simple and effective way.

Example in code:

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

### Vite
![image](https://github.com/albertarrebola08/tailwindReactDashboard/assets/104431726/583ccc46-1681-4b77-989c-b1e998d21a78)

I have chosen Vite as my development environment for this React and Tailwind CSS dashboard project due to its outstanding speed in project generation and hot reloading.
I prefer Vite because of this reasons:

Certainly, here are the translated points:

1. **Fast Package Installation**: Vite uses more efficient import schemes that enable faster package installation, particularly in large projects with many dependencies.

2. **Faster Hot-Reloading**: Vite's hot-reloading is notably faster than in other development environments, speeding up the preview of changes made.

3. **Native Support for ECMAScript Modules (ESM)**: Vite allows you to leverage JavaScript's ESM (ECMAScript Modules) natively.

4. **Simplified Configuration**: Vite's configuration is based on an easy-to-understand and modify _vite.config.js_ file, simplifying project customization and setup.

