import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { Helmet } from 'react-helmet-async';
import api from '../services/api';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';

const AdminLogin = () => {
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    try {
      await api.post('/auth/login', data);
      navigate('/admin');
    } catch (err) {
      setError('Invalid email or password');
    }
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center">
      <Helmet>
        <title>Admin Login | Portfolio</title>
      </Helmet>
      
      <div className="w-full max-w-md p-8 border border-border">
        <h1 className="font-serif text-3xl mb-8 text-center">Admin Access</h1>
        
        {error && (
          <div className="bg-red-500/10 text-red-500 p-3 mb-6 text-sm border border-red-500/20 text-center">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <Input placeholder="Email Address" type="email" {...register('email', { required: true })} />
          </div>
          <div>
            <Input placeholder="Password" type="password" {...register('password', { required: true })} />
          </div>
          <Button type="submit" className="w-full">Sign In</Button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
