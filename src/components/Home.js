import React, { useContext } from 'react';
import { AuthContext } from '../contexts/UserContex';


const Home = () => {
    const {user} = useContext(AuthContext);

  
    return (
        <div>
            <h1>This is home for {user.displayName} !!</h1>
        </div>
    );
};

export default Home;