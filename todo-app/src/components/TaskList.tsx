// import React, { useState } from 'react';
// import { Task } from '../types';

// interface TaskListProps {
//   tasks: Task[];
//   deleteTask: (id: number) => void;
//   toggleTask: (id: number) => void;
//   editTask: (id: number, newText: string) => void;
// }

// const TaskList: React.FC<TaskListProps> = ({ tasks, deleteTask, toggleTask, editTask }) => {
//   const [editingTaskId, setEditingTaskId] = useState<number | null>(null);
//   const [newText, setNewText] = useState<string>('');

//   const handleEditSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     if (newText.trim()) {
//       editTask(editingTaskId!, newText);
//       setEditingTaskId(null);
//       setNewText('');
//     }
//   };

//   return (
//     <ul>
//       {tasks.map((task) => (
//         <li key={task.id}>
//           {editingTaskId === task.id ? (
//             <form onSubmit={handleEditSubmit}>
//               <input
//                 type="text"
//                 value={newText}
//                 onChange={(e) => setNewText(e.target.value)}
//                 placeholder="Edit task"
//               />
//               <button type="submit">Save</button>
//             </form>
//           ) : (
//             <>
//               <span
//                 style={{ textDecoration: task.completed ? 'line-through' : 'none' }}
//                 onClick={() => toggleTask(task.id)}
//               >
//                 {task.text}
//               </span>
//               <button onClick={() => setEditingTaskId(task.id)}>Edit</button>
//               <button onClick={() => deleteTask(task.id)}>Delete</button>
//             </>
//           )}
//         </li>
//       ))}
//     </ul>
//   );
// };

// export default TaskList;
// Update TaskList.tsx
import React, { useState } from 'react';
import { Task } from '../types';

interface TaskListProps {
  tasks: Task[];
  deleteTask: (id: number) => void;
  toggleTask: (id: number) => void;
  editTask: (id: number, newText: string) => void;
}

const TaskList: React.FC<TaskListProps> = ({ tasks, deleteTask, toggleTask, editTask }) => {
  const [editingTaskId, setEditingTaskId] = useState<number | null>(null);
  const [newText, setNewText] = useState<string>('');

  const handleEditSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newText.trim()) {
      editTask(editingTaskId!, newText);
      setEditingTaskId(null);
      setNewText('');
    }
  };

  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          {editingTaskId === task.id ? (
            <form onSubmit={handleEditSubmit}>
              <input
                type="text"
                value={newText}
                onChange={(e) => setNewText(e.target.value)}
                placeholder="Edit task"
              />
              <button type="submit">Save</button>
            </form>
          ) : (
            <>
              <span
                className={task.completed ? 'completed' : ''}
                onClick={() => toggleTask(task.id)}
              >
                {task.text}
              </span>
              <button className="edit" onClick={() => setEditingTaskId(task.id)}>Edit</button>
              <button className="delete" onClick={() => deleteTask(task.id)}>Delete</button>
            </>
          )}
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
