import React from "react";

import css from "../css/commentItem.css";

class CommentItem extends React.Component {
    constructor() {
        super();

    }
    render() {
        return <div>

            <h1>评论人：{this.props.user}</h1>
            <p>评论内容：{this.props.content}</p>

        </div>
    }
}

export default CommentItem;