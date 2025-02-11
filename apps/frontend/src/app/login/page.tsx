'use client';
import { Container } from '@mui/material';
import { loginWithGoogle } from '@/apis/authApi';
import LoginForm from '@/components/organism/ LoginForm';
import { useAuth } from '@/context/AuthContext';
import PublicRoute from '@/app/providers/PublicRoute';

export default function LoginPage() {
  const { login } = useAuth();

  const handleGoogleLogin = async () => {
    try {
      const token = await loginWithGoogle();
      if (token) {
        login(token);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <PublicRoute>
      <Container>
        <LoginForm onClick={handleGoogleLogin} />
      </Container>
    </PublicRoute>
  );
}
