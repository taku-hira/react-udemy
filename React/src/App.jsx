import { ColorfulMessage } from './components/ColorfulMessage'

function App() {
  // Props
  return (
    <div>
      <ColorfulMessage color="blue">
      お元気ですか
      </ColorfulMessage>
      <ColorfulMessage color="green">
      元気です
      </ColorfulMessage>
      { console.log('コンソールに出力') }
      <button onClick={ () => alert('ボタンがクリックされました！') }>ボタン</button>
    </div>
  )
}

export default App
