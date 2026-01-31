// Intersection Observer for scroll animations
export class ScrollAnimations {
    private observer: IntersectionObserver;

    constructor() {
        this.observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    }
                });
            },
            {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            }
        );
    }

    observe(selector: string): void {
        const elements = document.querySelectorAll(selector);
        elements.forEach((element) => this.observer.observe(element));
    }

    observeElement(element: Element): void {
        this.observer.observe(element);
    }
}

// Staggered animation delays
export function applyStaggeredAnimation(
    elements: NodeListOf<Element>,
    baseDelay: number = 100
): void {
    elements.forEach((element, index) => {
        const delay = index * baseDelay;
        (element as HTMLElement).style.transitionDelay = `${delay}ms`;
    });
}

// Smooth scroll to section
export function smoothScrollTo(elementId: string): void {
    const element = document.getElementById(elementId);
    if (element) {
        element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Typing animation effect
export function typeWriter(
    element: HTMLElement,
    text: string,
    speed: number = 50
): Promise<void> {
    return new Promise((resolve) => {
        let i = 0;
        element.textContent = '';

        function type() {
            if (i < text.length) {
                element.textContent += text.charAt(i);
                i++;
                setTimeout(type, speed);
            } else {
                resolve();
            }
        }

        type();
    });
}
