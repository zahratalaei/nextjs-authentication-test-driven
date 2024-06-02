import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ConfirmModal } from './ConfirmModal';
import { describe, expect, it, vi } from 'vitest';
import React from 'react';

describe('ConfirmModal', () => {
  it('should not render when show is false', () => {
    render(
      <ConfirmModal show={false} onClose={vi.fn()} onConfirm={vi.fn()}>
        Content
      </ConfirmModal>
    );
    const modal = screen.queryByTestId('modalOverlay');
    expect(modal).not.toBeInTheDocument();
  });

  it('should render when show is true', () => {
    render(
      <ConfirmModal show={true} onClose={vi.fn()} onConfirm={vi.fn()}>
        Content
      </ConfirmModal>
    );
    const modal = screen.getByTestId('modalOverlay');
    expect(modal).toBeInTheDocument();
  });

  it('should call onConfirm when confirm button is clicked', () => {
    const onConfirm = vi.fn();
    render(
      <ConfirmModal show={true} onClose={vi.fn()} onConfirm={onConfirm}>
        Content
      </ConfirmModal>
    );
    const confirmButton = screen.getByText('Remove');
    fireEvent.click(confirmButton);
    expect(onConfirm).toHaveBeenCalled();
  });

  it('should call onClose when cancel button is clicked', () => {
    const onClose = vi.fn();
    render(
      <ConfirmModal show={true} onClose={onClose} onConfirm={vi.fn()}>
        Content
      </ConfirmModal>
    );
    const cancelButton = screen.getByText('Cancel');
    fireEvent.click(cancelButton);
    expect(onClose).toHaveBeenCalled();
  });

  it('should render children content', () => {
    render(
      <ConfirmModal show={true} onClose={vi.fn()} onConfirm={vi.fn()}>
        Modal Content
      </ConfirmModal>
    );
    const content = screen.getByText('Modal Content');
    expect(content).toBeInTheDocument();
  });

});
