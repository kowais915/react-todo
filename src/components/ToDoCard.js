import '../styles/ToDoCard.css'


const ToDoCard = ({title, description, date}) => {
    return (  

        <div className="card">

            <h2>Title: {title}</h2>
            <p>Description: {description}</p>
            <p>Date: {date}</p>

        </div>


    );
}
 
export default ToDoCard;