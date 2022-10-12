import { FC, ReactNode } from "react";

interface Props {
	children:  ReactNode | undefined;
	color: string;
}

export const ColorLayout: FC<Props> = ({ children, color }) => {
	return (
		<div style={{
			backgroundColor: color,
			padding: '10px',
			borderRadius: '5px',
		}}>
			<h3> Dark Layout</h3>
			<div>
				{children}
			</div>
		</div>
	)
}
