import SliderComponent from '@/Components/SliderComponent'
import { Head } from '@inertiajs/react'
import Layout from '../Layouts/Layout'
import AboutComponent from '@/Components/AboutComponent'

const Home = () => {
  return (
    <Layout>
        <Head title="Home" />


        <SliderComponent />

        <AboutComponent />
    </Layout>
  )
}

export default Home
