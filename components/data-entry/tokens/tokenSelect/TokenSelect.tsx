import { useMemo, useState } from 'react';
import { Input, List, Modal } from 'antd';
import { useGetTokenListQuery } from '../../../../redux/lists/listsApi';
import { Avatar } from '../../../data-display/avatar';
import { isString } from '../../../../utils/functions/validations/string';
import SelectCurrencyDisplay from '../../../data-display/text/SelectCurrencyDisplay';
import classes from './token-select.module.scss';
import TokenIcon from '../../../data-display/token/TokenIcon';

type TokenSelectProps = { onChange: any; value: string };

const TokenSelect = ({ onChange, value }: TokenSelectProps) => {
  const { data, isLoading } = useGetTokenListQuery('');
  const [search, setSearch] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const handleOnChange = ({ target: { value: newValue } }) => {
    setSearch(newValue);
  };

  const tokenFiltered = useMemo(() => {
    const searchInData = token => {
      const isNameSearched = token?.name
        ?.toUpperCase()
        ?.includes(search?.toUpperCase());
      const isSimbolSearched = token?.symbol
        ?.toUpperCase()
        ?.includes(search?.toUpperCase());
      switch (true) {
        case isSimbolSearched:
        case isNameSearched:
          return true;
        default:
          return false;
      }
    };
    return data?.filter(searchInData);
  }, [data, search]);

  const tokenSelected = useMemo(
    () => data?.find(token => token.symbol === value) ?? {},
    [value, data]
  );

  const handleOnClickToSelect = () => setIsVisible(prevValue => !prevValue);

  const onClickListItem = token => {
    onChange(token.symbol);
    setIsVisible(false);
  };

  return (
    <div>
      <div
        role="button"
        className="token-selected border-radius-default cursor-pointer"
        onClick={handleOnClickToSelect}>
        {isString(tokenSelected.symbol) ? (
          <>
            {/* <Avatar src={tokenSelected.logoURI} /> */}
            <TokenIcon src={tokenSelected.logoURI} />
            <span>{tokenSelected.symbol}</span>
          </>
        ) : (
          <SelectCurrencyDisplay />
        )}
      </div>
      {isLoading ? (
        <Avatar isLoading={isLoading} />
      ) : (
        <Modal
          visible={isVisible}
          onCancel={() => setIsVisible(false)}
          title="Select a Token"
          footer={null}>
          <Input
            id="tokenSearch"
            placeholder="Search name or paste address"
            onChange={handleOnChange}
            value={search}
          />
          <List
            className={classes.tokenList}
            itemLayout="horizontal"
            dataSource={tokenFiltered}
            rowKey="chainId"
            split={false}
            renderItem={token => (
              <div onClick={() => onClickListItem(token)}>
                <List.Item className="cursor-pointer">
                  <List.Item.Meta
                    avatar={<TokenIcon src={token.logoURI} />}
                    title={token.symbol}
                    description={token.name}
                  />
                </List.Item>
              </div>
            )}
          />
        </Modal>
      )}
      <style jsx>
        {`
          #tokenSearch {
            border-radius: 1rem;
            background-color: #eff1fa;
          }
          #tokenSearch:placeholder {
            color: white;
          }
          .token-selected {
            background-color: #eff1fa;
            width: 120px;
            padding: 0.5rem 1rem;
            display: grid;
            grid-template-columns: auto 1fr;
            align-items: center;
            gap: 0.5rem;
          }
          .border-radius-default {
            border-radius: 1rem;
          }
        `}
      </style>
    </div>
  );
};

export default TokenSelect;
