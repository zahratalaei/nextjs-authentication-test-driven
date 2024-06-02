import { fireEvent, render, screen, within } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { ContactsTable, ContactsTableProps } from './ContactsTable';

describe('ContactsTable', () => {
  const mockItems: ContactsTableProps['items'] = [
    {
      name: 'John Doe',
      email: 'john.doe@example.com',
      phoneNumber: '1234567890',
    },
    {
      name: 'Jane Smith',
      email: 'jane.smith@example.com',
      phoneNumber: '9876543210',
    },
  ];

  it('renders table with correct data', () => {
    render(<ContactsTable items={mockItems} />);

    const table = screen.getByRole('table');
    const tableRows = screen.getAllByRole('row');

    expect(table).toBeTruthy();
    expect(tableRows).toHaveLength(mockItems.length + 1); // +1 for table header row

    mockItems.forEach((item, index) => {
      const row = tableRows[index + 1]; // +1 to skip table header row

      expect(screen.getByText(item.name)).toBeTruthy();
      expect(screen.getByText(item.email)).toBeTruthy();
      expect(screen.getByText(item.phoneNumber)).toBeTruthy();
    });
  });

  it('adds a new contact when "Add Contact" button is clicked', () => {
    render(<ContactsTable items={mockItems} />);

    const addButton = screen.getByRole('button', { name: 'Add Contact' });

    fireEvent.click(addButton);

    const tableRows = screen.getAllByRole('row');

    expect(tableRows).toHaveLength(mockItems.length + 2);
  });

  it('removes a contact when "Remove" button is clicked and confirmed', () => {
    render(<ContactsTable items={mockItems} />);

    // Get all table rows
    let tableRows = screen.getAllByRole('row');
    // Find the "Remove" button in the first data row
    const removeButton = within(tableRows[1]).getByRole('button', {
      name: 'Remove',
    });

    // Click the "Remove" button to open the modal
    fireEvent.click(removeButton);

    // Find the modal element
    const modal = screen.getByTestId('modalOverlay');
    // Find and click the "Remove" button in the modal to confirm the action
    const confirmButton = within(modal).getByRole('button', { name: 'Remove' });
    fireEvent.click(confirmButton);

    // Re-fetch the table rows after the removal
    tableRows = screen.getAllByRole('row');
    // Check that the number of rows is now one less
    expect(tableRows).toHaveLength(mockItems.length); // Should be one less row
  });
});
