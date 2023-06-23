import logo from './logo.svg';
import './assets/css/reset.css';
import './App.css';
import './assets/css/main.css';

import Header from './components/header';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400;1,700;1,900&display=swap');
      </style>
      <Header />
      <Footer />
    </div>
  );
}

export default App;
