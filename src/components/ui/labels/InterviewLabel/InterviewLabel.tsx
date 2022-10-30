import { FC } from 'react';
import s from './InterviewLabel.module.scss';

export const InterviewLabel: FC = () => {
	return (
		<span className={s.label}>
			<img src="/icons/labels/interview.svg" alt="interview" />
			<span>Інтерв’ю</span>
		</span>
	);
};
