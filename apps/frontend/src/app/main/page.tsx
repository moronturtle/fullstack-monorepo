'use client'
import { Container } from '@mui/material';
import UserList from '@/components/organism/UserList';
import Typography from '@/components/atoms/Typography';
import ProtectedRoute from '../providers/ProtectedRoute';

export default function MainPage() {
  return (
    <ProtectedRoute>
    <Container>
      <Typography variant="h5" gutterBottom sx={{ mt: 6 }}>
        User Management
      </Typography>
      <UserList />
    </Container>
    </ProtectedRoute>
  );
}