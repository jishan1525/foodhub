function filterData(searchText, resturants) {
    if (!searchText) {
      return resturants;
    }
    return resturants.filter((restaurant) =>
      restaurant.info.name.toLowerCase().includes(searchText.toLowerCase())
    );
  }

export default filterData;