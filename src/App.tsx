import { appContent } from './data/content';

function App() {
  return (
    <main
      style={{
        maxWidth: 960,
        margin: '0 auto',
        padding: '64px 24px 96px',
      }}
    >
      <header style={{ marginBottom: 40 }}>
        <p
          style={{
            margin: 0,
            fontSize: 14,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            color: '#6b7280',
          }}
        >
          Персональный гид по поездке
        </p>
        <h1
          style={{
            margin: '12px 0 16px',
            fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
            lineHeight: 1.05,
            color: '#111827',
          }}
        >
          {appContent.hero.title}
        </h1>
        <p
          style={{
            maxWidth: 720,
            margin: 0,
            fontSize: 20,
            lineHeight: 1.7,
            color: '#374151',
          }}
        >
          {appContent.hero.subtitle}
        </p>
      </header>

      <section
        style={{
          background: 'rgba(255, 255, 255, 0.72)',
          border: '1px solid rgba(17, 24, 39, 0.08)',
          borderRadius: 24,
          padding: 32,
          boxShadow: '0 20px 60px rgba(15, 23, 42, 0.06)',
        }}
      >
        <h2
          style={{
            marginTop: 0,
            marginBottom: 16,
            fontSize: 28,
            color: '#111827',
          }}
        >
          Стартовая структура приложения
        </h2>
        <p
          style={{
            margin: 0,
            fontSize: 18,
            lineHeight: 1.8,
            color: '#374151',
          }}
        >
          {appContent.hero.intro}
        </p>
      </section>
    </main>
  );
}

export default App;
