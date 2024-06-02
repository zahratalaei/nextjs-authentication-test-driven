# Colosl Code Challenge

## Help!

If you're reading this, you've been selected to tackle a classic scenario in the software engineering world: inheriting a project that seemed fine until tests were written.

## How did we end up here?

Your coworker built what appeared to be a polished, fully functional NextJS authentication application. But alas, they delayed writing tests until the end of the project. Once the tests were written it became clear that the application was super broken and does not meet the specified product requirements. Now we need your help! Update the codebase so that the written tests pass.

## Your Mission

Your task is to:

1. Review the existing code and accompanying tests.
2. Identify where and why the application fails to meet the test scenarios.
3. Refactor or rewrite the necessary parts of the application.
4. Ensure that all tests pass.

## Setup Instructions

Here's how to get started with this project:

```bash
git clone git@github.com:colossal-digital/colosl-js-code-test.git
cd colosl-js-code-test
npm install
npm run test
```
## **Summary of Changes**

### **Changes Implemented**

1. **Fixed Redirecting Issue**:
    - Resolved issues related to incorrect or missing redirects within the application.
2. **Fixed Test Errors**:
    - Addressed and corrected errors in existing unit tests to ensure they pass successfully.
3. **Improved Responsive Behavior**:
    - Enhanced the layout to be fully responsive across different devices and screen sizes.
4. **Added Register Page**:
    - Created a new register page allowing users to sign up.
5. **Added Confirm Modal for Remove Button**:
    - Implemented a confirmation modal that appears when attempting to remove a contact, adding an extra layer of user verification.
6. **Expanded Unit Testing**:
    - Added more unit tests for existing components.
    - Created unit tests for new components introduced during the enhancement.
7. **Enhanced Random Contact Generation**:
    - Adjusted the **`randomContact`** function to generate more realistic contact details, ensuring more precise and relevant tests.

### **Potential Future Changes**

1. **Selectable Contacts for Bulk Removal**:
    - Implement functionality to allow selecting multiple contacts and removing them simultaneously.
2. **Backend for Storing Registered Users**:
    - Develop a backend solution to store user registration data securely.
3. **Enhanced Contact Addition**:
    - Implement functionality for adding contacts with user-provided data and storing these contacts in the backend, replacing the current random contact generation.
4. **Google Authentication Option**:
    - Add an option for users to log in using Google authentication for enhanced security and convenience.
5. **Further Enhancements**:
    - Additional improvements and features to be determined as the application evolves.