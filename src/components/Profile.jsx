import * as React from "react";
import { styled } from "@mui/material/styles";
import { Link} from 'react-router-dom'
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";


const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
    fontSize:20
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 20
  }
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0
  }
}));


function createData(name, date, typepayment, deliver, price) {
  return { name, date, typepayment, deliver, price };
}


//input values
const rows = [
  createData(
    "#12345",
    "thg 11 28, 2021",
    "pending",
    "not fulfilled",
    "290.000 đ"
  )
];

export default function CustomizedTables() {
  return (
<div className="container">
  <TableContainer component={Paper}>
      <div className="title">Tài khoản của bạn</div>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell className="id">Mã đơn hàng</StyledTableCell>
            <StyledTableCell align="right">Ngày đặt</StyledTableCell>
            <StyledTableCell align="right">
              Trạng thái thanh toán
            </StyledTableCell>
            <StyledTableCell align="right">Vận chuyển</StyledTableCell>
            <StyledTableCell align="right">Tổng tiền</StyledTableCell>
          </TableRow>
        </TableHead>

        <TableBody>
        {rows.map((row) => (
            <StyledTableRow key={row.name}>
            <Link to="/OrderCard">
              <div className="id" component="th" scope="row">
                {row.name}
              </div>
              </Link>

              <StyledTableCell align="right">{row.date}</StyledTableCell>
              <StyledTableCell align="right">{row.typepayment}</StyledTableCell>
              <StyledTableCell align="right">{row.deliver}</StyledTableCell>
              <StyledTableCell align="right">{row.price}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

    <h1 className="title">Quang Nguyễn</h1>
    <div type="email" className="email"> quang.nguyenkhmt@gmail.com </div>
    <Link to="/Cart">
      <div className="address">Xem địa chỉ</div>
    </Link>
</div>
);
}
