import my_controller from '../controllers/my_controller';
import my_order_controller from '../controllers/mine_controllers/my_order_controller';
import my_coupon_controller from '../controllers/mine_controllers/my_coupon_controller' ;
import my_ticket_controller from '../controllers/mine_controllers/my_ticket_controller';
import my_attention_controller from '../controllers/mine_controllers/my_attention_controller';
import my_address_controller from '../controllers/mine_controllers/my_address_controller';
import my_buyers_controller from '../controllers/mine_controllers/my_buyers_controller';
import my_Certification_controller from '../controllers/mine_controllers/my_Certification_controller';
import my_feedback_controller from '../controllers/mine_controllers/my_feedback_controller';
import my_register from '../controllers/mine_controllers/register_controller';
import my_login from '../controllers/mine_controllers/login_controller';
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


