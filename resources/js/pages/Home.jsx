import { useState } from 'react';
import SliderComponent from '@/components/SliderComponent'
import Layout from '../layouts/Layout'
import AboutComponent from '@/components/AboutComponent'
import ProjectComponent from '@/components/ProjectComponent'
import ServiceComponent from '@/components/ServiceComponent'
import SubscribeComponent from '@/components/SubscribeComponent'
import SkillComponent from '@/components/SkillComponent';
import WelcomTextComponent from '@/components/WelcomTextComponent';
import SeoHead from '@/components/SeoHead';

const Home = ({ projects: initialProjects, projectsSlider: initialProjectsSlider, skills: initialSkills, services: initialServices, seo, structuredData }) => {
  const [projects, setProjects] = useState(initialProjects);
  const [projectsSlider, setProjectsSlider] = useState(initialProjectsSlider)
  const [skills, setSkills] = useState(initialSkills);
  const [services, setServices] = useState(initialServices);

  return (
    <Layout>
        <SeoHead seo={seo} structuredData={structuredData} />

        <WelcomTextComponent />

        <SliderComponent projectsSlider={projectsSlider} setProjectsSlider={setProjectsSlider}/>

        <AboutComponent />

        <ServiceComponent services={services} setServices={setServices}/>

        <SkillComponent skills={skills} setSkills={setSkills}/>

        <ProjectComponent projects={projects} setProjects={setProjects} />

        <SubscribeComponent />
    </Layout>
  );
}

export default Home;
