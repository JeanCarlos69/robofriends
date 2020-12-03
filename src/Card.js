import React from 'react'

const Card = (props) => {
    const {name, email, id, username} = props
    return (
        <div className='tc bg-light-green dib br3 pa3 ma2 grow'>
            <img src={`https://robohash.org/${id}?size=300x300`} />
            <div>
    <h2>{name}</h2>
    <p>{username}</p>
    <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;