import { useEffect, useState } from "react";

const TranseActionComponent = ({ transaction }) => {
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
            </div>
          ))
        : "add some transaction!"}
    </section>
  );
};

export default TranseActionComponent;
