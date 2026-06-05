import Link from "next/link";
import {
    LogoFacebook,
    LogoLinkedin,
    LogoGithub,
} from "@gravity-ui/icons";

const DashboardFooter = () => {
    return (
        <footer className="border-t border-white/10 bg-black text-white py-6 mt-auto">
            <div className="px-6 lg:px-8">
                <div className="flex flex-col items-center justify-between gap-4 text-sm text-gray-500 md:flex-row">
                    <p className="text-white">&copy; 2026 HireLoop. All rights reserved.</p>

                    <div className="flex items-center gap-6">
                        <Link href="/terms" className="transition hover:text-white">
                            Terms & Policy
                        </Link>

                        <Link href="/privacy" className="transition hover:text-white">
                            Privacy Guideline
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};
export default DashboardFooter;