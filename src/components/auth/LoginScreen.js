import React, { useRef } from 'react';

export default function LoginScreen() {
  const messageRef = useRef();
  return (
    <div>
      <form>
        <input type="text" ref={messageRef} />
        <button type="submit" className="btnGoogle">Google</button>

      </form>
    </div>
  );
}
