import "./App.css"
import {BingoGrid} from "./components/BingoGrid"
import {bingoData} from "@/bingoData"

const BINGO_SIZE = 5

function App() {
  return (
    <div className="App">
      <h1>Bingo</h1>
      <BingoGrid data={bingoData} size={BINGO_SIZE} />
    </div>
  )
}

export default App
