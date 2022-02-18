import {Composition} from 'remotion';
import {ImageComponent} from './ImageTransition';

export const RemotionVideo: React.FC = () => {
	const fps = 30;
	return (
		<>
			<Composition
				id="Images"
				component={ImageComponent}
				durationInFrames={fps * 50}
				fps={fps}
				width={1920}
				height={1080}
			/>
		</>
	);
};
