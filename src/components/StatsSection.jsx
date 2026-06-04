"use client";
import {
    Briefcase,
    Factory,
    Magnifier,
    Star,
} from "@gravity-ui/icons";
import { motion } from "motion/react"

import StatCard from "./StatCard";

const stats = [
    {
        id: 1,
        icon: <Briefcase className="h-5 w-5" />,
        value: "50K",
        label: "Active Jobs",
    },
    {
        id: 2,
        icon: <Factory className="h-5 w-5" />,
        value: "12K",
        label: "Companies",
    },
    {
        id: 3,
        icon: <Magnifier className="h-5 w-5" />,
        value: "2M",
        label: "Job Seekers",
    },
    {
        id: 4,
        icon: <Star className="h-5 w-5" />,
        value: "97%",
        label: "Satisfaction Rate",
    },
];

const StatsSection = () => {
    return (
        <section className="relative overflow-hidden bg-black py-28 text-white">
            {/* Background Globe  */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-90"
                style={{ backgroundImage: "url('/images/globe.png')" }}
            />


            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/40" />

            {/* Glow Effect */}
            <div className="absolute left-1/2 top-[25%] h-100 w-100 -translate-x-1/2 rounded-full bg-violet-600/30 blur-[140px]" />

            {/* Contents */}
            <div className="relative z-10 container mx-auto text-center">
                {/* Heading */}
                <div className="mx-auto max-w-3xl text-center">
                    <h1 className="text-3xl font-bold mb-6">Welcome to HireLoop</h1>
                    <h2 className="text-2xl font-medium leading-relaxed text-white/90">
                        Assisting over 15,000 job seekers
                        <br />
                        find their dream positions.
                    </h2>
                    <p className="mt-3 text-lg">
                        HireLoop is your ultimate job search companion, providing personalized job recommendations, company insights, and a seamless application process. Find your dream job with HireLoop today!
                    </p>
                </div>

                <div className="py-12 flex justify-center items-center gap-10">
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1 }}
                        whileHover={{ scale: 1.5 }}
                        whileTap={{ scale: 0.95 }}
                        className={`bg-red-400 h-12 w-12`}
                    />
                    <motion.p animate={{ rotate: -45 }}>Remote Jobs</motion.p>
                    <motion.p initial={{ scale: 0 }} animate={{ scale: 1 }}>On-site Jobs</motion.p>
                </div>

                {/* Stats Cards */}
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mt-20">
                    {
                        stats.map((stat) => <StatCard key={stat.id} stat={stat} />)
                    }
                </div>
            </div>
        </section>
    );
};

export default StatsSection;