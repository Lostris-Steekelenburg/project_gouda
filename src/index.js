import ReactDom from "react-dom";
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import AlleRoutes from './alleRoutes/alleRoutes';

ReactDom.render((
  <BrowserRouter>
    <App />
    <AlleRoutes />
  </BrowserRouter>
), document.getElementById('root'))