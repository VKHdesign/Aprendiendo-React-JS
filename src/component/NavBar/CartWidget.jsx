import { useContext } from "react"
import cartContext from "../../context/cartContext"
import { Link } from "react-router"

export default function CartWidget() {
    const { countItems } = useContext(cartContext)
    /* 
    {
        addToCart: f(),
        removeItem: f(),
        countItems: f()  
    }
    */

    return (
        <div>
            <span>🛒 {countItems()} </span>
        </div>
    )
}