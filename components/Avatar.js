import Image from 'next/image';

function Avatar({ url, className }) {
	return (
		<Image
			loading="lazy"
			className={`cursor-pointer h-10 rounded-full transition duration-150 transform hover:scale-110 ${className}`}
			src={url}
			alt="profile pic"
		/>
	);
}

export default Avatar;
