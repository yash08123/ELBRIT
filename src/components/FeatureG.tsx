import {
  FlaskRoundIcon as Flask,
  Leaf,
  Globe,
  ShoppingCart,
  Shield,
  GrapeIcon as GMOIcon,
} from "lucide-react";

export default function FeatureG() {
  return (
    <>
      <div className="mt-20 mb-12">
        <div className=" bg-[#1B4B59] rounded-[40px] p-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {[
              {
                icon: <Flask className="h-8 w-8" />,
                title: "Clinically Studied",
                description:
                  "All products that we offer have undergone lab and safety tests",
              },
              {
                icon: <Leaf className="h-8 w-8" />,
                title: "Vegetarian Friendly",
                description:
                  "We have a wide selection of vegetarian products to meet your needs",
              },
              {
                icon: <Globe className="h-8 w-8" />,
                title: "Made In India",
                description:
                  "Shop local and explore health products made right here in India",
              },
              {
                icon: <ShoppingCart className="h-8 w-8" />,
                title: "Free Shipping",
                description:
                  "We deliver to your door with no shipping costs on your orders",
              },
              {
                icon: <Shield className="h-8 w-8" />,
                title: "No Risk",
                description:
                  "We ensure that all products are safe and within their use-by date",
              },
              {
                icon: <GMOIcon className="h-8 w-8" />,
                title: "GMO Free",
                description:
                  "Natural, no modified products and derivatives for those who need it",
              },
            ].map((feature, index) => (
              <div key={index} className="text-center text-white">
                <div className="bg-white rounded-full h-16 w-16 flex items-center justify-center mx-auto mb-4">
                  <div className="text-[#1B4B59]">{feature.icon}</div>
                </div>
                <h3 className="font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm opacity-90">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
