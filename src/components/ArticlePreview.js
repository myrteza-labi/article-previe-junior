import './ArticlePreview.css'; 

function ArticlePreview(props){
    return(
        <div className="ArticlePreview" >
            {props.children}
        </div>
    )
}

export default ArticlePreview; 