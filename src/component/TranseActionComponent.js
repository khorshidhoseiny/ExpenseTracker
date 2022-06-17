import { useEffect, useState } from "react";
import { FaTrashAlt } from "react-icons/fa"; 
const TranseActionComponent = ({ transaction,DeleteTnx }) => {
  const [searchItem, setSearchItem] = useState("");
  const [filterTnx, setFilterTnx] = useState(transaction);

const filterTransactions=(search)=>{
if(!search || search===""){
    setFilterTnx(transaction);
    return;
}
const filtered= transaction.filter((t)=>t.desc.toLowerCase().includes(search.toLowerCase()));
setFilterTnx(filtered);
}

  const changehandler = (e) => {
    setSearchItem(e.target.value);
    filterTransactions(e.target.value);
  };
  useEffect(()=>{
filterTransactions(searchItem);
  },[transaction])

  if (!transaction.length)
  return (
    <div className="textTip"><h3>Click On 'Add' Button To Add Transaction</h3>
    <p className="text-stone-400 font-medium">Developed By <a href="https://github.com/khorshidhoseiny" target="_blank" rel="noreferrer">khorshid Hoseiny</a></p>
    </div>
  );
 
  return (
    <section className="tnxList">
      <input className="input" type="text" value={searchItem} onChange={changehandler} placeholder="Search ..." />
      {filterTnx.length
        ? filterTnx.map((t) => (
            <div
              className="transaction"
              key={t.id}
              style={{ borderRight: t.type === "expense" && "2px solid red" }}
            >
              <span> {t.desc}</span>
              <span> ${t.amount}</span>
              <button onClick={() => DeleteTnx(t.id)} className="text-red-400 pt-2"><FaTrashAlt/></button>
              </div>
            
          ))
        : <p style={{display:"flex",color:'#3837384d',justifyContent:'center',alignItems:'center'}}>Add some transaction</p>}
    </section>
  );
};

export default TranseActionComponent;
