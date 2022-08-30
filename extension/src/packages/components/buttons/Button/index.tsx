import React, { VFC } from 'react';
import { ButtonBase } from '../ButtonBase';
import styles from './styles.module.scss';

type Component = React.VFC<ButtonHTMLAttributes> | React.LazyExoticComponent<React.VFC<ButtonHTMLAttributes>>

interface ButtonProps extends React.ComponentProps<Component> {
	label?: string;
	size?: 'small' | 'medium' | 'large' | 'xlarge' | 'xxlarge';
};

export const Button: VFC<ButtonProps> = ({
	label,
	className,
	size = 'medium',
	...props
}) => {
	const classes = [styles.button, styles[size], className ?? ''].join(' ');

	return (
		<ButtonBase {...props} className={classes}>
			{label}
		</ButtonBase>
	);
};
