import { faTrash, faSignOutAlt,faEdit,faSync,faFeatherAlt } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

const Icons = () => {
return library.add(faTrash, faSignOutAlt, faEdit,faSync, faFeatherAlt);
};

export default Icons;