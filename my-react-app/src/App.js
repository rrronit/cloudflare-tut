import './App.css';
import { BrowserRouter, Route, Routes, Link } from "react-router-dom"
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<P />} />
          <Route path='/a' element={<A />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;




const P = () => {
  return (
    <div>page P
      <br />
      <Link to={"/a"}>Go to A</Link>
    </div>
  )
}





const A = () => {
  return (
    <div>page A
      <br />

      <Link to={"/"}>Go to P</Link>

    </div>

  )
}

