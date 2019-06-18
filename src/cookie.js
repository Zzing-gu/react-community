import { Cookies } from 'react-cookie';

const cookies = new Cookies();

//const config = { headers: { Authorization: `Token ${cookies.get('token')}`} , xsrfCookieName:'csrftoken', xsrfHeaderName:'X-CSRFToken' }


export {cookies};