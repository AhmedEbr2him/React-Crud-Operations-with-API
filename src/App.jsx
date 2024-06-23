import Users from './Users/Users';
import './App.css';
import { PrimeReactProvider } from 'primereact/api';
import 'primereact/resources/themes/lara-light-cyan/theme.css';
import 'primeicons/primeicons.css';
const App = () => {
  return (
    <div className='app'>
      <PrimeReactProvider>
        <Users />
      </PrimeReactProvider>
    </div>
  );
};
export default App;
