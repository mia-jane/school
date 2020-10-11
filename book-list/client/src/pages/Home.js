import React from 'react';

function Home(props) {
    return (
        <div className="home">
            <form>
                <input type="text" placeholder="cover image url" />
                <input type="text" placeholder="genre" />
                <select id="status" name="status">
                    <option value="read">Read</option>
                    <option value="unread">unread</option>
                </select>
                <button>Add Book</button>
            </form>
        </div>
    );
}

export default Home;