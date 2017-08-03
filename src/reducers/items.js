const initialState = [

];

const items = (state = initialState, action) => {

    switch(action.type){

        case 'SUCCESS_DATA':

            const items = action.data.map(item => {
                console.log(item);
                return item;
            });

            return state.concat(items);

        default:
            return state;

    }

}

export default items;