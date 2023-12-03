"use client"
import React, { Suspense, lazy } from "react"
import { Canvas } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"
import { Loader } from "./loader"
const ModelComponent = lazy(() => import("./model"))

export const Container = () => {
	return (
		<Suspense
			fallback={
				<div className="w-full h-full flex items-center justify-center">
					<Loader size="2xl" />
				</div>
			}
		>
			<Canvas
				style={{ height: "100%", width: "100%" }}
				camera={{ position: [1, 5, 10] }}
			>
				<ambientLight intensity={5} />
				<pointLight position={[10, 10, 10]} />
				<ModelComponent path="/plant/scene.gltf" />
				<OrbitControls minDistance={0.5} maxDistance={2} />
			</Canvas>
		</Suspense>
	)
}
