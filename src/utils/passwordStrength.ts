export const calculatePasswordStrength = (password: string): string => {
  if (password.length < 6) {
    return "Weak";
  } else if (password.length >= 6 && password.length < 12) {
    return "Medium";
  } else {
    return "Strong";
  }
};
