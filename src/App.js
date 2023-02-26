import './App.css'
import Card from './components/Card'
const App = ()=>{
  return <div>
    <h1>this is red</h1>
    <form action="">
      <label htmlFor="">Username</label>
      <input type="text" name="" id="" />
      <label htmlFor="">Password</label>
      <input type="password" name="" id="" />
    </form>
    <Card title='this is first title'/>
    <Card title='this is second title'/>
  </div>
}

export default App;
