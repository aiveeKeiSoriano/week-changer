import { useState } from "react"

export default function App() {

  let [middleDate, setMiddleDate] = useState(new Date().getTime())

  function getDate(position) {
      let date = middleDate + ((position - 3) * 8.64e+7)
      return new Date(date).toDateString()
  }

  let dates = new Array(7).fill(null).map((el, i) => getDate(i))

  return(
      <div className="container">
          <button className="prev" onClick={() => setMiddleDate(p => p - ((8.64e+7) * 7))}>●</button>
          {dates.map(el => <div className={el === new Date().toDateString() ? "current date" : "date"}>{el.substr(4, 6)}</div>)}
          <button className="next" onClick={() => setMiddleDate(p => p + ((8.64e+7) * 7))}>●</button>
      </div>
  )
}