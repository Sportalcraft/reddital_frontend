import React from 'react'

export default function Posting({onSubChange, onPostChange, onTitleChange, onPost}) {
    return (
        <div className="posting center form-block">
            <h1 className="title lobster-font">Post</ h1>

            <input id="subreddital" className="input textinput" onChange={onSubChange} placeholder="subReddital" type="text"></input> 
            <br />

            <input id="title" className="input textinput" onChange={onTitleChange} placeholder="title" type="text"></input> 
            <br />

            <input id="post-text" className="input textarea" onChange={onPostChange} placeholder="create new post now!" type="text"></input> 
            <br />
            <br />

            <button id="post" className="postButon buton sil-font" onClick={onPost} type="submit">Post</button>
            
        </div>
    )
}
