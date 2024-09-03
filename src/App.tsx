import './App.css';
import { Header } from './site/Header';
import { Body } from './site/Body';
import { Footer } from './site/Footer';

function App() {
  return (
    <div>
      <Header title={'new title'}/>
      <Body titleForBody={'new body'}/>
      <Footer titleForFooter={'new footer'}/>
    </div>
  );
}

export default App;
