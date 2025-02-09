import HeaderComponent from '@/Components/HeaderComponent'
import SliderComponent from '@/Components/SliderComponent'
import { Head } from '@inertiajs/react'
import React from 'react'

const Home = () => {
  return (
    <>
        <Head title="Home" />

        <HeaderComponent />

        <SliderComponent />
    </>
  )
}

export default Home
