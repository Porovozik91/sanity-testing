interface EventerProps {
    data: any[];
  }
  
  const Eventer: React.FC<EventerProps> = ({ data }) => {
    return (
      <div>
        <h2>Eventer</h2>
        {data.map((event) => (
          <div key={event._id}>
            <h3>{event.title}</h3>
            <p>{event.content}</p>
          </div>
        ))}
      </div>
    );
  };
  
  export default Eventer;
  