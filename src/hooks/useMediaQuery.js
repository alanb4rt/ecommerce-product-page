import { useEffect, useState } from "react"

export default function useMediaQuery(mediaQuery) {
    const [isMatch, setIsMatch] = useState(false);

    useEffect(() => {
        const media = window.matchMedia(mediaQuery);
        setIsMatch(media.matches);

        const handleResize = () => setIsMatch(media.matches);
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, [mediaQuery]);

    return isMatch;
}
