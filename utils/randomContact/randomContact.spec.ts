import { describe, expect, it } from 'vitest';
import { randomContact } from './randomContact';

describe('randomContact', () => {
  it('should generate a random first and last name', () => {
    const contact1 = randomContact();
    const contact2 = randomContact();
    expect(contact1.name.split(' ')).toHaveLength(2);
    expect(contact1.name === contact2.name).toBe(false);
  });

  it("should generate a valid email address that matches the user's name", () => {
    const contact = randomContact();
    const [firstName, lastName] = contact.name.split(' ');
    const expectedEmail = `${firstName.toLowerCase()}.${lastName.toLowerCase()}@example.com`;
    expect(contact.email).toBe(expectedEmail);
  });

  it('should generate a 12 digit random phone number starting with +61', () => {
    const contact = randomContact();
    expect(contact.phoneNumber.startsWith('+61')).toBe(true);
    expect(contact.phoneNumber.length).toBe(12);
  });
});
