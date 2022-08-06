import React, {useState} from "react"


function CreateArea(props){

    const [note, setNote] = useState({
        title: "",
        content: ""
    });


function handleChange(event){
const {name, value} = event.target;

setNote(function(prevNote){
    return{
        ...prevNote,
        [name]: value
    };
});

}

function submitNote(event){

    props.onAdd(note)
   
   setNote(
    {
    title: "",
    content: ""
    });

   event.preventDefault();
}


return(
    <div>
<form>
    <input type = "text" name = "title" placeholder = "Title" onChange = {handleChange} value = {note.title} ></input>
    <textarea  name = "content" placeholder = " post content" rows = "3" onChange = {handleChange} value = {note.content}/>
    <button onClick = {submitNote}>Add</button>
    </form>
    </div>
);

}

export default CreateArea;