import { useEffect, useState } from 'react';
import './styles/navbar.css';


function Navbar(){

    //clock function 
    const [time, setTime] = useState(new Date());
    useEffect(() => {
        const timer = setInterval(() => setTime(new Date()), 1000);
        return () => clearInterval(timer);
    }, []);

    // get maket status function
    const getMarketStatus = () => {
        const now = new Date();
        const day = now.getDay(); 
        const hours = now.getHours();
        const minutes = now.getMinutes();
        const currentTime = hours * 60 + minutes; 
        
        // Market hours: 9:30 AM to 4:00 PM 
        const marketOpen = 9 * 60 + 30; 
        const marketClose = 16 * 60; 
        
        // Check if it's a weekday 
        const isWeekday = day >= 1 && day <= 5;
        
        // Check if current time is within market hours
        const isMarketHours = currentTime >= marketOpen && currentTime < marketClose;
        
        return isWeekday && isMarketHours;
    };

    const isMarketOpen = getMarketStatus();



    return (
        <div className='navbar'>
            <div className='rightside'>
                <h1> welcome, abubaker </h1>
            </div>
            <div>
                <p className={isMarketOpen ? 'market-open' : 'market-closed'}>
                    {isMarketOpen ? 'market is open' : 'market is closed'}
                </p>
            </div>
            <div className='leftside'>
                <p>{time.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'})}</p>
                <p className='api-status'> API Stauts: OK </p>
            </div>
        </div>
        
    )
}
export default Navbar;