
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { getRelatedPosts } from '@/lib/linking';

export default async function InternalLinks({ currentId }: { currentId: string }) {
  const posts = await getRelatedPosts(currentId);

  if (!posts || posts.length === 0) {
    return null;
  }
  
  return (
    <Card className="mt-12 not-prose">
      <CardHeader>
        <CardTitle>Related Articles</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-3">
          {posts.map((post) => (
            <li key={post.id}>
              <Link
                href={`/tv/devices/${post.id}`}
                title={post.title}
                className="flex items-center justify-between text-primary hover:underline group"
              >
                <span>{post.title}</span>
                <ArrowRight className="h-4 w-4 opacity-0 transition-opacity group-hover:opacity-100" />
              </Link>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
