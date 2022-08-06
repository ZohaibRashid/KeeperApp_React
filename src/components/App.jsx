import React, {useState} from "react"
import Header from "./Header"
import Footer from "./Footer"
import Note from "./Note"
import CreateArea from "./CreateArea"


function App(){

const [notes, setNotes] = useState([]);


    function addNote(newNote){

        setNotes(prevNotes =>{
            return [...prevNotes, newNote];
        });

    }   

    function deleteNote(id){
        setNotes(PrevNotes =>{
            return PrevNotes.filter((note, index) =>{
                return index !== id;
            });
     });

    }
return(
    <div>
        <Header />

        <CreateArea 
        onAdd = {addNote}

        />
        
    {
        notes.map((note, index) =>{
        return <Note key = {index} title= {note.title} content = {note.content} id = {index} onDelete = {deleteNote}
        />;
    })
        
    }
    
      
    <Footer />
    </div> 

);
 
}

export default App;


