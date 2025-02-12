import Layout from "@/Layouts/Layout"
import { Head } from "@inertiajs/react"

const ShowBlog = ({post}) => {
  return (
    <Layout>
        <Head title={post.title} />
        <h1>{post.title}</h1>
        <p>{post.content}</p>
    </Layout>
  )
}

export default ShowBlog
