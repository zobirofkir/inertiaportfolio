import { useState } from 'react';
import SliderComponent from '@/Components/SliderComponent'
import { Head } from '@inertiajs/react'
import Layout from '../Layouts/Layout'
import AboutComponent from '@/Components/AboutComponent'
import ProjectComponent from '@/Components/ProjectComponent'
import ServiceComponent from '@/Components/ServiceComponent'
import SubscribeComponent from '@/Components/SubscribeComponent'
import SkillComponent from '@/Components/SkillComponent';
import WelcomTextComponent from '@/Components/WelcomTextComponent';

const Home = ({  projects: initialProjects, projectsSlider: initialProjectsSlider, skills: initialSkills, services: initialServices}) => {
  const [projects, setProjects] = useState(initialProjects);
  const [projectsSlider, setProjectsSlider] = useState(initialProjectsSlider)
  const [skills, setSkills] = useState(initialSkills);
  const [services, setServices] = useState(initialServices);

  return (
    <Layout>
        <Head title="Home" />

        <WelcomTextComponent />

        <SliderComponent projectsSlider={projectsSlider} setProjectsSlider={setProjectsSlider}/>

        <AboutComponent />

        <ServiceComponent services={services} setServices={setServices}/>

        {/* <SkillComponent skills={skills} setSkills={setSkills}/> */}

        <ProjectComponent projects={projects} setProjects={setProjects} />

        <SubscribeComponent />
    </Layout>
  );
}

export default Home;
