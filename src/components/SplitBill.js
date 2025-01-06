import Button from './Button';
import { useState } from 'react';
export default function SplitBill({selectedFriend, onSplitBill}) {
    const [ billValue, setBillValue ] = useState('');
    const [ userExpense, setUserExpense ] = useState('');
    const [ payer , setPayer ] = useState('user');

    const paidByFriend = billValue ? billValue - userExpense : '';

    function handleSubmit(e){
        e.preventDefault();

        if (!billValue || !userExpense) return;

        onSplitBill(payer==='user' ? paidByFriend : -userExpense);
    }

    return(
        <form className='form-split-bill' onSubmit={handleSubmit}>
            <h2>Split a bill with  {selectedFriend.name}</h2>

            <label>💰 Bill value</label>
           <input type='text' value={billValue} onChange={e => setBillValue(Number(e.target.value))} placeholder='Enter Amount'/>

           <label>🧍🏻 Your expense</label>
           <input type='text' value={userExpense} onChange={e => setUserExpense(Number(e.target.value) > billValue ? userExpense : Number(e.target.value))} placeholder='Enter Amount'/>

           <label>👬 {selectedFriend.name}'s expense</label>
           <input type='text' disabled value={paidByFriend}/>

           <label>🤑 Who is paying the bill?</label>
              <select value={payer} onChange={e => setPayer(e.target.value)}>
                <option value='user'>You</option>
                <option value='friend'>{selectedFriend.name}</option>
                </select>

           <Button className='button'>Split bill</Button>
        </form>
    )
}