import React, { useState, useEffect } from 'react';
import { FiX } from 'react-icons/fi';

interface Task {
  id: string;
  title: string;
  description: string;
  status: 'To do' | 'In progress' | 'Under review' | 'Finished';
  priority: 'Low' | 'Medium' | 'Urgent';
  deadline: string;
}

interface TaskModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (task: Omit<Task, 'id' | 'createdAt'>) => void;
  task: Task | null;
}

const TaskModal: React.FC<TaskModalProps> = ({ isOpen, onClose, onSave, task }) => {
  const [title, setTitle] = useState('');
  const [status, setStatus] = useState<Task['status']>('To do');
  const [priority, setPriority] = useState<Task['priority']>('Low');
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
    }
  }, [task]);

  const resetForm = () => {
    setTitle('');
    setStatus('To do');
    setPriority('Low');
    setDeadline('');
    setDescription('');
  };

  const handleSave = () => {
    if (!title) {
      alert('Title is mandatory');
      return;
    }

    onSave({
      title,
      description,
      status,
      priority,
      deadline,
    });

    onClose();
    resetForm();
  };

  return (
    <div className={`task-modal ${isOpen ? 'open' : ''}`}>
      <div className="modal-content">
        <div className="modal-header">
          <h2>Title</h2>
          <button onClick={onClose}><FiX /></button>
        </div>
        <div className="modal-body">
          <div className="input-group">
            <label>Status</label>
            <select
              value={status}
              onChange={(e) => setStatus(e.target.value as Task['status'])}
            >
              <option value="To do">To do</option>
              <option value="In progress">In progress</option>
              <option value="Under review">Under review</option>
              <option value="Finished">Finished</option>
            </select>
          </div>
          <div className="input-group">
            <label>Priority</label>
            <select
              value={priority}
              onChange={(e) => setPriority(e.target.value as Task['priority'])}
            >
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="Urgent">Urgent</option>
            </select>
          </div>
          <div className="input-group">
            <label>Deadline</label>
            <input
              type="date"
              value={deadline}
              onChange={(e) => setDeadline(e.target.value)}
            />
          </div>
          <div className="input-group">
            <label>Description</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>
          <div className="input-group">
            <label>Add custom property</label>
            <button className="add-property-btn">+</button>
          </div>
        </div>
        <div className="modal-footer">
          <p>Start writing, or drag your own files here.</p>
        </div>
      </div>
    </div>
  );
};

export default TaskModal;