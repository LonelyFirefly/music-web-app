import { Sidebar } from "@/Components/Sidebar";

export default function DashboardLayout({ children }) {
	return (
		// as a root layout, it should contain html and body tags
		<html lang="en">
			<body>
				<section>
					<Sidebar />
					{/* shared UI */}
					<nav></nav>
					{children}
				</section>
			</body>
		</html>
	);
}
