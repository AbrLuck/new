import MainLayout from "@/app/layout/MainLayout";
import Homepage from "@/app/components/Home/page";
import Header from "@/app/layout/Header";
import Footer from "@/app/layout/Footer";
//import Solutions from "@/app/components/Services/Solutions/Solutions";

export default function Home() {  
    return (
        <MainLayout>
            <Header/>
            <Homepage/>
            <Footer/>
        </MainLayout>
    );
}