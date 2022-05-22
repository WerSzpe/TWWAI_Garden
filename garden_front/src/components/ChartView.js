import React, {useState, useEffect} from 'react';
import io from "socket.io-client";
import { useParams } from 'react-router-dom';

import Navbar from './Navbar';
import Linechart from './Linechart';
import "./chartview.css";

const ENDPOINT = "http://localhost:3001";

const ChartView = (props) => {

    const routeparams = useParams();
    const [data, setData] = useState(null);

    const setDatasets = (dataRes) => {
        let dataset = {
            labels: [],
            datasets: [
                {
                    label: 'Temperature',
                    data: [],
                    borderColor: 'rgb(255, 99, 132)',
                    backgroundColor: 'rgba(255, 99, 132, 0.5)'
                },
                {
                    label: 'Humidity',
                    data: [],
                    borderColor: 'rgb(54, 43, 207)',
                    backgroundColor: 'rgba(54, 43, 207, 0.5)'
                },
                {
                    label: 'Pressure',
                    data: [],
                    borderColor: 'rgb(95,220,61)',
                    backgroundColor: 'rgba(95,220,61, 0.5)'
                }
            ]
        };

        dataset.labels = dataRes.map(item => {
            return item.date;
        });

        dataset.datasets[0].data = dataRes.map(item => {
            return item.temp;
        });
        dataset.datasets[1].data = dataRes.map(item => {
            return item.humidity;
        });
        dataset.datasets[2].data = dataRes.map(item => {
            return item.pressure;
        });

        setData(dataset);

    };

    useEffect(() => {
        
        const fetchAir = async () => {
            const currentSection = await fetch("http://localhost:3001/api/params/"+routeparams.id, {
                method:"GET",
                headers:{"authorization":props.token}
            });
            const currentSectionData = await currentSection.json();
            setDatasets(currentSectionData);
        };

        const socket = io(ENDPOINT, {auth: {token: props.token}});
        socket.on(routeparams.id, data => {
            setDatasets(data.data);
        });

        fetchAir();
    }, []);

    return(
        <div>
            <Navbar />
            
            <div className="chartsContainer">
            {
                data!=null && data.labels.length==0 ? <h3>No data yet...</h3> : <Linechart title="Temperature" data={data}/>
            }
            </div>

        </div>
    )
}

export default ChartView;