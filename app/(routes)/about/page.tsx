import Footer from "@/app/layout/Footer";
import Header from "@/app/layout/Header";
import About from "@/app/components/About/About"
import MainLayout from "@/app/layout/MainLayout";

export default function ServicePage () {
    return (
        <div>
            <MainLayout>
                <Header/>
                <About/>
                <Footer/>
            </MainLayout>
        </div>
    );
}