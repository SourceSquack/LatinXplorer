import Image from "next/image";
const LandingPage = () => {
  return (
    <div className="flex h-screen">
      <div className="w-1/3 bg-black relative">
        <Image className="w-full h-full object-cover" src="/medellin.webp" width={1500} height={1500} alt="Colombia" />
        <h2 className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-xl">Colombia</h2>
      </div>
      <div className="w-1/3 bg-black relative">
        <Image className="w-full h-full object-cover" src="/mexico.webp" width={1500} height={1500} alt="Mexico" />
        <h2 className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-xl">Mexico</h2>
      </div>
      <div className="w-1/3 bg-black relative">
        <Image className="w-full h-full object-cover" src="/argentina.webp" width={1500} height={1500} alt="Argentina" />
        <h2 className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-xl">Argentina</h2>
      </div>
      <div className="overlay absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-transparent text-white text-center p-8">
        <h1 className="text-3xl md:text-5xl font-bold">Discover New Places and Create Unforgettable Memories</h1>
      </div>
    </div>
  );
};

export default LandingPage;