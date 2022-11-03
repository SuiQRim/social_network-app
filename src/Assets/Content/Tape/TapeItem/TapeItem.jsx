import tiStyle from './TapeItem.module.css'

function TapeItem(props) {
    return (
        <div className={tiStyle.post}>
            <div className={tiStyle.title}>{props.post.title}</div>
            <div className={tiStyle.content}>{props.post.content}</div>
            <div className={tiStyle.likes}>{props.post.likeCount}</div>
        </div>
    );
}

export default TapeItem;
