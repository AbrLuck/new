import Footer from "@/app/layout/Footer";
import Header from "@/app/layout/Header";
import News from "@/app/components/News/News"
import MainLayout from "@/app/layout/MainLayout";

export default function ServicePage () {
    return (
        <div>
            <MainLayout>
                <Header/>
                <News/>
                <Footer/>
            </MainLayout>
        </div>
    );
}