import { useEffect, useState, useCallback } from 'react';
import '../css/LoadingScreen.css';

const TEXT = 'Weird Things';

export const LoadingScreen = ({ onDone }: { onDone: () => void }) => {
    const [displayed, setDisplayed] = useState('');
    const [phase, setPhase] = useState<'typing' | 'hold' | 'fade'>('typing');

    const handleDone = useCallback(onDone, [onDone]);

    useEffect(() => {
        if (phase === 'typing') {
            if (displayed.length < TEXT.length) {
                const t = setTimeout(() => {
                    setDisplayed(TEXT.slice(0, displayed.length + 1));
                }, 100);
                return () => clearTimeout(t);
            } else {
                const t = setTimeout(() => setPhase('hold'), 800);
                return () => clearTimeout(t);
            }
        }
        if (phase === 'hold') {
            const t = setTimeout(() => setPhase('fade'), 500);
            return () => clearTimeout(t);
        }
        if (phase === 'fade') {
            const t = setTimeout(handleDone, 700);
            return () => clearTimeout(t);
        }
    }, [displayed, phase, handleDone]);

    return (
        <div className={`loading-screen${phase === 'fade' ? ' loading-fade-out' : ''}`}>
            <h1 className="loading-title">
                {displayed}
                <span className="loading-cursor">_</span>
            </h1>
        </div>
    );
};
