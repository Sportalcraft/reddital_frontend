import React from 'react'

import './posting.styles.css';

export default function Posting({onPostChange, onTitleChange, onPost}) {
    return (
        <div className="container">
            <div className="posting form-block">
                <h1 className="title lobster-font">Post</ h1>

                <input id="title" className="input textinput2" onChange={onTitleChange} placeholder="title" type="text"></input> 
                <br />

                <textarea id="post-text" className="input textarea" onChange={onPostChange} placeholder="create new post now!" type="text"></textarea> 
                <br />
                <br />

                <button id="post" className="postButon buton sil-font" onClick={onPost} type="submit">Post</button>       
            </div>
        </div>
    )
}
