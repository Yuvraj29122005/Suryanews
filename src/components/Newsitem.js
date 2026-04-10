import React, { Component } from 'react'

export class NewsItem extends Component {
    render() {
        let {title, description, imageUrl, url} = this.props;
        return (
            <div className="my-3">
                <div className="card" >
                    <img src={!imageUrl?"https://assets3.cbsnewsstatic.com/hub/i/r/2026/04/06/17e36424-6d35-49f3-bab3-fc039eb10935/thumbnail/1200x630/72bf7bdae245f400a09786e9431ce726/gettyimages-2194273729.jpg":imageUrl} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <a rel="noreferrer" href={url} target="_blank" className="btn btn-sm btn-dark">Read More</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItem