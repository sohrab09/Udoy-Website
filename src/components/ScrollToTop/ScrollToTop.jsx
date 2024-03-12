import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

const ScrollToTop = () => {

    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <>
            {isVisible && (
                <FontAwesomeIcon
                    icon={faArrowUp}
                    onClick={scrollToTop}
                    style={styles.button}
                    title="Click to move to top"
                />
            )}
        </>
    );
};

const styles = {
    button: {
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        padding: '10px',
        borderRadius: '5px',
        backgroundColor: '#26DE81',
        color: '#ffffff',
        border: 'none',
        cursor: 'pointer',
        zIndex: '1000'
    }
};

export default ScrollToTop;
