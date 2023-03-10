import { IncomePart } from 'components/ExpIncPart/IncomePart';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getIncomeCategories, getIncomeStats } from 'redux/Transaction/transactionOperations';

const Income = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getIncomeCategories());
        dispatch(getIncomeStats());
    }, [dispatch]);
    return (
        <>
            <IncomePart />
        </>
    );
};

export default Income;
