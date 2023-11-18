import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
const Layout = ({children, ...rest}) => {
  return (
    <>
        <Header />
        <main className="max-w-[1600px] mx-auto">
          {children}
        </main>
        <Footer />
    </>
  )
}

export default Layout