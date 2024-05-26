import { useEffect, useState } from 'react';
import { Bar, BarChart, Cell, XAxis, YAxis } from 'recharts';
import { getStoredReadBook } from '../Utility/LocalStorage';
import { getPath } from '../Utility/path';

const ReadChart = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        const storedData = getStoredReadBook();
        setData(storedData);
    }, []);
     
    // key={`cell-${index}`}
    // console.log(data);
    const TriangleBar = (props) => {
        const { fill, x, y, width, height } = props;

        return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
    };

    const renderCustomBarLabel = ({ x, y, width, value }) => {
        return <text className='font-bold text-lg' x={x + width / 2} y={y} fill="#666" textAnchor="middle" dy={-6}>{value}</text>;
    };
    const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];
    return (

        <div className='flex justify-center mt-10 items-center '>
            <BarChart width={900} height={550} data={data}>
                <XAxis dataKey="bookName" />
                <YAxis />
                <Bar dataKey="totalPages" fill="#8884d8" shape={<TriangleBar />} label={renderCustomBarLabel}>
                    {data.map((entry, index) => (
                        <Cell key={entry.bookId} fill={colors[index % 20]} />
                    ))}
                </Bar>
            </BarChart>
        </div>
    );
};

export default ReadChart;