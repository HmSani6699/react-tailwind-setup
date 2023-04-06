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
            const dataProssesing = loadData.map(phone => {
                const slug = phone.slug.split('-');
                const price = parseInt(slug[1]);
                const newPhone = {
                    brand: phone.brand,
                    name: phone.phone_name,
                    image: phone.image,
                    slug: slug,
                    price: price
                }

            })
        })
    // console.log(phones);
    return (
        <div>
        </div>
    );
};

export default Phone;