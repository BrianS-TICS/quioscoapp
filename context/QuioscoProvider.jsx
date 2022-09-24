import {useState, useEffect, createContext} from 'react'
import axios from 'axios'

const QuioscoContext = createContext();

const QuioscoProvider = ({children}) => {

    const [categorias, setCategorias] = useState([]);
    const [categoriaActual, setCategoriaActual] = useState({});
    const [producto, setProducto] = useState({});
    const [modal, setModal] = useState(false);
    const [pedido, setPedido] = useState([]);

    const obtenerCategorias = async () =>{
        const {data} = await axios('/api/categorias')
        setCategorias(data)
    }

    useEffect(() => {
        obtenerCategorias()
    }, [])

    useEffect( () => {
        setCategoriaActual(categorias[0])
    }, [categorias])

    const handleAgregarPedido = ({categoriaId, imagen, ...producto}) => {
        if(pedido.some(productoState => productoState.id === producto.id)){
            // Actualizar la cantidad
            const pedidoActualizado = pedido.map(productoState => productoState.id === producto.id ? producto :
            productoState)

            setPedido(pedidoActualizado)
        }else{
            setPedido([...pedido, producto]);
        }
    }

    const handleChangeModal = () => {
        setModal(!modal)
    }

    const hanldeClickCategoria = (id) => {
        const categoria = categorias.filter( elemento => elemento.id === id)
        setCategoriaActual(categoria[0])
    }

    const handleClickProducto = producto => {
        setProducto(producto)
    }

    return ( <QuioscoContext.Provider
                value={{
                    categorias,
                    categoriaActual,
                    hanldeClickCategoria,
                    producto,
                    handleClickProducto,
                    modal,
                    handleChangeModal,
                    handleAgregarPedido
                }}
            >
                {children}
            </QuioscoContext.Provider> 
        )
}

export {
    QuioscoProvider
}

export default QuioscoContext