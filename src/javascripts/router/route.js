import home_controller from'../controllers/home_controller';
import showinfo_controller from'../controllers/showinfo_controller';
import category_controller from'../controllers/category_controller';
import mine_controller from'../controllers/mine_controller';
import search_controller from'../controllers/search_controller';
import sigup_controller from'../controllers/sigup_controller';
import login_controller from'../controllers/login_controller';

const routes={
    "#home":home_controller,
    "#showinfo":showinfo_controller,
    "#category":category_controller,
    "#mine":mine_controller,
    "#search":search_controller,
    "#sigup":sigup_controller,
    "#login":login_controller
}
export { routes };