import {FC} from 'react';
import {
	Img,
	interpolate,
	Sequence,
	useCurrentFrame,
	useVideoConfig,
} from 'remotion';
import {allImages, img1, img2, img3} from './assets';

export const Image: FC<{src: any; length: number; index: number}> = ({
	src,
	length,
	index,
}) => {
	const frame = useCurrentFrame();
	const {durationInFrames, width} = useVideoConfig();
	const opacity = interpolate(frame, [0, durationInFrames / length], [0, 1], {
		extrapolateRight: 'clamp',
	});
	return (
		<div
			style={{
				width,
				opacity,
			}}
		>
			<Img src={src} width="100%" />
		</div>
	);
};

export const ImageComponent: FC = () => {
	const images = allImages;
	const {durationInFrames} = useVideoConfig();

	return (
		<>
			{images.map((img, id) => {
				return (
					<Sequence
						from={(durationInFrames / images.length) * id}
						key={id}
						durationInFrames={durationInFrames / images.length}
					>
						<Image src={img.urls.regular} index={id} length={images.length} />
					</Sequence>
				);
			})}
		</>
	);
};
