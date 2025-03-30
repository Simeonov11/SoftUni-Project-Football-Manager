import { useNavigate } from "react-router";

export default function useIfOwner() {
    const navigate = useNavigate();

    const checkIfOwner = (userId, collectionData) => {
        if (!collectionData || userId !== collectionData._ownerId) {
            navigate("/");
            return false; // Not an owner
        }
        return true; // Is the owner
    };
    

    return {
        checkIfOwner,
    };
}