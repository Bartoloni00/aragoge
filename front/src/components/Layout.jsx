import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
/* 
    ...rest: todo lo que le pasamos por el classname al contenedor pueden ser estilos y eventos va para aqui
    children: Es lo que nosotros le pasamos entre las etiquetas, todo lo que este adentro lo recibe layout y lo pega como children
*/
const Layout = ({children, ...rest}) => {
    return (
        <>
            <Header />
            <main {...rest}>
                {children}
            </main>
            <Footer />
        </>
    )
}

export default Layout