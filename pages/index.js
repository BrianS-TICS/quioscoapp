
import Layout from '../layout/Layout'
import useQuiosco from '../hooks/useQuiosco'
import Producto from '../components/Producto'

export default function Home() {

  const { categoriaActual } = useQuiosco()

  return (
    <Layout
      pagina={`Menú de ${categoriaActual?.nombre}`}
    >
      <h1 className='text-4xl font-black'>{categoriaActual?.nombre}</h1>
      <p className='text-2xl my-10'>
        Elige y perzonaliza tu pedido a continuación
      </p>
      <div className='grid gap-4 grid-cols-1 xl:grid-cols-3 2xl:grid-cols-4'>
        {categoriaActual?.productos?.map(producto => (
          <Producto key={producto.id} producto={producto} />
        ))}
      </div>
    </Layout>
  )
}