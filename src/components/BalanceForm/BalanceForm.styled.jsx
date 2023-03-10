import styled from 'styled-components';

export const BalanceFormStyled = styled.form`
  margin: 0 auto 50px;
  padding: 0 20px;
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
    gap: 20px;
    align-items: baseline;
    margin: 0;
  }
  @media screen and (min-width: 1280px) {
    margin: 0 auto;
  }
`;

export const BalanceFormLabel = styled.label`
  color: var(--balance-text-color);
  margin-bottom: 8px;
  font-size: 12px;
  line-height: calc(14 / 12);
  font-weight: 500;
  letter-spacing: 0.02em;
  text-align: center;
`;

export const BalanceFormInput = styled.input`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 14px;
  letter-spacing: 0.02em;

  width: 140px;
  padding: 12px 18px;
  color: var(--balance-balance-text-color);
  text-align: right;
  border: 2px solid white;
  border-radius: 22px 0 0 22px;
  outline: none;
  background-color: var(--trans-dropdown-active-background-color);
  

  :focus {
    background-color: var(--trans-background-color);
  }
  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
    transition: background-color 250s linear;
  }

  &::placeholder {
    color: var(--general-header-color);
    letter-spacing: 0.02em;
    font-weight: 700;
    font-size: 12px;
    line-height: 1.17;
  }

  @media screen and (min-width: 768px) {
    width: 125px;
    padding: 12px 20px;
    border-radius: 16px;
    margin-right: 15px;
  }

  color: ${props => {
    return props.value.includes('-') ? 'red' : ' #52555f';
  }};
`;

export const BalanceFormBtn = styled.button`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  letter-spacing: 0.02em;

  width: 140px;
  padding: 12px 18px;
  color: var(--balance-text-color);
  text-align: left;
  text-transform: uppercase;
  border: 2px solid white;
  border-left: none;
  border-radius: 0 22px 22px 0;
  outline: none;
  background-color: var(--trans-dropdown-active-background-color);
  cursor: pointer;

  transition: border-color 250ms linear, color 250ms linear,
    background-color 250ms linear;

  :hover,
  :focus {
    color: var(--auth-background-bot-part-color);
    background-color: var(--general-accent-background-color);
    border-color: var(--general-accent-background-color);
  }

  @media screen and (min-width: 768px) {
    width: 125px;
    padding: 12px 6px;
    border-radius: 16px;
    text-align: center;
    border-left: 2px solid var(--balance-button-border-color);
  }
`;
