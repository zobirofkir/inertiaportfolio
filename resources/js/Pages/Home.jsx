import SliderComponent from '@/Components/SliderComponent'
import { Head } from '@inertiajs/react'
import Layout from '../Layouts/Layout'

const Home = () => {
  return (
    <Layout>
        <Head title="Home" />


        <SliderComponent />
    </Layout>
  )
}

export default Home
