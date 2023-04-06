import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Phone = () => {
    const [phones, setPhones] = useState([]);
    // useEffect(() => {
    //     fetch('https://openapi.programming-hero.com/api/phones?search=iphone')
    //         .then(res => res.json())
    //         .then(data => console.log(data))
    // }, [])


    axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
        .then(data => {
            const loadData = data.data.data;
            const prosseing = loadData.map(phone => {
                const slug = phone.slug.split('-');
                const price = slug[1];
                const newPhone = {
                }
            })
        })
    return (
        <div>

        </div>
    );
};

export default Phone;