import { React, useContext } from 'react'
import { UserContext } from './UserContext';

export const LoginScreen = () => {

    const { setUser } = useContext(UserContext);


    return (
        <div>
            <h1>Login Screen</h1>
            <hr/>
            <button 
                className="btn btn-primary"
                onClick={ () => {
                    setUser({
                        age: 26,
                        name: "Federico"
                    });
                    document.querySelector("#navbarNavAltMarkup > div > a:nth-child(1)").click()
                } }
            >
                Set User
            </button>
        </div>
    )
}
