import Link from 'next/link';

const Links = () => {
  const links = [
    { title: "About", path: "/about" },
    { title: "Contact", path: "/contact" },
    { title: "Blog", path: "/posts" },
  ];

  return (
    <div>
      {links.map((link) => (
        <Link href={link.path} key={link.title}>{link.title}</Link>
        
      ))}
    </div>
  )
};

export default Links;
