import Footer from "@/app/layout/Footer";
import Header from "@/app/layout/Header";
import Logistics from "@/app/components/Services/Logistics/Logistics"
import MainLayout from "@/app/layout/MainLayout";

export default function ServicePage () {
    return (
        <div>
            <MainLayout>
                <Header/>
                <Logistics/>
                <Footer/>
            </MainLayout>
        </div>
    );
}