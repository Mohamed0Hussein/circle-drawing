import {useState} from "react";

function App() {
  const [points,setPoints] = useState([])
  const [undonePoints,setUndonePoints] = useState([])

  function undoLastPoint(){
    const newPoints = points
    const lastPoint = newPoints.pop()
    setUndonePoints([...undonePoints,lastPoint])
  }
  function redoPoints(){
    if(undonePoints.length === 0){
      return
    }
    const newUndonePoints = undonePoints
    const redoPoint = newUndonePoints.pop()
    setPoints([...points,redoPoint])

  }
  function handleClick(e){
    const {pageX,pageY} = e

    setPoints([...points,{x:pageX,y:pageY}])
    console.log(points)
  }
  return(
    <div className="h-screen w-screen">

      <div className="h-5/6"  onClick={handleClick}>
        {points.map((point) => {
          return (
            <div style={{left : `${point.x - 10}px`,top : `${point.y - 10}px`}} className={`rounded-full bg-black w-5 h-5 inline-block absolute`}></div>
            )
          })}
      </div>
        <div className="flex flex-row justify-center">
          <button className="bg-blue-300 text-gray-500 py-2 px-5 m-3 rounded-full hover:bg-blue-500 hover:text-white" onClick={undoLastPoint}>undo</button> 
          <button className="bg-blue-300 text-gray-500 py-2 px-5 m-3 rounded-full hover:bg-blue-500 hover:text-white" disabled={undonePoints.length === 0} onClick={redoPoints}>redo</button>
        </div>
    </div>
  )
}

export default App;
