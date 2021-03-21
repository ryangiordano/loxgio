export const Flip = {
  initial: {
    opacity: 0,
    rotateX: 90,
    transition: {
      duration: 0.25,
    },
  },
  animate: {
    opacity: 1,
    rotateX: 0,
    transition: {
      duration: 0.25,
    },
  },
  exit: {
    opacity: 0,
    rotateX: 90,
    transition: {
      duration: 0.25,
    },
  },
};

export const SlideY = {
  initial: {
    opacity: 0,
    y: 30,
    transition: {
      duration: 0.25,
    },
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.1,
      duration: 0.25,
    },
  },
  exit: {
    opacity: 0,
    y: 30,
    transition: {
      duration: 0.25,
    },
  },
};
