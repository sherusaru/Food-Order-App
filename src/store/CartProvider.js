import CartContext from "./cart-context";

const CartProvider = (props)=>{
    const addItemTocartHandler = (item)=>{};
    const removeItemFromcartHandler = (id)=>{};
    const cartContext = {
        items:[],
        totalAmount:0,
        addItem: addItemTocartHandler,
        removeItem: removeItemFromcartHandler,
    }
    return(
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    )

}

export default CartProvider;