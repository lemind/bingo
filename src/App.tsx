import "./App.css"
import {BingoGrid} from "./components/BingoGrid"
import {bingoData} from "@/bingoData"
import {useState} from "react"
import {arrayShuffle} from "@/helper"

const BINGO_SIZE = 5
const BINGO_LABEL = "BINGO"

function App() {
  const [data, setData] = useState(bingoData)

  const shuffleDataHandle = () => {
    const bingoIndex = Math.floor(data.length / 2)
    const currData = [...data]
    currData.splice(bingoIndex, 1)

    const shuffled = arrayShuffle(currData)

    shuffled.splice(bingoIndex, 0, BINGO_LABEL)

    setData(shuffled)
  }

  return (
    <div className="App min-w-[360px] p-2">
      <h1>Bingo</h1>

      <button
        type="button"
        onClick={shuffleDataHandle}
        className="mt-4 inline-flex items-center justify-center gap-2 rounded-md border border-transparent bg-blue-500 py-3 px-4 text-sm font-semibold text-white transition-all hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      >
        Shuffle
      </button>

      <BingoGrid data={data} size={BINGO_SIZE} />
    </div>
  )
}

export default App
