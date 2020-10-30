import React, { useState } from 'react';

export default function Example() {
  // Declare a new state variable, which we'll call "count"
  let [count, setCount] = useState(0);

  return (
    <div>
      <h1>My Counter: {count}</h1>
      <button onClick={() => setCount(count+1)}>
            +    
      </button>
      <button onClick={() => setCount(count-1)}>
            -    
      </button>
      <button onClick={() => setCount(0)}>
        Re-Set
      </button>
    </div>
  );
}