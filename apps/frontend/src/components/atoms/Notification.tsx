import { Snackbar, Alert } from "@mui/material";

interface NotificationProps {
  message: string;
  open: boolean;
  severity: "success" | "error";
  onClose: () => void;
}

const Notification = ({ message, open, severity, onClose }: NotificationProps) => (
  <Snackbar
    open={open}
    autoHideDuration={2000}
    onClose={onClose}
    anchorOrigin={{ vertical: "top", horizontal: "center" }}
  >
    <Alert onClose={onClose} severity={severity}>
      {message}
    </Alert>
  </Snackbar>
);

export default Notification;
