import React, {useState, useEffect} from 'react';
import io from "socket.io-client";

import Navbar from './Navbar';
import Linechart from './Linechart';

const ENDPOINT = "http://localhost:3001";

const ChartView = (props) => {

    const [response, setResponse] = useState({});
    const [sampleDate, setSampleDate] = useState(null);
    const [tempData, setTempData] = useState(null);
    const [pressData, setPressData] = useState(null);
    const [humData, setHumData] = useState(null);
    const [secID, setSecID] = useState(null);
    
    const getDataFromSection = async (sec_id) => {
        const res = await fetch("http://localhost:3001/api/params/");
        const dataRes = await res.json();

    }

    const setDatasets = (dataRes) => {
        let temp = {
            labels: [],
            datasets: [
                {
                    label: 'Temperature',
                    data: [],
                    borderColor: 'rgb(255, 99, 132)',
                    backgroundColor: 'rgba(255, 99, 132, 0.5)',
                }
            ]
        };
        let press = {
            labels: [],
            datasets: [
                {
                    label: 'Pressure',
                    data: [],
                    borderColor: 'rgb(95,220,61)',
                    backgroundColor: 'rgba(95,220,61, 0.5)',
                }
            ]
        };
        let hum = {
            labels: [],
            datasets: [
                {
                    label: 'Humidity',
                    data: [],
                    borderColor: 'rgb(54, 43, 207)',
                    backgroundColor: 'rgba(54, 43, 207, 0.5)',
                }
            ]
        };

        temp.labels = dataRes.map(item => {
            return item.date;
        });

        press.labels = dataRes.map(item => {
            return item.date;
        });

        hum.labels = dataRes.map(item => {
            return item.date;
        });

        temp.datasets[0].data = dataRes.map(item => {
            return item.temp;
        });

        press.datasets[0].data = dataRes.map(item => {
            return item.pressure;
        });

        hum.datasets[0].data = dataRes.map(item => {
            return item.humidity;
        });

        setTempData(temp);
        setHumData(hum);
        setPressData(press);
    }

    useEffect(() => {
        

        const fetchAir = async () => {
            const res = await fetch("http://localhost:3001/api/params");
            const dataRes = await res.json();
            const currentSection = await fetch("http://localhost:3001/api/params/");
            const currentSectionData = await currentSection.json();
            setSampleDate(dataRes);
        };

        const socket = io(ENDPOINT);
        socket.on("currentState", data => {
            setDatasets(data.data);
        });

        fetchAir();
    }, []);

    return(
        <div>
            <Navbar />
            
            <div>
                <Linechart title="Temperature" data={tempData}/>
                <Linechart title="Humidity" data={humData} />
                <Linechart title="Pressure" data={pressData} />
            </div>

        </div>
    )
}

export default ChartView;