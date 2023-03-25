import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Categories from "@/components/Categories";
import PostCard from "@/components/PostCard";
import Search from "@/components/Search";
import TopPost from "@/components/TopPost";

const index = ({ posts, categories }) => {
  return (
    <>
      <Header />
      <div className="w-10/12 mx-auto my-10">
        <div className="flex justify-between gap-10 sm:flex-nowrap flex-wrap">
          <div className="w-full sm:w-3/12 mx-auto">
            <Search />
            <Categories categories={categories} />
            <TopPost posts={posts} />
          </div>
          <div className="w-full sm:w-9/12 mx-auto">
            <PostCard posts={posts} />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export async function getStaticProps() {
  const res = await fetch("https://blog-app-mhs.vercel.app/api/posts");
  const posts = await res.json();

  const cateRes = await fetch("https://blog-app-mhs.vercel.app/api/categories");
  const categories = await cateRes.json();

  return {
    props: {
      posts,
      categories,
    },
  };
}

export default index;
