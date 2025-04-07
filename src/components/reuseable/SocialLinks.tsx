import { url } from "inspector";

// ========================================================
type SocialLinksProps = { className?: string };
// ========================================================

const links = [
	{ id: 2, icon: "uil uil-facebook-f", url: "https://www.facebook.com/share/1K7ijGpjcK/" },
	{ id: 4, icon: "uil uil-instagram", url: "https://www.instagram.com/evians_intl?igsh=c20yeGN5cnBsMTNu" },
	{ id: 5, icon: "uil uil-youtube", url: "https://youtube.com/@eviansdigital?si=jdIltXXcRTHHK6YD" },
	{
		id: 6,
		icon: "uil uil-linkedin-alt",
		url: "https://www.linkedin.com/in/eviansintl-limited-837a28346?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
	},
	{ id: 7, icon: "uil uil-tumblr", url: "https://www.tumblr.com/eviansintl?source=share" },
	{ id: 8, icon: "uil uil-telegram", url: "https://t.me/eviansintl" },
	{ id: 9, icon: "uil uil-reddit-alien-alt", url: "https://www.reddit.com/u/EVIANSINTL/s/m65aBTRBFY" },
];

export default function SocialLinks({ className = "nav social social-white mt-4" }: SocialLinksProps) {
  return (
    <nav className={className}>
      {links.map(({ id, icon, url }) => (
        <a href={url} key={id} target="_blank" rel="noreferrer">
          <i style={{margin:"0 10px"}} className={icon} />
        </a>
      ))}
    </nav>
  );
}
