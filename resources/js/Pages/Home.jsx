import SliderComponent from '@/Components/SliderComponent'
import { Head } from '@inertiajs/react'
import Layout from './Layout'

const Home = () => {
  return (
    <Layout>
        <Head title="Home" />


        <SliderComponent />
    </Layout>
  )
}

export default Home
