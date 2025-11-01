import { useContext } from "react";
import cartContext from "../../context/cartContext";
import { createOrder } from "../../dataa/firebase";
import FormCheckout from "./FormCheckout";

function CartContainer() {
    const { cartItems, removeItem, clearCart } = useContext(cartContext)


    async function handleCheckout(formData) {
        const orderData = {
            buyer: formData,
            items: cartItems,
            price: 999,
            date: new Date()
        }

        console.log("llamando a firebase, datos de comprador", formData)
        const newOrder = await createOrder(orderData);
        clearCart();
        alert(`Compra realizada con éxito! - tu id de compra es: ${newOrder.id}`)
        // Alternativas a ALERT
        // 1. Toast/sweetalert
        // 2. Renderizado condicional - > setOrderCreated(newOrder.id)
        //    { orderCreated ? "Gracias por tu compra" : ... }
        // 3. Redirigir al usuario /orders/orderid ( getDoc( ordersRef ) )
    }

    // TODO: renderizado condicional cuando el carrito esté vacío

    return (
        <div style={{
            maxWidth: '400px',
            margin: '0 auto',
            padding: '20px',
            textAlign: 'center'
        }}>
            <h3 style={{
                fontSize: '2rem',
                marginBottom: '30px',
                color: '#333'
            }}>Tu carrito</h3>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '20px',
                marginBottom: '30px'
            }}>
                {
                    cartItems.map(item => <div key={item.id} style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        padding: '20px',
                        border: '1px solid #ddd',
                        borderRadius: '8px',
                        backgroundColor: '#f9f9f9'
                    }}>
                        <img width="200" src={item.imgURL} style={{
                            borderRadius: '8px',
                            marginBottom: '15px'
                        }} alt={item.title}></img>
                        <h4 style={{
                            margin: '10px 0',
                            color: '#333'
                        }}>{item.title}</h4>
                        <p style={{ margin: '5px 0', color: '#666' }}>
                            Unidades: {item.count}
                        </p>
                        <p style={{
                            margin: '5px 0',
                            fontSize: '1.2rem',
                            fontWeight: 'bold',
                            color: '#2c5f2d'
                        }}>$ {item.price * item.count}</p>
                        <button onClick={() => removeItem(item.id)} style={{
                            marginTop: '10px',
                            padding: '10px 20px',
                            backgroundColor: '#dc3545',
                            color: 'white',
                            border: 'none',
                            borderRadius: '5px',
                            cursor: 'pointer',
                            fontSize: '1rem'
                        }}>Quitar del carrito</button>
                    </div>
                    )
                }
            </div>
            <FormCheckout handleCheckout={handleCheckout} />
        </div>
    )
}
export default CartContainer;