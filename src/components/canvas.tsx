"use client"
import React, { ReactNode, Suspense } from "react"
import { Box } from "./test"
import { Canvas, useFrame } from "@react-three/fiber"
import { Model } from "./model"
// import Asset from "../assets/scene.gltf"

type Props = {
	// children: ReactNode
}

export const Container = (props: Props) => {
	return (
		<Suspense fallback={null}>
			<Canvas style={{ height: "100%", width: "100%" }}>
				<ambientLight />
				<pointLight position={[10, 10, 10]} />
				{/* <Box position={[-1.2, 0, 0]} /> */}
				{/* <Box position={[1.2, 0, 0]} /> */}
				{/* <Model path={Asset} /> */}
				<Model path="/scene.gltf" />
			</Canvas>
		</Suspense>
	)
}
