import './App.css';

const App = () => {
  return (
    <div className="App">
      <li><Header /></li>
      <li>123</li>
      <li>123</li>
      <li><Footer /></li>
    </div>
  );
}


const Header = () =>{
  return <div>
    Голова
  </div>
}

const Footer = () =>{
  return (
    <div>
      Footer
    </div>
  )
}

export default App;
