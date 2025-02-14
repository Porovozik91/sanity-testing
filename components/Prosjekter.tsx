"use client"
interface ProsjekterProps {
    data: any[];
  }
  
  const Prosjekter: React.FC<ProsjekterProps> = ({ data }) => {
    return (
      <div>
        <h2>Prosjekter</h2>
        {data.map((prosjekt) => (
          <div key={prosjekt._id}>
            <h3>{prosjekt.title}</h3>
            <p>{prosjekt.content}</p>
          </div>
        ))}
      </div>
    );
  };
  
  export default Prosjekter;
  
