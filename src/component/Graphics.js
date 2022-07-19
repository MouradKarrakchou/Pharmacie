import React from "react"
import {
    AreaChart, Area, XAxis, YAxis, Tooltip, CartesianGrid, Legend,
    ReferenceArea, ReferenceLine, ReferenceDot,
    LabelList, Label, LineChart, Line, ResponsiveContainer, BarChart, Bar, Pie,PieChart, Sector
} from 'recharts';
import DateSelection from "./DateSelection"

export default function Graphic(props){

    let json=props.excel
    let jsonGraph=json.map(
        data=>{
            return(data.DATE!="TOT"?{name:data.date,recetteprev:data.RecettePrev,Totdp:data.Totdp,Solde:data.SoldePrev}:{})
        }
    )
    console.log(props.fournisseur)
    let jsonBar=[]
    props.fournisseur.forEach(
        data=>{
            if(json[31]&&json[31][data.Fournisseur]!==0)
                jsonBar.push({name:data.Fournisseur,facture:json[31][data.Fournisseur]})
        }
    )
    console.log(jsonBar)
    const data = [
        { name: 'Group A', value: 400 },
        { name: 'Group B', value: 300 },
        { name: 'Group C', value: 300 },
        { name: 'Group D', value: 200 },
    ];




    const renderActiveShape = (props) => {
        const RADIAN = Math.PI / 180;
        const { cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle, fill, payload, percent, value } = props;
        const sin = Math.sin(-RADIAN * midAngle);
        const cos = Math.cos(-RADIAN * midAngle);
        const sx = cx + (outerRadius + 10) * cos;
        const sy = cy + (outerRadius + 10) * sin;
        const mx = cx + (outerRadius + 30) * cos;
        const my = cy + (outerRadius + 30) * sin;
        const ex = mx + (cos >= 0 ? 1 : -1) * 22;
        const ey = my;
        const textAnchor = cos >= 0 ? 'start' : 'end';

        return (
            <g>
                <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
                    {payload.name}
                </text>
                <Sector
                    cx={cx}
                    cy={cy}
                    innerRadius={innerRadius}
                    outerRadius={outerRadius}
                    startAngle={startAngle}
                    endAngle={endAngle}
                    fill={fill}
                />
                <Sector
                    cx={cx}
                    cy={cy}
                    startAngle={startAngle}
                    endAngle={endAngle}
                    innerRadius={outerRadius + 6}
                    outerRadius={outerRadius + 10}
                    fill={fill}
                />
                <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke={fill} fill="none" />
                <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
                <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} textAnchor={textAnchor} fill="#333">{`${value} dh`}</text>
                <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} dy={18} textAnchor={textAnchor} fill="#999">
                    {`(${(percent * 100).toFixed(2)}%)`}
                </text>
            </g>
        );
    };

    const [state,setState]=React.useState(0)

    let onPieEnter = (_, index) => {
        setState(index)
    };



    return(
        <div className="Graphics">
            <div className="Graphics--courbe">
                <DateSelection selectMounth={props.selectMounth} mounth={props.mounth}/>
                <h2 className="Graphics--courbe--text">Courbe récapitulative du solde du mois</h2>
                <LineChart
                    width={500}
                    height={300}
                    data={jsonGraph}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="recetteprev" stroke="#82ca9d" activeDot={{ r: 8 }} />
                    <Line type="monotone" dataKey="Totdp" stroke="red" />
                    <Line type="monotone" dataKey="Solde" stroke="black" />
                </LineChart>
            </div>
            <div className="Graphics--facture">
                <h2 className="Graphics--courbe--text">Schema </h2>
                <BarChart
                        width={500}
                        height={200}
                        data={jsonBar}
                        margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                        barSize={20}
                    >
                        <XAxis dataKey="name" scale="point" padding={{ left: 10, right: 10 }} />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <CartesianGrid strokeDasharray="3 3" />
                        <Bar dataKey="facture" fill="#8884d8" background={{ fill: '#eee' }} />
                </BarChart>
            <PieChart width={500} height={300}>
                <Pie
                    activeIndex={state}
                    activeShape={renderActiveShape}
                    data={jsonBar}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="facture"
                    onMouseEnter={onPieEnter}
                />
            </PieChart>
            </div>
        </div>
    )
}
