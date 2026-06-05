import Image from "next/image";
import Link from "next/link";

const MainLogo = () => {
    return (
        <Link href="/" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-linear-to-br from-blue-600 to-blue-400 shadow-lg">
                <span className="text-xl font-bold text-white">H</span>
            </div>

            <div className="hidden leading-none sm:block">
                <Image
                    src={`/images/logo.png`}
                    alt="Hire Loop"
                    width={120}
                    height={60}
                    className="h-auto w-auto"
                />
            </div>
        </Link>
    );
};

export default MainLogo;