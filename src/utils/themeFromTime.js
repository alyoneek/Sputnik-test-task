const dayIntervals = {
  night: [0, 4],
  morning: [5, 9],
  day: [10, 16],
  evening: [17, 0],
};

export const themeFromTime = (hours) => {
  for (let key in dayIntervals) {
    if (hours >= dayIntervals[key][0] && hours <= dayIntervals[key][1]) {
      return key;
    }
  }
};
