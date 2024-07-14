'use client'
import { useParams, useSearchParams } from 'next/navigation';
import { useTopics } from '../../../context/TopicsContext';
import Announce from '../../components/Announce';
import Trend from '../../components/Trend';

export default function TopicPage() {
  const params = useParams();
  const { topics } = useTopics();
  const searchParams = useSearchParams();
  const topicId = params.id;
  const topic = topics.find(t => t === topicId);
  console.log("topic:", topic);
//   const messageContent = decodeURIComponent(searchParams.get('content')); 

  return (
    <>
      <h1>Topic Page</h1>
      <p>topic ID: {topicId}</p>
      {topic && <p>topic content: {topic}</p>} 

      <Announce />
      <Trend />
    </>
  );
}
