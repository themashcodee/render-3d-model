"use client"
import { Container } from "@/components"

export default function Home() {
	return (
		<main className="flex h-screen flex-col items-center justify-between bg-red-100 relative">
			<div className="border-2 border-red-400 w-full h-full">
				<Container />
			</div>
		</main>
	)
}
