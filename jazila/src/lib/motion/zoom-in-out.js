export function zoomInOut(duration = 0.2) {
  return {
    from: {
      scale: 0.9,
      opacity: 0,
      transition: {
        type: "easeOut",
        duration,
      },
    },
    to: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "easeOut",
        duration,
      },
    },
  };
}