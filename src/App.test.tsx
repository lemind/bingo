import React from "react"
import {describe, expect, test} from "vitest"
import {render, RenderResult} from "@testing-library/react"
import {act} from "react-dom/test-utils"
import App from "@/App"

let wrapper: RenderResult

describe("Results", () => {
  test("should change state label appropriately after get bingo", async () => {
    await act(async () => {
      wrapper = await render(<App />)
    })

    const bingoStateLabel = wrapper.getByTestId("bingoStateLabel")
    expect(bingoStateLabel.textContent).toBe("Good luck")

    const bingoCells = wrapper.getAllByTestId("bingoCell")

    await act(async () => {
      await bingoCells[0].click()
    })
    await act(async () => {
      await bingoCells[1].click()
    })
    await act(async () => {
      await bingoCells[2].click()
    })
    await act(async () => {
      await bingoCells[3].click()
    })
    await act(async () => {
      await bingoCells[4].click()
    })

    const bingoStateLabelAfter = wrapper.getByTestId("bingoStateLabel")
    expect(bingoStateLabelAfter.textContent).toBe("Bingoo!!")
  })
})
