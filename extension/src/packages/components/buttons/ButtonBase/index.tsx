import React, { FC, ButtonHTMLAttributes } from 'react';
import styles from './styles.module.scss';

type Component = React.FC<ButtonHTMLAttributes> | React.LazyExoticComponent<React.FC<ButtonHTMLAttributes>>

interface ButtonBaseProps extends React.ComponentProps<Component> {
	className?: string;
}

export const ButtonBase: FC<ButtonBaseProps> = ({
	className,
	children,
	...props
}) => {
	const classes = [styles.base, className ?? ''].join(' ');

	return (
		<button {...props} className={classes}>
			{children}
		</button>
	);
};
