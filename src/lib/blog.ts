import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const contentDirectory = path.join(process.cwd(), 'src/content/blog');

export type BlogPostMetadata = {
  title: string;
  date: string;
  excerpt: string;
  author: string;
  slug: string;
};

export type BlogPost = {
  metadata: BlogPostMetadata;
  content: string;
};

// Ensure directory exists
if (!fs.existsSync(contentDirectory)) {
  fs.mkdirSync(contentDirectory, { recursive: true });
}

export function getAllPosts(): BlogPostMetadata[] {
  // Get file names under /content
  const fileNames = fs.readdirSync(contentDirectory);
  
  const allPostsData = fileNames
    .filter(fileName => fileName.endsWith('.md') || fileName.endsWith('.mdx'))
    .map(fileName => {
      // Remove ".mdx" or ".md" from file name to get slug
      const slug = fileName.replace(/\.mdx?$/, '');

      // Read markdown file as string
      const fullPath = path.join(contentDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');

      // Use gray-matter to parse the post metadata section
      const matterResult = matter(fileContents);

      // Combine the data with the id
      return {
        slug,
        ...(matterResult.data as Omit<BlogPostMetadata, 'slug'>)
      };
    });

  // Sort posts by date
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  try {
    // Try .mdx first, then .md
    let fullPath = path.join(contentDirectory, `${slug}.mdx`);
    if (!fs.existsSync(fullPath)) {
      fullPath = path.join(contentDirectory, `${slug}.md`);
    }

    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    return {
      metadata: {
        slug,
        ...(matterResult.data as Omit<BlogPostMetadata, 'slug'>)
      },
      content: matterResult.content
    };
  } catch (error) {
    return undefined;
  }
}
