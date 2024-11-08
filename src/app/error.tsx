'use client';

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}): JSX.Element {
  console.log(error);
   // !! Replace the div with a ready-made component !!
  return (
    <div>
      <h1>Error Page</h1>
      <button type="button" onClick={reset}>Reset</button>
    </div>
  )
}
