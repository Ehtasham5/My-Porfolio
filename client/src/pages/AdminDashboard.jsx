import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import api from '../services/api';

const AdminDashboard = () => {
  const [messages, setMessages] = useState([]);
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [msgsRes, projsRes] = await Promise.all([
          api.get('/messages'),
          api.get('/projects')
        ]);
        setMessages(msgsRes.data);
        setProjects(projsRes.data);
      } catch (err) {
        if (err.response?.status === 401) {
          navigate('/admin/login');
        }
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [navigate]);

  if (loading) return <div className="py-20 text-center">Loading dashboard...</div>;

  return (
    <div>
      <Helmet>
        <title>Dashboard | Admin</title>
      </Helmet>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 pt-8">
        {/* Messages */}
        <div>
          <h2 className="font-serif text-3xl mb-6">Messages</h2>
          <div className="space-y-4">
            {messages.length === 0 ? (
              <p className="text-muted">No messages yet.</p>
            ) : (
              messages.map(msg => (
                <div key={msg._id} className="border border-border p-6 relative">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h4 className="font-medium">{msg.name}</h4>
                      <a href={`mailto:${msg.email}`} className="text-sm text-muted hover:text-accent">
                        {msg.email}
                      </a>
                    </div>
                    <span className="text-xs text-muted">
                      {new Date(msg.createdAt).toLocaleDateString()}
                    </span>
                  </div>
                  <p className="text-sm text-foreground/90 whitespace-pre-wrap">{msg.message}</p>
                </div>
              ))
            )}
          </div>
        </div>

        {/* Projects */}
        <div>
          <h2 className="font-serif text-3xl mb-6">Projects</h2>
          <div className="space-y-4">
            {projects.map(proj => (
              <div key={proj._id} className="border border-border p-4 flex justify-between items-center">
                <div>
                  <h4 className="font-medium">{proj.title}</h4>
                  <p className="text-xs text-muted">{proj.slug}</p>
                </div>
                <div className="flex gap-4 text-sm">
                  <button className="text-muted hover:text-accent">Edit</button>
                  <button className="text-red-500/70 hover:text-red-500">Delete</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
