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

const Home = () => {
  return (
    <Layout>
        <Head title="Home" />

        <SliderComponent />

        <AboutComponent />

        <ServiceComponent />

        <ProjectComponent />

        <CategoryComponent />

        <BlogComponent />

        <ContactComponent />

        <SubscribeComponent />
    </Layout>
  )
}

export default Home
