import { TableCell } from "@mui/material";

const TableHeadCell = ({ children }: { children: React.ReactNode }) => (
  <TableCell sx={{ fontWeight: "bold" }}>{children}</TableCell>
);

export default TableHeadCell;
