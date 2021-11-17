import React from 'react'

export default function Posting({onSubChanged, onPostChange, postErr, onPost}) {
    return (
        <div className="posting center form-block">
            <h1 className="title lobster-font">Post</ h1>

            <input id="subreddital" className="input textinput" onChange={onSubChanged} placeholder="subReddital" type="text"></input> 
            <br />

            <input id="post-text-area" className="input textarea" onChange={onPostChange} placeholder="create new post now!" type="text"></input> 
            <br />
            <label id="post-validator" className="validator">{postErr}</label>

            <br />
            <br />
            <button id="post" className="postButon buton sil-font" onClick={onPost} type="submit">Post</button>
            
        </div>
    )
}
