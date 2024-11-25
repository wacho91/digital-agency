
import BlogCard from "./BlogCard";

import Img1 from "../../assets/blog/blog1.png";
import Img2 from "../../assets/blog/blog2.png";
import Img3 from "../../assets/blog/blog3.png";

const BlogsData = [
    {
      id: 1,
      image: Img1,
      title: "Realtime analytics",
      description:
        "“The results have been incredible. With Power Digital, it feels like they’re in our trench, supporting and understanding us. They’re like a partner and mentor in helping us get where we want to be. “The results have been incredible.",
      author: "Someone",
      date: "April 22, 2022",
    },
    {
      id: 2,
      image: Img2,
      title: "Realtime analytics",
      description:
        "“The results have been incredible. With Power Digital, it feels like they’re in our trench, supporting and understanding us. They’re like a partner and mentor in helping us get where we want to be. “The results have been incredible. ",
      author: "Someone",
      date: "April 22, 2022",
    },
    {
      id: 3,
      image: Img3,
      title: "Realtime analytics",
      description:
        "“The results have been incredible. With Power Digital, it feels like they’re in our trench, supporting and understanding us. They’re like a partner and mentor in helping us get where we want to be. “The results have been incredible. ",
      author: "Someone",
      date: "April 22, 2022",
    },
];

const BlogsComp = () => {
  return (
    <>
        <div>
            <section>
                <h1>
                    Our Blogs
                </h1>
                <div>
                    {BlogsData.map((item) => (
                        <BlogCard key={item.id} {...item} />
                    ))}
                </div>
                <div>
                    <button>View All Posts</button>
                </div>
            </section>
        </div>
    </>
  )
}

export default BlogsComp
