import React, { useState, useEffect } from 'react'
import APIService from './APIService'

function Form(props) {

    const [title, setTitle] = useState('')
    const [article_description, setArticle_description] = useState('')

    useEffect(() => {
        setTitle(props.article.title)
        setArticle_description(props.article.article_description)
    }, [props.article])


    const updateArticle = () =>{
        APIService.UpdateArticle(props.article.id, {title, article_description})
        .then(resp => props.updatedData(resp))
        //.then(resp => console.log(resp))
        .catch(error => console.log(error))
    }

    const insertArticle = () =>{
        APIService.InsertArticle({title, article_description})
        .then(resp => props.insertedArtice(resp))
        .catch(error => console.log(error))
    }

    return (
        <div>
            {props.article ? (<div className='mb-3'>
                <label htmlFor="title" className='form-label'>Title</label>
                <input type="text" className='form-control' placeholder='Please Enter Title' value={title} onChange={(e) => setTitle(e.target.value)} />

                <label htmlFor="body" className='form-label'>Description</label>
                <textarea rows="5" className='form-control' placeholder='Please Enter Description' value={article_description} onChange={(e) => setArticle_description(e.target.value)} />

                {
                    props.article.id ? (
                        <button onClick={updateArticle} className='btn btn-success mt-3'>Update</button>
                    ): (
                        <button onClick={insertArticle} className='btn btn-success mt-3'>Insert</button>
                    )
                }

            </div>):null}
        </div>
    )
}

export default Form