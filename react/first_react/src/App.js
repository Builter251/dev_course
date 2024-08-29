// import logo from './logo.svg';
import './App.css';
import BodyComponent from './components/BodyComponent.jsx';
import FoodMenu from './components/FoodMenu.jsx';
import HeaderComponent from './components/headerComponent.jsx';
import FirstProps from './FirstProps.jsx';
import BooleanComponent from './components/booleanComponent.jsx';
import Wrapper from './Wrapper.jsx';
import PropTypesComponent from './components/propTypesComponent.jsx';




function App() {
  return (
    <div>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      
      <HeaderComponent />
      <BodyComponent />
      <FirstProps name="John" color="blue"/>

      <FoodMenu link="https://images.unsplash.com/photo-1528658948776-cf610b846f80?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" name="carbonara" desc="pasta" price="15,000"/>
      <FoodMenu link="https://images.unsplash.com/photo-1573821663912-6df460f9c684?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" name="Margherita" desc="pizza" price="25,000"/>
      <FoodMenu link="https://images.unsplash.com/photo-1432139509613-5c4255815697?q=80&w=1970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" name="tbone" desc="steak" price="20,000"/>
      
      {/* false */}
      <BooleanComponent />
       {/* true  */}
      <BooleanComponent study/>

      <Wrapper>
        React
      </Wrapper>

      <PropTypesComponent item="candy" price={1000}/>
    </div>
  );


}

export default App;
