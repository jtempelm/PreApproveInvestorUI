import React from 'react';

export class Comic extends React.Component {
    render() {
        return (
            <div className="imageBox">
                <img src="/dilbert.jpeg" alt="Comic depecting plain UIs" />
            </div>
        );
    }
}
