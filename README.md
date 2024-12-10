# React Authentication App
This project implements a Sign Up and Login form using Formik for form handling and validation, Yup for schema validation, TypeScript for type safety, and Tailwind CSS for styling. The forms follow clean coding principles and provide a good user experience (UX).

## Features:
**Sign Up Form**: Allows users to create an account with name, email, password, and confirm password.
**Login Form**: Enables users to log in with email and password.
**Success Messages**: Displays a success message when the form is successfully submitted (e.g., "Sign Up Successful" or "Login Successful").
**"Remember Me" Checkbox**: Saves the email to local storage for the Login form (optional feature).
**Password Strength Indicator**: Shows a password strength indicator on the Sign Up form (optional feature).
**Accessibility**: Implements proper ARIA roles and labels for accessibility.
#Bonus Features:
**"Remember Me" Checkbox**: For the Login form, saves the user's email to local storage if the checkbox is checked.
**Password Strength Indicator**: Display a dynamic password strength indicator on the Sign Up form to help users create strong passwords.
**Accessibility**: Ensures all form fields are properly labeled and accessible, following best practices for users with disabilities.
## Constraints:
No third-party UI libraries such as Material-UI or Ant Design are used.
No AI-generated prompts or tools are utilized in the creation of this application.
 ## Installation and Running the Project:
 1.Clone the repository:

**https://github.com/akshay030/React-auth-app.git**

2.Navigate to the project directory:
**cd react-auth-app**

3.Install dependencies: 

**npm install**

4.Start the development server:

**npm run dev**

The application will be available at http://localhost:3000.

 ### Design Choices:
Formik and Yup: Used for form handling and validation to ensure smooth form submission and validation with easy integration and minimal boilerplate code.
Tailwind CSS: Used for styling, which allows for a responsive, flexible, and clean layout without relying on third-party UI frameworks.
TypeScript: Ensures type safety across the project, making it easier to maintain and catch errors during development.
### Assumptions or Limitations:
The app currently does not connect to a backend or store user data persistently. User information is saved to local storage on the client-side.
The login process relies on matching the email and password against the data stored in local storage (simulated authentication).
