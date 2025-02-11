import { Button as MuiButton, ButtonProps } from "@mui/material";

interface CustomButtonProps extends ButtonProps {
  children: React.ReactNode;
}

const Button = ({ children, ...props }: CustomButtonProps) => {
  return (
    <MuiButton fullWidth variant="contained" size="large" {...props}>
      {children}
    </MuiButton>
  );
};

export default Button;
