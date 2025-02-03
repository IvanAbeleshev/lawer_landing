import GoToNextSection from "@/components/GoToNextSection/GoToNextSection";
import SectionAbout from "@/components/SectionAbout/SectionAbout";
import SectionMain from "@/components/SectionMain/SectionMain";
import SectionServices from "@/components/SectionServices/SectionServices";

export default function Home() {
  return (
    <main>
      <SectionMain />
      <SectionAbout />
      <SectionServices />
      <GoToNextSection 
        isShow={true} 
        nextSectionTitle="про мене"
        anchor="about"
      />
    </main>    
  )
}
