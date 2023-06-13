import { getProviders, signIn } from "next-auth/react";

export default function Page({ providers }) {
	return (
		<div>
			<img
				alt="spotify logo"
				className="w-52 mb-5"
				src="https://links.papareact.com/9xl"
			/>

			{/* {Object.values(providers).map((provider) => (
				<div key={provider.name}>
					<button> test </button>
				</div>
			))} */}
		</div>
	);
}

// before the page gets delivred, this function will run on the server. It's called a server-side render
export async function getServerSideProps() {
	const providers = await getProviders();
	console.log(providers);

	return {
		props: {
			providers,
		},
	};
}
