import Footer from "@/app/layout/Footer";
import Header from "@/app/layout/Header";
import Contact from "@/app/components/Contact/Contact"
import MainLayout from "@/app/layout/MainLayout";


export default function ServicePage () {
    return (
        <div>
            <MainLayout>
                <Header/>
                <Contact/>
                <Footer/>
            </MainLayout>
        </div>
    );
}