import { PropsWithChildren } from 'react';
import styles from './HTag.module.css';

interface HTagProps extends PropsWithChildren {
	tag: 'h2' | 'h3' | 'h4' | 'h5';
}

export const HTag = ({ tag, children }: HTagProps): JSX.Element => {
	switch (tag) {
		case 'h2':
			return <h2 className={styles.h2}>{children}</h2>;
		case 'h3':
			return <h3 className={styles.h3}>{children}</h3>;
		case 'h4':
			return <h4 className={styles.h4}>{children}</h4>;
		case 'h5':
			return <h5 className={styles.h4}>{children}</h5>;
		default:
			return <></>;
	}
};
