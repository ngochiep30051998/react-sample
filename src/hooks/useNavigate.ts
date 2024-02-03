import { useNavigate, useParams } from "react-router-dom";

export default function useAppNavigate() {
    const rootNavigate = useNavigate();
    const { appId } = useParams();
    function navigate(url: string) {
        if(appId){
            return rootNavigate(`/${appId}${url}`)
        } else {
            return rootNavigate(`/`)
        }
    }

    return { navigate };
}