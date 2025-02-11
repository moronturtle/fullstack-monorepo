import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, CircularProgress, Box } from "@mui/material";
import TableHeadCell from "@/components/atoms/TableHeadCell";
import Button from "@/components/atoms/Button";
import { User as UserInterface } from '@fullstack-monorepo/shared/user';

interface UserTableProps {
  loading: boolean;
  users: UserInterface[] | null;
  onEdit: (user: any) => void;
}

const UserTable = ({ loading, users, onEdit }: UserTableProps) => (
  <TableContainer component={Paper}>
    <Table>
      <TableHead>
        <TableRow>
          <TableHeadCell>ID</TableHeadCell>
          <TableHeadCell>Name</TableHeadCell>
          <TableHeadCell>Email</TableHeadCell>
          <TableHeadCell>Age</TableHeadCell>
          <TableHeadCell>Actions</TableHeadCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {loading ? (
          <TableRow>
            <TableCell colSpan={5} align="center">
              <Box display="flex" justifyContent="center" my={2}>
                <CircularProgress />
              </Box>
            </TableCell>
          </TableRow>
        ) : (
          users && users?.map((user) => (
            <TableRow key={user.id}>
              <TableCell>{user.id}</TableCell>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.age}</TableCell>
              <TableCell>
                <Button onClick={() => onEdit(user)} color="primary">Edit</Button>
              </TableCell>
            </TableRow>
          ))
        )}
      </TableBody>
    </Table>
  </TableContainer>
);

export default UserTable;