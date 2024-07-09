import { useEffect } from "react";
import {useSelector, useDispatch} from "react-redux";
import { setMessages } from "../redux/messageSlice";
import tunes from "../assets/sounds/1.wav";

const useGetRealTimeMessage = () => {
    const {socket} = useSelector(store=>store.socket);
    const {messages} = useSelector(store=>store.message);
    const dispatch = useDispatch();
    useEffect(()=>{
        socket?.on("newMessage", (newMessage)=>{
            const sound = new Audio(tunes);
            sound.play();
            dispatch(setMessages([...messages, newMessage]));
        });
        return () => socket?.off("newMessage");
    },[setMessages, messages]);
};
export default useGetRealTimeMessage;