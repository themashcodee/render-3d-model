import React, { ComponentPropsWithoutRef } from "react"

type Props = {
	size?: "xxs" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl"
	color?: string
} & ComponentPropsWithoutRef<"div">

const sizeToPx = {
	xxs: 16,
	xs: 18,
	sm: 24,
	md: 36,
	lg: 48,
	xl: 64,
	"2xl": 76,
	"3xl": 84,
}

export const Loader = ({
	size = "lg",
	color = "rgb(34, 139, 230)",
	...props
}: Props) => {
	const containerStyle = {
		width: sizeToPx[size],
		height: sizeToPx[size],
	}

	return (
		<div {...props}>
			<div style={containerStyle}>
				<svg
					className="relative h-full w-full animate-spin"
					viewBox="25 25 50 50"
				>
					<circle
						style={{
							strokeDasharray: "1,200",
							strokeDashoffset: 0,
							animation: "loader_dash 1.5s ease-in-out infinite",
							stroke: color,
							strokeLinecap: "round",
						}}
						cx={50}
						cy={50}
						r={20}
						fill="none"
						strokeWidth={2}
						strokeMiterlimit={10}
					/>
				</svg>
			</div>
		</div>
	)
}
