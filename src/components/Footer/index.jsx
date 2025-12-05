import Image from "next/image";

const Footer = () => {
    return (
        <footer className="fixed bottom-0 left-0 w-full h-30 bg-[#a400a1] text-black border-t-2 border-gray-700">
            <div className="flex justify-between items-center">
                <div>
                    <Image
                        className="flex justify-start absolute left-0 bottom-1 rounded-full border-4 border-purple-800 m-2 animate-pulse"
                        width={80}
                        height={30}
                        src="/logo.png"
                        alt="logo"
                    />
                </div>
                <div className="flex justify-center items-center absolute right-10 top-12 text-xl">
                    About Us
                </div>
                <div className="flex justify-center items-center absolute right-40 top-12 text-xl">
                    Rules
                </div>
                <div className="flex justify-center items-center absolute right-60 top-12 text-xl">
                    Contact
                </div>
            </div>
        </footer>
    );
}

export default Footer;