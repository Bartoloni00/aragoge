import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import { SessionProvider } from "../context/SessionContext.jsx";
const Layout = ({children, ...rest}) => {

  return (
    <SessionProvider>
      <Header/>
        <main className="max-w-[1600px] mx-auto">
          {children}
        </main>
        <Footer />
    </SessionProvider>
  )
}

export default Layout