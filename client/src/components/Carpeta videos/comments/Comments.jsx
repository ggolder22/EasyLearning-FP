import { useState } from "react";
import axios from "axios";

const Comments = ({comments, videoId}) => {

const [comment, setComment] = useState({
    videoId,
    userId: 13,
    title: "",
    description: "",
})

const handleChange = (e) => {
    setComment({
            ...comment,
            [e.target.name]: e.target.value
        });
}

const handleSubmit = async (e) => {
    e.preventDefault() //hay que cambiar esto por un estado local, para que se actualice solamente los comentarios cada vez que alguien comenta.
    await axios.post("http://localhost:3001/createCommentVideo",comment);
}

return(
    <div>
        <h2>Comentarios: </h2>
        {/* form create comments */}
        <form  onSubmit={handleSubmit} >
        <label>Crear comentarios</label>
        <br/>
        <label>Title: </label>
        <input type="text" name="title" onChange={handleChange} />
        <br/>
        <label>Description: </label>
        <input type="text" name="description" onChange={handleChange} />
        <br/>
        <button type="submit">Comentar</button>
        </form>
        {
            comments?.map((el, i) => {
                return (                   
                        <div key={i}>
                            {/* <p>nombre del user</p> */}
                            <p>{el.title}</p>
                            <p>{el.description}</p>
                        </div>                                            
                        )
            })
        }
        <br/>
    </div>
)
}

export default Comments;