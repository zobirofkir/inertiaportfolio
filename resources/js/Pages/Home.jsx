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
        <Head>
          <title>Zobir Ofkir | Web Developer & Designer Portfolio</title>
          <meta name="description" content="Portfolio of Zobir Ofkir, a professional web developer specializing in Laravel, React.js, and modern web technologies. View my projects, services, and skills." />
          <meta name="keywords" content="Zobir Ofkir, web developer, portfolio, React developer, Laravel developer, web design, frontend developer" />
          <meta property="og:title" content="Zobir Ofkir | Web Developer & Designer Portfolio" />
          <meta property="og:description" content="Professional web developer specializing in Laravel, React.js, and modern web technologies. View my projects and services." />
          <meta property="og:type" content="website" />
          <meta property="og:url" content={window.location.href} />
          <link rel="canonical" href={window.location.href} />
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Zobir Ofkir",
              "url": window.location.origin,
              "jobTitle": "Web Developer",
              "sameAs": [
                "https://github.com/zobirofkir",
                "https://www.linkedin.com/in/zobir-ofkir"
              ]
            })}
          </script>
        </Head>

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
