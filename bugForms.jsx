function BugForm({ onSubmit }) {
  const [bug, setBug] = useState({ title: '', description: '' });

  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      onSubmit(bug);
    }}>
      <input value={bug.title} onChange={e => setBug({ ...bug, title: e.target.value })} />
      <textarea value={bug.description} onChange={e => setBug({ ...bug, description: e.target.value })} />
      <button type="submit">Report Bug</button>
    </form>
  );
}
