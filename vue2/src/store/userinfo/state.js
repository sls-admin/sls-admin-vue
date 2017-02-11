import {
    store
} from '../../util/';


module.exports = {
    userinfo: store.get('userinfo') || {}
};