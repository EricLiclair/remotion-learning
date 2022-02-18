import {FC} from 'react';
import {
	Img,
	interpolate,
	Sequence,
	useCurrentFrame,
	useVideoConfig,
} from 'remotion';
import {allImages, img1, img2, img3} from './assets';
import {Text} from './Text';

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
	const sequenceDuration = durationInFrames / images.length;

	const texts = {
		'product description': ['point of care', 'portable', 'easy to use'],
	};
	return (
		<>
			{images.map((img, id) => {
				return (
					<>
						<Sequence
							from={sequenceDuration * id}
							key={id}
							durationInFrames={sequenceDuration}
						>
							<Image src={img.urls.regular} index={id} length={images.length} />
						</Sequence>

						{texts['product description'].map((txt, idx) => {
							return (
								<Sequence
									from={
										sequenceDuration * id +
										(sequenceDuration / texts['product description'].length) *
											idx
									}
									key={idx}
									durationInFrames={Infinity}
								>
									<Text duration={sequenceDuration} text={txt} idx={idx} />
								</Sequence>
							);
						})}
					</>
				);
			})}
		</>
	);
};
