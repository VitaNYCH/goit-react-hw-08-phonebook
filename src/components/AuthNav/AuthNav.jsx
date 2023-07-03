import { AuthNavLink } from './AuthNav.styled';

export default function AuthNav() {
  return (
    <div>
      <AuthNavLink to="/register">Registration</AuthNavLink>
      <AuthNavLink to="/login">Login</AuthNavLink>
    </div>
  );
}
