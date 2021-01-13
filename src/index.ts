import { User } from './User';
import { Comp } from './Company';
import { CustomMap } from './customMap';


const user = new User();
const customMap = new CustomMap('map');
const company = new Comp;

customMap.addMarker(user);
customMap.addMarker(company);

