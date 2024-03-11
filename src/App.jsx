
import './App.css'
import Counter from './Counter'
import Team from './Team'
import User from './User'
import Friends from './Friends'

function App() {
  function handleClick(){
    alert('button clicked')
  }

  const handleClick2 = () => {
    alert('button clicked 2')
  }

  const adToFive = (num) => {
    alert(num + 5);
  }
  return (
    <>
      
      <h3>React Concept 2</h3>
      
      <Friends></Friends>

      <User></User>
      
      
      <Team> </Team>
      <Counter></Counter>


    <button onClick={handleClick} >CLick 1</button>
    <button onClick={handleClick2} >CLick 2</button>
    <button onClick={() => {alert('ustad 3 no eta ')} } >CLick 3</button>
    <button onClick={() => adToFive(3) } >CLick 3</button>
      
    </>
  )
}

export default App
