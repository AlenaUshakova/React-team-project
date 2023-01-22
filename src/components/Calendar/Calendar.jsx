import DatePicker from 'react-datepicker';
import { forwardRef } from 'react';
import styles from '../Calendar/Calendar.module.css';
import 'react-datepicker/dist/react-datepicker.css';
import { setNewDate } from 'redux/Transaction/transactionReducer';
import { useDispatch, useSelector } from 'react-redux';
import { getCurrentDate } from 'redux/Transaction/transactionSelectors';

export const Calendar = ({ startDate, setStartDate, setDate }) => {
  const newDate = useSelector(getCurrentDate);
  const ExampleCustomInput = forwardRef(({ value, onClick }, ref) => (
    <button className={styles.btn_calendar} onClick={onClick} ref={ref}>
      <svg
        className={styles.svg_calendar}
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M17.4754 2.0669H16.1634V1.74585C16.1634 1.42226 15.9011 1.15991 15.5775 1.15991C15.2539 1.15991 14.9916 1.42226 14.9916 1.74585V2.0669H13.3747V1.74585C13.3747 1.42226 13.1123 1.15991 12.7887 1.15991C12.4652 1.15991 12.2028 1.42226 12.2028 1.74585V2.0669H10.5859V1.74585C10.5859 1.42226 10.3236 1.15991 10 1.15991C9.67641 1.15991 9.41406 1.42226 9.41406 1.74585V2.0669H7.79719V1.74585C7.79719 1.42226 7.53484 1.15991 7.21125 1.15991C6.88766 1.15991 6.62531 1.42226 6.62531 1.74585V2.0669H5.00844V1.74585C5.00844 1.42226 4.74609 1.15991 4.4225 1.15991C4.09891 1.15991 3.83656 1.42226 3.83656 1.74585V2.0669H2.52461C1.13254 2.0669 0 3.19944 0 4.59147V16.3155C0 17.7076 1.13254 18.8401 2.52461 18.8401H17.4754C18.8675 18.8401 20 17.7075 20 16.3155V4.59147C20 3.19944 18.8675 2.0669 17.4754 2.0669ZM18.8281 16.3155C18.8281 17.0614 18.2213 17.6682 17.4754 17.6682H2.52461C1.77871 17.6682 1.17188 17.0614 1.17188 16.3155V6.73233H18.8281V16.3155ZM18.8281 5.56046H1.17188V4.59147C1.17188 3.84562 1.77871 3.23878 2.52461 3.23878H3.83656V3.4653C3.83656 3.7889 4.09891 4.05124 4.4225 4.05124C4.74609 4.05124 5.00844 3.7889 5.00844 3.4653V3.23878H6.62531V3.4653C6.62531 3.7889 6.88766 4.05124 7.21125 4.05124C7.53484 4.05124 7.79719 3.7889 7.79719 3.4653V3.23878H9.41406V3.4653C9.41406 3.7889 9.67641 4.05124 10 4.05124C10.3236 4.05124 10.5859 3.7889 10.5859 3.4653V3.23878H12.2028V3.4653C12.2028 3.7889 12.4652 4.05124 12.7887 4.05124C13.1123 4.05124 13.3747 3.7889 13.3747 3.4653V3.23878H14.9916V3.4653C14.9916 3.7889 15.2539 4.05124 15.5775 4.05124C15.9011 4.05124 16.1634 3.7889 16.1634 3.4653V3.23878H17.4754C18.2213 3.23878 18.8281 3.84562 18.8281 4.59147V5.56046Z"
          fill="#52555F"
        />
        <path
          d="M6.5318 7.98169H4.21973C3.89613 7.98169 3.63379 8.24403 3.63379 8.56762V10.9598C3.63379 11.2834 3.89613 11.5457 4.21973 11.5457H6.5318C6.85539 11.5457 7.11773 11.2834 7.11773 10.9598V8.56762C7.11773 8.24403 6.85543 7.98169 6.5318 7.98169ZM5.94586 10.3738H4.80566V9.15356H5.94586V10.3738Z"
          fill="#52555F"
        />
        <path
          d="M11.1561 7.98169H8.84399C8.5204 7.98169 8.25806 8.24403 8.25806 8.56762V10.9598C8.25806 11.2834 8.5204 11.5457 8.84399 11.5457H11.1561C11.4797 11.5457 11.742 11.2834 11.742 10.9598V8.56762C11.742 8.24403 11.4797 7.98169 11.1561 7.98169ZM10.5701 10.3738H9.42993V9.15356H10.5701V10.3738Z"
          fill="#52555F"
        />
        <path
          d="M15.7802 7.98169H13.4681C13.1445 7.98169 12.8822 8.24403 12.8822 8.56762V10.9598C12.8822 11.2834 13.1445 11.5457 13.4681 11.5457H15.7802C16.1038 11.5457 16.3661 11.2834 16.3661 10.9598V8.56762C16.3661 8.24403 16.1038 7.98169 15.7802 7.98169ZM15.1943 10.3738H14.0541V9.15356H15.1943V10.3738Z"
          fill="#52555F"
        />
        <path
          d="M6.5318 12.5256H4.21973C3.89613 12.5256 3.63379 12.788 3.63379 13.1116V15.5037C3.63379 15.8273 3.89613 16.0897 4.21973 16.0897H6.5318C6.85539 16.0897 7.11773 15.8273 7.11773 15.5037V13.1116C7.11773 12.788 6.85543 12.5256 6.5318 12.5256ZM5.94586 14.9178H4.80566V13.6975H5.94586V14.9178Z"
          fill="#52555F"
        />
        <path
          d="M11.1561 12.5256H8.84399C8.5204 12.5256 8.25806 12.788 8.25806 13.1116V15.5037C8.25806 15.8273 8.5204 16.0897 8.84399 16.0897H11.1561C11.4797 16.0897 11.742 15.8273 11.742 15.5037V13.1116C11.742 12.788 11.4797 12.5256 11.1561 12.5256ZM10.5701 14.9178H9.42993V13.6975H10.5701V14.9178Z"
          fill="#52555F"
        />
        <path
          d="M15.7802 12.5256H13.4681C13.1445 12.5256 12.8822 12.788 12.8822 13.1116V15.5037C12.8822 15.8273 13.1445 16.0897 13.4681 16.0897H15.7802C16.1038 16.0897 16.3661 15.8273 16.3661 15.5037V13.1116C16.3661 12.788 16.1038 12.5256 15.7802 12.5256ZM15.1943 14.9178H14.0541V13.6975H15.1943V14.9178Z"
          fill="#52555F"
        />
      </svg>
      {value}
    </button>
  ));
  const dispatch = useDispatch();
  return (
    <div className={styles.container}>
      <DatePicker
        dateFormat="dd.MM.yyyy"
        selected={newDate}
        onChange={date => {
          dispatch(setNewDate(date));
        }}
        customInput={<ExampleCustomInput />}
      />
    </div>
  );
};