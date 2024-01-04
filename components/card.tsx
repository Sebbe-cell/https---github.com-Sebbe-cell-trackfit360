import Image from "next/image";
import React from "react";

interface ICardProps {
  title: string;
  description: string;
  hashtags: { hashtag: string; id: number }[];
  imgSrc: string;
}

const Card = (props: ICardProps): JSX.Element => {
  const { title, description, imgSrc, hashtags } = props;
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <Image
        className="object-contain"
        src={imgSrc}
        alt={title}
        width={400}
        height={300}
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        {hashtags.map((i) => (
          <span
            key={i.id}
            className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
          >
            #{i.hashtag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Card;
