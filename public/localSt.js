export const getItemsFromLS = () => { 
    const stored = localStorage.getItem('booked');
    return stored ? JSON.parse(stored) : [];
};
export const deleteItemsFromLS = (id) => { 
    const items = getItemsFromLS(); 
    const filtered = items.filter(item => item !== id);
    localStorage.setItem('booked', JSON.stringify(filtered));
    return filtered;
};

export const addItemToLS = (id) => {
     const items = getItemsFromLS(); 
     if(items.includes(id)) { 
        alert("Already Added"); 
     } else { items.push(id);
     localStorage.setItem('booked', JSON.stringify(items));
    }
};