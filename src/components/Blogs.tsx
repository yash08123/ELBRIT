import { BlogPost } from "./blog-post";

export default function Blogs() {
  return (
    <>
      <section className="my-20">
        <h2 className="text-center text-[--heading] text-3xl font-bold mb-12">
          Latest News
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array(6)
            .fill(null)
            .map((_, i) => (
              <BlogPost
                key={i}
                title="The Covid-19 Epidemic In 2022 Is Back"
                date="20 APR"
                image={i % 2 === 0 ? "/Tabs.png" : "/TumGin.png"}
              />
            ))}
        </div>
      </section>
    </>
  );
}
