import React from 'react';

const Video = ({ video }) => {
	const videoEl = React.useRef(null);

	const attemptPlay = () => {
		videoEl &&
			videoEl.current &&
			videoEl.current.play().catch(error => {
				console.error('Error attempting to play', error);
			});
	};

	React.useEffect(() => {
		attemptPlay();
	}, []);
	return (
		<video
			className='w-[462px] h-full'
			src={video}
			ref={videoEl}
			playsInline
			loop
			muted
		></video>
	);
};

export default Video;
