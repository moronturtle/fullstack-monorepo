import { Typography as MuiTypography, TypographyProps as MuiTypographyProps } from "@mui/material";

interface TypographyProps extends MuiTypographyProps {
  variant?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "body1" | "body2";
  children: React.ReactNode;
  align?: "inherit" | "left" | "center" | "right" | "justify";
  color?: string;
}

const Typography = ({
  variant = "body1",
  align = "center",
  color = "inherit",
  children,
  ...props
}: TypographyProps) => {
  return (
    <MuiTypography variant={variant} align={align} color={color} {...props}>
      {children}
    </MuiTypography>
  );
};

export default Typography;
