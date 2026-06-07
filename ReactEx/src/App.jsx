import { useState, useCallback, useMemo } from 'react'
import { ChildArea } from './components/ChildArea'
import { InlineStyle } from './components/InlineStyle'
import './App.scss'
import { CssModules } from './components/CssModules'
import { StyledJsx } from './components/StyledJsx'
import { StyledComponents } from './components/StyledComponents'
import { Emotion } from './components/Emotion'

function App() {
  const [text, setText] = useState('')
  const [open, setOpen] = useState(false)

  const onChangeText = (e) => setText(e.target.value);

  const onClickOpen = () => setOpen(!open)

  const onClickClose = useCallback(() => setOpen(false), [])

  // 変数自体のmemo化
  const temp = useMemo(() => 1 + 3 , [])
  console.log(temp)

  return (
    <>
      <div className='App'>
        <input 
          type="text" 
          value={text}
          onChange={onChangeText}
        />
        <br />
        <br />
        <button onClick={onClickOpen}>表示</button>
        <ChildArea open={open} onClickClose={onClickClose} /> 
        <InlineStyle />
        <CssModules />
        <StyledJsx />
        <StyledComponents />
        <Emotion />
      </div>
    </>
  )
}

export default App
