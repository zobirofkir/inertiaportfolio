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

const Home = ({ categories, tags: initialTags, blogs: initialBlogs }) => {
  const [tags, setTags] = useState(initialTags);
  const [blogs, setBlogs] = useState(initialBlogs);

  return (
    <Layout>
        <Head title="Home" />

        <SliderComponent />

        <AboutComponent />

        <ServiceComponent />

        <ProjectComponent />

        <TagComponent tags={tags} setTags={setTags} />

        <CategoryComponent categories={categories} />

        <BlogComponent blogs={blogs} setBlogs={setBlogs} />

        <ContactComponent />

        <SubscribeComponent />
    </Layout>
  );
}

export default Home;
