import React, { useCallback, useEffect } from "react";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";

import { Link } from 'react-router-dom'
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import {
  getUserOrders,
} from '../redux/shopping-cart/actions';
import {
  logoutAction
} from '../redux/authentication/actions';
import {
  selectUserInfo,
} from '../redux/authentication/selectors';
import {
  selectUserOrder,
} from '../redux/shopping-cart/cartItemsSlide';
import {
  selectUserOrders
} from '../redux/shopping-cart/selectors';
import { styled } from "@mui/material/styles";
import { useDispatch } from 'react-redux'
import { useHistory } from "react-router-dom";
import { useSelector } from 'react-redux';

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

  const dispatch = useDispatch();
  const history = useHistory();

  const {
    jwt,
    user,
  } = useSelector(selectUserInfo);
  const userOrders = useSelector(selectUserOrders);

  const dispatchGetUserOders = useCallback(() => {
    if (!user) {
      return;
    }
    dispatch(getUserOrders(user.id));
  }, [dispatch, user]);

  useEffect(() => {
    if (!jwt) {
      history.push("/");
    }
  }, [history, jwt])

  useEffect(() => {
    if (user) {
      dispatchGetUserOders();
    }
  }, [dispatchGetUserOders, user]);

  

  const onLogout = useCallback(() => {
    dispatch(logoutAction())
  }, [dispatch]);

  const onSelectOrder = useCallback((order) => {
    dispatch(selectUserOrder(order));
    history.push("/OrderCard");
  }, [dispatch, history]);

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
        {userOrders.map((row) => (
            <StyledTableRow key={row.name}>
              <div onClick={() => onSelectOrder(row)} className="id" component="th" scope="row">
                {row.order_code}
              </div>

                  <StyledTableCell align="right">{row.created_at}</StyledTableCell>
                  <StyledTableCell align="right">{row.status}</StyledTableCell>
                  <StyledTableCell align="right">{row.status !== 'done' ? 'Chưa giao' : 'Đã giao'}</StyledTableCell>
                  <StyledTableCell align="right">{row.price}</StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        <h1 className="title">{user?.name ?? 'Unknown'}</h1>
        <div type="email" className="email">{user?.email ?? 'No email'}</div>
        <div className="email">{user?.phone ?? 'No phone number'}</div>
        <div className="email">{user?.address ?? 'No address'}</div>

        <div onClick={onLogout} className="address">Đăng xuất</div>
    </div>
  );
}
