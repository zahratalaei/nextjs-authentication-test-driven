export interface Contact {
  name: string;
  email: string;
  phoneNumber: string;
}

export const randomContact = (): Contact => {
   const firstNames = [
     'John',
     'Jane',
     'Alex',
     'Emily',
     'Chris',
     'Katie',
     'Michael',
     'Sarah',
     'David',
     'Laura',
   ];
   const lastNames = [
     'Doe',
     'Smith',
     'Johnson',
     'Brown',
     'Davis',
     'Miller',
     'Wilson',
     'Moore',
     'Taylor',
     'Anderson',
   ];

   const randomFirstName =
     firstNames[Math.floor(Math.random() * firstNames.length)];
   const randomLastName =
     lastNames[Math.floor(Math.random() * lastNames.length)];

   const name = `${randomFirstName} ${randomLastName}`;
   const email = `${randomFirstName.toLowerCase()}.${randomLastName.toLowerCase()}@example.com`;
   const phoneNumber = `+61${
     Math.floor(Math.random() * 900000000) + 100000000
   }`; // Ensuring the number is 9 digits

   return {
     name,
     email,
     phoneNumber,
   };
  // const name = 'Random Contact';
  // return {
  //   name,
  //   email: 'example@example.com',
  //   phoneNumber: `${Math.random() * 100000}`,
  // };
};
