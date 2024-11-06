const LiquidityActions = () => {
  return (
    <div className="liquidity-actions">
      <img src="/statistics.svg" /> <img src="/settings.svg" />
      <style jsx>
        {`
          .liquidity-actions {
            display: grid;
            grid-template-columns: repeat(2, auto);
            gap: 1rem;
          }
        `}
      </style>
    </div>
  );
};

export default LiquidityActions;
