import React from 'react';

const NPCDialogue = ({body, name}) => {
    return (
        <section className="dialogue-box">
            <h3 className="name">{name}</h3>
            <p>{body}</p>
        </section>
    )
};

export default NPCDialogue;