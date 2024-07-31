
// import React, { useState, useEffect } from 'react';
// import { FiX } from 'react-icons/fi';

// interface Task {
//   id: string;
//   title: string;
//   description: string;
//   status: 'To do' | 'In progress' | 'Under review' | 'Finished';
//   priority: 'Low' | 'Medium' | 'Urgent';
//   deadline: string;
//   createdAt: string;
// }

// interface TaskModalProps {
//   isOpen: boolean;
//   onClose: () => void;
//   onSave: (task: Omit<Task, 'id' | 'createdAt'>) => void;
//   task: Task | null;
// }

// const TaskModal: React.FC<TaskModalProps> = ({ isOpen, onClose, onSave, task }) => {
//   const [title, setTitle] = useState('');
//   const [description, setDescription] = useState('');
//   const [status, setStatus] = useState<Task['status']>('To do');
//   const [priority, setPriority] = useState<Task['priority']>('Low');
//   const [deadline, setDeadline] = useState('');

//   useEffect(() => {
//     if (task) {
//       setTitle(task.title);
//       setDescription(task.description);
//       setStatus(task.status);
//       setPriority(task.priority);
//       setDeadline(task.deadline);
//     } else {
//       resetForm();
//     }
//   }, [task]);

//   const resetForm = () => {
//     setTitle('');
//     setDescription('');
//     setStatus('To do');
//     setPriority('Low');
//     setDeadline('');
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     onSave({
//       title,
//       description,
//       status,
//       priority,
//       deadline,
//     });
//     resetForm();
//   };

//   if (!isOpen) return null;

//   return (
//     <div className={`task-modal ${isOpen ? 'open' : ''}`}>
//       <div className="modal-content">
//         <div className="modal-header">
//           <h2>{task ? 'Edit Task' : 'New Task'}</h2>
//           <button onClick={onClose}><FiX /></button>
//         </div>
//         <form onSubmit={handleSubmit} className="modal-body">
//           <input
//             type="text"
//             placeholder="Title"
//             value={title}
//             onChange={(e) => setTitle(e.target.value)}
//             required
//           />
//           <textarea
//             placeholder="Description"
//             value={description}
//             onChange={(e) => setDescription(e.target.value)}
//           ></textarea>
//           <select
//             value={status}
//             onChange={(e) => setStatus(e.target.value as Task['status'])}
//             required
//           >
//             <option value="To do">To do</option>
//             <option value="In progress">In progress</option>
//             <option value="Under review">Under review</option>
//             <option value="Finished">Finished</option>
//           </select>
//           <select
//             value={priority}
//             onChange={(e) => setPriority(e.target.value as Task['priority'])}
//             required
//           >
//             <option value="Low">Low</option>
//             <option value="Medium">Medium</option>
//             <option value="Urgent">Urgent</option>
//           </select>
//           <input
//             type="date"
//             value={deadline}
//             onChange={(e) => setDeadline(e.target.value)}
//             required
//           />
//           <div className="modal-footer">
//             <button type="submit">{task ? 'Update' : 'Create'} Task</button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default TaskModal;




























// import React, { useState, useEffect } from 'react';
// import { FiX, FiShare2, FiStar } from 'react-icons/fi';

// interface Task {
//   id: string;
//   title: string;
//   description: string;
//   status: 'To do' | 'In progress' | 'Under review' | 'Finished';
//   priority: 'Low' | 'Medium' | 'Urgent' | '';
//   deadline: string;
// }

// interface TaskModalProps {
//   isOpen: boolean;
//   onClose: () => void;
//   onSave: (task: Omit<Task, 'id'>) => void;
//   task: Task | null;
//   initialStatus?: Task['status'];
// }

// const TaskModal: React.FC<TaskModalProps> = ({ isOpen, onClose, onSave, task, initialStatus }) => {
//   const [title, setTitle] = useState('');
//   const [status, setStatus] = useState<Task['status']>('To do');
//   const [priority, setPriority] = useState<Task['priority']>('');
//   const [deadline, setDeadline] = useState('');
//   const [description, setDescription] = useState('');

//   useEffect(() => {
//     if (task) {
//       setTitle(task.title);
//       setStatus(task.status);
//       setPriority(task.priority);
//       setDeadline(task.deadline);
//       setDescription(task.description);
//     } else {
//       resetForm();
//       if (initialStatus) {
//         setStatus(initialStatus);
//       }
//     }
//   }, [task, initialStatus]);

//   const resetForm = () => {
//     setTitle('');
//     setStatus('To do');
//     setPriority('');
//     setDeadline('');
//     setDescription('');
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     if (!title) {
//       alert('Title is mandatory');
//       return;
//     }
//     onSave({ title, status, priority, deadline, description });
//     resetForm();
//     onClose();
//   };

//   if (!isOpen) return null;

//   return (
//     <div className={`task-modal ${isOpen ? 'open' : ''}`}>
//       <div className="modal-content">
//         <div className="modal-header">
//           <button onClick={onClose}><FiX /></button>
//           <div className="header-actions">
//             <button><FiShare2 /> Share</button>
//             <button><FiStar /> Favorite</button>
//           </div>
//         </div>
//         <form onSubmit={handleSubmit}>
//           <input
//             type="text"
//             placeholder="Title"
//             value={title}
//             onChange={(e) => setTitle(e.target.value)}
//             className="title-input"
//             required
//           />
//           <div className="input-group">
//             <label>Status</label>
//             <select value={status} onChange={(e) => setStatus(e.target.value as Task['status'])}>
//               <option value="To do">To do</option>
//               <option value="In progress">In progress</option>
//               <option value="Under review">Under review</option>
//               <option value="Finished">Finished</option>
//             </select>
//           </div>
//           <div className="input-group">
//             <label>Priority</label>
//             <select value={priority} onChange={(e) => setPriority(e.target.value as Task['priority'])}>
//               <option value="">Not selected</option>
//               <option value="Low">Low</option>
//               <option value="Medium">Medium</option>
//               <option value="Urgent">Urgent</option>
//             </select>
//           </div>
//           <div className="input-group">
//             <label>Deadline</label>
//             <input type="date" value={deadline} onChange={(e) => setDeadline(e.target.value)} />
//           </div>
//           <div className="input-group">
//             <label>Description</label>
//             <textarea value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
//           </div>
//           <div className="input-group">
//             <button type="button" className="add-property-btn">+ Add custom property</button>
//           </div>
//           <div className="footer-text">
//             Start writing, or drag your own files here.
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default TaskModal;


























import React, { useState, useEffect } from 'react';
import { FiX, FiShare2, FiStar } from 'react-icons/fi';

interface Task {
  id: string;
  title: string;
  description: string;
  status: 'To do' | 'In progress' | 'Under review' | 'Finished';
  priority: 'Low' | 'Medium' | 'Urgent' | '';
  deadline: string;
}

interface TaskModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (task: Omit<Task, 'id'>) => void;
  task: Task | null;
  initialStatus?: Task['status'];
}

const TaskModal: React.FC<TaskModalProps> = ({ isOpen, onClose, onSave, task, initialStatus }) => {
  const [title, setTitle] = useState('');
  const [status, setStatus] = useState<Task['status']>('To do');
  const [priority, setPriority] = useState<Task['priority']>('');
  const [deadline, setDeadline] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    if (task) {
      setTitle(task.title);
      setStatus(task.status);
      setPriority(task.priority);
      setDeadline(task.deadline);
      setDescription(task.description);
    } else {
      resetForm();
      if (initialStatus) {
        setStatus(initialStatus);
      }
    }
  }, [task, initialStatus]);

  const resetForm = () => {
    setTitle('');
    setStatus('To do');
    setPriority('');
    setDeadline('');
    setDescription('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave({ title, status, priority, deadline, description });
  };

  if (!isOpen) return null;

  return (
    <div className={`task-modal ${isOpen ? 'open' : ''}`}>
      <div className="modal-content">
        <div className="modal-header">
          <button onClick={onClose}><FiX /></button>
          <div className="header-actions">
            <button><FiShare2 /> Share</button>
            <button><FiStar /> Favorite</button>
          </div>
        </div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="title-input"
            required
          />
          <div className="input-group">
            <label>Status</label>
            <select value={status} onChange={(e) => setStatus(e.target.value as Task['status'])}>
              <option value="To do">To do</option>
              <option value="In progress">In progress</option>
              <option value="Under review">Under review</option>
              <option value="Finished">Finished</option>
            </select>
          </div>
          <div className="input-group">
            <label>Priority</label>
            <select value={priority} onChange={(e) => setPriority(e.target.value as Task['priority'])}>
              <option value="">Not selected</option>
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="Urgent">Urgent</option>
            </select>
          </div>
          <div className="input-group">
            <label>Deadline</label>
            <input type="date" value={deadline} onChange={(e) => setDeadline(e.target.value)} />
          </div>
          <div className="input-group">
            <label>Description</label>
            <textarea value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
          </div>
          <button type="button" className="add-property-btn">+ Add custom property</button>
          <div className="footer-text">
            Start writing, or drag your own files here.
          </div>
          <button type="submit" className="save-btn">Save</button>
        </form>
      </div>
    </div>
  );
};

export default TaskModal;