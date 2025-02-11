import { Google } from "@mui/icons-material";
import Button from "../atoms/Button";

interface GoogleLoginButtonProps {
  onClick: () => void;
}

const GoogleLoginButton = ({ onClick }: GoogleLoginButtonProps) => {
  return (
    <Button startIcon={<Google />} onClick={onClick} sx={{ bgcolor: "#4285F4", color: "white" }}>
      Sign in with Google
    </Button>
  );
};

export default GoogleLoginButton;
