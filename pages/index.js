export default function Home() {
  return (
    <main style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>Willkommen beim Menü-Planer!</h1>
      <button
        style={{
          padding: '1rem',
          fontSize: '1rem',
          marginTop: '2rem',
          cursor: 'pointer'
        }}
        onClick={() => alert('Plan wird bald generiert!')}
      >
        Neuen Plan erstellen
      </button>
    </main>
  );
}
