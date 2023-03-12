import React from "react"
import {create} from "canvas-confetti"

type Props = {
  ref: React.RefObject<HTMLCanvasElement>
}

export const useConfetti = ({ref}: Props) => {
  if (!ref.current) return {shoot: () => {}}

  var myConfetti = create(ref.current, {
    resize: true,
    useWorker: true
  })
  const shoot = () => {
    myConfetti({
      particleCount: 300,
      spread: 300,
      gravity: 0.5
    })

    setTimeout(() => {
      myConfetti({
        particleCount: 600,
        spread: 600,
        gravity: 0.5
      })
    }, 500)

    setTimeout(() => {
      myConfetti({
        particleCount: 1000,
        spread: 1000,
        gravity: 0.5
      })
    }, 1000)
  }

  return {shoot}
}
