
import { useState, useEffect, useRef, MutableRefObject } from 'react';

export const useOnScreen = <T extends Element,>(options: IntersectionObserverInit): [MutableRefObject<T | null>, boolean] => {
    const ref = useRef<T | null>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setIsVisible(true);
                // We can unobserve after it becomes visible to prevent re-triggering
                if (ref.current) {
                    observer.unobserve(ref.current);
                }
            }
        }, options);

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                // eslint-disable-next-line react-hooks/exhaustive-deps
                observer.unobserve(ref.current);
            }
        };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [ref, options.root, options.rootMargin, options.threshold]);

    return [ref, isVisible];
};
