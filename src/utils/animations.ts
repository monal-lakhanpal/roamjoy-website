
interface AnimationOptions {
  threshold?: number;
  rootMargin?: string;
}

export const setupIntersectionObserver = (
  selector: string,
  activeClass: string = 'revealed',
  options: AnimationOptions = {}
): void => {
  const elements = document.querySelectorAll(selector);
  
  const defaultOptions: IntersectionObserverInit = {
    threshold: options.threshold || 0.1,
    rootMargin: options.rootMargin || '0px',
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add(activeClass);
        observer.unobserve(entry.target);
      }
    });
  }, defaultOptions);

  elements.forEach(element => {
    observer.observe(element);
  });
};

export const initAnimations = (): void => {
  // Setup animation for reveal elements
  setupIntersectionObserver('.reveal-up');
  
  // Add staggered animation to lists
  const animateStaggered = (selector: string, staggerDelay: number = 100): void => {
    const elements = document.querySelectorAll(selector);
    
    elements.forEach((element, index) => {
      (element as HTMLElement).style.transitionDelay = `${index * staggerDelay}ms`;
    });
    
    setupIntersectionObserver(selector);
  };
  
  animateStaggered('.stagger-item', 100);
};

// Parallax effect for hero images
export const setupParallax = (): void => {
  const parallaxElements = document.querySelectorAll('.parallax');
  
  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    
    parallaxElements.forEach((element) => {
      const speed = parseFloat((element as HTMLElement).dataset.speed || '0.5');
      const yPos = -(scrollY * speed);
      (element as HTMLElement).style.transform = `translate3d(0, ${yPos}px, 0)`;
    });
  });
};

// Image lazy loading with blur-up effect
export const setupLazyLoading = (): void => {
  const lazyImages = document.querySelectorAll<HTMLImageElement>('img[data-src]');
  
  const loadImage = (img: HTMLImageElement) => {
    const src = img.dataset.src;
    if (!src) return;
    
    // Replace src
    img.src = src;
    
    // Remove data-src to prevent re-processing
    img.removeAttribute('data-src');
    
    // Add loaded class to remove blur effect
    img.addEventListener('load', () => {
      img.classList.add('loaded');
    });
  };
  
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          loadImage(entry.target as HTMLImageElement);
          observer.unobserve(entry.target);
        }
      });
    });
    
    lazyImages.forEach(img => observer.observe(img));
  } else {
    // Fallback for browsers that don't support IntersectionObserver
    lazyImages.forEach(img => loadImage(img));
  }
};
