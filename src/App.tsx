import './App.css'
import { BingoGrid } from './components/BingoGrid'
import { bingoData } from '@/bingoData'

function App() {


  return (
    <div className="App">
      <h1>Bingo</h1>
      <BingoGrid data={bingoData} />
    </div>
  )
}

export default App
