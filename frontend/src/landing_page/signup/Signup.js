import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SessionCheck from '../../utils/sessionCheck';

function Signup() {
    const navigate = useNavigate();
    const [isCheckingSession, setIsCheckingSession] = useState(true);

    useEffect(() => {
        // Check if there's already a valid session
        const checkExistingSession = async () => {
            try {
                const hasValidSession = await SessionCheck.checkValidSession();
                
                if (hasValidSession) {
                    // Valid session exists, redirect directly to dashboard
                    const dashboardUrl = process.env.REACT_APP_DASHBOARD_URL || 'http://localhost:3001';
                    window.open(dashboardUrl, '_blank');
                    return;
                }
                
                // No valid session, allow signup flow
                setIsCheckingSession(false);
            } catch (error) {
                console.error('Session check error:', error);
                setIsCheckingSession(false);
            }
        };

        checkExistingSession();
    }, []);

    const handleSignupClick = () => {
        // Redirect to dashboard with token parameter only if no valid session
        const dashboardUrl = process.env.REACT_APP_DASHBOARD_URL || 'http://localhost:3001';
        window.open(`${dashboardUrl}?token=signup`, '_blank');
    };

    if (isCheckingSession) {
        return <div>Checking session...</div>;
    }

    return ( 
        <>
            <button 
                className="nav-link active p-2 btn btn-primary fs-5 mb-5" 
                style={{width:"20%" ,margin:"0 auto"}} 
                aria-current="page" 
                onClick={handleSignupClick}
            >
                SignUp
            </button>
        </> 
    );
}

export default Signup;