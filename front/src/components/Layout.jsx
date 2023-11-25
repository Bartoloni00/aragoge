import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import { SessionProvider } from "../context/SessionContext.jsx";
const Layout = ({ children, ...rest }) => {

  return (
    <SessionProvider>
      <Header />
      <main className="w-full max-w-[1600px] h-full mx-auto min-h-screen">
        {children}
      </main>
      <Footer />
    </SessionProvider>
  )
}

export default Layout