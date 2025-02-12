import ServiceComponent from '@/Components/ServiceComponent'
import Layout from '@/Layouts/Layout'
import { Head } from '@inertiajs/react'
import React from 'react'

const Service = () => {
  return (
    <Layout>
        <Head title="Service" />

        <section className='sm:h-screen sm:flex sm:items-center sm:justify-center  h-auto'>
            <ServiceComponent />
        </section>
    </Layout>
  )
}

export default Service
