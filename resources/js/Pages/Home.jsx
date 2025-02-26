import { useState } from 'react';
import SliderComponent from '@/Components/SliderComponent'
import { Head } from '@inertiajs/react'
import Layout from '../Layouts/Layout'
import AboutComponent from '@/Components/AboutComponent'
import ProjectComponent from '@/Components/ProjectComponent'
import ServiceComponent from '@/Components/ServiceComponent'
import ContactComponent from '@/Components/ContactComponent'
import BlogComponent from '@/Components/BlogComponent'
import CategoryComponent from '@/Components/CategoryComponent'
import SubscribeComponent from '@/Components/SubscribeComponent'
import TagComponent from '@/Components/TagComponent'
import SkillComponent from '@/Components/SkillComponent';

const Home = ({ categories, tags: initialTags, blogs: initialBlogs , projects: initialProjects, projectsSlider: initialProjectsSlider}) => {
  const [tags, setTags] = useState(initialTags);
  const [blogs, setBlogs] = useState(initialBlogs);
  const [projects, setProjects] = useState(initialProjects);
  const [projectsSlider, setProjectsSlider] = useState(initialProjectsSlider)

  return (
    <Layout>
        <Head title="Home" />

        <SliderComponent projectsSlider={projectsSlider} setProjectsSlider={setProjectsSlider}/>

        <AboutComponent />

        <ServiceComponent />

        <SkillComponent />

        <ProjectComponent projects={projects} setProjects={setProjects} />

        <TagComponent tags={tags} setTags={setTags} />

        <CategoryComponent categories={categories} />

        <BlogComponent blogs={blogs} setBlogs={setBlogs} />

        <ContactComponent />

        <SubscribeComponent />
    </Layout>
  );
}

export default Home;
