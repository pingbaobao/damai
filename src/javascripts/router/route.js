const my_controller = require('../controllers/my_controller');
const my_order_controller = require('../controllers/mine_controllers/my_order_controller');
const my_coupon_controller = require('../controllers/mine_controllers/my_coupon_controller');
const my_ticket_controller = require('../controllers/mine_controllers/my_ticket_controller');
const my_attention_controller = require('../controllers/mine_controllers/my_attention_controller');
const my_address_controller = require('../controllers/mine_controllers/my_address_controller');
const my_buyers_controller = require('../controllers/mine_controllers/my_buyers_controller');
const my_Certification_controller = require('../controllers/mine_controllers/my_Certification_controller');
const my_feedback_controller = require('../controllers/mine_controllers/my_feedback_controller');
const my_register = require('../controllers/mine_controllers/register_controller');
const my_login = require('../controllers/mine_controllers/login_controller');
const routes = {
    '#/my': my_controller,
    '#/order': my_order_controller, 
    '#/coupon':my_coupon_controller,
    '#/ticket':my_ticket_controller,
    '#/attention':my_attention_controller,
    '#/address': my_address_controller, 
    '#/buyers':my_buyers_controller,
    '#/Certification':my_Certification_controller,
    '#/feedback':my_feedback_controller,
    '#/register':my_register,
    '#/login':my_login
}

export { routes } ;  


