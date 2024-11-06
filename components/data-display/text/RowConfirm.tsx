type RowConfirmProps = { left: any, right: any, hasRightBorderTop: boolean };

const RowConfirm = ({ left, right, hasRightBorderTop }: RowConfirmProps) => (
  <>
    <div className="row">
      <div className="row-left">{left}</div>
      <div className="row-right">{right}</div>
    </div>
    <style jsx>
      {`
        .row {
          display: flex;
          justify-content: space-between;
          margin-top: ${hasRightBorderTop && '10px'};
        }
        .row-right {
          border-top: ${hasRightBorderTop &&
          '1px solid var(--grey-ligth-color)'};
        }
      `}
    </style>
  </>
);

export default RowConfirm;
