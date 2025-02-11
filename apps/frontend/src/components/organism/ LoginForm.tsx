import { Box, Paper, Stack } from '@mui/material';
import GoogleLoginButton from '../molecules/GoogleLoginButton';
import Typography from '../atoms/Typography';

interface LoginFromProps {
  onClick: () => void;
}

const LoginForm = ({ onClick }: LoginFromProps) => {
  const handleGoogleLogin = () => {
    onClick();
  };

  return (
    <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
      <Paper elevation={3} sx={{ p: 4, width: { xs: '90%', sm: '400px' }, textAlign: 'center' }}>
        <Typography variant="h5" gutterBottom>
          Welcome
        </Typography>
        <Typography variant="body2" color="gray" gutterBottom>
          Sign in to continue
        </Typography>

        <Stack spacing={2} mt={3}>
          <GoogleLoginButton onClick={handleGoogleLogin} />
        </Stack>
      </Paper>
    </Box>
  );
};

export default LoginForm;
