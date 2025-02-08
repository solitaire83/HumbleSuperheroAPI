function LIST({ heroes }) {
    return (
      <div>
        {heroes.length === 0 ? (
            <ul>
            <li>There are no heroes added</li>
            </ul>
        ) : (
            <div>
              <div className="header">
                <strong>Name</strong>
                <strong>Superpower</strong>
                <strong>Score</strong>
              </div>
              <ul>
                {heroes.map((hero, index) => (
                  <li key={index}>
                    <div>{hero.name}</div>
                    <div>{hero.superpower}</div>
                    <div>{hero.score}</div>
                  </li>
                ))}
              </ul>
            </div>
          )}
      </div>
    );
  }
  
  export default LIST;
  