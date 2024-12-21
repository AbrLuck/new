import Footer from "@/app/layout/Footer";
import Header from "@/app/layout/Header";
import Trading from "@/app/components/Services/Trading/Trading"
import MainLayout from "@/app/layout/MainLayout";

export default function ServicePage () {
    return (
        <div>
            <MainLayout>
                <Header/>
                <Trading/>
                <Footer/>
            </MainLayout>
        </div>
    );
}