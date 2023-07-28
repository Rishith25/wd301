/* eslint-disable react/prop-types */
import './TaskCard.css'
const TaskCard = (props) => {
    console.log(props)
    let date;
    if(props.dueDate){
      date = `Due Date: ${props.dueDate}`
    }
    else{
      date = `Completed on: ${props.completedAtDate}`
    }
  return (
    <div className='TaskItem'>
      <h2 className='text-xl font-bold'>{props.title}</h2>
      <p>{date}</p>
      <p>Assignee: {props.assigneeName}</p>
    </div>
  );
};

export default TaskCard;
