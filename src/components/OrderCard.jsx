import React from 'react'

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


function createData(name, id, price, num, sum) {
  return { name, id, price, num, sum };
}


//table values
const rows = [
  createData(
    "Chuột gaming Corsair Harpoon Pro RGB - Default Title",
    " ",
    "430.000 đ",
    "1",
    "430.000 đ"
  ),
  createData(
    "Giá sản phẩm",
    " ",
    "",
    "",
    "430.000 đ"
  ),
  createData(
    "Miễn phí vận chuyển",
    " ",
    "",
    "",
    "0 đ"
  ),
  createData(
    "Tổng tiền",
    " ",
    "",
    "",
    "430.000 đ"
  )
];

const OrderCard = () => {
  return (
    <div className="container">
      <div className="container__orderid">
          <p className="container__orderid__title"> Đơn hàng:</p>
          <p className="container__orderid__title__value"> #12345</p>
          <p className="container__orderid__date">, đặt lúc - </p>
          <p className="container__orderid__date__value">17 09,2021 06:05CH</p>
      </div>
  {/* Back to the account */}
    <Link to="/Profile">
      <div className="container__backToAccount"> Quay lại trang tài khoảng </div>
    </Link>
  {/* Delivery */}
      <div className="container__delivery">
    {/* Delivery from */}
      <div className="container__delivery__from">
          <div className="container__delivery__from__address">Địa chỉ nhận thanh toán</div>
          <div classname="container__delivery__from__type">
          <p>Tình trạng thanh toán:</p>
          <p> paid</p>
          </div>
          <div className="container__delivery__from__name">Nguyễn Nhật Quang</div>
          <div className="container__delivery__from__place">47 quốc lộ 1A ấp Voi xã An Thạnh huyện Bến Cầu tỉnh Tây Ninh</div>
          <div className="container__delivery__from__city">Hồ Chí Minh</div>
          <div className="container__delivery__from__country">VietNam</div>
          <div className="container__delivery__from__num">0999999999</div>
      </div>

    {/* Delivery to */}
      <div className="container__delivery__to">
          <div className="container__delivery__to__address">Địa chỉ gởi hàng</div>
          <div classname="container__delivery__to__type">
          <p>Vận chuyển:</p>
          <p> not fulfilled</p>
          </div>
          <div className="container__delivery__to__name">Nguyễn Nhật Quang</div>
          <div className="container__delivery__to__place"
          >47 quốc lộ 1A ấp Voi xã An Thạnh huyện Bến Cầu tỉnh Tây Ninh</div>
          <div className="container__delivery__to__city">Hồ Chí Minh</div>
          <div className="container__delivery__to__country">VietNam</div>
          <div className="container__delivery__to__num">0999999999</div>
        </div>
      </div>

    {/* Table  */}

    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell className="id">Sản phẩm</StyledTableCell>
            <StyledTableCell align="right">Mã sản phẩm</StyledTableCell>
            <StyledTableCell align="right">Giá</StyledTableCell>
            <StyledTableCell align="right">Số lượng</StyledTableCell>
            <StyledTableCell align="right">Tổng cộng</StyledTableCell>
          </TableRow>
        </TableHead>

        <TableBody>
        {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <div className="name" component="th" scope="row">
                {row.name}
              </div>
              <StyledTableCell align="right">{row.id}</StyledTableCell>
              <StyledTableCell align="right">{row.price}</StyledTableCell>
              <StyledTableCell align="right">{row.num}</StyledTableCell>
              <StyledTableCell align="right">{row.sum}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

    </div>
  )
}

export default OrderCard
