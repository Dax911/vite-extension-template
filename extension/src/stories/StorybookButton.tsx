import React from 'react';
import styles from './storybookbutton.module.scss';
import './storybookbutton.css';

interface StorybookButtonProps {
	/**
	 * Is this the principal call to action on the page?
	 */
	primary?: boolean;
	/**
	 * What background color to use
	 */
	backgroundColor?: string;
	/**
	 * How large should the button be?
	 */
	size?: 'small' | 'medium' | 'large';
	/**
	 * Button contents
	 */
	label: string;
	/**
	 * Optional click handler
	 */
	onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const StorybookButton = ({
	primary = false,
	size = 'medium',
	backgroundColor,
	label,
	...props
}: StorybookButtonProps) => {
	const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
	return (
		<button
			type="button"
			className={['storybook-button', `storybook-button--${size}`, mode, styles.fonts].join(' ')}
			style={{ backgroundColor }}
			{...props}
		>
			{label}
		</button>
	);
};
