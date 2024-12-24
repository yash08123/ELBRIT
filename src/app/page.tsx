import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { FlaskRoundIcon as Flask, Leaf, Globe, ShoppingCart, Shield, GrapeIcon as GMOIcon, Phone, Mail, MapPin } from 'lucide-react'
import { ProductCard } from '@/components/product-card'
import { BlogPost } from '@/components/blog-post'

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
            <h1 className="text-[--heading] text-6xl font-bold leading-tight">
              Essential Vitamins
            </h1>
            <div className="space-y-4">
              <p className="text-gray-600">Online Medical Supplies</p>
              <div className="space-y-2">
                <h2 className="font-semibold">Get Your Vitamins</h2>
                <h2 className="font-semibold">& Minerals</h2>
              </div>
              <Button 
                className="bg-[--primary] hover:bg-[--primary]/90 text-white rounded-full px-8"
              >
                EXPLORE
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="relative h-[400px]">
              <Image
                src="/vitamin-bottle.png"
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
                  description: "Increased Vitamins and minerals in your diet"
                },
                {
                  icon: <ShoppingCart className="h-6 w-6" />,
                  title: "Weight Loss",
                  description: "Find scientifically proven solutions"
                },
                {
                  icon: <Leaf className="h-6 w-6" />,
                  title: "Functional Foods",
                  description: "From protein powers to baby formula"
                }
              ].map((feature, index) => (
                <div key={index} className="flex items-start gap-4 bg-white/80 backdrop-blur-sm p-4 rounded-lg shadow-sm">
                  <div className="bg-[--primary] p-2 rounded-full">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold">{feature.title}</h3>
                    <p className="text-sm text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="mt-20 mb-12">
          <div className="bg-[--primary] rounded-[40px] p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
              {[
                {
                  icon: <Flask className="h-8 w-8" />,
                  title: "Clinically Studied",
                  description: "All products that we offer have undergone lab and safety tests"
                },
                {
                  icon: <Leaf className="h-8 w-8" />,
                  title: "Vegetarian Friendly",
                  description: "We have a wide selection of vegetarian products to meet your needs"
                },
                {
                  icon: <Globe className="h-8 w-8" />,
                  title: "Made In India",
                  description: "Shop local and explore health products made right here in India"
                },
                {
                  icon: <ShoppingCart className="h-8 w-8" />,
                  title: "Free Shipping",
                  description: "We deliver to your door with no shipping costs on your orders"
                },
                {
                  icon: <Shield className="h-8 w-8" />,
                  title: "No Risk",
                  description: "We ensure that all products are safe and within their use-by date"
                },
                {
                  icon: <GMOIcon className="h-8 w-8" />,
                  title: "GMO Free",
                  description: "Natural, no modified products and derivatives for those who need it"
                }
              ].map((feature, index) => (
                <div key={index} className="text-center text-white">
                  <div className="bg-white rounded-full h-16 w-16 flex items-center justify-center mx-auto mb-4">
                    <div className="text-[--primary]">
                      {feature.icon}
                    </div>
                  </div>
                  <h3 className="font-semibold mb-2">{feature.title}</h3>
                  <p className="text-sm opacity-90">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Products Section */}
        <section className="my-20">
          <div className="mb-8">
            <h2 className="text-[--heading] text-3xl font-bold mb-4">Better Ingredients</h2>
            <p className="text-gray-600 max-w-3xl">
              Only the best when you choose products offered on our platform - high-quality ingredients for high quality products!
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

        {/* Blog Section */}
        <section className="my-20">
          <h2 className="text-center text-[--heading] text-3xl font-bold mb-12">Latest News</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array(6).fill(null).map((_, i) => (
              <BlogPost
                key={i}
                title="The Covid-19 Epidemic In 2022 Is Back"
                date="20 APR"
                image={i % 2 === 0 ? "/Tabs.png" : "/TumGin.png"}
              />
            ))}
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="bg-[--primary] text-white mt-20">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="flex items-center gap-3 bg-[#1B4B59]/40 p-4 rounded-xl">
              <Phone className="h-5 w-5" />
              <div>
                <div className="text-sm opacity-80">Phone Number</div>
                <div>+974 3118 1843</div>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-[#1B4B59]/40 p-4 rounded-xl">
              <Mail className="h-5 w-5" />
              <div>
                <div className="text-sm opacity-80">Email Address</div>
                <div>Elbrithcqhr@gmail.com</div>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-[#1B4B59]/40 p-4 rounded-xl">
              <MapPin className="h-5 w-5" />
              <div>
                <div className="text-sm opacity-80">Office Location</div>
                <div>Ambassador Street, Zone 61</div>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-start gap-8 pt-8 border-t border-white/20">
            <Image
              src="/elbrit-logo-white.png"
              alt="Elbrit"
              width={150}
              height={40}
              className="brightness-0 invert"
            />
            <div className="space-y-4">
              <p className="opacity-90">
                Your health, physical and emotional well-being is important to us. We are always by your side and have made it even easier for you to find the necessary vitamins.
              </p>
              <p className="text-sm opacity-70">
                Elbrit Life Sciences Private Limited. C20, BKC, G Block, Mumbai 400051
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

