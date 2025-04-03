
import Navbar from "./Navbar";
import Footer from "./Footer";
import ThemeToggle from "../theme/ThemeToggle";
import Head from "../shared/Head";

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
}

const Layout = ({ children, title, description }: LayoutProps) => {
  return (
    <>
      <Head title={title} description={description} />
      <div className="flex min-h-screen flex-col bg-background text-foreground transition-colors duration-300">
        <Navbar />
        <div className="fixed bottom-6 right-6 z-50">
          <ThemeToggle />
        </div>
        <main className="flex-1">{children}</main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
