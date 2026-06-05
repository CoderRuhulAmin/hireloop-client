import Footer from "@/components/Footer";
import { Header } from "@heroui/react";

const PublicLayout = ({ children }) => {
    return (
        <div>
            <Header />
            {children}
            <Footer />
        </div>
    );
};

export default PublicLayout;