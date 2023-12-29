import React, { useState } from 'react'
import { FaCartShopping } from "react-icons/fa6";


const CartWidget = () => {

  const[cantidadItems, setCantidadItems] = useState(0);
  return (
    <>
    <div>
    <FaCartShopping />
    {cantidadItems}
    </div>
    </>
  )
}

export default CartWidget
