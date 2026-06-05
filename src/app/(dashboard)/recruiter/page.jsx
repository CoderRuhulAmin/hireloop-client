"use client";
import { useSession } from "@/lib/auth-client";
import DashboardStats from "../components/DashboardStats";
import { Briefcase, CircleCheck, Persons, Thunderbolt } from "@gravity-ui/icons";

const recruiterHomePage = () => {

    const { data: session, isPending } = useSession();
    // console.log({session, isPending});
    // if(isPending){
    //     return <div>Loading...</div>
    // }
    const user = session?.user;
    // console.log({user});
    // console.log("Session data in RecruiterDashboardHomePage:", session);

    const recruiterStats = [
        { title: "Total Job Posts", value: "48", icon: Briefcase },
        { title: "Total Applicants", value: "1,284", icon: Persons },
        { title: "Active Jobs", value: "18", icon: Thunderbolt },
        { title: "Jobs Closed", value: "32", icon: CircleCheck },
    ];


    return (
        <div className="container mx-auto p-4">
            <section className="py-12">
                <h2 className="text-2xl">Welcome back, <strong>{user?.name}</strong></h2>
            </section>
            <section>
                <DashboardStats statsData={recruiterStats} />
            </section>
        </div>
    );
};

export default recruiterHomePage;