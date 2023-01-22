import {CurrencyPropsType} from "../types/CurrencyType";
import styled from "styled-components";

const CurrencyRowWrapper = styled.div`
  border-bottom: 1px solid #F1F1F1;
  padding: 8px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  font-size: calc(1px + 2vmin);
`

const CurrencyRowLeftSide = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

const CurrencyColumn = styled.div`
  width: 33%;
`

const FlagWrapper = styled.div`
  width: 70px;
  height: 53px;
  padding-right: 8px;
`

type CurrencyRowPropsType = {
    currency: CurrencyPropsType;
    baseCurrency: string;
}

export default function CurrencyRow({currency, baseCurrency}: CurrencyRowPropsType) {
    const exchangeRate = currency.exchangeRate?.middle ? currency.exchangeRate?.middle + " " + baseCurrency : "Value not provided"
    return <CurrencyRowWrapper data-testid="currency-row-wrapper">
        <CurrencyColumn>
            <CurrencyRowLeftSide data-testid="currency-row-left-side">
                <FlagWrapper data-testid="flag-wrapper">
                    <img
                        src={process.env.PUBLIC_URL + "/flags/" + currency.currency.substring(0, 2).toLowerCase() + ".png"}
                        alt="flag"/>
                </FlagWrapper>
                {currency.currency}
            </CurrencyRowLeftSide>
        </CurrencyColumn>
        <CurrencyColumn>
            {currency.nameI18N}
        </CurrencyColumn>
        <CurrencyColumn>
            {exchangeRate}
        </CurrencyColumn>
    </CurrencyRowWrapper>
}