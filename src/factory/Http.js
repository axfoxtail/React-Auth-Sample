import Const from '../utils/Constants';
import axios from 'axios';

const GET = async (path) => {
    try {
        const config = {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Authorization': 'Bearer ' + localStorage.getItem(Const.TOKEN),
            }
        }
        const res = await axios.get(path, config);
        return res.data;
    } catch (err) {
        throw err;
    }
    
}

const POST = async (path, data) => {
    try {
        const config = {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Authorization': 'Bearer ' + localStorage.getItem(Const.TOKEN),
            }
        }
        const res = await axios.post(path, data, config);
        return res.data;
    } catch (err) {
        throw err;
    }
    
}

const PUT = async (path, data) => {
  try {
      const config = {
          headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
              'Access-Control-Allow-Origin': '*',
              'Authorization': 'Bearer ' + localStorage.getItem(Const.TOKEN),
          }
      }
      const res = await axios.put(path, data, config);
      return res.data;
  } catch (err) {
      throw err;
  }
}

const DELETE = async (path, body) => {
  try {
      const headers = {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Authorization': 'Bearer ' + localStorage.getItem(Const.TOKEN),
      }
      const _body = JSON.stringify(body);
      const res = await fetch(path, {method: 'DELETE', headers: headers, body: _body});
      return res.json();
  } catch (err) {
      throw err;
  }
}

export {
    GET,
    POST,
    PUT,
    DELETE
};

const Http = {
    GET,
    POST,
    PUT,
    DELETE
}

export default Http;