import Header from './header'
import Footer from './footer'
import { LayoutWrapper } from '../contexts/LayoutContext';

interface LayoutProps {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <LayoutWrapper>
      <Header />
      {children}
      <Footer />
    </LayoutWrapper>
  )
}

export const getLayout = (page: LayoutProps) => <Layout>{page}</Layout>;

export default Layout