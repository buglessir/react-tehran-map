import React, { useState, useEffect } from 'react';
import './styles.css';

const TehranMap = ({ onSelect, width }) => {
  const [selectedArea, setSelectedArea] = useState(null);

  useEffect(() => {
    if (selectedArea !== null) {
      onSelect(selectedArea)
    }
  }, [selectedArea, onSelect]);

  const areas = [
    "M677.9,51.9c-7.4-2.4-14.7-5.1-22.1-7.5c-2.3-0.7-3.7-1.9-4-4.2c-0.2-1.7-1-2.5-2.7-2.3   c-3.5,0.5-6.4-0.3-8.3-3.6c-0.2-0.4-0.9-0.6-1.2-1c-3.8-3.4-7.8-6.5-11.1-10.3c-1.4-1.6-2.3-4.7-3.6-4.8c-2.1-0.2-2.7,3.1-4.4,4.5   c-1.7,1.5-3.8,2.2-5.5,0.2c-0.9-1-1.5-0.6-2.1-0.2c-2.4,1.5-3,0.6-3.1-1.9c-0.1-2.3-0.8-4-3.8-4.1c-2.6-0.2-4.1-2.4-4.3-5.1   c-0.1-1.2,0-2.3-0.5-3.4c-0.5-1.1-0.5-2.9-1.9-2.9c-1.2,0-1,1.8-1.5,2.8c-0.3,0.7-0.6,1.3-0.9,2c-2.6,5.3-6.9,6.4-11.9,3.1   c-0.9-0.6-1.7-0.8-2.7-0.7c-4.7,0.1-9.1-0.9-13.6-2.2c-5.2-1.4-10.9-2.5-15.6,0.8c-3,2.1-5.7,2.8-9,2.7c-1.7,0-4-0.8-4.1,2.3   c-0.1,1.1-1.3,0.8-2.1,0.7c-2.7-0.4-5.4-0.8-8.1-1.2c-5.1-0.8-10.5-1-13.9-6c-1-1.5-1.7-0.6-1.8,0.8c0,1.7-0.9,1.8-2.3,1.4   c-4.4-1.1-4.6-1.2-3.8-5.4c0.3-1.5-0.3-2.4-1.4-2.7c-1.8-0.3-1.2,1.2-1.3,2.2c-0.3,2.4-0.8,5.3-3.6,5.1c-4.1-0.3-4.9,2.1-5.9,5   c-1,2.8-3.3,3.1-5.4,0.8c-4.3,4.6-8.5,8.7-15.4,6.4c-1.2-0.4-1.6,0.2-1.8,1.1c-1.3,4.6-5.2,6.9-8.2,10.2c-2.6,2.8-5.1,3.7-8.7,3.5   c-2.9-0.2-4.9-0.9-5.4-4c-0.1-0.8-0.2-1.8-1.4-1.7c-1.4,0.1-1.1,1.3-1.2,2.2c-0.5,4.2,1,7.6,4.1,10.4c1.1,1,2.8,2.4,1.7,3.6   c-2.7,3.1-0.9,6.5-1.3,9.7c-0.2,1.5,1,2.1,2.3,1.9c1.8-0.2,2.7,0.5,2.9,2.3c0.2,1.7,1,2.3,2.8,1.4c2.8-1.4,5.7-2.6,8.7-3.7   c2.3-0.9,5.1-2.3,7.2-0.6c2.9,2.2,5.9,2.7,9.4,2.8c2.8,0,5.6,1,8.3,1.7c2.6,0.7,4.7,2.1,6,4.7c2.3,4.4,4.9,8.6,7.3,12.9   c1.1,2.1,2.5,2.7,4.6,1.5c1.3-0.7,2.6-1.4,3.5-2.7c2.5-3.6,6.3-5.4,10.3-6.1c7.7-1.5,14.2-5,20.3-9.7c3.8-2.9,7.8-6.1,13.2-4.8   c7.6,1.9,15.2,4.1,23.1,4.8c5.8,0.5,10.4,4.4,15.5,6.8c2,0.9,4,1.2,6.1,0.9c6.8-1.2,13.4-0.5,19.7,2.5c5.8,2.7,11,6.6,16.4,10.1   c2.5,1.6,4.3,1.5,6.3-0.7c6.4-7.1,11.6-15,13.8-24.5c0.3-1.3,0.7-1.8,2-1.8c2.9,0.1,5.8-0.4,8.5,0.2c3.5,0.8,5.6-0.6,7.7-2.9   C680.2,53.3,679.9,52.5,677.9,51.9z",
    "M458,84.1c0.6-1.1,0.8-2.2,0.6-3.6c-0.9-5.2-1.6-10.4-2.1-15.6c-0.2-2.3-1-3.3-3.2-3c-1.9,0.2-2.7-0.6-2.6-2.5   c0.1-1.4,0.1-2.8,0-4.1c-0.2-2.6,1-5.6-0.6-7.8c-3.4-4.6-5.3-9.7-5.7-15.4c-0.1-1-0.7-1.5-1.4-0.6c-1.9,2.2-3.9,4.5-5.3,7   c-1,1.8,0.9,3.6,1.3,5.4c0.3,1,0.6,2.1-0.7,2.3c-3,0.6-5.4,3.9-9,1.9c-0.2-0.1-1,0.1-1.1,0.3c-0.8,2-2.2,1.4-3.7,1   c-1.8-0.5-2.8,0.1-2.9,2.1c-0.1,1-0.5,2-0.5,3.1c-0.1,1.5-0.2,2.8-2.2,2.8c-1.8,0-4,0.2-4.5-2c-0.6-2.6-2.3-3.2-4.3-3   c-2,0.2-4.5-1.8-5.8-0.3c-2.9,3.2-6.6,1.9-9.8,2.7c-2.9,0.8-5.2-0.1-5.3-3.7c0-0.5-0.3-1-0.5-1.5c-0.2-0.7-0.1-1.7-1.2-1.4   c-1,0.2-0.8,1.2-0.7,1.8c0.5,2.4,0.6,4.8,0.6,7.2c0.1,6-0.4,12,0.5,18c0.4,2.2,2.2,5.4-2.1,6.2c-0.2,0-0.4,1-0.3,1.4   c0.4,2.7-1.1,3.6-3.4,3.7c-1.8,0.1-2.5,1-2.3,2.6c0.3,2.7,0.6,5.4,0.9,8.1c0.5,4.3,1.9,8.6,1.4,12.8c-1,7.3-3.6,14.2-6.8,20.9l0,0   c-0.3,2.1-1.4,4-1.2,6.2c0.4,6.1,0.6,12.2,1.4,18.2c1.5,12.3,3.8,24.4,5.1,36.7c0.9,9.1,2.7,18.1,2.4,27.3c-0.1,2.5,0.8,3,3.1,3   c10.2,0,20.4-0.2,30.7-0.6c6.4-0.3,12.8,0.1,19.3-0.6c1.9-0.2,2.2-0.7,1.9-2.6c-0.6-3.9-2.1-7.8,0.6-11.6c0.3-0.4,0.4-1.3,0.2-1.8   c-1.1-4.2-0.5-8.4-0.5-12.6c0-4,0.8-7.9,3.3-11.3c1.4-1.9,2.4-4,2.7-6.4c0.6-5.5,1.2-11.1,1.6-16.6c0.3-4.6,0.8-9.2,1.8-13.7   c2.1-9.5,4.2-19,4.7-28.9c0.2-4-1-7.9-0.6-12C452.2,96.7,454.5,90.2,458,84.1z",
    "M574.9,65c-4.3-0.7-8.3-2.4-12.4-3.7c-3.8-1.2-7.2-0.9-10.8,1.5c-5.6,3.8-11.4,7.8-17.9,9.9   c-6.8,2.1-12.7,5.4-18.2,9.8c-1.2,1-2.7,1.7-4.1,2.4c-2,0.9-3.6,0.8-4.9-1.5c-2.6-4.7-5.6-9.1-8.3-13.8c-1.8-3.2-4.2-5.4-8-5.9   c-3.7-0.5-8-0.3-11.1-2c-5.5-3-9.5-0.7-13.9,1.7c-1.1,0.6-2.2,1.3-3.4,1.7c-3.3,1.1-4,2.7-2.6,6.1c2.5,6,2.5,12.2-1.4,17.8   c-4.8,6.8-6.5,13.9-3.7,22c1.1,3.1,2,6.8-0.2,9.8c-2.3,3.1-2,6.5-2.1,10c0,1.7,0.8,2.1,2.3,2.1c7.4,0,14.7-1.2,22-1.7   c6.4-0.4,12.8-0.8,19.2-0.8c4.2,0,6.3,2.5,7.3,6.6c0.8,3.5,0.5,6.9,0.6,10.4c0,1-0.4,2.5,1.2,2.5c3.2,0,6.8,1,9.7-0.4   c4.7-2.4,9.6-2.9,14.7-2.6c1.6,0,3.2-0.1,4.7,0c2.2,0.2,3.3-0.6,4.1-2.8c1.4-3.5,1.7-7.1,1.6-10.8c0-1.7-0.6-3.7,2.4-3.7   c1.1,0,1.2-1.6,1.8-2.4c2.9-4.5,0.5-10.1,3.2-14.8c1.1-1.9,0.9-4.5,2.8-6.7c6.7-7.7,12.4-16.3,16.2-25.8c2.1-5.1,3.4-10.3,9.3-12.3   c0.1,0,0.2-0.1,0.3-0.2C576.5,66.2,576.6,65.3,574.9,65z",
    "M755.8,143.7c-5.6-2.4-11.3-4.4-17.4-5.2c-7.4-0.9-13.8-4.2-18-10.5c-5.5-8.4-12.1-15.6-20.1-21.6   c-4.9-3.7-10.5-6.2-16.1-8.7c-10.6-4.7-21.2-9.2-33.2-8.7c-5.7,0.2-11.1-1.6-15.9-5.2c-4-3-8.4-5.1-13-7c-5.5-2.2-11-3.8-16.9-2.7   c-4.7,0.9-8.9,0.2-12.9-2.6c-2.8-2-5.7-4-9.1-4.9c-1.3-0.4-2.8-0.8-3.9,0.3c-3.8,3.6-8.4,6.8-10.1,11.9   c-3.1,9.3-9.5,16.6-14.7,24.6c-3.8,5.9-6.3,11.9-7.5,18.7c-0.7,4-0.6,8.4-5,10.6c-0.6,0.3-0.6,1.1-0.6,1.7   c0.3,4.5-0.1,8.8-2.9,12.6c-0.8,1.1-0.9,2.3,1.3,2.3c3.7-0.1,7.3,0.2,11,0.5c8.9,0.8,17.6,2.6,26.4,4.3c11.2,2.3,22.3,5.1,33.7,6.1   c3,0.3,7.3-1.5,9.4,2.8c0.1,0.2,0.6,0.1,0.9,0.1c11.7,1.3,23.3,2.8,35,3.7c5.4,0.4,9.9,1.2,11.5,7.3c0.6,2.3,2.6,3.4,5.2,3   c3.2-0.5,6.5-0.4,9.7-0.8c3-0.4,6.1-0.2,9.1-0.6c5-0.7,10.1-1.1,14.9,0.8c5,1.9,10.1,3,16,2.3c6.7,1.7,11.9-2,17.1-6.4   c3.9-3.3,6.7-7.6,11.6-10.1c3.7-1.9,5.5-6.5,7.4-10.4C761.6,146.2,761.7,146.3,755.8,143.7z",
    "M386.3,76.2c-0.9-4.8-2.7-9.5-2.2-14.6c0.7-5.8,0.9-11.6-0.4-17.9c-0.6,1.5-1.1,2.5-1.4,3.6    c-1.1,4.2-2,8.4-3.3,12.5c-1.3,4.2-4.8,5.3-8.4,2.9c-1-0.7-1.9-0.7-3-0.7c-4.4-0.2-5.1,3.3-6.2,6.3c-0.6,1.7-1.3,2.6-3.3,2.7    c-2.6,0.1-5.4,0.2-7.7,1.2c-3.1,1.3-5.8,0.8-8.7,0.1c-3.2-0.7-5.1-2.8-5.1-6.1c0-1.5-0.2-3-0.7-4.3c-1-2.7-3.8-1.9-5.8-2.2    c-1.9-0.3-1.1,1.9-1.1,3c-0.1,2.9-1.2,5.3-2.9,7.5c-0.4,0.5-1.3,1.5-1.7,0.9c-2.3-3.5-7,0.5-9.3-2.9c-0.1-0.1-1.1,0.4-1.6,0.7    c-1.4,1.1-2.8,2.2-4.1,3.4c-0.7,0.7-1.5,1.1-2.5,0.9c-5.4-0.7-6.2-1.6-6.5-7c0-0.2-0.2-0.5-0.3-0.7c-2.4,1-3.9,2.6-4.8,4.9    c-0.8,2-2.3,2.8-4.4,2.9c-4.8,0.1-7.5-2.4-7.4-7.3c0.1-2.3-0.6-3.4-3-3.8c-3.6-0.6-7.2-1.5-10.8-2.2c-1.2-0.2-2.1-0.6-2.1-1.9    c0-1.3-0.5-3,1.3-3.5c2-0.5,2.3-2,2.5-3.6c1.1-7.9,5.1-14.7,8-21.9c0.4-1,0.8-1.7,2-1.5c1.6,0.2,2.2-0.8,2.6-2.1    c0.6-1.7,0.8-3.5,0.6-5.3c-0.2-2.1,0.2-3.5,2.5-3.9c1.3-0.2,1.7-0.8,1.4-2.2c-0.6-2.8-0.9-5.6-1.3-8.4c-0.3-1.8-0.9-3.5-2.4-4.6    c-1-0.7-2.6-1.6-3.5-0.9c-1.1,0.9-0.5,2.5,0.1,3.8c0.5,1.1,1.8,2,1.8,3.3c-0.3,7.3-2.1,14.1-7.1,19.8c-2.6,3-6.3,5.4-6.9,9.9    c-0.2,1.8-0.6,3.5-1,5.2c-1,3.9-1.4,8.1-4.8,11.1c-1,0.9-3.5,0.7-2.8,3.1c0.5,1.6,0.8,3.3,2,4.6c1.6,1.8,3.3,3.5,5.8,4.2    c3.3,1,5.2,3.2,5.9,6.7c1.1,6.1,3.4,12,5.5,17.8c0.9,2.4,1,4.3,0.1,6.6c-1.6,4.1-2.9,8.2-0.8,12.8c1.9,4.1,2.9,8.6,4.4,12.8    c1.7,4.8,1.9,9.5,0.9,14.5c-0.8,3.7-2,7.6-1.5,11.5c0.7,5.5,4.7,8.8,8.6,12c6.6,5.3,12.7,11,16,19.2c1.9,4.7,4.1,9.3,7.3,13.3    c1.1,1.4,1.5,2.6,1.5,4.3c-0.1,8,0.1,16.1-0.1,24.1c-0.1,2.6,0.6,3.4,3.3,3.4c17.5-0.3,35-0.5,52.5-0.7c2.1,0,4.2-0.1,6.3,0    c2,0.1,2.5-0.7,2.5-2.6c0.2-5.3-0.8-10.5-1.3-15.7c-0.8-8.1-1.8-16.3-2.7-24.4c-1-8.5-2-17.1-3-25.6c-0.8-6.5-1.4-12.9-2.3-19.4    c-0.5-3.8-0.5-4.1,3.6-4.9c-0.3-4.6,0.6-9,2.2-13.3c1.8-4.8,2.8-9.8,2.2-14.9c-0.6-5.1-1.3-10.2-2.1-15.3    c-0.3-1.8-0.4-2.8,1.8-2.9c2.2-0.2,4.1-0.9,3.6-3.8c-0.2-1.1,0.4-1.8,1.6-1.7C387,79.2,386.6,77.9,386.3,76.2z",
    "M507.7,185.4c-1-0.9-1.7-1.7-1.7-3.1c0-3.8-1.3-7.1-4.2-9.9c-2.3-2.1-3.2-4.9-2.2-8c2.2-6.9,3.7-13.8,3.3-21.1   c-0.5-8.1-3.1-11.4-11.7-11.3c-12.4,0.2-24.7,2.6-37.1,2.6c-1.6,0-2,0.8-1.9,2.2c0.2,4-1,7.7-2.1,11.4c-1.7,5.7-2.1,11.6-1.5,17.5   c0.5,4.8-0.1,9.5-2.4,13.7c-1.5,2.7-2.6,5.5-3.5,8.4c-1.8,5.9-1.2,11.9-1.2,17.9c0,2.2,0,4.4,0,6.7c0,7.8,0,7.8,7.9,7.2   c0.1,0,0.2,0,0.3,0c11.1,0,22.1-0.8,33.1-1.2c7.4-0.2,14.7-0.8,22.1-0.7c2,0,2.5-0.7,2.5-2.6c-0.1-6,0-12,0-18.1   c0-1.5,0.2-2.8,1.2-4.1C510.6,190.2,510.3,187.7,507.7,185.4z",
    "M556.6,178.2c-2.9-5.4-3.5-9.7,1-14.5c2.9-3.2,5-7.2,7.6-11.1c-8.3-0.9-16-1.9-23.7-2.7   c-5.1-0.5-10.2-1.1-15.4-1.4c-1.8-0.1-4.2-0.7-5.4,0.8c-2.2,2.9-5.2,2.8-8.2,3c-1.7,0.1-3.4,0.2-5.1,0c-2-0.2-2.9,0.7-3.2,2.5   c-0.7,3.2-1.2,6.4-2.2,9.5c-0.9,2.9-0.4,5.1,1.8,7.1c2.7,2.5,4.1,5.6,4.1,9.3c0,1.2,0.2,2.4,1.3,3c2.9,1.5,2.7,4,2.1,6.6   c-0.4,1.8-1.2,3.6-1.6,5.4c-1.3,6.4-0.2,12.8-0.6,19.2c-0.1,2.1,0.6,2.7,2.7,2.7c8.8,0.2,17.5-0.5,26.2-0.8c3.6-0.1,7.3-0.5,10.8-2   c7.7-3.2,15-7.3,23.9-8.8C566.1,197,561.6,187.5,556.6,178.2z",
    "M663.5,171.2c-5.8-3.3-12.2-4-18.5-4.8c-9.8-1.1-19.6-1.4-29.3-3.7c-15-3.5-30.3-6-45.4-8.9   c-2.3-0.5-3.9,0-5.2,2.3c-2.6,4.7-5.3,9.4-8.2,13.9c-1.7,2.5-1.3,4.5,0.1,6.8c4.6,7.8,9,15.7,13.4,23.6c2.8,5,2.7,5.1,8.1,3.2   c16.3-6,32.6-12,48.9-18c5.1-1.9,10.2-4.2,15.5-5.2c7.5-1.3,15.3-1.5,22.9-2.1c1-0.1,2-0.2,1.8-1.7   C667,174.5,665.8,172.5,663.5,171.2z",
    "M407.8,229.3c-0.5-3.7-1.5-4.6-5-4.6c-8,0.1-16,0-24,0.5c-9.8,0.7-19.6,0.5-29.4,0.8c-0.5,0-1.1,0-1.6,0.1    c-7.1,0.9-14.3,1-21.4-0.2c-2.9-0.5-5.7-1.3-8.7-1.2c-1.8,0-2.6,0.6-2.3,2.4c1,6.9-2.5,12.9-3.2,19.5c-0.1,0.8-0.6,1.4-1.2,1.8    c-4.6,3.2-6.6,8-8.4,13c-0.7,2-0.4,2.7,1.8,2.6c8.9-0.3,17.7,0.3,26.6,0.5c3.9,0.1,7.7,0.9,11.7,0.7c0.7,0,1.8,0,1.7,0.9    c-0.1,3.2,0,6.1,4.4,5.9c0.2,2.6,2.3,1.9,3.8,2.1c4,0.7,8.1,1.5,12.1,2.3c7.5,1.5,14.9,3.5,22.6,4c3,0.1,5.9-0.6,8.7-1.4    c6.9-2,12.1-9.9,10.6-16.7c-1.3-6.1-0.7-12.1,0.5-18.1C407.8,239.3,408.5,234.3,407.8,229.3z",
    "M444.2,267.8c-0.7-5.1-1-10.2-1.5-15.4c-0.9-9.3-1.7-18.6-2.6-27.9c-0.2-1.8-1-2.6-2.9-2.5    c-2.7,0.1-5.5,0-9.2,0c-4.3-0.5-9.5,0.5-14.8,0.7c-3.3,0.1-4.2,1.1-3.3,4.4c1.7,6.3,0.4,12.5-0.5,18.7c-0.7,4.4-1.8,8.8-1.4,13.1    c0.3,3.7,0,6.9-1.4,10.2c-1.1,2.6,0.4,4,2.7,4.7c3.3,1.1,6.6,2.1,9.9,3.1c7.9,2.4,15.4,1.3,22.4-3.1    C443.8,272.6,444.6,270.6,444.2,267.8z",
    "M487,220.8c-1.8,0.2-3.5,0.6-5.3,0.6c-11.9-0.4-23.8,1.1-35.7,0.6c-3.3-0.1-4.6,0.8-3.9,3.4   c0.7,8,1.4,15.3,2.1,22.6c0.8,8.1,1.6,16.3,2.4,24.4c0.6,5.5,1.3,11,1.8,16.6c0.2,1.8,0.6,2.2,2.5,1.8c2.8-0.6,4.9-2.4,7.4-3.6   c3.8-1.8,4.1-1.7,5.3,2.2c0.3,1,0.5,1.8,1.7,1.9c3.8,0.6,7.7,1.2,11.5,1.7c1.2,0.2,2-0.5,2.1-1.8c0.6-4.2,1.3-8.5,1.9-12.7   c1.6-10.6,3.2-21.1,4.8-31.7c1.2-7.9,2.3-15.8,3.6-23.6C489.4,221.3,488.7,220.7,487,220.8z",
    "M537.8,218.9c-3.2,0.1-6.3,0-9.5,0.2c-9.9,0.7-19.8,1.4-29.7,1c-7.4-0.3-7.4-0.6-8.4,6.7   c-3,20.7-5.9,41.4-8.9,62.1c-0.6,4.4-0.6,4.4,5.2,4.2c6.1-0.5,13.8-1.3,21.4-1.9c9-0.7,18-1.3,27.1-2c1-0.1,1.9-0.1,1.8-1.6   c-0.6-9.8-0.3-19.6,0.4-29.4c0.5-6.8,1.3-13.6,1.7-20.4c0.4-5.6,0.5-11.2,0.8-16.7C539.7,219.8,539.5,218.8,537.8,218.9z",
    "M627.1,187.6c-11.4,4.3-22.9,8.6-34.3,12.9c-16.3,6.1-32.5,12.3-48.8,18.4c-1.1,0.4-2.3,0.6-2.3,2.2   c0,5.3,0,10.6,0,15.8c0,1,0.3,1.6,1.5,1.5c7.1-0.6,14.3-1.1,21.4-1.8c11.8-1.2,23.6-2.4,35.5-3.1c5.3-0.3,8.8-2,11.1-7.2   c2.9-6.9,6.4-13.5,9.3-20.4c2.7-6.4,5.9-12.5,9.3-18.7C628.6,186.9,627.9,187.3,627.1,187.6z",
    "M598.4,235.3c-0.5,0.1-1.1,0-1.6,0.1c-7.7,0.7-15.5,1.2-23.2,2c-10.1,1-20.2,2.1-30.3,3c-2.1,0.2-2.7,0.9-3,3   c-0.7,4.2-0.4,8.4-0.7,12.6c-0.6,7.6-1.1,15.3-1.7,22.9c-0.1,1.4,0.4,2.1,1.9,2.2c2.9,0.2,5.4,1.5,7.6,3.4   c3.2,2.7,6.2,5.6,10.7,6.4c3.7,0.7,7.3,0,11,0.6c8.4,1.4,16.6,3.7,24.9,5.2c3,0.6,6.5-2.3,6.6-5.4c0.2-5.4,0.3-10.7,0.7-16.1   c0.8-11.8,1.7-23.6,2.5-34.3C603.7,234.5,603.7,234.5,598.4,235.3z",
    "M625.3,322.2c0-1.7-0.5-2.4-2.3-2.6c-3-0.2-6-0.9-9-1.1c-3.2-0.3-4.9-2.3-4.1-5.4c1.6-6.6,4-13.1,5-19.9    c0.2-1.4,0.2-2.2-1.3-2.6c-3.5-0.9-6.9-1.7-10.4-2.7c-1.8-0.5-2,0.2-2,1.6c-0.1,3,0.5,6-1.7,8.8c-1,1.3-1.2,1.6-2.7,1.3    c-7.6-1.7-15.2-3.4-22.8-4.8c-2.9-0.5-5.7-2-8.6-1.4c-6.8,1.4-12.4,0.1-17.1-5.2c-2.2-2.5-5.1-4.4-8.9-5.1c-1.1,0-1,1.1-0.9,2    c0.4,3.6-1.6,5.3-4.7,6.1c-4.4,1.2-8.8,2.1-13.4,1.9c-2-0.1-3.1,0-2.4,2.7c1.9,8.4,3.5,16.8,4.9,25.3c1.5,9.2,2,18.5,2.8,27.8    c0.2,2.6,0.9,3.2,3.3,3.1c8.5-0.3,17-0.9,25.6-0.7c2.1,0.1,3.9,0.5,5.5,1.8c3.5,2.9,7.1,5.7,11.1,7.7c4.5,2.2,8.1,5,10.7,9.3    c0.8,1.4,2.5,2.1,4.1,1c1.3-1,2.2-0.5,3.4,0.2c4.5,2.6,9,5,13.6,7.5c0.8,0.4,1.9,1.2,2.6,0.9c3-1.1,4.4,1.2,5.5,3    c1.6,2.4,2.7,0.8,4.1,0.1c1.7-0.9,2.1-1.8,1-3.5c-1.4-2.1-2.6-4.3-3.9-6.5c-0.6-1-0.8-1.9,0.3-2.8c2.1-1.8,1.5-3.7,0.2-5.6    c-1.1-1.6-2.2-3.1-3.2-4.7c-0.5-0.8-1.2-1.8,0.5-2.1c3.7-0.7,2.9-3.6,2.3-5.7c-0.8-2.9,0-4.2,2.7-4.7c2.5-0.5,3.4-1.8,3.3-4.4    c-0.2-3.4,1.4-5,4.8-5.4c1.7-0.2,2.1-0.8,2.1-2.4C625.3,330.8,625.2,326.5,625.3,322.2z",
    "M523.3,345.2c-0.6-8.9-1.7-17.8-2.9-26.6c-0.9-7.1-1.9-14.2-3.5-21.1c-0.4-1.6-0.9-3.2-2.7-3.6   c-2.9-0.6-5.8-0.8-8.8-0.5c-6.6,0.6-13.1,1.7-19.7,2.2c-6.6,0.6-13.3,0-19.7-1.8c-1.2-0.3-2.6-0.7-2.3,1.5c0.3,2.2-1.1,2.6-2.7,2.2   c-2.2-0.6-4.4-0.6-6.6-0.6c-1.1,0-2.1,0-3.2,0c-0.9,0.1-2-0.4-2.6,0.7c-0.6,1.2,0.1,2.2,0.8,3.2c1.9,2.6,4.2,4.8,6.4,7   c2.4,2.3,4.5,4.8,6.2,7.6c1.3,2.2,2.6,4.6,0.8,7.1c-2.1,2.8-1.7,5.4,0,8.2c4,6.7,7.8,13.5,11.9,20.1c5.2,8.3,5.3,8.2,1.3,17   c-1,2.1-0.7,2.7,1.7,2.7c11.6-0.3,22.4-2.6,30.3-12.2c3.3-4,7.4-7.4,12.5-8.8C523,348.7,523.4,347.4,523.3,345.2z",
    "M461.3,289.3c-1-0.9-2.4,0.1-3.4,0.7c-1.2,0.6-2.3,1.6-3.4,2.3c-2.7,1.5-5.7,1.4-8.3,0.6   c-2-0.7-0.7-3.6-0.9-5.4c-0.1-1,0-2.1,0-3.2c0-2.1-0.1-4.2,0-6.3c0.1-2-0.3-2.8-2.4-1.7c-9.7,5.4-19.9,5.7-29.8,1.4   c-6.3-2.7-10.2-1.2-15.7,2.1c-2.1,1.3-3.4,3.4-2.9,5.6c3.5,14.4,7.2,27.3,13.2,40.9c1.6,3.5,2.4,3.7,5.7,1.6   c6.6-4,12.1-9.4,15.4-16.3c1.9-3.9,4.4-6.4,7.7-8.7c1.6-1.1,3.1-2.3,4.6-3.3c2.8-1.8,5.2-4.3,8.8-4.5c2.9-0.2,5.9-0.5,8.8-0.7   c1.2-0.1,2.5,0.1,2.8-1.5C461.8,291.7,462.2,290,461.3,289.3z",
    "M407,330.3c-4.8-15-9.5-30.1-14.3-45.2c-0.4-1.2-0.9-2-2.4-2.1c-7.3-0.3-14.4-1.8-21.5-3.3   c-7.4-1.5-14.9-2.9-21.8-6.3c-2.1-1-4-2.1-3.8-4.9c0.1-1.3-0.8-1.4-1.8-1.6c-4.7-1.1-9.5-0.4-14.2-0.8c-8.9-0.7-17.8-0.8-27.3,0.4   c3.5,2.9,4.3,6.2,4.2,10c-0.1,2.2,0.6,4.4,1.2,6.5c0.6,2.3,1.5,4.5,3.9,5.5c1.6,0.7,1.1,1.8,0.9,2.9c-0.8,5.2-1.6,10.4-2.5,15.6   c-0.1,0.7-0.4,1.4,0,2.1c2.5,4.5,2.6,9.5,2.8,14.4c0.1,2.7,0.4,5.8,3.2,7.1c2.1,1,1.4,1.8,0.7,3c-1.7,3.1-2.6,6.3-2.9,9.9   c-0.2,2.8-0.1,5.9-1.8,8.2c-2.5,3.4-1.5,6.5,0.3,9.6c2.8,4.8,4,9.9,3.5,15.5c-0.5,5.4-0.9,10.7-0.5,16.1c0.2,2.2-0.1,3.8-1.7,5.4   c-1.5,1.5-1.5,3.5,0.2,5c2.9,2.7,5.2,5.7,5.6,10.7c8.5-10.6,16.4-20.5,24.3-30.4c0-0.3-0.1-0.6-0.1-0.8c-3.3,1.6-5.5,0.7-6.9-2.3   c-0.5-1-1.4-0.7-2.2-0.5c-0.9,0.2-1.7,0.9-2.6-0.2c1-1.6,3-1.4,4.2-2.5c0.6-0.9,0.3-2.3,1.1-2.9c0,0-0.2,0.3-0.2,0.6   c-0.1,0.4,0.1,0.8,0.3,1.2c0.2,4.9,0.7,5.2,5.9,3.9c-2-5.5-2-5.5,2.7-6.3c-3.2,2.3-1.5,4.2,0.2,5.3c1.7,1,2.1-1.3,3-2.3   c4.2-4.6,7.3-10.5,14.1-12.1c1.5-0.4,2.9-1.2,4.3-1.9c0.5-0.2,1.4-0.2,0.8-1.5c-1.8-3.9-1.6-3.8,2.2-6.3   c12.1-7.8,24.8-14.3,37.3-21.4C406.9,332.9,407.6,332.2,407,330.3z",
    "M475.4,354.7c-5.1-8-10.2-16-15.4-23.9c-1.5-2.3-2-4.1-0.6-6.6c1.5-2.7,2-5.5-0.2-8.4    c-3.7-4.9-7.8-9.3-12.2-13.7c-0.9-0.9-1.7-0.5-2.6-0.3c-5,1.3-8.9,4.2-11.9,8.3c-3.4,4.6-6.5,9.3-10.9,13    c-4.1,3.5-8.5,6.5-12.2,10.4c-1.3,1.3-2.6,1.9-4.4,1.9c-3.6,0-8.8,3.5-10.5,6.9c0.5-0.1,0.9-0.2,1.3-0.3c6.4-2.7,7.8-1.8,9,5.3    c0.5,3.2,0.7,6.6,2.2,9.6c0.2-1.7,0.3-3.4,0.2-5.1c-0.1-2,0.4-3.3,2.8-3.2c1.8,0.1,2.4-1,2.3-2.6c0-1-0.2-2.1,1.3-2.4    c3.8-0.8,5.4-0.1,7,3.4c0.3,0.6,0.7,1.1,0.8,1.7c0.6,2.4,1.5,1.7,2.7,0.5c1.8-1.8,3.9-3.1,6.4-4c6.6-2.2,6.7-2.3,10.3,3.7    c0.9,1.5,1.6,1.6,3,0.8c2.1-1.2,4.3-2.2,7-3.5c0.1,1.9,0.3,3.3,2.4,3.2c1.3,0,1.4,1.2,1.6,2.3c0.4,1.8,0.1,4.2,2.2,4.9    c2.9,1.1,3,3.1,2.9,5.6c-0.1,1.4,0.1,2.8,0,4.1c-0.4,3.1,0.9,4.3,4,3.9c0.5-0.1,1.1,0,1.6,0c8.4,0,8.4,0,11-7.9    C477.3,359.7,477,357.2,475.4,354.7z",
    "M560.3,423c-0.4-0.7-0.8-1.1-1.7-0.8c-2.4,0.9-3.6-0.3-4.4-2.5c-0.9-2.4-2-4.6-3.1-6.9    c-0.3-0.7-0.9-1.5-0.3-2.1c2.6-2.5,0.1-4.1-1.1-5.8c-1.1-1.5-2.5-2.9-3.6-4.4c-0.6-0.8-1.6-1.7-0.8-2.8c1.4-1.7,0.4-2.6-0.7-3.7    c-0.9-1-1.9-2-2.5-3.2c-1.9-3.7-1.3-7,1.2-10.5c1.9-2.7,3.8-0.7,5.6-0.9c0.9-0.1,2.4,0.4,2.1-0.9c-0.7-4.1,3.2-7.2,2.1-11.3    c-0.5-1.9,0.6-2.5,2.5-2.6c7.1-0.2,6.9-0.3,4.2-7c-1.5-3.7-3.5-4.5-7.1-4.4c-8.8,0.2-17.7,1.2-26.5,0.7c-1-0.1-2.6,0.5-2.7-0.9    c-0.3-3.2-1.6-1.7-2.9-0.9c-0.8,0.5-1.6,1-2.4,1.5c-5.2,3.2-9.2,7.6-13.9,11.4c-7.3,5.7-15.7,7.9-24.9,7.4c-0.9,0-2.1-0.5-2.6,0.5    c-0.4,0.9,0.5,1.7,0.9,2.6c0.8,1.6,2.2,1.4,3.5,1c0.9-0.3,2-0.6,2.1,0.5c0.2,2,3.5,3.9,0,6c-1.2,0.8-0.1,1.7,0.6,2.3    c1.9,1.6,3.1,3.7,4.1,5.9c1.3,3,2.6,6,3.9,9c2.4,5.4,4.8,10.8,7.1,16.2c0.4,1,1.9,2.6-0.1,3.6c-1.9,1-1.7,2.4-1.3,4    c0.6,2.9,1.1,5.8,1.9,8.6c0.8,2.9,0.4,6.1,2.3,8.7c1.1,1.5,1.6,2.3,3,0.2c1.6-2.2,2.7-5,5.2-6.3c3.3-1.7,3.1-3.6,1.3-6.1    c-0.5-0.7-0.9-1.4-1.3-2.1c-0.4-0.7-0.3-1.5,0.6-1.4c3.8,0.5,8.3-2,11.4,2.4c0.5,0.7,1.2,0.8,2,0.4c4-1.8,8.2-1.3,12-0.9    c2.1-0.4,4.4,0.8,5.5-0.6c1.2-1.5,2.5-1.6,3.8-1.2c1.8,0.6,1,2.4,1,3.6c-0.1,2.1,0.8,2.9,2.8,2.6c2.6-0.4,5.2-0.9,7.8-1.2    C562.4,430.1,563.4,428.1,560.3,423z",
    "M314.6,198.1c0-1.9-0.8-2.6-2.7-2.6c-2.2,0-4.4,0.5-6.6,0.6c-10.5,0.5-21,1.3-31.5,1.9   c-11.3,0.6-22.7,0.6-33.7-3.1c-9-3.1-18.5-2.3-27.7-3.7c-14.1-2.2-27.5-6.8-39.9-13.5c-17.6-9.4-35-18.9-53.5-26.6   c-12.5-5.2-25.1-7.6-38.4-3c-5.9,2-12.1,3-18.3,3c-5.8,0-11.7-0.7-18-2.4c3.3,3.7,6.3,4.9,14,7c8.7,2.4,16.9,5.6,22.1,13.6   c5.5,8.4,11.9,15.8,19.7,22.1c3.9,3.1,7.9,6,12.7,7.6c1.6,0.5,3.2-0.6,4-0.1c1.7,1.2,3.2,1.4,5,0.7c0.6-0.2,0.9,0.2,1.3,0.7   c3.8,4.7,9.2,6.5,14.7,8.1c12.8,3.8,25.7,6.8,37.6,13.6c13.7,7.9,28.1,14.6,42.3,21.6c6.8,3.4,13.7,6.5,20.9,8.9   c7.4,2.5,15.1,3.4,22.8,5c11.3,2.3,22.7,4.4,34.3,4.1c1.2,0,2.5,0.4,3.1-1.4c1.2-4,3.6-7.4,6.2-10.6c4.4-5.4,4.8-12.3,6.6-18.5   c1.2-4,2.1-8.4,2.6-12.6C315.2,211.7,314.5,204.8,314.6,198.1z",
    "M311.5,191.1c-4.6-10.7-9-21.3-19.3-28.1c-5-3.3-9.5-7.4-10.9-13.8c-0.9-4,0.3-7.9,0.7-11.9   c0.4-4.3,1.7-8.5,0.2-12.8c-2.7-7.9-4.9-15.9-8.5-23.5c-0.6-1.2-1-2.1,0.1-3.4c3.3-4-0.4-8.9,1.3-13.1c0.1-0.1-0.5-0.6-0.9-0.8   c-1.7-1.1-2-2.7-2.2-4.6c-0.3-2.3-0.3-4.6-0.6-6.9c-0.2-1.4,0.2-3.7-1.7-4c-7.4-1.4-9.2-7.7-12-13.2c-0.5-0.9-0.2-1.9,0.5-2.6   c0.8-0.8,1.9-1.5,2.4-2.5c1.5-2.6,5-3.9,5.1-7.3c0.2-9.5,4.3-16.9,11.8-22.6c0.5-0.4,1.2-0.8,1.3-1.3c0.8-5.4,3.3-10.8,0.1-16.2   c-0.4-0.6-0.5-1.5-1.4-1.5c-1.1,0-1,0.9-1,1.6c-0.1,1.3-0.7,1.3-1.7,0.9c-0.9-0.3-1.8-0.5-2.7-0.9C270.3,2,269,1.8,270,4.4   c0.8,2.1,0.2,3.2-2.2,2.8c-0.5-0.1-1.1,0-1.6,0c-0.7,0-1.6-0.1-1.9,0.7c-0.2,0.7,0.5,1.1,0.9,1.5c1.3,1.3,2.5,2.6,3.8,3.8   c2.1,1.8,0.4,3.8,0.3,5.6c-0.1,1.6-1.9,1-2.9,1c-2.1-0.1-2.8,0.8-2.6,2.8c0.3,3.2-0.7,6.2-1.8,9.2c-0.4,1.1-0.8,1.9-2.1,1.9   c-3.8,0.1-5.1-1-5.7-4.8c-0.2-1.1-0.5-2.3-0.5-3.4c0-1.8-0.8-1.8-2.2-1.4c-0.9,0.3-2,1.4-3-0.3c-2-3.4-4-3.8-7.3-1.5   c-0.8,0.6-1.3,1.2-2.5,0.8c-2.1-0.8-2.4,0.6-2.2,2.2c0.4,2.9,0.8,5.8,1.3,8.7c0.2,1.2,0.9,1.4,2.1,1.2c2.7-0.5,5.1,0.4,7.4,1.9   c2.6,1.7,4.4,4.3,7.2,5.6c1.3,0.7,1.1,1.9,0.6,3.1c-1.6,4-4.8,6-8.5,7.5c-2.6,1-5.3,1.8-8,3.7c2.9,0.1,5.3,0.7,7.8,0.9   c8,0.6,8,0.7,8.5,8.7c0.1,1.4,0.1,3,1.8,3.3c3.1,0.5,3.5,2.4,3.3,5.1c-0.1,1.5-0.1,3,0,4.4c0.1,1.6-0.5,2.3-2.1,2.8   c-4.7,1.4-9.3,1.1-14,0c-1.5-0.3-3.3-0.7-3.4,1.4c-0.2,3.9-1.9,4.5-5.3,3.5c-1.7-0.5-4.1-0.7-3.7,2.5c0.2,1.5-0.6,1.4-1.7,1.3   c-2.1-0.3-3.3-1.6-4.4-3.2c-1.8-2.5-7.4-2.9-7.6-0.6c-0.4,3.8-2.4,4.7-5.7,4.8c-1.5,0.1-3.2-0.1-4.7,0.4c-2.7,0.9-3.3-0.2-3.1-2.6   c0.1-1.4-4.3-5.3-6-5.1c-1.9,0.2-1.6,2.3-1.9,3.5c-0.7,3-2.1,3.7-5,2.6c-1.5-0.6-3.8-1.1-4.6,0.6c-1,2.2-2.2,1.3-3.6,1   c-1.6-0.3-3.6,0.8-4.7-0.8c-1-1.5-2.1-1.2-3.3-1c-3.9,0.5-7.9,1.1-11.8,1.7c-1.4,0.2-2.1-0.2-2.2-1.8c-0.2-4.2,0-8.1,5.3-9.8   c-4.9-2.1-4.9-2.1-6.4-7c-0.9,0.1-0.8,0.9-0.9,1.4c-0.6,3-1.2,6-1.8,9c-0.4,1.8-1,3.2-3.4,2.2c-2.5-1.1-6.1-0.1-7.4-3.7   c-0.1-0.3-1-0.3-1.5-0.4c-0.8,0-1.3-0.3-1.6-1.2c-0.9-2.8-2.7-5-4.3-7.3c-3.6-5.4-3.1-7.8,2.4-11.1c1.1-0.7,2.3-1.1,0.9-2.8   c-1.6-1.9-1.2-3.7,1-5c1.7-1,3.3-2.1,4.9-3.1c-1.3-1.7-4.3-0.5-4.3-1.7c-0.1-3.3-3.6-5.7-1.9-9.3c0.3-0.6,0.5-1.9-0.4-1.8   c-1.5,0.2-3.6-0.5-4.4,1.6c-1,2.7-2.6,1.8-4.3,0.9c-1-0.6-1.6-1.9-3.3-2.2c1.6,3.1,2.9,5.8,4.2,8.6c0.3,0.7,1.1,1.5,0.4,2.3   c-0.8,0.8-1.6,0-2.3-0.3c-2.2-0.9-4.1-2.4-6.7-2.9c0.6,3.8,1.2,7.3,1.7,10.8c0.1,0.8,0.5,2-1,1.6c-2.2-0.6-4.4-0.3-6.6-0.6   c-0.9-0.1-2.1-0.5-2-1.7c0.4-4.4-1.9-2.7-3.8-1.7c-1.7,0.9-2.2,0.6-2.7-1.4c-0.9-4.1-0.1-7.5,2.4-10.9c2-2.6,1.3-3.5-1.8-3.9   c-1.2-0.1-1.6,0.4-2,1.4c-0.9,2.1-1.8,4.3-3.1,6.2c-1.4,2.1-3.1,3.2-5.9,1.5c-1.6-1-2.8-2.1-3.8-3.8c-0.9,2.1,0.2,2.8,1.3,4   c2.2,2.4,4,5.5,6.3,7.6c4.9,4.3,5.8,8.9,1.4,13.1c0.2,0.5,0.7,0.3,1.1,0.4c4,0.8,8.5-0.1,11.7,3.5c1.5,1.8,3.5,3.1,5.9,3.5   c0.6,0.1,1.2,0.5,1,1c-1.1,2.7,0.5,3.3,2.6,3.6c1,0.2,1.3,1,1.3,1.9c-0.2,3.6,0.4,6.8,2.6,9.8c1.5,2.1,0.6,3.2-1.9,3.4   c-1.7,0.1-3.4,0-4.8-1.2c-0.6-0.5-1.5-0.9-1.6,0.3c-0.2,2.9-2.2,2.9-4.3,2.8c-1.6-0.1-3.2,0.1-4.8,0c-1.7-0.1-2.7,0.5-2.4,2.3   c0.3,2.3-0.9,2.9-2.9,2.8c-2.7-0.1-5.8-0.6-8,1.1c-4,3.2-7.5,1.9-11-0.5c-2.3-1.6-4.5-2.2-7-1.1c-1.5,0.7-2,0.1-2.2-1.5   c-0.4-2.5-1.1-4.9-1.7-7.4c-0.2-0.9-0.4-1.8-1.6-1.1c-1.5,0.9-3.5,1.6-4.4,2.9c-1,1.6-1.9,1.2-3,0.7c-3.7-1.6-6.6-4.1-8.2-7.9   c-1.1-2.7-3.1-0.8-4.6-0.5c-2.1,0.3-0.8,1.8-0.4,2.7c0.9,1.8,1.6,3.6,2.1,5.6c0.4,1.6-0.8,3.2-1.6,2.8c-4.1-1.8-6.9,0.5-9.8,2.7   c-0.3,0.2-0.8,0.1-1.2,0.1c-2.2-0.3-4.3-0.9-6.5-1c-2.7-0.1-4.9-0.8-6.6-3c-1.5-1.9-1.7,0.4-2.4,1c-0.4-0.5-0.7-0.9-0.9-1.2   c-1.9-2.1-4.9-3.7-3.4-7.4c0.2-0.6-0.2-1-0.8-1c-2.1,0-4.3-0.3-6.3,0.2c-1.4,0.3-0.9,2.4-1.6,3.5c-0.1,0.1-0.3,0.1-0.5,0.2   C16.4,91.7,2.1,90.3,0,88.7c3.3,8.7,6.3,14.9,8.5,28.2c0.3,1.9,1,9.4,6.5,15.8c4,4.6,9.6,7.1,15.2,9.5c3.1,1.3,6.3,2.3,9.5,3.4   c2.8,1,6.3-0.4,8.7,2.2c0.3,0.3,1.2,0.1,1.9,0.1c2.7,0,5.6-0.4,8.2,0.1c9.3,1.8,17.9-0.6,26.7-2.9c7.2-1.9,14.5-2.5,21.8-0.5   c19.7,5.4,37.7,14.8,55.3,24.7c12.5,7,25.3,13,39,17c5.4,1.6,11,3,16.6,3.4c8.5,0.7,16.9,1.1,25.2,3.7c6.7,2.1,13.8,3.3,20.9,2.6   c5.7-0.5,11.3-0.8,17-1c9.6-0.5,19.1-1.7,28.7-1.4C311.5,193.6,312.4,193.2,311.5,191.1z"
  ];

  return (
    <div className="react-tehran-map" style={{ width: width ? width + 'px' : '500px' }}>
      <svg x="0px" y="0px" viewBox="0 0 760.7 442.8">
        <g>
          {
            areas.map((value, index) => (
              <path
                className={`react-tehran-map__area ${(index+1) === selectedArea ? 'react-tehran-map__area--selected' : ''}`}
                d={value}
                onClick={() => setSelectedArea(index+1)}
                key={`path-${index}`}
              />
            ))
          }
        </g>
        <g>
          <text className="react-tehran-map__code" transform="matrix(1 0 0 1 560.9804 44.2601)">۱</text>
          <text className="react-tehran-map__code" transform="matrix(1 0 0 1 638.7427 130.9976)">۴</text>
          <text className="react-tehran-map__code" transform="matrix(1 0 0 1 501.7093 112.1302)">۳</text>
          <text className="react-tehran-map__code" transform="matrix(1 0 0 1 411.8559 128.7379)">۲</text>
          <text className="react-tehran-map__code" transform="matrix(1 0 0 1 328.1893 128.7379)">۵</text>
          <text className="react-tehran-map__code" transform="matrix(1 0 0 1 201.9289 138.7379)">۲۲</text>
          <text className="react-tehran-map__code" transform="matrix(1 0 0 1 201.9291 217.1958)">۲۱</text>
          <text className="react-tehran-map__code" transform="matrix(1 0 0 1 358.7156 255.9853)">۹</text>
          <text className="react-tehran-map__code" transform="matrix(1 0 0 1 345.049 323.1131)">۱۸</text>
          <text className="react-tehran-map__code" transform="matrix(1 0 0 1 420.5585 255.9854)">۱۰</text>
          <text className="react-tehran-map__code" transform="matrix(1 0 0 1 458.69 255.9854)">۱۱</text>
          <text className="react-tehran-map__code" transform="matrix(1 0 0 1 503.74 255.9854)">۱۲</text>
          <text className="react-tehran-map__code" transform="matrix(1 0 0 1 563.3836 269.354)">۱۴</text>
          <text className="react-tehran-map__code" transform="matrix(1 0 0 1 469.8703 179.4464)">۶</text>
          <text className="react-tehran-map__code" transform="matrix(1 0 0 1 526.9875 187.0692)">۷</text>
          <text className="react-tehran-map__code" transform="matrix(1 0 0 1 583.3208 182.9851)">۸</text>
          <text className="react-tehran-map__code" transform="matrix(1 0 0 1 559.3211 329.1742)">۱۵</text>
          <text className="react-tehran-map__code" transform="matrix(1 0 0 1 485.8352 333.5786)">۱۶</text>
          <text className="react-tehran-map__code" transform="matrix(1 0 0 1 410.5491 304.1146)">۱۷</text>
          <text className="react-tehran-map__code" transform="matrix(1 0 0 1 433.9201 331.8334)">۱۹</text>
          <text className="react-tehran-map__code" transform="matrix(1 0 0 1 510.363 396.9666)">۲۰</text>
          <text className="react-tehran-map__code" transform="matrix(1 0 0 1 576.2173 224.657)">۱۳</text>
        </g>
      </svg>
    </div>
  )
}

export default TehranMap;