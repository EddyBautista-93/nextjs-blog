import Layout  from "../components/layout";
import { getAllPostIds, getPostData } from "../lib/post";

export async function getStaticProps({ params }) {
    const postData = getPostData(params.id)
    return {
      props: {
        postData
      }
    }
  }

export async function getStaticPaths() {
    // contains the array of known paths return by get all post ids
    const paths = getAllPostIds()
    return {
        paths,
        fallback: false
    }
}

export default function Post() {
    return (
    <Layout>
      {postData.title}
      <br />
      {postData.id}
      <br />
      {postData.date}
    </Layout>
    )
}