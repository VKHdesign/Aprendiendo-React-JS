import { useState } from "react";

export default function FormCheckout(props) {
    // * Controlled components/controlled forms/input

    const [formData, setFormData] = useState({
        username: "", phone: "", email: ""
    })

    function handleSubmit(event) {
        event.preventDefault();
        props.handleCheckout(formData)
    }

    function handleInputChange(event) {
        const value = event.target.value;
        const inputName = event.target.name;
        // phone / 123123
        // ? formData.username ===  formData["username"]
        const newFormData = { ...formData }
        newFormData[inputName] = value;
        setFormData(newFormData)
    }

    function resetForm() {
        setFormData({
            username: "", phone: "", email: ""
        })
    }


    return (
        <div style={{
            maxWidth: '400px',
            margin: '0 auto',
            padding: '20px',
            textAlign: 'center'
        }}>
            <h4 style={{
                fontSize: '1.5rem',
                marginBottom: '20px',
                color: '#333'
            }}>COMPLETA TUS DATOS</h4>
            <form onSubmit={handleSubmit} style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '15px'
            }}>
                <label style={{
                    display: 'flex',
                    flexDirection: 'column',
                    textAlign: 'left',
                    fontSize: '0.9rem',
                    fontWeight: '500',
                    color: '#555'
                }}>
                    Nombre
                    <input
                        value={formData.username}
                        onChange={handleInputChange}
                        name="username"
                        type="text"
                        placeholder="Facundo"
                        required
                        style={{
                            marginTop: '5px',
                            padding: '10px',
                            fontSize: '1rem',
                            border: '1px solid #ddd',
                            borderRadius: '5px',
                            outline: 'none'
                        }}
                    />
                </label>

                <label style={{
                    display: 'flex',
                    flexDirection: 'column',
                    textAlign: 'left',
                    fontSize: '0.9rem',
                    fontWeight: '500',
                    color: '#555'
                }}>
                    Email
                    <input
                        value={formData.email}
                        onChange={handleInputChange}
                        name="email"
                        type="email"
                        placeholder="mail@mail.com"
                        required
                        style={{
                            marginTop: '5px',
                            padding: '10px',
                            fontSize: '1rem',
                            border: '1px solid #ddd',
                            borderRadius: '5px',
                            outline: 'none'
                        }}
                    />
                </label>

                <label style={{
                    display: 'flex',
                    flexDirection: 'column',
                    textAlign: 'left',
                    fontSize: '0.9rem',
                    fontWeight: '500',
                    color: '#555'
                }}>
                    Teléfono
                    <input
                        value={formData.phone}
                        onChange={handleInputChange}
                        name="phone"
                        type="tel"
                        placeholder="123"
                        required
                        style={{
                            marginTop: '5px',
                            padding: '10px',
                            fontSize: '1rem',
                            border: '1px solid #ddd',
                            borderRadius: '5px',
                            outline: 'none'
                        }}
                    />
                </label>

                <button type="submit" style={{
                    padding: '12px',
                    fontSize: '1rem',
                    backgroundColor: '#28a745',
                    color: 'white',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer',
                    fontWeight: '600',
                    marginTop: '10px'
                }}>
                    Enviar
                </button>
                <button type="button" onClick={resetForm} style={{
                    padding: '12px',
                    fontSize: '1rem',
                    backgroundColor: '#6c757d',
                    color: 'white',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer',
                    fontWeight: '600'
                }}>
                    Reiniciar formulario
                </button>
            </form>
        </div>
    );
}