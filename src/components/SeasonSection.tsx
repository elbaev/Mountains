import { appContent } from '../data/content';

function SeasonSection() {
  return (
    <section
      style={{
        marginTop: 32,
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
        Погода и сезон
      </h2>

      <p
        style={{
          marginTop: 0,
          marginBottom: 24,
          fontSize: 18,
          lineHeight: 1.8,
          color: '#374151',
        }}
      >
        {appContent.season?.intro ?? 'Раздел сезона будет заполнен на следующем этапе.'}
      </p>
    </section>
  );
}

export default SeasonSection;
