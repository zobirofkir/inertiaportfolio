import SliderComponent from '@/Components/SliderComponent'
import { Head } from '@inertiajs/react'
import Layout from '../Layouts/Layout'
import AboutComponent from '@/Components/AboutComponent'
import ProjectComponent from '@/Components/ProjectComponent'

const Home = () => {
  return (
    <Layout>
        <Head title="Home" />

        <SliderComponent />

        <AboutComponent />

        <ProjectComponent />
    </Layout>
  )
}

export default Home
