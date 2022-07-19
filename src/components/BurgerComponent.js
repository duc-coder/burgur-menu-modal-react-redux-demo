import React, { Component } from 'react'
import { connect } from 'react-redux';

const bgColors = {
    brown: "#DD7633",
    green: "#4AA42F",
    yellow: "#DFC118",
    red: "#793306"
}

class BurgerComponent extends Component {
  render() {
    return (
      <div>
          <h1>Cửa hàng burger CyberSoft</h1>
          <div className="text-center text-white" style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
              <div style={{width: "300px", height: "100px", backgroundColor: bgColors.brown, borderRadius: "20px 20px 0 0"}}></div>
              <h2 className='text-dark'>Chọn thức ăn</h2>
              <div style={{width: "400px", height: "25px", backgroundColor: bgColors.green, borderRadius: "10px"}}>Salad: {this.props.menu[0].soLuong} </div>
              <div style={{width: "350px", height: "35px", backgroundColor: bgColors.yellow, marginTop: "10px", borderRadius: "10px", paddingTop: "5px"}}>Cheese: {this.props.menu[1].soLuong} </div>
              <div style={{width: "300px", height: "50px", backgroundColor: bgColors.red, marginTop: "10px", borderRadius: "10px", paddingTop: "10px"}}>Beef: {this.props.menu[2].soLuong} </div>
              <div style={{width: "300px", height: "100px", backgroundColor: bgColors.brown, marginTop: "10px", borderRadius: "0 0 20px 20px"}}></div>
          </div>
      </div>
    )
  }
};

let mapStateToProps = (state) => { 
    return {
      menu: state.sanPham.menu
    }
   };
  
  export default connect(mapStateToProps)(BurgerComponent);
