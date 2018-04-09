import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import FlavorForm from './FlavorForm';
import NameForm from './NameForm';
import NumberList from './NumberList';
import Reservation from './Reservations';
import Calculator from './Calculator';
import WelcomeDialog from './composition';
import registerServiceWorker from './registerServiceWorker';

registerServiceWorker();

ReactDOM.render(
  <WelcomeDialog />,
  document.getElementById('composition')
);

const numbers = [1, 2, 3, 4, 5];
ReactDOM.render(
  <NumberList numbers={numbers} />,
  document.getElementById('numberList')
);

ReactDOM.render(
  <div>
    <App />
  </div>,
  document.getElementById('root')
);

ReactDOM.render(
  <Calculator />,
  document.getElementById('calculator')
);


ReactDOM.render(<FlavorForm />, document.getElementById('flavorForm'));
ReactDOM.render(<Reservation />, document.getElementById('reservation'));

ReactDOM.render(
  <div>
    <NameForm />
  </div>,
  document.getElementById('nameForm')
);
