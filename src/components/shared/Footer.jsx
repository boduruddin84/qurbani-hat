
import Image from "next/image";

const Footer = () => {
  return (
    <div className="bg-[#244D3F] pb-5 mt-10">
      <div className="lg:w-6xl mx-auto">
        <div className="text-center space-y-5 mb-10">
          <h3 className="text-2xl lg:text-5xl font-extrabold text-[#FFFFFF] pt-15">
            QurbaniHat
          </h3>
          <p className="text-[16px] text-[#ffffffa8]">
            সহজে কুরবানির পশু কিনুন।
          </p>
          <p className="text-[20px] font-medium text-[#FFFFFF]">Social Links</p>
          <div className="flex justify-center items-center gap-2">
            <Image
              src={"/instagram.png"}
              alt="Instagram image"
              loading="eager"
              width={30}
              height={30}
              className="object-cover h-auto w-auto"
            />
            <Image
              src={"/facebook.png"}
              alt="Facebook image"
              loading="eager"
              width={30}
              height={30}
              className="object-cover h-auto w-auto"
            />
            <Image
              src={"/twitter.png"}
              alt="Twitter image"
              loading="eager"
              width={30}
              height={30}
              className="object-cover h-auto w-auto"
            />
          </div>
        </div>
        <hr className="text-[#1A8862]" />
        <div className="text-center mt-5 lg:flex lg:justify-between">
          <p className="text-[#FAFAFA] text-[16px]">
            © 2026 QurbaniHat. All rights reserved.
          </p>
          <div className="flex justify-center items-center gap-4">
            <p className="text-[#FAFAFA] text-[16px]">Privacy Policy</p>
            <p className="text-[#FAFAFA] text-[16px]">Terms of Service</p>
            <p className="text-[#FAFAFA] text-[16px]">Cookies</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
