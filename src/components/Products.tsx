import { ProductCard } from "./product-card";

export default function Products() {
  return (
    <>
      <section className="my-20">
        <div className="mb-8">
          <h2 className="text-[--heading] text-3xl font-bold mb-4">
            Better Ingredients
          </h2>
          <p className="text-gray-600 max-w-3xl">
            Only the best when you choose products offered on our platform -
            high-quality ingredients for high quality products!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ProductCard
            title="Vitamin C"
            description="Vitamin C as ascorbic acid"
            image="/VitaminC.png"
            color="bg-yellow-100"
          />
          <ProductCard
            title="Vitamin B3"
            description="Niacin for healthy gut and skin"
            image="/VitaminB3.png"
            color="bg-teal-100"
          />
          <ProductCard
            title="Magnesium"
            description="Boost energy and support muscle function"
            image="/Magnesium.png"
            color="bg-green-100"
          />
          <ProductCard
            title="Hyaluronic Acid"
            description="For smooth, supple and soft skin!"
            image="/Hyaluronic.png"
            color="bg-gray-100"
          />
          <ProductCard
            title="Lactobacillus"
            description="Invigorate your gut microbiome"
            image="/Lacto.png"
            color="bg-orange-50"
          />
        </div>
      </section>
    </>
  );
}
