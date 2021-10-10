import { motion, Variants } from 'framer-motion';
const Logo: React.FC = () => {
  const svgVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 2.5 },
    },
  };

  const pathVariants: Variants = {
    hidden: { opacity: 0, stroke: 'none', strokeWidth: 0, pathLength: 0 },
    visible: {
      opacity: 1,
      stroke: '#000000',
      strokeWidth: '5.5px',
      pathLength: 1,
      transition: { duration: 1, ease: 'easeInOut' },
    },
  };

  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='120px'
      height='118px'
      fill='none'
      stroke='#000000'
      strokeMiterlimit={10}
      viewBox='0 0 125.5 123.5'
    >
      <motion.path
        variants={pathVariants}
        strokeWidth={'5.5px'}
        d='M8.6,91.16S6.43,2.75,63.14,2.75c57.08,0,54,88.41,54,88.41'
        initial='hidden'
        animate='visible'
      />
      <motion.path
        strokeWidth={'5.5px'}
        d='M10.08,91.16H115.42c4,0,7.33,3.84,7.33,8.59v12.42c0,4.74-3.28,8.58-7.33,8.58H10.08c-4,0-7.33-3.84-7.33-8.58V99.75C2.75,95,6,91.16,10.08,91.16Z'
        variants={pathVariants}
        initial='hidden'
        animate='visible'
      />
      <motion.line
        strokeWidth={'3px'}
        x1='52.82'
        y1='3.54'
        x2='42.45'
        y2='90.51'
        variants={svgVariants}
        initial='hidden'
        animate='visible'
      />
      <motion.line
        strokeWidth={'3px'}
        x1='69.82'
        y1='2.75'
        x2='83.52'
        y2='89.51'
        variants={svgVariants}
        initial='hidden'
        animate='visible'
      />
      <motion.path
        fill={'#000'}
        strokeWidth={'3px'}
        d='M61.83,28.1,57.06,51.69a.94.94,0,0,0,.92,1.1h9.54a.94.94,0,0,0,.92-1.1L63.67,28.1A.93.93,0,0,0,61.83,28.1Z'
        variants={svgVariants}
        initial='hidden'
        animate='visible'
      />
      <motion.rect
        fill={'#000'}
        x='58.26'
        y='61.96'
        width='10.6'
        height='28.22'
        rx='1.89'
        variants={svgVariants}
        initial='hidden'
        animate='visible'
      />
      <motion.path
        fill={'#000'}
        d='M36.26,46.35,45.14,8.46a.31.31,0,0,0-.48-.33L29.51,18.55a.3.3,0,0,0-.13.32l6.26,27.47A.32.32,0,0,0,36.26,46.35Z'
        variants={svgVariants}
        initial='hidden'
        animate='visible'
      />
      <motion.path
        fill={'#000'}
        d='M28,46.55l-10,41.76h19L28.72,46.59A.39.39,0,0,0,28,46.55Z'
        variants={svgVariants}
        initial='hidden'
        animate='visible'
      />
      <motion.path
        fill={'#000'}
        d='M81.22,27.7l11,49.07s10.52-5.27,11.85-9.84c1.65-5.64-3.48-24-6.22-29.2C94.14,30.7,81.22,27.7,81.22,27.7Z'
        variants={svgVariants}
        initial='hidden'
        animate='visible'
      />
    </svg>
  );
};

export default Logo;
