const ExchangeActions = () => {
  return (
    <div className="exchange-actions">
      <img src="/statistics.svg" /> <img src="/settings.svg" />
      <style jsx>
        {`
          .exchange-actions {
            display: grid;
            grid-template-columns: repeat(2, auto);
            gap: 1rem;
          }
        `}
      </style>
    </div>
  );
};

export default ExchangeActions;
