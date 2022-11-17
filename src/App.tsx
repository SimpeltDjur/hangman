import {Routes, Route, Link} from 'react-router-dom'
import Hangman from "./Hangman"

function App(){
  return(
    <>
    <nav>
      <ul style={{
      display: "flex",
      gap: "3rem"
    }}>
        <li>
          <Link to="">Logg in Page</Link>
        </li>
        <li>
          <Link to="/hangman">Hangman</Link>
        </li>
        <li>
          <Link to="">Silly game #2</Link>
        </li>
        <li>
          <Link to="">Silly game #3</Link>
        </li>
        <li>
          <Link to="">Silly game #4</Link>
        </li>
        <li>
          <Link to="">Silly game #5</Link>
        </li>
      </ul>
    </nav>
    <Routes>
      <Route path="/hangman" element={<Hangman />}/>
    </Routes>
    </>
    
  )
}

export default App