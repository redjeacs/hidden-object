function Alert({ success, message }) {
  return (
    <>
      {success ? (
        <div
          className="absolute animate-fade-in-out top-3 left-[50%] translate-x-[-50%] rounded-md flex px-5 py-3 mb-4 justify-center items-center text-sm rounded-base bg-green-600 z-40"
          role="alert"
        >
          <svg
            className="w-4 h-4 me-2 shrink-0 mt-0.5 sm:mt-0"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M10 11h2v5m-2 0h4m-2.592-8.5h.01M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
          <span className="font-medium">{message}</span>
        </div>
      ) : (
        <div
          className="absolute animate-fade-in-out top-3 left-[50%] translate-x-[-50%] rounded-md flex px-5 py-3 mb-4 justify-center items-center text-sm rounded-base bg-red-600 z-40"
          role="alert"
        >
          <svg
            className="w-4 h-4 me-2 shrink-0 mt-0.5 sm:mt-0"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M10 11h2v5m-2 0h4m-2.592-8.5h.01M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
          <span className="font-medium">{message}</span>
        </div>
      )}
    </>
  );
}

export default Alert;
