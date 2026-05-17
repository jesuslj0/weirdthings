import { useEffect, useRef, ReactNode, CSSProperties } from 'react';
import '../css/RevealOnScroll.css';

interface Props {
    children: ReactNode;
    delay?: number;
    className?: string;
    style?: CSSProperties;
}

export const RevealOnScroll = ({ children, delay = 0, className = '', style }: Props) => {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    el.classList.add('reveal-visible');
                    observer.unobserve(el);
                }
            },
            { threshold: 0.08 }
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, []);

    return (
        <div
            ref={ref}
            className={`reveal-on-scroll ${className}`}
            style={{ transitionDelay: `${delay}ms`, ...style }}
        >
            {children}
        </div>
    );
};
