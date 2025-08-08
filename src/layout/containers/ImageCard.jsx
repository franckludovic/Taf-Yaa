import React, { useState, useEffect } from "react";
import { CircleUser } from "lucide-react";
import Card from "./Card";

function ImageCard({
  width = '100%',
  height = 'auto',
  alt = '',
  padding = '0px',
  borderRadius = '20px',
  backgroundColor = "var(--color-grey)",
  image,
  rounded = false,
  size,
}) {
  const [imageURL, setImageURL] = useState('');

  useEffect(() => {
    setImageURL(image);
  }, [image]);

  const finalSize = size || undefined;
  const finalWidth = finalSize || width;
  const finalHeight = finalSize || height;

  const imageStyle = {
    width: '100%',
    height: '100%',
    borderRadius: 'inherit',
    objectFit: 'cover',
    display: 'block',
  };

  return (
    <Card
      borderColor="var(--color-transparent)"
      padding={padding}
      rounded={rounded}
      borderRadius={borderRadius}
      backgroundColor={backgroundColor}
      width={finalWidth}
      height={finalHeight}
      style={{ overflow: 'hidden' }}
    >
      {imageURL ? (
        <img src={imageURL} alt={alt} loading="lazy" style={imageStyle} width={finalWidth} height={finalHeight} />
      ) : (
        <CircleUser width={finalWidth} height={finalHeight} color="var(--color-primary1)" />
      )}
    </Card>
  );
}

export default ImageCard;
