import './App.scss';

import { SideBar } from './features/SideBar';
import { TicketList } from './features/TicketList';

function App() {
  return (
    <main className="main">
      <SideBar />
      <TicketList />
    </main>
  );
}

export { App };
