const SelectCurrencyDisplay = () => (
  <div className="select-currency">
    <div>Select a currency</div>
    <img src="/arrow-down.svg" alt="arrow down icon" />
    <style jsx>
      {`
        .select-currency {
          display: flex;
          flex-flow: row nowrap;
          gap: 5px;
          line-height: 1.2rem;
        }
      `}
    </style>
  </div>
);

export default SelectCurrencyDisplay;
