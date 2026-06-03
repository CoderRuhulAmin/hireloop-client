import Image from "next/image";

export default function Home() {
	return (
		<main>
			<section className="py-12">
				<div className="container mx-auto text-center">
					<h1 className="text-3xl font-bold">Welcome to HireLoop</h1>
					<p className="mt-3 text-lg">
						HireLoop is your ultimate job search companion, providing personalized job recommendations, company insights, and a seamless application process. Find your dream job with HireLoop today!
					</p>
				</div>
			</section>
		</main>
	);
}
