import Definisi from "@/components/Definisi";
import Footer from "@/components/Footer";
import General from "@/components/General";
import Info from "@/components/Info";
import Kegiatan from "@/components/Kegiatan";
import Perusahaan from "@/components/Perusahaan";
import Talkshow from "@/components/Talkshow";
import Walkin from "@/components/Walkin";
import Webinar from "@/components/Webinar";

export default function Home() {
  return (
    <>
      <General />
      <Definisi />
      <Info />
      <Webinar />
      <Kegiatan />
      <Perusahaan />   
      <Talkshow />
      <Walkin />
      <Footer />
    </>
  );
}
