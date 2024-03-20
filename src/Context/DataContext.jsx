import { createContext, useState, useEffect } from 'react';
import { Get } from '../https/https';



const DataContext = createContext();

// eslint-disable-next-line react/prop-types
export const DataProvider = ({ children }) => {
    const [packages, setPackages] = useState([]);

    useEffect(() => {
        setTimeout(getPackageList, 1000);
    }, []);

    const getPackageList = () => {
        try {
            Get('/api/UdoySiteApi/GetPackageList')
                .then((res) => {
                    // console.log("From Context -------->>>> ", res.data);
                    setPackages(res.data);
                });
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    return (
        <DataContext.Provider value={{ packages }}>
            {children}
        </DataContext.Provider>
    );
};



export default DataContext;