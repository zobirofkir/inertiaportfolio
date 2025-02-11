import SliderComponent from '@/Components/SliderComponent'
import { Head } from '@inertiajs/react'
import Layout from '../Layouts/Layout'
import AboutComponent from '@/Components/AboutComponent'
import ProjectComponent from '@/Components/ProjectComponent'
import ServiceComponent from '@/Components/ServiceComponent'

const Home = () => {
  return (
    <Layout>
        <Head title="Home" />

        <SliderComponent />

        <AboutComponent />

        <ServiceComponent />

        <ProjectComponent />
    </Layout>
  )
}

export default Home
