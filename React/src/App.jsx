import { useEffect, useState } from 'react'
import { ColorfulMessage } from './components/ColorfulMessage'

function App() {
  console.log('Appがレンダリングされました')
  // Props
  const [num, setNum] = useState(0);
  const [isShowFace, setIsShowFace] = useState(true);
  // state
  const onClickCountUp = () => {
    setNum((prev) => prev + 1);
  }

  const onClickToggle = () => {
    setIsShowFace(!isShowFace);
  }

  useEffect(() => {
    if (num % 3 === 0) {
      isShowFace || setIsShowFace(true);
    } else {
      isShowFace && setIsShowFace(false);
    }
   }, [num])

  
  return (
    <div>
      <ColorfulMessage color="blue">
      お元気ですか
      </ColorfulMessage>
      <ColorfulMessage color="green">
      元気です
      </ColorfulMessage>
      { console.log('コンソールに出力') }
      <button onClick={onClickCountUp}>ボタン</button>
      <p>{num}</p>
      <button onClick={onClickToggle}>on/off</button>
      {isShowFace && <p>(^^)</p>}
    </div>
  )
}

export default App
