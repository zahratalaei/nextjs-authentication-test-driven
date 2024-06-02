'use client';

import { Avatar, Button, ConfirmModal } from '@/components';
import { Contact, randomContact } from '@/utils';
import { FC, useState } from 'react';
import styles from './contacts-table.module.css';
export interface ContactsTableProps {
  items: Contact[];
}
export const ContactsTable: FC<ContactsTableProps> = ({ items }) => {
  const [localItems, setLocalItems] = useState(items);
  const [showModal, setShowModal] = useState(false);
  const [itemToRemove, setItemToRemove] = useState<number | null>(null);

  const addItem = () => {
    setLocalItems((prevItems) => [...prevItems, randomContact()]);
  };

  const confirmRemoveItem = (index: number) => {
    setShowModal(true);
    setItemToRemove(index);
  };

  const removeItem = () => {
    if (itemToRemove !== null) {
      setLocalItems((currentItems) =>
        currentItems.filter((_, i) => i !== itemToRemove)
      );
      setItemToRemove(null);
      setShowModal(false);
    }
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <header className={styles.header}>
          <Button size="sm" onClick={addItem}>
            Add Contact
          </Button>
        </header>
        <table className={styles.table}>
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone Number</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {localItems.map((item, i) => (
              <tr key={i}>
                <td>
                  <Avatar name={item.name} />
                </td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.phoneNumber}</td>
                <td>
                  <Button
                    size="sm"
                    outline
                    onClick={() => confirmRemoveItem(i)}
                  >
                    Remove
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <ConfirmModal
          show={showModal}
          onClose={() => setShowModal(false)}
          onConfirm={removeItem}
        >
          <>
            <h4>Are you sure?</h4>
            <p>Do you really want to remove this contact?</p>
          </>
        </ConfirmModal>
      </div>
    </div>
  );
};
