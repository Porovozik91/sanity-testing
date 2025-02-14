interface IntroduksjonProps {
  data?: { title: string; content: string; slug?: { current: string } }[];
}

const Introduksjon: React.FC<IntroduksjonProps> = ({ data = [] }) => {
  if (data.length === 0) {
    return <p>Ingen introduksjoner tilgjengelig</p>;
  }

  return (
    <div>
      <h1>Introduksjon</h1>
      {data.map((item) => (
        <div key={item.slug?.current ?? item.title} className="text-center">
          <h2>{item.title}</h2>
          <p>{item.content}</p>
        </div>
      ))}
    </div>
  );
};

export default Introduksjon;


  

  