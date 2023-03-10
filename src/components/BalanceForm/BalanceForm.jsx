import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import {
  BalanceFormStyled,
  BalanceFormLabel,
  BalanceFormInput,
  BalanceFormBtn,
} from './BalanceForm.styled';
import NotifyBalance from '../NotifyBalance/NotifyBalance';
import { InfoModal } from 'components/InfoModal/InfoModal';
import { handleUserBalance } from '../../redux/Auth/authOperations';
import {
  getBalance,
  getExpencesTransactions,
  getIncomesTransactions,
} from '../../redux/Transaction/transactionSelectors';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useSound from 'use-sound';
import confirmYes from '../../sounds/confirmYes.mp3';
import confirmNo from '../../sounds/confirmNo.mp3';

export default function BalanceForm() {
  const [playYes] = useSound(confirmYes);
  const [playNo] = useSound(confirmNo);
  const [modalOpen, setModalOpen] = useState(false);
  const stateBalance = useSelector(getBalance);
  const [balance, setBalance] = useState(stateBalance);
  const income = useSelector(getIncomesTransactions);
  const expenses = useSelector(getExpencesTransactions);

  const dispatch = useDispatch();

  useEffect(() => {
    setBalance(String(stateBalance));
  }, [stateBalance]);

  const handleSubmit = e => {
    e.preventDefault();
    toggleModal();
  };

  const handleChange = ({ target: { value } }) => {
    const numText = value.split('').slice(0, value.indexOf('.')).join('');
    setBalance(numText);
  };

  const handleClick = () => {
    if (Number(balance) === 0) {
      setBalance(prev => String(stateBalance));
      toast.error('Balance cannot be "0". Try again!', {
        position: toast.POSITION.TOP_CENTER,
      });
      playNo();
      return;
    }

    dispatch(handleUserBalance(Number(balance)));
    playYes();
  };

  const toggleModal = () => {
    setModalOpen(prev => !prev);
  };

  return (
    <>
      <BalanceFormStyled
        onSubmit={handleSubmit}
        className={`animate__animated animate__bounceInDown`}
      >
        <BalanceFormLabel>Balance:</BalanceFormLabel>
        <div>
          {income.length === 0 && expenses.length === 0 ? (
            <>
              {' '}
              <BalanceFormInput
                type="text"
                name="balance"
                title="Please, enter your balance"
                placeholder="00.00 UAH"
                pattern="[0-9, .UAH]*"
                required
                onChange={handleChange}
                value={`${balance}.00 UAH`}
              />
              <BalanceFormBtn type="submit">Confirm</BalanceFormBtn>
            </>
          ) : (
            <>
              {' '}
              <BalanceFormInput
                disabled
                type="text"
                name="balance"
                title="Please, enter your balance"
                placeholder="00.00 UAH"
                pattern="[0-9, .UAH]*"
                required
                onChange={handleChange}
                value={`${balance}.00 UAH`}
              />
              <BalanceFormBtn disabled type="submit">
                Confirm
              </BalanceFormBtn>
            </>
          )}
        </div>
        {!stateBalance && <NotifyBalance />}
      </BalanceFormStyled>
      {modalOpen && (
        <InfoModal closeModal={toggleModal} dispatch={handleClick}>
          Are you sure?
        </InfoModal>
      )}
    </>
  );
}
