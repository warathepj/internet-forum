'use client'
import { useParams, useSearchParams } from 'next/navigation';
import { useMessages } from '../../../context/MessageContext';

export default function AnnounceDetail() {
  const params = useParams();
  const { messages } = useMessages();
  const searchParams = useSearchParams();
  const messageId = params.id;
  const message = messages.find(msg => msg.id === messageId);
//   const messageContent = decodeURIComponent(searchParams.get('content')); 

  return (
    <>
      <h1>Announce Detail</h1>
      <p>Message ID: {messageId}</p>
      {message && <p>Message content: {message.content}</p>} 
    </>
  );
}
