import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Dashboard } from './screens/Dashboard/Dashboard';
import { Orders } from './screens/Orders/Orders';
import OrderDetail from './screens/OrderDetail/OrderDetail';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Dashboard />}>
          <Route path='orders' element={<Orders />} />
          <Route path='orders/:id' element={<OrderDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
