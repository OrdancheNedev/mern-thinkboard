import { Routes, Route } from "react-router"
import HomePage  from "../src/pages/HomePage"
import CreatePage from "../src/pages/CreatePage"
import NoteDetailPage from "../src/pages/NoteDetailPage"
import toast from "react-hot-toast"
const App = () =>{
    return (
        <div data-theme="forest">
         {/* <button onClick={() => toast.success("congrass")} className="text-red-500 p-4 bg-pink-300">Click me</button>     
       */}

        {/* <button className="btn">Button</button>
        <button className="btn btn-neutral">Neutral</button>
        <button className="btn btn-primary">Primary</button>
        <button className="btn btn-secondary">Secondary</button>
        <button className="btn btn-accent">Accent</button>
        <button className="btn btn-ghost">Ghost</button>
        <button className="btn btn-link">Link</button>        */}
            
        <Routes>
            <Route path="/" element={<HomePage/>}/>    
            <Route path="/create" element={<CreatePage/>}/>
            <Route path="/note/:id" element={<NoteDetailPage/>}/>      
        </Routes>    
        </div>

    )
}

export default App