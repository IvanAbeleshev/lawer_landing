import FloatButtonCommunication from "@/components/FloatButtonCommunication/FloatButtonCommunication";
import GoToNextSection from "@/components/GoToNextSection/GoToNextSection";
import SectionAbout from "@/components/SectionAbout/SectionAbout";
import SectionAchievements from "@/components/SectionAchievements/SectionAchievements";
import SectionContactMe from "@/components/SectionContactMe/SectionContactMe";
import SectionMain from "@/components/SectionMain/SectionMain";
import SectionServices from "@/components/SectionServices/SectionServices";

export default function Home() {
  return (
    <main>
      <SectionMain />
      <SectionAbout />
      <SectionServices />
      <SectionAchievements />
      <SectionContactMe />
      <GoToNextSection 
        isShow={true} 
        nextSectionTitle="про мене"
        anchor="about"
      />
      <FloatButtonCommunication/>
    </main>    
  )
}
