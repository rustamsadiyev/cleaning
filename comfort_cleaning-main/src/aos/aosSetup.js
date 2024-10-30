// aosSetup.js
import AOS from 'aos';
import 'aos/dist/aos.css';

const initializeAOS = () => {
  AOS.init({
    // Global settings:
    disable: false,
    startEvent: 'DOMContentLoaded',
    initClassName: 'aos-init',
    animatedClassName: 'aos-animate',
    useClassNames: false,
    disableMutationObserver: false,
    debounceDelay: 50,
    throttleDelay: 99,

    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 150,
    delay: 0,
    duration: 400,
    easing: 'ease-out',
    once: false,
    mirror: false,
    anchorPlacement: 'top-bottom',
  });
};

export default initializeAOS;
