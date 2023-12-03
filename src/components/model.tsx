import { useGLTF } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
import { useRef } from "react"
import { Mesh } from "three"

type ModelProps = {
	path: string
}

export const Model = (props: ModelProps) => {
	const { path } = props
	const modelRef = useRef<Mesh>(null)
	const { scene } = useGLTF(path, true)

	useFrame(() => {
		if (modelRef.current) {
			modelRef.current.rotation.y += 0.01
		}
	})

	return <primitive object={scene} ref={modelRef} />
}
