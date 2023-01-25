import './App.css';
import Button from './components/common/Button';

function App() {
  return (
    <div className="App">
      <div className='headContainer'>
        <div className='upBar'>React Calulator</div>
        <div className='display'></div>
      </div>
      <div className='calculatorContainer'>
        <div className='row'>
          <Button value={"AC"}></Button>
          <Button value={"±"}></Button>
          <Button value={"%"}></Button>
          <Button value={"÷"}></Button>
        </div>
        <div className='row'>
          <Button value={"7"}></Button>
          <Button value={"8"}></Button>
          <Button value={"9"}></Button>
          <Button value={"X"}></Button>
        </div>
        <div className='row'>
          <Button value={"4"}></Button>
          <Button value={"5"}></Button>
          <Button value={"6"}></Button>
          <Button value={"-"}></Button>
        </div>
        <div className='row'>
          <Button value={"1"}></Button>
          <Button value={"2"}></Button>
          <Button value={"3"}></Button>
          <Button value={"+"}></Button>
        </div>
        <div className='row'>
          <div className='zeroContainer'>
            <Button value={"0"}></Button>
          </div>
          <div className='equalContainer'>
            <Button value={"."}></Button>
            <Button value={"="}></Button>
          </div>
        </div>
      </div>
      <div className='addBtnContainer'>
        <button className='btnAdd'>ADD</button>
      </div>
    </div>
  );
}

export default App;
