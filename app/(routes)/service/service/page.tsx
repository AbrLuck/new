import Footer from "@/app/layout/Footer";
import Header from "@/app/layout/Header";
import Services from "@/app/components/Services/Services/Services"
import MainLayout from "@/app/layout/MainLayout";

export default function ServicePage () {
    return (
        <div>
            <MainLayout>
                <Header/>
                <Services/>
                <Footer/>
            </MainLayout>
        </div>
    );
}