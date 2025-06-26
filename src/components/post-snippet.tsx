type PostSnippetProps = {
  title: string;
  description: string;
  date: string;
  author: string;
  imageUrl: string;
};

export function PostSnippet({
  author,
  date,
  description,
  imageUrl,
  title,
}: PostSnippetProps) {
  return (
    <div className="post-snippet">
      <img src={imageUrl} alt={title} className="post-image" />
      <h2 className="post-title">{title}</h2>
      <p className="post-description">{description}</p>
      <div className="post-meta">
        <span className="post-date">{date}</span>
        <span className="post-author">{author}</span>
      </div>
    </div>
  );
}
