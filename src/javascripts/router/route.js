
import home_controller from '../controllers/home_controllers/home_main_controller';
import perform_controller from '../controllers/perform_controller/perform_controller';
import category_controller from '../controllers/category_controller/category_controller';
import citySite_controller from '../controllers/citySite_controller/citySite_controller';
const routes = {
    '#/home': home_controller,
    '#/category': category_controller,
    '#/perform': perform_controller,
    '#/location':citySite_controller
}

export { routes } ;


