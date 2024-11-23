import { useEffect } from "react"

export const useTokenExpiration = ({ setIsHidden }) => {
    useEffect(() => {
        if (localStorage.getItem('exp') && localStorage.getItem('jwt_token')) {
            const checkExpiration = () => {
                const exp = localStorage.getItem('exp');
                const currentTime = Math.floor(Date.now() / 1000);
    
                // debug
                const timeLeft = exp ? new Date(parseInt(exp) - currentTime) : 0; // tính toán thời gian còn lại = giây
                const hours = Math.floor(timeLeft / 3600); 
                const minutes = Math.floor((timeLeft % 3600) / 60);
                const seconds = timeLeft % 60;
                const formattedTimeLeft = `${hours}:${minutes}:${seconds}`;
                const expirationTime = new Date(parseInt(exp) * 1000).toLocaleDateString();
    
                console.log('Checking expiration...');
                console.log('Expiration time:', expirationTime);
                console.log('Count time left: ', formattedTimeLeft);
    
                if ((exp) && (currentTime >= parseInt(exp))) {
                    console.log('Token expired!');
                    removeInfoExpiration();
                    setIsHidden(true)
                    window.location.reload();
                }
            };
    
            checkExpiration();
    
            const interval = setInterval(checkExpiration, 5000);
            
            return () => {
                console.log('Cleaning up interval:', interval);
                clearInterval(interval);
            };
        }
    }, [setIsHidden]);
}

const removeInfoExpiration = () => {
    localStorage.removeItem('jwt_token');
    localStorage.removeItem('id_admin');
    localStorage.removeItem('exp');
}