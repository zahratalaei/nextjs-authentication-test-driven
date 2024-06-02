import { FC, ReactNode } from 'react';
import styles from './confirm-modal.module.css';
import { Button } from '../Button/Button';

interface ModalProps {
  show: boolean;
  onClose: () => void;
  onConfirm: () => void;
  children?: ReactNode;
}

export const ConfirmModal: FC<ModalProps> = ({

  show,
  onClose,
  onConfirm,
  children,
}) => {
  if (!show) {
    return null;
  }

  return (
    <div className={styles.modalOverlay} data-testid="modalOverlay">
      <div className={styles.modal}>
        <div className={styles.modalContent}>
          {children}
          <div className={styles.modalActions}>
            <Button onClick={onConfirm} className={styles.confirmButton}>
              Remove
            </Button>
            <Button onClick={onClose} className={styles.cancelButton}>
              Cancel
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
