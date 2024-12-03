import toast from "react-hot-toast";


// get all coffees from local storage
const getAllFavorites = () => {
    const all = localStorage.getItem('favorites');
    
    if(all) {
        const favorites = JSON.parse(all);
        console.log(favorites);
        return favorites;
    }else{
        return [];
    }
}


// add a coffee to local storage
const addFavorite = (coffee) => {
    const favorites = getAllFavorites();

    const isExist = favorites.find(item => item.id == coffee.id);

    if(isExist) return toast.error('This item already exists!');

    favorites.push(coffee);
    console.log(favorites);

    localStorage.setItem('favorites', JSON.stringify(favorites));
    toast.success('Successfully created!');

}



// remove a coffee from local storage


export { addFavorite, getAllFavorites };