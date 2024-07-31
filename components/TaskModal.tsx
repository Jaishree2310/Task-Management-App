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