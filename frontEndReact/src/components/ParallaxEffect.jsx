import React from 'react';

const ParallaxEffect = ({ children, backgroundImage, height }) => {
  return (
    <section
      className="relative bg-cover bg-center"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundAttachment: 'fixed',
        height: height || 'auto',
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div> {/* Optional overlay */}
      <div className="relative max-w-2xl mx-auto p-6 bg-white bg-opacity-80 rounded-lg shadow-lg">
        {children}
      </div>
    </section>
  );
};

export default ParallaxEffect;
