
import { useEffect, useCallback } from 'react'
import Layout from '../layout/Layout.js'
import useQuiosco from '../hooks/useQuiosco.js'

export default function Total() {

    const { pedido } = useQuiosco()

    //! REPASAR AQUI

    const comprobarPedido = useCallback(() => {
        return pedido.length === 0
    }, [pedido])

    useEffect(() => {
        comprobarPedido()
    }, [pedido, comprobarPedido])

    const colocarOrden = (e) => {
        e.preventDefault()
        console.log('Enviando orden');
    }

    return (
        <Layout pagina="Total y confirmar pedido">
            <h1 className='text-4xl font-black'>Total y confirmar pedido</h1>
            <p className='text-2xl my-10'>Confirma tu pedido a continuación</p>

            <form
                onSubmit={colocarOrden}
            >
                <div>
                    <label htmlFor='nombre' className='block font-bold uppercase text-slate-800 text-xl'>Nombre: </label>
                    <input
                        id='nombre'
                        name='nombre'
                        type="text"
                        className='bg-gray-200 w-full lg:w-1/3 mt-2 p-2 rounded-md'
                    />
                </div>

                <div className='mt-10'>
                    <p className='text-2xl'>Total a pagar: {''} <span className='font-bold'> </span> </p>
                </div>

                <div className='mt-5'>
                    <input
                        type="submit"
                        name="confirmar"
                        value="confirmar pedido"
                        className={`w-full lg:w-auto px-5 py-2 rounded uppercase font-bold text-white text-center ${comprobarPedido() ? 'bg-indigo-100' : 'bg-indigo-600 hover:bg-indigo-800 cursor-pointer'}`}
                        disabled={comprobarPedido()}
                    />
                </div>

            </form>
        </Layout>
    )
}