import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [dbVersion, setDbVersion] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // In production, the API is at the same origin under /api/
    // In development, the full URL is needed due to different ports.
    const apiUrl = import.meta.env.DEV
      ? 'http://localhost:8000/api/db-version'
      : '/api/db-version';

    const fetchDbVersion = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        if(data.error) {
          throw new Error(data.error);
        }
        setDbVersion(data.db_version);
      } catch (e) {
        if (e instanceof Error) {
            setError(e.message);
        } else {
            setError("An unknown error occurred.");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchDbVersion();
  }, []);

  return (
    <div className="card">
      <h1>FastAPI + React</h1>
      <p>Hello from the Vite + React frontend!</p>
      <div className="status-box">
        <h3>Backend API Status</h3>
        {loading && <p>Loading DB version...</p>}
        {error && <p className="error">Error: {error}</p>}
        {dbVersion && <p className="success">PostgreSQL Version: <code>{dbVersion}</code></p>}
      </div>
    </div>
  );
}

export default App;
