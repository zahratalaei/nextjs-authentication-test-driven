# NextJS Authentication – Test-Driven Refactor Project

A small frontend application built as a coding exercise to demonstrate clean React architecture, TypeScript usage, and component testing using React Testing Library.

This project focuses on code quality, structure, and testability, with an emphasis on user-focused testing and maintainable components.

---
## Context / Attribution

This project is based on an existing coding exercise originally provided by Colossal Digital:

https://github.com/colossal-digital/colosl-js-code-test

The original repository contained a partially implemented authentication app with failing or incomplete behaviour.

## My Contributions

The following improvements and fixes were implemented as part of this refactor and test-focused exercise:

### Bug Fixes & Stability
- Fixed redirect-related issues that caused incorrect or missing navigation flows.
- Resolved errors in existing unit tests to ensure they run and pass reliably.

### Feature Enhancements
- Added a Register page to allow new users to sign up.
- Implemented a confirmation modal for the contact removal action to prevent accidental deletions.
- Improved responsive layout behaviour across different screen sizes and devices.

### Testing Improvements
- Expanded unit test coverage for existing components.
- Added unit tests for newly introduced components.
- Refactored parts of the codebase where needed to improve testability.

### Data & UX Improvements
- Enhanced the `randomContact` generator to produce more realistic and consistent contact details, supporting more meaningful testing scenarios.

---

## Tech Stack

- React
- TypeScript
- Vite
- React Testing Library
- Jest
- CSS Modules

---

## Features

- Component-based UI built with React and TypeScript
- Clear separation between presentation and logic
- Reusable and maintainable components
- Responsive layout
- Unit and interaction tests for key user flows

---

## Project Structure

The codebase is organised to keep components modular and easy to maintain:

- Reusable UI components
- Clear separation of concerns
- Test files located close to the components they validate

---

## Getting Started

### Install dependencies

```bash
npm install
```
### Run the development server
```bash
npm run dev
```
### Run tests
```bash
npm test
```
## Potential Future Improvements

Given more time, the following enhancements could be implemented to extend the application:

- **Selectable Contacts for Bulk Removal**
  Allow users to select multiple contacts and remove them in a single action to improve usability.

- **Backend for Storing Registered Users**
  Introduce a backend service to securely store user registration data.

- **Enhanced Contact Creation**
  Replace random contact generation with user-provided contact details, persisted via a backend API.

- **Google Authentication**
  Add an option to sign in using Google for improved security and user convenience.

- **Additional Enhancements**
  Further performance, UX, and feature improvements as the application evolves.
