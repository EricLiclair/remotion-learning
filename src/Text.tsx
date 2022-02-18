import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import { FC } from 'react';
import { interpolate, useCurrentFrame } from 'remotion';

export const Text: FC<{text: string; idx: number; duration: number}> = ({
	text,
	idx,
	duration,
}) => {
	const frame = useCurrentFrame();
	const opacity = interpolate(frame, [0, duration / 3], [0, 1], {
		extrapolateRight: 'clamp',
	});
	return (
		<Box
			sx={{
				color: '#fff',
				position: 'fixed',
				top: `${250 * (idx + 1)}px`,
				left: 400,
				opacity,
			}}
		>
			<Typography fontSize={60} component="p" gutterBottom>
				<CheckCircleIcon fontSize={'large'} sx={{color: '#1d1d1d'}} /> {text}
			</Typography>
		</Box>
	);
};
