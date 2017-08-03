import { getIntialData } from '../services/data';
import { success_data } from '../actions/index';
import axios from 'axios';

export const fetchdata = store => next => action => {
        
    // console.log(action.type);    

    // next(action);

    switch(action.type){
        case 'INITIAL_DATA':

            let url = 'http://localhost:3000/item1';
            let data = axios.get(url)
                .then(res => {
                // return store.dispatch(success_data(res.data));
                return res.data;
                }).catch(err => {
                console.log(err);
            });
            Promise.resolve(data)
                .then( re => {
                    return store.dispatch(success_data(re));
                }).catch(err => {
                    console.log(err);
                });
        
        default:
            return next({...action});
    }

    // if(action === 'INITIAL_STATE'){
    //     console.log('yooo');    

    //     let initial_data = getIntialData();
    //     Promise.resolve(initial_data).then(data => {
    //         // store.dispatch(data);
    //         console.log(data.data);
    //         store.dispatch(success_data(data.data));

    //     next();
    //     }).catch(err => {
    //         console.log(err);
    //     });
        
    // }
}