import './App.css'
import Dashboard from './component/Dashboard/Dashboard'
import Header from './component/Header/Header'

function App() {

  return (
    <div className="App">
      <Header></Header>
      <h1 className='text-4xl text-center font-bold mt-8 underline'>This is Dashboard container</h1>
      <Dashboard></Dashboard>
    </div>
  )
}

export default App
