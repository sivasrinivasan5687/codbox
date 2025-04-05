import Link from "next/link";
import dayjs from "dayjs";
// LOCAL CUSTOM COMPONENTS
import NextLink from "../links/NextLink";

// ======================================================
interface BlogCard5Props {
  image: string;
  title: string;
  author: string;
  category: string;
  comments: number;
  createdAt: string;
}
// ======================================================

export default function BlogCard5(props: BlogCard5Props) {
  const { image, title, author, category, createdAt, comments } = props;

  return (
    <figure className="overlay caption caption-overlay rounded mb-0">
      <Link href="#">
        <img src={image} alt="" />
        <span className="bg" />
      </Link>

      <figcaption>
        <span className="badge badge-lg bg-white text-uppercase mb-3">{category}</span>
        <h2 className="post-title h3 mt-1 mb-3">
          <NextLink title={title} href="#" />
        </h2>

        <ul className="post-meta text-white mb-0">
          <li className="post-date">
            <i className="uil uil-calendar-alt" />
            <span>{dayjs(createdAt).format("DD MMM YYYY")}</span>
          </li>

          <li className="post-author">
            <Link href="#">
              <i className="uil uil-user" />
              <span>By {author}</span>
            </Link>
          </li>

          <li className="post-comments">
            <Link href="#">
              <i className="uil uil-comment" />
              {comments} <span>Comments</span>
            </Link>
          </li>
        </ul>
      </figcaption>
    </figure>
  );
}
