import {Composition} from 'remotion';
import {ImageComponent} from './ImageTransition';

export const RemotionVideo: React.FC = () => {
	return (
		<>
			<Composition
				id="Images"
				component={ImageComponent}
				durationInFrames={1500}
				fps={30}
				width={1920}
				height={1080}
			/>
		</>
	);
};
