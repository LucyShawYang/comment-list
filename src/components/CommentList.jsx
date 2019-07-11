import React from "react";
import CommentItem from "./CommentItem"

class CommentList extends React.Component {
    constructor() {
        super();

        this.state = {
            CommentList : [
                { id:1, user: "张三", content:"哈哈，沙发"},
                { id:2, user: "李四", content:"哈哈，板凳"},
                { id:3, user: "王五", content:"哈哈，凉席"},
                { id:4, user: "赵六", content:"哈哈，哈哈"},
            ]
        }
    }
    render() {
        return <div>
            <h1 style={{color:"red", fontSize:"40px"}}>This is a Comment List.</h1>
            <div>
                {this.state.CommentList.map (item => <CommentItem {...item}></CommentItem>)}
            </div>
        </div>
    }
}

export default CommentList;