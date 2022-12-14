import { DUMMY_POSTS } from "..";
import AllPosts from "../../components/posts/all-posts";
import { getAllPosts } from "../../lib/posts-util";

export default function AllPostsPage(props){
  return (
    <AllPosts posts={props.posts} />
  )
}

export async function getStaticProps() {
  const allposts = getAllPosts()

  return {
    props: {
      posts: allposts
    }
  }
}