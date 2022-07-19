import React, { Component } from 'react'
import MenuComponent from '../MenuComponent'
import BurgerComponent from './BurgerComponent'

export class BaiTapBurger extends Component {
  render() {
    return (
      <div className='row py-5'>
          <div className='container' style={{height: "500px"}}>
              <BurgerComponent />
          </div>
          <div className='container' style={{height: "500px"}}>
              <MenuComponent />
          </div>
      </div>
    )
  }
};


