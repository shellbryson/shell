// Please keep these methods in alphabetical order...

const Utils = {

  // Util for logging messages, but only in non-production mode
  log: (message, log, level) => {
    let hideLog = false;
    let color = "color:#08b8e1";
    if (level) {
      switch (level) {
        case 1:
          color = "color:#ff0000";
          break;
        case 2:
          color = "color:#00ff00";
          break;
        default:
          color = "color:#00ff00";
          break;
      }
    }
    if (!hideLog) {
      const arrow = log ? "⬇" : "";
      console.log(`%c→ ${message} ${arrow}`, color);
      if (log) {
        console.log(log);
      }
    }
  },

  // Borrowed from: https://stackoverflow.com/questions/21474678/scrolltop-animation-without-jquery
  scrollToTop: () => {
    // Animate to top (desktop/large)
    if (document.documentElement.clientWidth > 1024) {
      let cosParameter = window.scrollY / 2,
        scrollDuration = 800,
        scrollCount = 0,
        oldTimestamp = performance.now();

      const step = newTimestamp => {
        scrollCount +=
          Math.PI / (scrollDuration / (newTimestamp - oldTimestamp));
        if (scrollCount >= Math.PI) window.scrollTo(0, 0);
        if (window.scrollY === 0) return;
        window.scrollTo(
          0,
          Math.round(cosParameter + cosParameter * Math.cos(scrollCount))
        );
        oldTimestamp = newTimestamp;
        window.requestAnimationFrame(step);
      };
      window.requestAnimationFrame(step);
    } else {
      // Jump to top (mobile/small)
      window.scrollTo(0, 0);
    }
  }
};

export default Utils;
