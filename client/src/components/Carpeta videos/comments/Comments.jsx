import { useState } from "react";
import axios from "axios";
import { Button } from "@chakra-ui/react";


const Comments = ({ videoId, comments, update, setUpdate }) => {
  const userDB = JSON.parse(localStorage.getItem("user"))
  const [comment, setComment] = useState({
    videoId,
    userId: userDB?.id,
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
    await axios.post("https://easylearning.onrender.com/createCommentVideo", comment);
    setUpdate(!update)
    document.getElementById("1").reset()
  }
  return (
    <div>
      <form id='1' onSubmit={handleSubmit} >
        <label>Crear comentario:</label>
        <br />
        <label>Title: </label>
        <input type="text" name="title" onChange={handleChange} />
        <br />
        <label>Description: </label>
        <input type="text" name="description" onChange={handleChange} />
        <br />
        <Button type="submit"
          size='md'
          height='48px'
          width='200px'
          border='2px'
          borderColor='green.500'
        >Comentar
        </Button>

      </form>
      {
        comments?.map((el, i) => {
          return (
            <div key={i}>
              <h1>{userDB?.fullName}</h1>
              <p>Titulo: {el.title}</p>
              <p>{el.description}</p>
            </div>
          )
        })
      }
      <br />
    </div>
  )
}

export default Comments;