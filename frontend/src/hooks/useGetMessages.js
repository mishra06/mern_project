import  { useEffect, useState } from 'react'
import axios from "axios";
import {useSelector,useDispatch} from "react-redux";
import { setMessages } from '../redux/messageSlice';
// import { BASE_URL } from '..';
import { MSG } from '../utils/Constant';

const useGetMessages = () => {
    const [loading, setLoading] = useState(false);
    const {selectedUser} = useSelector(store=>store.user);
    const dispatch = useDispatch();
    useEffect(() => {
        const fetchMessages = async () => {
            setLoading(true);
            try {
                axios.defaults.withCredentials = true;
                const res = await axios.get(`${MSG}/${selectedUser?._id}`);
                dispatch(setMessages(res.data))
            } catch (error) {
                console.log(error);
            } finally {
				setLoading(false);
			}
        }
        fetchMessages();
    }, [selectedUser?._id,setMessages]);

    return {loading};
}

export default useGetMessages