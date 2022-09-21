import Head from "next/head";
import Sidebar from "../components/Sidebar";

export default function Layout({children, pagina}) {
    return (
        <>
            <Head>
                <title>Café - {pagina}</title>
                <meta name="description" content="Quiosco Cafetería"/>
            </Head>

            <div className="md:flex">
                <Sidebar>
                    <h1>Sidebar aquí</h1>
                </Sidebar>
                <main className="md:w-8/12 xl:w-3/4 2xl:w-4/5 h-screen overflow-y-scroll">
                    {children}
                </main>
            </div>

        </>
    )
}