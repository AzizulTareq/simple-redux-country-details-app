const countriesReducers = () => {
    return [
        { name: 'Bangladesh', population: '163'},
        { name: 'Canada', population: '37.59'},
        { name: 'Italy', population: '60.36'},
        { name: 'Saudi Arabia', population: '34.27'},
        { name: 'New Zealand', population: '4.917'}
    ]
}

const selectedCountryReducer = (selectedCountry=null, action) => {
    if(action.type === 'COUNTRY_SELECTED') {
        return action.payload;
    }

    return selectedCountry;
}