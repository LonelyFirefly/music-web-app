import { Sidebar } from "@/Components/Sidebar/Sidebar";

export default function DashboardLayout({ children }) {
	return (
		<section>
			<Sidebar />
			{/* shared UI */}
			<nav></nav>
			{children}
		</section>
	);
}
