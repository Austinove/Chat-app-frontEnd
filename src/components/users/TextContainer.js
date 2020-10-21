import React from "react";
import onlineIcon from '../../icons/onlineIcon.png';
import "./TextContainer.css";
const TextContainer = ({ users }) => {
    return (
        <div className="textContainer">
            <div>
                <h1>Realtime Chat Application</h1>
                <h1>in MERN and Web Sockets<span role="img" aria-label="emoji">💬</span></h1>
                <h2>by Bryan, Try it <span role="img" aria-label="emoji">⬅️</span></h2>
            </div>
            {
                users
                    ? (
                        <div>
                            <h1>People currently chatting:</h1>
                            <div className="activeContainer">
                                <h2>
                                    {users.map(({ name }) => (
                                        <div key={name} className="activeItem">
                                            <img alt="Online Icon" src={onlineIcon} />
                                            {name}
                                        </div>
                                    ))}
                                </h2>
                            </div>
                        </div>
                    )
                    : null
            }
        </div>
    );
};

export default TextContainer;