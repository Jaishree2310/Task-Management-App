import React, { useState } from 'react';

interface TaskModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (task: any) => void;
}

const TaskModal: React.FC<TaskModalProps> = ({ isOpen, onClose, onSave }) => {
  const [title, setTitle] = useState('');
  const [status, setStatus] = useState('');
  const [priority, setPriority] = useState('');
  const [deadline, setDeadline] = useState('');
  const [description, setDescription] = useState('');

  const handleSave = () => {
    onSave({ title, status, priority, deadline, description });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="task-modal">
      <div className="modal-header">
        <h2>New Task</h2>
        <button onClick={onClose}>&times;</button>
      </div>
      <div className="modal-body">
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <select value={status} onChange={(e) => setStatus(e.target.value)}>
          <option value="">Select Status</option>
          <option value="To do">To do</option>
          <option value="In progress">In progress</option>
          <option value="Under review">Under review</option>
          <option value="Finished">Finished</option>
        </select>
        <select value={priority} onChange={(e) => setPriority(e.target.value)}>
          <option value="">Select Priority</option>
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="Urgent">Urgent</option>
        </select>
        <input
          type="date"
          value={deadline}
          onChange={(e) => setDeadline(e.target.value)}
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
        <button onClick={handleSave}>Save</button>
      </div>
    </div>
  );
};

export default TaskModal;