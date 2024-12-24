import { Phone, Mail, MapPin } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <>
      <footer className=" bg-[#1B4B59] text-white mt-20">
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
                Your health, physical and emotional well-being is important to
                us. We are always by your side and have made it even easier for
                you to find the necessary vitamins.
              </p>
              <p className="text-sm opacity-70">
                Elbrit Life Sciences Private Limited. C20, BKC, G Block, Mumbai
                400051
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
