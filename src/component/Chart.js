import { VictoryPie } from "victory";
const ChartBar = ({ income, expense }) => {
 

  const data = [
    { x: "Income", y: income },
    { x: "Expense", y: expense },
  ];

  return (
    <div className="flex items-center w-full ">
      <VictoryPie
        responsive={true}
        innerRadius={25}
        style={{
          labels: { fontSize: 12 },
        }}
        width={600}
        height={200}
        data={data}
        colorScale={["	#C9E4C5", "#F7DAD9"]}
        animate={{
          duration: 2000,
        }}
      />
    </div>
  );
};

export default ChartBar;