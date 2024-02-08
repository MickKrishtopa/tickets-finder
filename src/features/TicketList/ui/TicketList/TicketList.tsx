import styles from './TicketList.module.scss';

import { Ticket } from '../Ticket/Ticket';

const TicketList = () => {
  return (
    <ul className={styles['ticket-list']}>
      <Ticket />
      <Ticket />
      <Ticket />
    </ul>
  );
};

export { TicketList };
