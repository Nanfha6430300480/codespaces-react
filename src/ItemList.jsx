import { useEffect, useState } from 'react';

function Item({ name, isPacked = false }) {
    return (
        <li>
            {name} {isPacked && '✓'}
        </li>
    );
}

export default function ItemList() {
    const [filter, setFilter] = useState('');
    useEffect(() => {
        console.log("this component is loaded!");
        return () => {alert("component loaded")};
    },[])
    const items = [
        { name: "Sunglass", isPacked: false },
        { name: "Sunblock", isPacked: true },
        { name: "Swimming suit", isPacked: true },
        { name: "Powerbank", isPacked: false },
    ];

    const filterList = items.filter(i => i.name.toLowerCase().includes(filter.toLowerCase()));
    const ItemsList = filterList.map(i => (
        <Item key={i.name} name={i.name} isPacked={i.isPacked} />
    ));

    return (
        <div>
            <input
                type="text"
                value={filter}
                onChange={e => setFilter(e.target.value)}
            />
            <ul>
                {ItemsList}
            </ul>
        </div>
    );
}
