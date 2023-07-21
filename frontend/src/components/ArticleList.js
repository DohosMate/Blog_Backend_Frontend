import React from 'react'
import APIService from './APIService'

function ArticleList(props) {

    const editArticle = (article) => {
        props.editArticle(article)
    }


    const deleteArticle = (article) =>{
        APIService.DeleteArticle(article.id)
        .then(() => props.deleteArticle(article))
    }

  return (
    <div>
        {props.articles && props.articles.map(article => {
            return(
                <div key={article.id}>
                    <h3>{article.title}</h3>
                    <p>{article.article_description}</p>
                    <p>{article.timestamp}</p>

                    <div className="row">
                        <div className="col-md-1">
                            <button className='btn btn-primary' onClick={() => editArticle(article)}>Update</button>
                        </div>
                        <div className="col">
                            <button className='btn btn-danger' onClick={() => deleteArticle(article)}>Delete</button>
                        </div>
                    </div>

                    <hr />
                </div>
            )
        })}
    </div>
  )
}

export default ArticleList