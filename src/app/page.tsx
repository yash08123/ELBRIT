import Image from "next/image";
import { Button } from "@/components/ui/button";
import { FlaskRoundIcon as Flask, Leaf, ShoppingCart } from "lucide-react";
import Products from "@/components/Products";
import Blogs from "@/components/Blogs";
import FeatureG from "@/components/FeatureG";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Logo */}
      <div className="container mx-auto px-4 pt-6">
        <Image
          src="/elbrit-logo.png"
          alt="Elbrit"
          width={150}
          height={40}
          className="mb-12"
        />
      </div>

      {/* Hero Section */}
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-[--heading] whitespace-nowrap  text-6xl font-bold leading-tight">
              Essential Vitamins
            </h1>
            <div className="space-y-4">
              <p className="text-gray-600">Online Medical Supplies</p>
              <div className="space-y-2">
                <h2 className="font-semibold">Get Your Vitamins</h2>
                <h2 className="font-semibold">& Minerals</h2>
              </div>
              <Button className=" bg-[#1B4B59] hover: bg-[#1B4B59]F/90 text-black rounded-full px-8">
                EXPLORE
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="relative h-[400px] w-[400px]">
              <Image
                src="/Bot.png"
                alt="Vitamin Bottle"
                fill
                className="object-contain"
              />
            </div>

            {/* Feature Icons */}
            <div className="absolute right-0 top-0 space-y-6">
              {[
                {
                  icon: <Flask className="h-6 w-6" />,
                  title: "Vitamins",
                  description: "Increased Vitamins and minerals in your diet",
                },
                {
                  icon: <ShoppingCart className="h-6 w-6" />,
                  title: "Weight Loss",
                  description: "Find scientifically proven solutions",
                },
                {
                  icon: <Leaf className="h-6 w-6" />,
                  title: "Functional Foods",
                  description: "From protein powers to baby formula",
                },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 bg-white/80 backdrop-blur-sm p-4 rounded-lg shadow-sm"
                >
                  <div className=" bg-[#1B4B59] p-2 rounded-full">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold">{feature.title}</h3>
                    <p className="text-sm text-gray-600">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <FeatureG />

        {/* Products Section */}
        <Products />

        {/* Blog Section */}
        <Blogs />
      </div>
      {/* Footer */}
      <Footer />
    </div>
  );
}
