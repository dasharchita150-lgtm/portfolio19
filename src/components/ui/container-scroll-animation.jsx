import React, { useRef } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';

export const ContainerScroll = ({ titleComponent, children }) => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
  });
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  const scaleDimensions = () => {
    return isMobile ? [0.7, 0.9] : [1.05, 1];
  };

  const rotate = useTransform(scrollYProgress, [0, 1], [20, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], scaleDimensions());
  const translate = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <div className="scroll-bg-wrapper" ref={containerRef}>
      <div className="scroll-bg-inner">
        <Header translate={translate} titleComponent={titleComponent} />
        <Card rotate={rotate} translate={translate} scale={scale}>
          {children}
        </Card>
      </div>
    </div>
  );
};

export const Header = ({ translate, titleComponent }) => {
  if (!titleComponent) {
    return null;
  }

  return (
    <motion.div
      style={{
        translateY: translate,
      }}
      className="scroll-bg-header"
    >
      {titleComponent}
    </motion.div>
  );
};

export const Card = ({ rotate, scale, children }) => {
  return (
    <motion.div
      style={{
        rotateX: rotate,
        scale,
        boxShadow:
          '0 0 rgba(0,0,0,0.15), 0 12px 28px rgba(9,17,32,0.22), 0 36px 44px rgba(9,17,32,0.12)',
      }}
      className="scroll-bg-card"
    >
      <div className="scroll-bg-surface">{children}</div>
    </motion.div>
  );
};
