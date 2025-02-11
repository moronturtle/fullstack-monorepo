import { Dialog, DialogTitle, DialogContent, DialogActions, TextField } from "@mui/material";
import Button from "../atoms/Button";
import { useState, useEffect } from "react";
import { User as UserInterface } from '@fullstack-monorepo/shared/user';

interface EditUserModalProps {
  open: boolean;
  user: UserInterface | null;
  onClose: () => void;
  onSave: (user: UserInterface) => void;
}

const EditUserModal = ({ open, user, onClose, onSave }: EditUserModalProps) => {
  const [formData, setFormData] = useState<UserInterface>({
    docId:"",
    id: "",
    name: "",
    email: "",
  });

  useEffect(() => {
    if (user) {
      setFormData(user);
    }
  }, [user]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Edit User</DialogTitle>
      <DialogContent>
        <TextField
          label="Name"
          name="name"
          fullWidth
          margin="dense"
          value={formData.name}
          onChange={handleChange}
        />
        <TextField
          label="Email"
          name="email"
          fullWidth
          margin="dense"
          value={formData.email}
          onChange={handleChange}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button onClick={() => onSave(formData)}>Save</Button>
      </DialogActions>
    </Dialog>
  );
};

export default EditUserModal;
