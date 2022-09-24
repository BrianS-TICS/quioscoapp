import React from 'react'
import Image from 'next/image'
import useQuiosco from '../hooks/useQuiosco'

const Categoria = ({categoria}) => {

    const {categoriaActual, hanldeClickCategoria} = useQuiosco()
    const {nombre, icono, id} = categoria

    return (
        <div className={`${categoriaActual?.id === id ? 'bg-amber-400' : ''} flex items-center gap-3 w-full border p-5 hover:bg-amber-400`}>
            <Image 
                width={70}
                height={70}
                src={`/assets/img/icono_${icono}.svg`}
                alt='Imagen icono'
            />
            <button
                className='text-2xl font-bold'
                onClick={() => {hanldeClickCategoria(id)}}
            >
                {nombre}
            </button>
        </div>
    )
}

export default Categoria