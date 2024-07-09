import React from 'react'
import Message from './Message'
import useGetMessages from '../hooks/useGetMessages';
import { useSelector } from "react-redux";
import useGetRealTimeMessage from '../hooks/useGetRealTimeMessage';
import MessageSkeleton from '../shimmerUi/MessageSkeleton';

const Messages = () => { 

//     useGetMessages();
//     useGetRealTimeMessage();
//     const { messages } = useSelector(store => store.message);

//     if (messages.length === 0) {
//         return (
//             <div className='px-4 flex-1 overflow-auto'>
//                 <p className='text-red-500 capitalize'>No conversation available</p>
//             </div>
//         );
//     }

//     return (
//         <div className='px-4 flex-1 overflow-auto'>
//             {
//                messages && messages?.map((message) => {
//                     return (
//                         <Message key={message._id} message={message} />
//                     )
//                 })
//             }

//         </div>


//     )

    const { loading } = useGetMessages();
    useGetRealTimeMessage();
    const { messages } = useSelector(store => store.message);

    return (
        <div className='px-4 flex-1 overflow-auto'>
            {loading && [...Array(3)].map((_, idx) => <MessageSkeleton key={idx} />)}

            {!loading && messages && messages.length > 0 && 
                messages.map((message) => {
                    return (
                        <Message key={message._id} message={message} />
                    );
                })
            }

            {!loading && messages && messages.length === 0 && (
                <p className='text-red-500 capitalize text-center'>
                    Send a message to start the conversation
                </p>
            )}
        </div>
    );
}

export default Messages