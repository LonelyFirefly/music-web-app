import { Sidebar } from "@/Components/Sidebar/Sidebar";
import { TopBar } from "@/Components/TopBar/TopBar";

export default function DashboardLayout({ children }) {
	return (
		<section className="grid grid-cols-[minmax(150px,_20vw)_1fr] w-screen h-screen">
			<Sidebar />
			{/* shared UI */}
			<div>
				<TopBar />
				{children}
			</div>
		</section>
	);
}
