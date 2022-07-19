import React, { Component } from 'react'
import { connect } from 'react-redux';
import { THAY_DOI_SO_LUONG, TINH_TONG_TIEN } from './components/reducer/constant/constant';

const tangSoLuongSp = 1;
const giamSoLuongSp = -1;

class MenuComponent extends Component {

    renderMenu = () => { 
        return this.props.menu.map((sp) => {
            return <tr>
                    <td>{sp.tenSP}</td>
                    
                    <td>
                        <button className='btn btn-success' onClick={() => {this.props.handleThayDoiSoLuong(sp.maSP, tangSoLuongSp)}}>+</button>
                        {sp.soLuong}
                        <button className='btn btn-danger' onClick={() => {this.props.handleThayDoiSoLuong(sp.maSP, giamSoLuongSp)}}>-</button>
                    </td>
                    
                    <td>{sp.giaBan}</td>
            </tr>
        })
     }

  render() {
    return (
      <div>
          <h1>Chọn thức ăn</h1>
          <div>
              <table className='table'>
                  <thead>
                      <th>Thức ăn</th>
                      <th>Số lượng</th>
                      <th>Giá</th>
                  </thead>
                  <tbody>{this.renderMenu()}</tbody>
                  <th></th>
                  <th style={{textAlign: "right", fontSize: "25px"}}>Tổng tiền</th>
                  <th style={{fontSize: "25px"}}>{this.props.total}</th>
              </table>
          </div>
          <button className='btn btn-primary btn-lg' style={{position: "absolute", right: "100px"}}>Thanh toán</button>
      </div>
    )
  }
};

let mapStateToProps = (state) => { 
    return {
        menu: state.sanPham.menu,
        total: state.sanPham.total
    }
 };

let mapDispathtoProps = (dispatch) => { 
    return {
        handleThayDoiSoLuong: (sp, giaTri) => { 
            dispatch ({
                type: THAY_DOI_SO_LUONG,
                payload: sp,
                giaTri: giaTri
            })
         },
    }
 };
export default connect(mapStateToProps, mapDispathtoProps)(MenuComponent)

