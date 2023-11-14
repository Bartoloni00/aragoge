import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
export default function Layout({children, ...rest}){
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