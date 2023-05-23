import React from 'react';

const CircleDecoration = ({ position, size, gradient }) => {
  const circleStyles = {
    content: '',
    position: 'absolute',
    top: position.top,
    left: position.left,
    width: size.width,
    height: size.height,
    borderRadius: '50%',
    background: gradient,
  };

  return <div className="circle" style={circleStyles}></div>;
};

export default CircleDecoration;