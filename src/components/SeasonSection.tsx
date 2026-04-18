import { appContent } from '../data/content';

function SeasonSection() {
  const summaryCards = appContent.season?.summaryCards ?? [];

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

      {summaryCards.length > 0 ? (
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: 16,
          }}
        >
          {summaryCards.map((card) => (
            <article
              key={card.title}
              style={{
                padding: 20,
                borderRadius: 20,
                background: '#f8faf7',
                border: '1px solid rgba(17, 24, 39, 0.06)',
              }}
            >
              <h3
                style={{
                  marginTop: 0,
                  marginBottom: 12,
                  fontSize: 18,
                  color: '#111827',
                }}
              >
                {card.title}
              </h3>
              <p
                style={{
                  margin: 0,
                  fontSize: 16,
                  lineHeight: 1.7,
                  color: '#4b5563',
                }}
              >
                {card.text}
              </p>
            </article>
          ))}
        </div>
      ) : null}
    </section>
  );
}

export default SeasonSection;
