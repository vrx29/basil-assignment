import { Outlet } from 'react-router-dom';
import { Sidebar } from '../../components/Sidebar/Sidebar';
import Header from '../../components/Header/Header';

export function Dashboard() {
  return (
    <main>
      <Sidebar />
      <div className='page-cont'>
        <Header />
        <Outlet />
      </div>
    </main>
  );
}
