export const validate = (email, password) => {
  const isEmailValid = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email); // Added 'i' for case-insensitivity
  const isPasswordValid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/i.test(password);

  if (!isEmailValid) return "Email not valid";
  if (!isPasswordValid) return "Password not valid";

  return null; // You can return "Valid" or any success message if both are valid
};

export default validate;
